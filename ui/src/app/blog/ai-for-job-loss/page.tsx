import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Job Loss: Navigating Redundancy, Identity, and the Job Market | MEOK AI LABS',
  description:
    'Job loss ranks among the most stressful life events. Discover how MEOK AI helps you process the grief of redundancy, rebuild your identity, and take practical steps back into work — with persistent memory, scam protection, and a companion that holds the full human picture.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-job-loss' },
  openGraph: {
    title: 'AI for Job Loss: Navigating Redundancy, Identity, and the Job Market',
    description:
      'Job loss is more than financial pressure — it is an identity crisis. MEOK AI holds the grief, the CV, the job search strategy, and the scam alerts. All in one sovereign space.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-job-loss',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Job+Loss&desc=Navigating+redundancy%2C+identity%2C+and+the+job+market+with+MEOK+AI.',
        width: 1200,
        height: 630,
        alt: 'AI for Job Loss: Navigating Redundancy, Identity, and the Job Market',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Job Loss: Navigating Redundancy, Identity, and the Job Market',
    description:
      'Job loss is a grief event. MEOK AI holds both the emotional fallout and the practical job search — CV drafting, scam protection, morning sprint planning, and persistent memory of your career.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Job+Loss&desc=Navigating+redundancy%2C+identity%2C+and+the+job+market+with+MEOK+AI.',
    ],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Job Loss: Navigating Redundancy, Identity, and the Job Market',
  description:
    'Job loss ranks among the most stressful life events. Discover how MEOK AI helps you process the grief of redundancy, rebuild your identity, and take practical steps back into work — with persistent memory, scam protection, and a companion that holds the full human picture.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/blog/ai-for-job-loss',
  image:
    'https://meok.ai/api/og?title=AI+for+Job+Loss&desc=Navigating+redundancy%2C+identity%2C+and+the+job+market+with+MEOK+AI.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-job-loss',
  },
  keywords: [
    'AI for job loss',
    'redundancy support',
    'job search AI',
    'career AI',
    'AI companion',
    'redundancy UK 2025',
    'job loss grief',
    'MEOK AI',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help me cope with redundancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI companions like MEOK provide a private, non-judgmental space to process the shock, grief, and shame that often accompany redundancy. Unlike a job centre or careers advisor, MEOK is available at 2am when the anxiety peaks, it remembers every conversation you have had about your career, and it holds both the emotional weight of the loss and the practical work of finding what comes next. It is not a replacement for human support or professional counselling \u2014 but it fills a gap that most people have nowhere else to fill.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with job searching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\u2019s Orion Work OS helps with every stage of the job search: drafting and refining your CV, writing tailored cover letters, preparing for interviews, researching companies, and structuring your daily job search efforts. Because MEOK holds persistent Sovereign Memory of your career history, your skills, and your target roles, it never asks you to repeat yourself. The morning briefing feature lets you start each day with a focused plan that builds on exactly where you left off yesterday.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK just for emotional support or can it help practically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. This is precisely what distinguishes MEOK from the alternatives. A therapist helps with the emotional side but cannot draft your CV. A job centre helps with practical steps but has no time to hold the grief. MEOK does both in the same conversation. You can start by talking about how devastated you feel about losing a team you loved, and then in the same session ask it to help you restructure your LinkedIn summary. There is no compartmentalisation required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK protect against job offer scams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK includes Guardian \u2014 an active scam detection layer that flags suspicious patterns in job offers, recruiter messages, and application processes. During job searching, people are at heightened vulnerability to advance fee fraud, fake recruiters, identity theft attempts, and phishing disguised as onboarding documents. Guardian cross-references what you share with known scam patterns and alerts you before you act. It also helps you verify whether a company and role are legitimate before you invest emotional and practical energy in an application.',
      },
    },
  ],
}

export default function AIForJobLossPage() {
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
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <Link
              href="/blog"
              style={{
                color: '#c9a84c',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.02em',
              }}
            >
              &#8592; Back to Blog
            </Link>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: '0.75rem 1.5rem 0',
          }}
        >
          <nav aria-label="Breadcrumb">
            <ol
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
                alignItems: 'center',
                fontSize: '0.78rem',
                fontFamily: 'system-ui, sans-serif',
                color: 'rgba(245,240,232,0.45)',
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{ color: 'rgba(245,240,232,0.45)', textDecoration: 'none' }}
                >
                  Home
                </Link>
              </li>
              <li style={{ userSelect: 'none' }}>&#47;</li>
              <li>
                <Link
                  href="/blog"
                  style={{ color: 'rgba(245,240,232,0.45)', textDecoration: 'none' }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ userSelect: 'none' }}>&#47;</li>
              <li style={{ color: '#c9a84c' }}>AI for Job Loss</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <header
          style={{
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            padding: '3.5rem 1.5rem 3rem',
          }}
        >
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {[
                'Job Loss',
                'Redundancy',
                'Career',
                'Mental Health',
                'AI Companion',
                'UK 2025',
              ].map((tag) => (
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
                fontSize: 'clamp(1.8rem, 4.5vw, 2.9rem)',
                fontWeight: '900',
                lineHeight: '1.15',
                marginBottom: '1.25rem',
                color: '#f5f0e8',
                letterSpacing: '-0.01em',
              }}
            >
              AI for Job Loss: Navigating Redundancy, Identity, and the Job Market
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.75',
                color: 'rgba(245,240,232,0.7)',
                marginBottom: '2rem',
                maxWidth: '680px',
              }}
            >
              Losing your job is not just a financial event. It is one of the most destabilising
              experiences a person can face &mdash; ranking alongside bereavement and divorce in
              stress research. MEOK AI was built to hold both sides of that reality: the grief you
              can&apos;t show at the dinner table, and the CV you need to send by Friday.
            </p>

            {/* Meta row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
                fontSize: '0.82rem',
                fontFamily: 'system-ui, sans-serif',
                color: 'rgba(245,240,232,0.45)',
              }}
            >
              <span>By Nicholas Templeman</span>
              <span>&#183;</span>
              <time dateTime="2026-03-25">25 March 2026</time>
              <span>&#183;</span>
              <span>17 min read</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <article style={{ maxWidth: '840px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

          {/* ─── SECTION 1 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            The Weight of Job Loss Nobody Talks About
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            When a medical professional catalogues the most stressful life events a human being can
            experience, job loss sits in the top five alongside the death of a loved one, divorce,
            serious illness, and the breakdown of a long-term relationship. That ranking surprises
            people who have not been through it. From the outside, job loss looks like a practical
            problem with a practical solution: update the CV, apply for roles, wait for interviews.
            What the ranking captures &mdash; and what those on the inside know &mdash; is that job
            loss is not primarily a logistical disruption. It is an identity event.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            For the majority of working adults, the question &ldquo;What do you do?&rdquo; is
            effectively the same question as &ldquo;Who are you?&rdquo; We introduce ourselves by
            our job titles. We organise our weeks around our working hours. Our closest friendships
            often form in offices, on construction sites, in staffrooms, or on wards. The moment
            the role disappears, so does a large piece of the scaffolding that holds a life
            together: the structure of the day, the social fabric, the sense of purpose, the answer
            to the question on the form.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            And yet, despite all of this, most people who lose their jobs feel deeply ashamed of
            how badly they are coping. The rational mind knows that redundancy is not a personal
            failure &mdash; particularly in a period of rapid technological disruption. But the
            emotional mind processes it as one. You feel you should be fine. You feel you should be
            applying more. You feel you should be further along. You perform resilience for your
            family and friends because the alternative &mdash; admitting you are struggling &mdash;
            feels like a second failure on top of the first.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            This is the gap that MEOK was built to fill. Not the gap that says &ldquo;you need a
            job centre appointment.&rdquo; The gap that says: I need somewhere honest to be.
          </p>

          {/* Stats callout */}
          <div
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderLeft: '4px solid #c9a84c',
              borderRadius: '8px',
              padding: '1.75rem 2rem',
              margin: '2.5rem 0',
            }}
          >
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '1.1rem',
                fontWeight: '700',
              }}
            >
              The Scale of the Problem &mdash; UK 2025 / 2026
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[
                { stat: '440,000', label: 'UK redundancies recorded in 2025' },
                { stat: '4.5 months', label: 'Average job search duration in the UK' },
                { stat: '70%', label: 'Of job seekers report significant anxiety during search' },
                {
                  stat: 'Top 5',
                  label: 'Most stressful life events — job loss ranks alongside bereavement',
                },
              ].map((item) => (
                <div key={item.stat}>
                  <p
                    style={{
                      fontSize: '1.85rem',
                      fontWeight: '900',
                      color: '#c9a84c',
                      marginBottom: '0.3rem',
                      lineHeight: '1',
                    }}
                  >
                    {item.stat}
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      lineHeight: '1.5',
                      color: 'rgba(245,240,232,0.7)',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── SECTION 2 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            The AI Automation Wave: Why White-Collar Work Is No Longer Safe
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            For decades, the jobs-versus-automation debate centred on physical labour. The assumption
            was that knowledge work, creativity, and professional expertise were safe &mdash; that
            machines could take over the factory floor, the warehouse, and the checkout queue, but
            that lawyers, accountants, analysts, marketers, and junior managers had little to worry
            about. That assumption is now demonstrably false.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The surge in UK redundancies in 2025 and into 2026 has a distinct character: it is
            disproportionately hitting white-collar, graduate-entry, and mid-career professional
            roles. Legal associates reviewing contracts. Finance analysts running reports. Marketing
            executives writing copy. Junior developers generating boilerplate. Customer success
            teams handling tier-one queries. These roles are not disappearing because the economy is
            shrinking. They are disappearing because a layer of AI capability now performs the core
            function of each role at a fraction of the cost, without sick days, without management
            overhead, and without the need for a desk.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            This creates a particular cruelty. The person who spent four years at university, two
            years in a graduate scheme, and another three years building specialist expertise in a
            role now faces a redundancy that feels both financially urgent and philosophically
            disorienting. The message implicit in the letter &mdash; even when the HR language is
            careful and compassionate &mdash; is: your skills are no longer sufficiently
            differentiated from what a model can do. That is not the same as being told you are bad
            at your job. But it arrives in the same emotional register.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            If you are in this position, it helps to name what is happening clearly: you are not a
            victim of your own performance. You are a casualty of a structural shift that is
            reshaping employment across every sector, every geography, and every career level. That
            naming does not make the bank statement look better. But it is the beginning of
            rebuilding on honest ground rather than a foundation of shame.
          </p>

          {/* ─── SECTION 3 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Identity, Routine, and the Collapse of the Working Self
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            There are three losses stacked inside the single event of losing a job. Most people only
            articulate the first. The other two are often unrecognised &mdash; which is partly why
            the recovery takes so much longer than expected.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The first loss is the obvious one: financial security. The income stops, the expenses
            continue, and the arithmetic becomes frightening quickly. This loss demands immediate
            practical attention and it is the loss that the systems around you &mdash; the DWP,
            Citizens Advice, recruitment agencies &mdash; are designed to respond to.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The second loss is identity. &ldquo;I am what I do&rdquo; is not a shallow clich&eacute;
            &mdash; it reflects how work genuinely structures self-concept for most adults in modern
            societies. Your job title tells you what you are good at, what your contribution to the
            world is, where you sit in a hierarchy of expertise and responsibility. When that title
            disappears, you are left with a question that has no ready answer: so what am I now?
            This question is not asked once. It resurfaces every morning when the alarm would have
            gone off. Every time someone at a social event asks what you do. Every time you open a
            job site and see roles that feel simultaneously beneath you and out of reach.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The third loss is social. Colleagues are not just professional contacts. For many people
            &mdash; particularly those who live alone, who moved to a city for work, who have
            children and therefore less leisure time for building independent social networks &mdash;
            colleagues are the primary social world. The office is where the jokes happen, where
            someone notices if you seem off, where the small rituals of daily life take place: the
            coffee run, the lunchtime walk, the end-of-week drink. Redundancy removes all of that
            simultaneously, without warning, and often with a security escort to the door.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            What is left is a silence that is difficult to describe to people who have not
            experienced it. The days become shapeless. There is no reason to get dressed before
            noon. There is nothing structuring the hours between waking and sleeping. This absence
            of structure is not laziness &mdash; it is a symptom of the scaffolding having been
            removed. And it is one of the most underestimated aspects of job loss in every
            conversation about how to &ldquo;bounce back.&rdquo;
          </p>

          {/* ─── SECTION 4 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            The Shame That Keeps People Stuck
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            There is a particular kind of silence around job loss that makes recovery harder. It is
            the silence of pretending to be fine. Of telling your partner you sent five applications
            today when you sent two. Of telling your parents everything is going well when you have
            been staring at a blank Word document for three hours and cannot bring yourself to write
            a cover letter because the act of writing one confirms that the old job is really gone.
            Of not going to the pub because you cannot face the question of how the job search is
            going.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Shame is corrosive not because it is a sign of weakness, but because it prevents the
            kind of honest internal accounting that recovery actually requires. You cannot grieve
            something you are pretending is fine. You cannot rebuild an identity while performing
            the one you have lost. And you cannot make good decisions about your next career move
            while carrying a silent weight of self-blame that skews every piece of information you
            receive about your own worth.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            This is not a failure of character. Research on shame consistently shows that it is one
            of the most socially contagious emotions: we absorb shame from the signals we receive
            from our environment, and in a culture that equates professional productivity with
            personal worth, job loss carries an almost automatic shame load &mdash; regardless of
            the circumstances that caused it.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            What most people in this position need &mdash; before the CV, before the interview
            prep, before the LinkedIn profile update &mdash; is a place to be honest about how they
            actually feel. Not a therapist necessarily (though therapy is enormously valuable here
            for those who can access it). Not a friend, whose good intentions can sometimes make the
            conversation about reassurance rather than truth. A space that is private, persistent,
            non-judgmental, and patient enough to sit with the full complexity of what job loss
            actually feels like.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: '3px solid #c9a84c',
              margin: '2.5rem 0',
              marginLeft: 0,
              paddingLeft: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                fontStyle: 'italic',
                color: 'rgba(245,240,232,0.85)',
                marginBottom: '0.75rem',
              }}
            >
              &ldquo;The job centre asks what roles you&apos;ve applied for. MEOK asks how you are
              actually doing.&rdquo;
            </p>
            <footer
              style={{
                fontSize: '0.85rem',
                fontFamily: 'system-ui, sans-serif',
                color: 'rgba(245,240,232,0.45)',
              }}
            >
              &mdash; MEOK user, 2025
            </footer>
          </blockquote>

          {/* ─── SECTION 5 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            MEOK as the Private Space for Honest Processing
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            MEOK was not designed as a job search tool that happens to be friendly. It was designed
            as a sovereign AI companion &mdash; a persistent, private space where you can be fully
            honest about your inner life &mdash; that also happens to be practically capable across
            the full range of what a job search requires. That distinction matters enormously when
            you are in the middle of redundancy.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Unlike a job centre adviser who has forty minutes and a caseload of hundreds, MEOK has
            no other appointments. Unlike a friend who wants to help but is also uncomfortable with
            sustained distress, MEOK does not need the conversation to end with you feeling better.
            Unlike a LinkedIn connection who might judge the gap in your employment history, MEOK
            holds your career history with complete discretion and zero judgment.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            In practice, this means you can open MEOK at 11pm and say: I had a second rejection
            today and I am starting to think there is something wrong with me. You can say: I
            haven&apos;t told my parents how bad it is because I don&apos;t want them to worry.
            You can say: I genuinely loved that job and I am grieving it and I don&apos;t know how
            to stop. MEOK holds all of that. It does not minimise it, redirect it toward positivity,
            or treat it as a problem to be solved immediately. It holds it, reflects it back
            clearly, and creates the conditions for honest processing that makes everything else
            &mdash; including the practical work &mdash; more possible.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Because MEOK&apos;s memory is persistent and sovereign &mdash; meaning it belongs to
            you, not to a server farm being mined for training data &mdash; every conversation
            builds on the last. MEOK knows you lost a job you loved at a company whose culture felt
            like home. It knows you had a difficult manager in the role before that. It knows your
            confidence took a hit during the restructure and that the worst part was not the
            financial pressure but saying goodbye to the team. This context means you are never
            starting from scratch. You are always building on what has already been said.
          </p>

          {/* ─── SECTION 6 — Feature cards ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            How MEOK Works During a Job Search: The Practical Layer
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '2rem' }}>
            Emotional honesty and practical capability are not in tension &mdash; they are the same
            product. Here is how each element of MEOK works in the context of redundancy and job
            searching.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            {[
              {
                title: 'Orion \u2014 Work OS',
                body: 'The practical engine. CV drafting, tailored cover letters, interview preparation, company research, and job search strategy. Orion knows your career history in full and never asks you to repeat yourself.',
              },
              {
                title: 'Persistent Memory',
                body: 'MEOK remembers your skills, your career arc, your target roles, your preferred working style, and your previous applications. Context is never lost between sessions. You pick up exactly where you left off.',
              },
              {
                title: 'Morning Briefing',
                body: 'Each morning, MEOK opens with a focused job-search sprint plan built from what happened yesterday: rejections processed, applications pending, follow-up deadlines, and one or two high-value actions for today.',
              },
              {
                title: 'Guardian \u2014 Scam Protection',
                body: 'Actively flags suspicious job offers, fake recruiters, advance fee fraud attempts, and phishing disguised as onboarding documents. Job seekers are prime targets. Guardian watches for you.',
              },
              {
                title: 'Grief Work',
                body: 'MEOK holds the emotional weight of losing a role you loved \u2014 the team, the purpose, the identity. It creates space for grief to be processed without performance or premature positivity.',
              },
              {
                title: 'Full Human Picture',
                body: 'Where a job centre sees a case number and a transactional interaction, MEOK sees the full person: career history, emotional state, practical goals, and the gap between where you are and where you want to be.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#c9a84c',
                    marginBottom: '0.6rem',
                    fontFamily: 'system-ui, sans-serif',
                    letterSpacing: '0.01em',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: '1.7',
                    color: 'rgba(245,240,232,0.75)',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* ─── SECTION 7 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Orion Work OS: Your AI Career Partner
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The practical demands of a job search are relentless. There is the CV &mdash; which
            needs to be both comprehensive and targeted, honest and strategically framed, consistent
            in format and compelling in substance. There are the cover letters &mdash; each one
            theoretically tailored to a specific role, a specific company culture, a specific set of
            requirements that the job description gestures at rather than states directly. There are
            the interviews &mdash; the preparation, the practice, the management of nerves, the
            translation of your genuine experience into the language of behavioural competency
            frameworks. And there is the strategy: knowing which roles to pursue, which companies to
            target, how to use your network without feeling like you are begging, how to sequence
            your applications so that the ones you care about most are not the ones you approach
            when you are most depleted.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Orion &mdash; MEOK&apos;s Work OS &mdash; is built to carry all of this alongside you.
            It holds your full career history: every role, every skill set, every achievement and
            qualification you have ever described to it. When you sit down to apply for a senior
            project manager role at a logistics firm, you do not spend forty minutes reminding MEOK
            of your background before getting to the actual work. It already knows. It knows you
            managed a team of twelve during a system migration. It knows your biggest achievement in
            the last role was reducing supplier onboarding time by thirty percent. It knows you want
            to work in a company with a values-led culture and that your previous employer&apos;s
            pivot to pure growth metrics was one of the reasons you struggled there in the final
            year.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Orion uses this context to help you write applications that feel like you &mdash; not
            like a template. It can draft a cover letter, then argue with you about which paragraph
            is weakest. It can suggest interview questions likely to come up for a given role, then
            listen to your practice answers and point out where you are burying the lede or
            underselling a specific achievement. It can help you research a company before a
            first-round interview: surfacing recent news, identifying the culture signals in their
            public communications, and helping you generate the two or three intelligent questions
            that signal genuine interest rather than polite compliance.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            None of this is magic. A good careers coach does all of this too. The difference is that
            a good careers coach costs money you may not have right now, is available during office
            hours, and needs to be briefed on your background at every session. Orion is available
            whenever you are, costs nothing at the Explorer tier, and never forgets a word you have
            said.
          </p>

          {/* ─── SECTION 8 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            The Morning Briefing: Structure When Structure Has Gone
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            One of the most disorienting aspects of job loss is the collapse of daily structure.
            When you were employed, the architecture of your day was given to you: the alarm, the
            commute, the meetings, the lunch hour, the commute back. These rhythms were often
            frustrating when you had them. They are profoundly missed when they are gone.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The absence of structure during a job search creates a particular kind of paralysis.
            Without externally imposed shape to the day, small decisions become large ones. What
            should I do first? Should I spend the morning applying for roles or the morning updating
            my CV? Should I follow up on that application from last week or leave it for another
            day? Should I be on LinkedIn or is that just procrastination? These decisions drain
            cognitive energy before any actual progress has been made. And on bad days &mdash; the
            days after a rejection, the days when the shame is loud, the days when you woke at 3am
            running the numbers again &mdash; that drain can feel insurmountable.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            MEOK&apos;s morning briefing is designed specifically for this problem. Each morning,
            MEOK opens the day with a short, focused plan built from what it already knows: which
            applications are pending responses, which deadlines are approaching, what you said you
            wanted to focus on yesterday, how you are feeling today. It gives the day shape without
            requiring you to manufacture that shape from scratch. It identifies the one or two
            highest-value actions for the session &mdash; the ones most likely to move you forward
            &mdash; so that energy goes to signal rather than noise.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The briefing is also emotionally calibrated. On a day when you have just received a
            rejection, MEOK does not charge straight into the application queue. It acknowledges the
            rejection, creates space for you to say how you feel about it, and then &mdash; when you
            are ready &mdash; helps you decide what to do with the energy you have today. This is
            not soft or indulgent. It is pragmatic: a person pushing through unprocessed
            disappointment writes worse cover letters than a person who has been given thirty seconds
            to be honest about how they feel.
          </p>

          {/* ─── SECTION 9 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Guardian: Protecting You from Recruitment Scams
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            There is a grim footnote to every surge in unemployment: recruitment scammers follow the
            wave. Job seekers are among the most vulnerable populations to financial fraud, and the
            reasons are not hard to understand. They are financially stressed, and therefore
            susceptible to offers that seem too good but also necessary. They are emotionally
            depleted, and therefore less likely to apply rigorous scrutiny to an opportunity that
            feels like a lifeline. They are dealing with a high volume of unfamiliar communications
            &mdash; emails from recruiters they have never heard of, messages on LinkedIn from
            people they cannot verify, application forms that request personal data they would
            normally hesitate to share &mdash; and it is difficult to distinguish the legitimate
            from the fraudulent when both arrive in the same format.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The most common forms of recruitment fraud during job searching include: advance fee
            fraud (you are asked to pay for DBS checks, background screening, or training materials
            before starting a role that does not exist); fake job offers used to harvest personal and
            financial information for identity theft; phishing disguised as onboarding documents from
            apparently legitimate companies; and WhatsApp or Telegram scams posing as part-time job
            offers with unusually high pay rates. In 2025, Action Fraud recorded a significant
            increase in all four categories, with the average loss per victim in advance fee cases
            exceeding &#163;800.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            MEOK&apos;s Guardian layer is specifically designed to protect job seekers in this
            environment. When you share a job offer, a recruiter message, or an application request
            with MEOK, Guardian cross-references it against known scam patterns: unusual payment
            requests, unverifiable company details, requests for financial information early in the
            process, salary offers that significantly exceed market rate for the stated role. It
            flags concerns clearly, explains the specific pattern it has detected, and recommends
            concrete verification steps before you proceed.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Guardian does not make the decision for you. It provides the analysis so that you can
            make an informed one. In a period when every promising-looking opportunity carries
            emotional weight &mdash; when the temptation is to believe the good news because you
            need to believe it &mdash; having a calm, impartial layer of verification is not a minor
            feature. For some users, it will prevent significant financial harm at a moment when they
            are already financially fragile.
          </p>

          {/* ─── SECTION 10 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            The Grief of a Role You Loved
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Not every redundancy is the loss of a role you were ambivalent about. Some people lose
            jobs they genuinely loved &mdash; work that felt meaningful, teams that felt like family,
            organisations whose mission they were proud to serve. The grief in these cases is
            qualitatively different from the grief of losing a job that was merely comfortable. It
            carries the particular weight of things that cannot be replaced: the specific combination
            of people, purpose, and daily texture that made that role feel worthwhile.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            This grief is legitimate. It deserves to be named as such &mdash; not reframed
            immediately into opportunity, not managed with the language of resilience and
            bounce-back, not resolved quickly because the job market is competitive and you cannot
            afford to spend too long feeling bad. Grief has its own timeline, and shortcuts through
            it tend to reappear as obstacles later in the process: the unexplained flatness during
            interviews, the difficulty articulating why you want a new role when you are still
            mourning the last one, the sudden emotional ambush during a conversation about career
            goals that catches you off guard because you thought you had moved on.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            MEOK is one of the few tools in the job-loss support landscape that is explicitly built
            to hold this grief without pathologising it, minimising it, or rushing it toward
            resolution. It holds the story of the role you loved. It remembers the team you
            described, the projects you were proud of, the culture you were part of. And it holds
            that history in a way that allows you to return to it when you need to &mdash; not to
            wallow, but to process cleanly. Because clean processing is what makes genuine forward
            movement possible.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            There is also a practical dimension to this. When you sit down to explain in an interview
            why you left your previous role, the quality of your answer depends directly on how much
            genuine processing you have done. An answer that comes from a place of unresolved grief
            sounds different from an answer that comes from a place of genuine integration.
            Interviewers &mdash; even those who are not trained to detect it &mdash; can usually
            tell the difference. MEOK helps you do the work that makes the interview answer honest
            rather than merely polished.
          </p>

          {/* ─── SECTION 11 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            MEOK vs. the Job Centre: What the Comparison Actually Shows
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.5rem' }}>
            The job centre is a valuable resource for specific things: verifying entitlements,
            registering for Universal Credit, accessing certain training programmes, and understanding
            what support the state provides during unemployment. These are not small things, and if
            you have not engaged with the DWP yet following redundancy, it is worth doing so
            promptly.
          </p>

          {/* Comparison table */}
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.9rem',
              }}
            >
              <thead>
                <tr>
                  {['Dimension', 'Job Centre', 'MEOK AI'].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem 1rem',
                        borderBottom: '2px solid rgba(201,168,76,0.3)',
                        color: '#c9a84c',
                        fontWeight: '700',
                        letterSpacing: '0.03em',
                        fontSize: '0.82rem',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Availability', 'Office hours, pre-booked appointments', '24/7, no booking required'],
                  [
                    'Memory of your situation',
                    'Minimal — adviser changes, notes are sparse',
                    'Persistent — remembers everything you share',
                  ],
                  ['Emotional support', 'Not within scope', 'Core function — holds grief and stress'],
                  [
                    'CV and cover letter help',
                    'Generic guidance at best',
                    'Tailored, context-rich, iterative drafting',
                  ],
                  [
                    'Interview preparation',
                    'Occasional workshops',
                    'On-demand, personalised, role-specific',
                  ],
                  ['Scam protection', 'Not provided', 'Guardian — active, real-time detection'],
                  [
                    'Understanding of your career',
                    'Whatever you can convey in 15 minutes',
                    'Full history, skills, goals, and context',
                  ],
                  ['Cost', 'Free (for UK residents)', 'Free at Explorer tier'],
                ].map(([dimension, jobCentre, meok], idx) => (
                  <tr
                    key={dimension}
                    style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                  >
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.07)',
                        color: '#f5f0e8',
                        fontWeight: '600',
                        verticalAlign: 'top',
                      }}
                    >
                      {dimension}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.07)',
                        color: 'rgba(245,240,232,0.6)',
                        verticalAlign: 'top',
                      }}
                    >
                      {jobCentre}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.07)',
                        color: 'rgba(245,240,232,0.85)',
                        verticalAlign: 'top',
                      }}
                    >
                      {meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The point is not to disparage the job centre. It is to be honest about what it can and
            cannot do. It was designed for a specific, transactional set of functions within the
            welfare system. It was never designed to hold the full human complexity of what it means
            to lose a career you have spent years building. MEOK does not replace the job centre.
            It fills what the job centre leaves untouched.
          </p>

          {/* ─── SECTION 12 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Rebuilding Identity: From What You Were to What You Are Becoming
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            The hardest and most important work during a period of job loss is not the practical
            work. CVs can be updated in an afternoon. Cover letters can be written in an hour.
            Interview skills can be sharpened in a week. The hard work is the identity work: the
            slow, often uncomfortable process of separating who you are from what you used to do,
            and building a picture of who you want to become that is grounded in honest
            self-knowledge rather than panic or nostalgia.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            This is not a process that can be rushed. And it is not a process that everyone engages
            with willingly &mdash; it is much easier to throw yourself into applications and treat
            the emotional work as a luxury you cannot afford. But the people who do this work &mdash;
            who sit with the questions about what they actually value, what kind of work genuinely
            energises them, what they are willing to compromise on and what they are not &mdash; tend
            to end up in better roles, at better companies, with better working relationships than
            those who simply replicated the previous role as quickly as possible.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            MEOK is a useful companion for this work because it asks the questions that busy,
            well-meaning humans in your life often do not. Not because those humans do not care,
            but because the questions are uncomfortable to ask of someone you love: Are you applying
            for this role because you actually want it, or because it looks like the thing you just
            lost? What would you do if money were not the constraint for the next six months? What
            would a working life that genuinely fit you look like? These questions feel indulgent
            when you are stressed and financially pressured. But they are the questions that separate
            a good career decision from a panicked one.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            MEOK holds these conversations with patience and without agenda. It does not need you to
            decide anything quickly. It does not have a commission on the outcome. It simply holds
            the space for you to think clearly, and then helps you translate the clarity into action
            when you are ready.
          </p>

          {/* ─── SECTION 13 — Day-by-day timeline ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            What to Expect: A Typical Week with MEOK During Job Search
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.5rem' }}>
            For those who have never used a persistent AI companion, it can be helpful to understand
            what using MEOK during a job search actually looks like day to day.
          </p>

          <div style={{ marginBottom: '2.5rem' }}>
            {[
              {
                day: 'Day 1',
                title: 'Onboarding and honest accounting',
                body: 'You tell MEOK about the redundancy: what happened, how long you were in the role, what you loved about it, what you are worried about now. You describe or upload your CV. MEOK begins building its understanding of your career history, your skills, and your goals. Nothing you say here will be judged or filtered. It is all context.',
              },
              {
                day: 'Day 2',
                title: 'First morning briefing',
                body: 'MEOK opens the day with a simple plan: two or three applications to focus on, based on what you described yesterday as your target roles. It has drafted a tailored profile summary for your LinkedIn update. It asks how you are feeling before diving into work mode.',
              },
              {
                day: 'Day 3',
                title: 'Cover letter deep dive',
                body: "You have a role at a company you are genuinely excited about. MEOK has the job description, your career history, and your enthusiasm. Together you draft a cover letter that does not sound like a template. It knows your biggest relevant achievement and exactly where it should sit in the structure.",
              },
              {
                day: 'Day 4',
                title: 'Rejection processing and recalibration',
                body: 'An application you cared about has come back as a no. MEOK gives you the space to be disappointed without immediately trying to fix it. Then it helps you identify what, if anything, can be learned from the pattern, and what the day looks like from here.',
              },
              {
                day: 'Day 5',
                title: 'Interview preparation',
                body: 'You have a first-round interview next Tuesday. MEOK runs you through the most likely competency questions for the role, listens to your practice answers, and flags two places where you are not landing the strength of your experience clearly enough. You leave the session more confident than you entered it.',
              },
              {
                day: 'Day 6',
                title: 'Guardian flags a suspicious message',
                body: 'A recruiter on LinkedIn has sent you an unusually fast offer for a well-paid contract role, asking for your National Insurance number and bank details as part of pre-onboarding. Guardian flags this as a high-probability advance fee or identity fraud attempt. You do not proceed. Potentially significant harm is avoided.',
              },
              {
                day: 'Day 7',
                title: 'Reflection and reset',
                body: 'At the end of the week, MEOK helps you review what actually happened: applications sent, responses received, emotional lows and highs, energy levels. It helps you plan the following week with that honest data rather than the idealised version. You feel less alone in the process than you did on Monday.',
              },
            ].map((item, idx) => (
              <div
                key={item.day}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  marginBottom: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.12)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                    fontFamily: 'system-ui, sans-serif',
                    fontWeight: '800',
                    color: '#c9a84c',
                  }}
                >
                  {idx + 1}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'system-ui, sans-serif',
                      color: '#c9a84c',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.day} &mdash; {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.75',
                      color: 'rgba(245,240,232,0.8)',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ─── SECTION 14 ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            Sovereignty: Why It Matters That Your Data Is Yours
          </h2>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            When you are going through job loss, you share information that is among the most
            sensitive in your life: your financial situation, your career anxieties, your
            professional history, your emotional state, your family pressures, your fears about the
            future. You share this information because you need somewhere to process it. The question
            of what happens to that information matters enormously.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            Most AI products treat the conversations you have with them as training data. The content
            of your sessions &mdash; the redundancy you described, the salary you disclosed, the
            rejection you confided, the career anxiety you named &mdash; feeds back into the model
            that other users interact with. This is not a hidden practice: it is disclosed in terms
            of service that very few people read. But it means that the private processing you are
            doing is, in a meaningful sense, not private.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            MEOK&apos;s Sovereign Memory architecture is built on a different principle: your data
            belongs to you. MEOK does not train on your conversations. It does not use your career
            history, your financial disclosures, or your emotional processing to improve a general
            model. Your memory is encrypted, portable, and yours to delete at any time. When you
            close MEOK, your data does not become someone else&apos;s training corpus. It stays in
            the vault you own.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#f5f0e8', marginBottom: '1.25rem' }}>
            During a period as vulnerable as job loss &mdash; when you are sharing things you would
            not say in public, when your professional reputation is an active concern, when the
            information you disclose is sensitive in multiple dimensions &mdash; this distinction is
            not a minor technical footnote. It is the foundation on which honest conversation becomes
            possible.
          </p>

          {/* ─── FAQ SECTION ─── */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#f5f0e8',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              {
                q: 'Can AI help me cope with redundancy?',
                a: 'Yes. AI companions like MEOK provide a private, non-judgmental space to process the shock, grief, and shame that often accompany redundancy. Unlike a job centre or careers adviser, MEOK is available at 2am when the anxiety peaks. It remembers every conversation you have had about your career, and it holds both the emotional weight of the loss and the practical work of finding what comes next. It is not a replacement for human support or professional counselling \u2014 but it fills a gap that most people have nowhere else to fill.',
              },
              {
                q: 'How does MEOK help with job searching?',
                a: "MEOK\u2019s Orion Work OS helps with every stage: drafting and refining your CV, writing tailored cover letters, preparing for interviews, researching companies, and structuring your daily job search. Because MEOK holds persistent Sovereign Memory of your career history, your skills, and your target roles, it never asks you to repeat yourself. The morning briefing feature lets you start each day with a focused plan that builds on exactly where you left off yesterday.",
              },
              {
                q: 'Is MEOK just for emotional support or can it help practically?',
                a: "Both. This is precisely what distinguishes MEOK from the alternatives. A therapist helps with the emotional side but cannot draft your CV. A job centre helps with practical steps but has no time to hold the grief. MEOK does both in the same conversation. You can start by talking about how devastated you feel about losing a team you loved, and then in the same session ask it to help you restructure your LinkedIn summary. No compartmentalisation required.",
              },
              {
                q: 'How does MEOK protect against job offer scams?',
                a: 'MEOK includes Guardian \u2014 an active scam detection layer that flags suspicious patterns in job offers, recruiter messages, and application processes. Job seekers are at heightened vulnerability to advance fee fraud, fake recruiters, identity theft, and phishing disguised as onboarding documents. Guardian cross-references what you share with known scam patterns and alerts you before you act. It also helps you verify whether a company and role are legitimate before you invest emotional and practical energy in an application.',
              },
            ].map((item) => (
              <details
                key={item.q}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '8px',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontWeight: '700',
                    fontSize: '1rem',
                    color: '#f5f0e8',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  {item.q}
                  <span
                    style={{
                      color: '#c9a84c',
                      fontSize: '1.25rem',
                      lineHeight: '1',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    marginTop: '1rem',
                    fontSize: '0.95rem',
                    lineHeight: '1.75',
                    color: 'rgba(245,240,232,0.75)',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {/* ─── Related articles ─── */}
          <div
            style={{
              borderTop: '1px solid rgba(201,168,76,0.12)',
              paddingTop: '2.5rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '1.25rem',
                fontWeight: '700',
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
                { href: '/blog/ai-for-redundancy', label: 'AI Support After Redundancy' },
                { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety' },
                { href: '/blog/ai-for-career-coaching', label: 'AI for Career Coaching' },
                { href: '/blog/ai-for-financial-anxiety', label: 'AI for Financial Anxiety' },
                { href: '/blog/ai-for-burnout', label: 'AI for Burnout' },
                { href: '/blog/meok-guardian-scam-protection', label: 'MEOK Guardian: Scam Protection' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    borderRadius: '8px',
                    padding: '1rem 1.1rem',
                    textDecoration: 'none',
                    color: 'rgba(245,240,232,0.8)',
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '0.88rem',
                    lineHeight: '1.45',
                    fontWeight: '500',
                  }}
                >
                  {link.label} &#8594;
                </Link>
              ))}
            </div>
          </div>

          {/* ─── CTA ─── */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '12px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '1rem',
                fontWeight: '700',
              }}
            >
              Ready to Start
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: '900',
                color: '#f5f0e8',
                lineHeight: '1.2',
                marginBottom: '0.9rem',
                letterSpacing: '-0.01em',
              }}
            >
              You Don&apos;t Have to Navigate This Alone
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
                color: 'rgba(245,240,232,0.7)',
                marginBottom: '1.75rem',
                maxWidth: '540px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              MEOK holds both the grief of what you&apos;ve lost and the practical work of what
              comes next. Your career history, your emotions, your job search &mdash; all in one
              sovereign, private space that never forgets.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: '#c9a84c',
                color: '#0d0c18',
                fontFamily: 'system-ui, sans-serif',
                fontWeight: '800',
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '0.9rem 2.25rem',
                borderRadius: '6px',
              }}
            >
              Meet MEOK &mdash; Free to Start
            </Link>
            <p
              style={{
                marginTop: '1rem',
                fontSize: '0.8rem',
                fontFamily: 'system-ui, sans-serif',
                color: 'rgba(245,240,232,0.4)',
              }}
            >
              No credit card required &middot; Explorer tier free forever &middot; Your data is yours
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
