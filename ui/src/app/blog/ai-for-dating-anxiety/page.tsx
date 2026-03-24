import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Dating Anxiety: Build Confidence Before, During and After Dates | MEOK AI LABS',
  description:
    'App fatigue, fear of rejection, first-date nerves, post-date spirals, ghosting recovery — how MEOK helps you show up with real confidence in modern dating.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-dating-anxiety' },
  openGraph: {
    title: 'AI for Dating Anxiety: Build Confidence Before, During and After Dates',
    description:
      'App fatigue, fear of rejection, first-date nerves, post-date spirals, ghosting recovery — how MEOK helps you show up with real confidence in modern dating.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-dating-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Dating+Anxiety%3A+Build+Confidence+Before%2C+During+and+After+Dates&desc=How+MEOK+helps+you+show+up+better+in+real+relationships',
        width: 1200,
        height: 630,
        alt: 'AI for Dating Anxiety: Build Confidence Before, During and After Dates | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Dating Anxiety: Build Confidence Before, During and After Dates',
    description:
      'App fatigue, rejection fears, first-date nerves, ghosting recovery — how MEOK helps you show up confidently in modern dating.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Dating+Anxiety%3A+Build+Confidence+Before%2C+During+and+After+Dates&desc=How+MEOK+helps+you+show+up+better+in+real+relationships',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Dating Anxiety: Build Confidence Before, During and After Dates',
  description:
    'How AI companions help with modern dating anxiety — app fatigue, fear of rejection, first date nerves, post-date analysis spirals, rebuilding after ghosting, understanding dating patterns, practising conversation, and the difference between healthy excitement and anxiety.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-dating-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-dating-anxiety',
  },
  keywords: [
    'AI for dating anxiety',
    'dating app fatigue',
    'fear of rejection dating',
    'first date nerves',
    'post-date analysis spiral',
    'rebuilding after ghosting',
    'dating confidence AI',
    'AI companion for loneliness',
    'understanding dating patterns',
    'practise conversation AI',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is modern dating so anxiety-inducing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern dating combines the high-volume, low-commitment mechanics of dating apps with the ancient, deeply human fear of rejection. Swiping culture means people are evaluated at a glance, matches disappear without explanation, and ghosting has become normalised. The result is a loop of micro-rejections and ambient uncertainty that keeps the nervous system in a low-level threat state. Add in comparison to curated social media lives, and it is genuinely one of the more emotionally demanding arenas most people navigate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is dating app fatigue and is it a real thing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dating app fatigue is very real. Studies consistently show that heavy app use correlates with lower self-esteem, greater loneliness, and higher psychological distress — particularly for people who receive fewer matches than they expected. The gamification of attraction (swipe, match, message, repeat) creates a variable-reward loop that feels compulsive even when it produces no actual dates. Taking intentional breaks, setting strict time limits, and reconnecting with who you are outside of your profile are all evidence-supported ways to reduce app-induced anxiety.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help with first date nerves?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI companion like MEOK can help you rehearse conversation, reflect on what you genuinely want from a date, and process the anxious thoughts driving your nerves before they escalate. MEOK is not a dating app or a roleplay partner — it is a thinking companion that helps you understand your own patterns, so you walk into the date feeling more like yourself and less like someone desperately auditioning. The goal is always that you show up better in real relationships, not that MEOK replaces them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I spiral after a date even when it went well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-date analysis spirals — replaying every word, searching for signs you said something wrong, obsessing over whether they will text — are driven by the threat-detection machinery in your brain running on limited information. Because the outcome is uncertain, the mind fills the gap with worst-case interpretations. Journalling immediately after a date, naming the specific fear rather than letting it remain diffuse, and agreeing with yourself on a waiting period before reaching out all help reduce the intensity of the spiral.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between healthy excitement and dating anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healthy excitement and anxiety produce similar physical sensations — raised heart rate, butterflies, mild restlessness — but differ in their cognitive flavour. Excitement is forward-facing and possibility-oriented: "I wonder what this could be." Anxiety is threat-oriented and backward-facing: "What if I ruin this, what if they reject me, what if I am not enough?" Learning to notice which narrative your mind is running, rather than just the body sensation, is one of the most useful skills in modern dating. MEOK helps you track which state you typically enter — and what tends to trigger the shift.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you rebuild after being ghosted?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ghosting bypasses the normal grief process because there is no closure, no clear end point, no explanation. Your brain keeps the loop open, searching for a reason that never arrives. Rebuilding starts with accepting that you will not get an answer, that the absence of explanation says almost nothing about your worth, and that continuing to check their profile or replay conversations extends rather than resolves the pain. Giving yourself permission to grieve a connection — even a brief one — is not weakness; it is how you clear space to try again.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me understand my own dating patterns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Because MEOK remembers what you have shared across conversations, it can help you notice recurring themes — the type of person you keep choosing, the moment anxiety typically spikes, the stories you tell yourself when things go quiet. Pattern recognition is one of the most powerful things a private AI companion can offer, because most of us are not in therapy weekly and human friends do not carry our full history. MEOK is not a therapist, but it is a consistent presence that can reflect your patterns back to you without judgement.',
      },
    },
  ],
}

// ── Shared style tokens ────────────────────────────────────────────────────────

const GOLD  = '#c9a84c'
const TEXT  = '#f5f0e8'
const BG    = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.62)'
const DIM   = 'rgba(245,240,232,0.38)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForDatingAnxietyPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, color: TEXT }}>

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: '7.5rem',
          paddingBottom: '3rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>

          {/* back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: DIM,
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* pill + meta */}
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
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
              }}
            >
              Dating &amp; Relationships
            </span>
            <span style={{ fontSize: '0.8rem', color: DIM }}>24 March 2026</span>
            <span style={{ fontSize: '0.8rem', color: DIM }}>·</span>
            <span style={{ fontSize: '0.8rem', color: DIM }}>Nicholas Templeman</span>
            <span style={{ fontSize: '0.8rem', color: DIM }}>·</span>
            <span style={{ fontSize: '0.8rem', color: DIM }}>14 min read</span>
          </div>

          {/* headline */}
          <h1
            style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            AI for Dating Anxiety: Build Confidence Before, During and After Dates
          </h1>

          {/* standfirst */}
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.75,
              color: MUTED,
              marginBottom: '2.5rem',
              maxWidth: '44rem',
            }}
          >
            Modern dating is genuinely hard. The apps, the silence, the over-analysis, the
            unexplained disappearances — if any of it makes you anxious, that is a rational
            response to an irrational system. This guide is about what you can actually do
            about it, and how MEOK can help you show up better in the relationships that matter.
          </p>

          {/* divider */}
          <div
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent)',
              marginBottom: '3rem',
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ARTICLE BODY
      ══════════════════════════════════════════════════════════════════════ */}
      <article style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          {/* ── Opening ── */}
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s be honest about something most dating advice skips: the experience of
            modern dating can be quietly relentless. You put yourself out there — on an app,
            at a friend&apos;s dinner, through a carefully worded message — and then you wait.
            And while you wait, your brain does what human brains have always done when
            resources, safety, or belonging feel uncertain: it searches for threats.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            That threat-scan is not weakness. It is your nervous system doing its job. The
            problem is that the job was designed for a world where threats were lions and
            famines, not left-on-read messages and profiles that mysteriously vanish. The
            mismatch between our ancient threat-detection machinery and the specific texture
            of 2026 dating is the root of most dating anxiety.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            So: if you feel anxious about dating, you are not broken. You are human, in a
            genuinely difficult environment, without a lot of good tools. This piece is about
            what those tools might actually look like.
          </p>

          {/* ── H2 1 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: `1px solid rgba(201,168,76,0.18)`,
            }}
          >
            Why Is Modern Dating So Anxiety-Inducing?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Dating anxiety is not new. Every generation has felt the vulnerability of wanting
            someone and not knowing if that want would be returned. What is new is the specific
            mechanics of how we meet people now, and how those mechanics amplify the oldest
            anxieties in the most efficient possible way.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Dating apps are, at their structural core, a volume game with asymmetric
            information. You see almost nothing about the person you are evaluating. They see
            almost nothing about you. The decision happens in under a second. Then the
            majority of matches — studies suggest somewhere between 60 and 90 per cent —
            result in zero conversation. The human experience of this is a low-grade, constant
            stream of micro-rejections that never quite reaches the threshold of feeling
            significant enough to process, but accumulates into a kind of ambient bruising.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Layered on top: the comparison culture of social media creates an implicit standard
            against which people measure their romantic progress. Peers announcing engagements,
            holidays with new partners, first home purchases — all of it lands in the same
            feed as your unread notifications. The combination of repeated micro-rejection and
            constant social comparison is, to put it plainly, a difficult environment to
            maintain self-worth inside.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            None of this is a moral failing. It is a design feature of the system you are
            operating in, not a reflection of what you deserve.
          </p>

          {/* callout box */}
          <div
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '0.75rem',
              padding: '1.5rem 1.75rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: TEXT,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Dating anxiety is a rational response to an irrational system. The goal
              is not to eliminate the feeling — it is to stop the feeling from running the
              show.&rdquo;
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: GOLD,
                marginTop: '0.75rem',
                marginBottom: 0,
              }}
            >
              — Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          {/* ── H2 2 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            What Is Dating App Fatigue, and How Do You Know You Have It?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Dating app fatigue is the feeling of emotional depletion that comes from sustained
            engagement with the swipe-based dating environment. It is characterised by a
            combination of numbness — flicking through profiles with vague disinterest — and
            underlying anxiety about whether the process will ever produce anything meaningful.
            You keep opening the app. You are not sure why. You do not feel hopeful when you
            do. You feel worse when you put it down.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Research on this is consistent. A 2020 study in the journal <em>Body Image</em>
            found that people who used dating apps reported lower self-esteem, higher levels of
            body shame, and greater psychological distress than non-users. A 2018 study in{' '}
            <em>Computers in Human Behavior</em> found that perceived unsuccessful use of
            dating apps was associated with loneliness and negative affect. The apps are not
            neutral tools; they affect how you see yourself.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            The signs of dating app fatigue are fairly recognisable if you are honest with
            yourself:
          </p>

          {/* list */}
          <ul
            style={{
              paddingLeft: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '0.6rem',
            }}
          >
            {[
              'You check the app out of habit rather than hope',
              'Each notification produces a spike of anxiety more than excitement',
              'You are comparing your match rate to a vague imagined standard',
              'You feel relief when a match goes quiet, then guilt about the relief',
              'Dating feels like a second job with bad management',
              'You have deleted and reinstalled the app more than twice in the last six months',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            If several of those land, you are not lazy or giving up on love. You are
            experiencing a predictable response to a genuinely depleting environment. The most
            useful thing you can do is take an intentional break — not a passive drift away
            followed by a 2 a.m. reinstall, but a deliberate pause with a clear intention
            behind it.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            What do you do in the pause? Reconnect with who you are outside of your profile.
            The version of you that a dating app can represent is extraordinarily thin.
            Your profile captures your height, a few photos, maybe a moderately witty bio.
            It does not capture the way you tell a story, what makes you laugh until something
            comes out of your nose, the opinions you hold that make you interesting. Reconnecting
            with those things — through the people and pursuits that already exist in your life
            — is not a consolation prize for being off the apps. It is the actual work of
            becoming someone who dates from a place of fullness rather than need.
          </p>

          {/* ── H2 3 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            How Do You Handle the Fear of Rejection Before It Stops You Trying?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Fear of rejection is one of the most evolutionarily ancient fears humans carry.
            Social exclusion in the ancestral environment was genuinely dangerous — being cast
            out from the group reduced your chance of survival. The brain treats romantic
            rejection with a version of the same seriousness. Neuroimaging studies have shown
            that the experience of social rejection activates some of the same brain regions
            as physical pain. When dating anxiety tells you that reaching out, trying again,
            or putting yourself out there is terrifying, it is not being irrational. It is
            extrapolating from a threat model that is simply older than the context it is
            operating in.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            The most effective long-term approach to fear of rejection is not to talk yourself
            out of feeling it — that rarely works. It is graduated exposure: taking small,
            repeated risks in low-stakes contexts until the nervous system accumulates evidence
            that the worst-case scenario either does not happen, or happens and is survivable.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Practically, this looks like:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '0.6rem',
            }}
          >
            {[
              'Sending the message you have been drafting for three days',
              'Asking someone for their number in person, accepting the outcome either way',
              'Declining to invest hours of analysis in whether someone has read your message',
              'Noticing the fear, naming it ("I am scared they will not be interested"), and acting anyway',
              'Tracking how often the feared outcome actually occurs versus how often you predicted it would',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            This is where MEOK can be quietly useful. Not as a hype machine that tells you
            everything will be fine, but as a thinking companion that helps you notice the
            pattern: how many times have you predicted disaster and how many times did disaster
            actually happen? Over time, that record becomes its own reassurance — not borrowed
            from someone else, but built from your own evidence.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            It is also worth distinguishing fear of rejection from fear of being known. For
            some people, the real anxiety is not about being turned down — it is about someone
            getting close enough to see them clearly and then deciding they are not enough.
            That is a deeper wound, and it tends to drive self-protective avoidance: staying
            surface-level, keeping things casual, engineering reasons why it would not have
            worked anyway. If this sounds familiar, it is worth exploring — ideally with a
            therapist — because no amount of dating strategy addresses a belief that you are
            fundamentally not worth staying for.
          </p>

          {/* ── H2 4 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            What Actually Helps with First Date Nerves?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            First date anxiety is almost universal, but the way it manifests varies. Some
            people over-prepare — researching the venue, rehearsing anecdotes, planning every
            conversational topic in advance. Others under-prepare by avoiding any
            acknowledgement of the date until the last possible moment, then performing a kind
            of frantic, last-minute emotional triage. Both are responses to the same underlying
            feeling: I do not want to get this wrong. I do not want to look stupid. I want
            them to like me.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Here is something that sounds obvious but rarely gets said: the goal of a first
            date is not to perform well. It is to find out whether you actually like this
            person. When the anxiety reframes the date as an audition you might fail, you
            stop being curious about them and start monitoring yourself — how am I coming
            across, did that land, was that too much? The self-monitoring is both exhausting
            and, ironically, makes you less attractive, because people are drawn to presence,
            not performance.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            The practical shift is small but significant: go in with a list of things you
            want to find out about them, not a list of things you want them to find out about
            you. Genuine curiosity is both calming — it takes the attention off your own
            performance — and compelling for the other person. Asking real questions and
            actually listening to the answers is more attractive than any perfectly crafted
            story about your gap year.
          </p>

          {/* stat-style callout */}
          <div
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: TEXT,
                margin: 0,
              }}
            >
              Research on social anxiety consistently shows that an{' '}
              <strong style={{ color: GOLD }}>external focus of attention</strong> —
              curiosity about the other person — reduces self-monitoring and improves
              perceived social performance more effectively than any amount of mental
              rehearsal.
            </p>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Before a date, MEOK can help you clarify what you actually want to know about
            this person — not the small talk, but the things that would genuinely matter to
            you. What are your non-negotiables? What are you hoping for? What are you afraid
            of? Working through those questions before you arrive means you walk in with a
            compass, not a script. You are showing up as someone who knows what they want,
            which is different from — and more attractive than — someone who wants to be
            liked.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            And if the nerves are about conversation itself — what to say, how to keep things
            going, what to do in a lull — practising conversation is a perfectly legitimate
            use of an AI companion. Not scripting your date. Not memorising witty lines.
            Simply warming up, the way an athlete stretches before competing. Conversation is
            a skill. Practising it in a low-stakes environment makes the high-stakes
            environment feel less like a test and more like something you have done before.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            One more thing: the physiological spike before a first date — raised heart rate,
            shallow breathing, butterflies — is not necessarily a sign that something is
            wrong. It is arousal, and it is nearly identical to excitement. The body cannot
            always tell the difference. You can. The narrative in your head is what
            distinguishes "I am excited about this" from "I am terrified of this." Both
            involve the same body state. Noticing which story you are telling — and choosing
            consciously to tell a different one — is not fake positivity. It is accurate
            reappraisal.
          </p>

          {/* ── H2 5 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            Why Do You Spiral After a Date — and How Do You Stop?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            The post-date analysis spiral is one of the most reliably miserable experiences
            in the modern dating playbook. You had a date. It seemed to go well. They said
            "we should do this again." You hugged goodbye. And then, in the Uber home, it
            started.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Did I talk too much? Why did I tell that story about my ex — that was a mistake.
            They seemed distracted during the main course. Maybe they were just being polite
            at the end. Why haven&apos;t they texted yet? It has been forty-five minutes. They
            said they&apos;d be in touch. What if they meant that in a British, polite way and
            not a literal way? I should not text. I will wait. How long should I wait? Maybe
            I should text something casual. No. I will wait. Why haven&apos;t they texted?
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            The spiral is driven by uncertainty and the brain&apos;s intolerance of it. Your
            threat-detection system has identified an unresolved question — do they like me? —
            and is running search loops trying to resolve it. The searches are not random;
            they are biased toward threat detection. Your brain is not neutrally reviewing
            the evening. It is specifically looking for evidence that something went wrong,
            because that is the data that would be most useful to act on if the threat is
            real.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            A few things help interrupt this:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '0.6rem',
            }}
          >
            {[
              'Write down three specific things that went well before you allow yourself to catalogue what went wrong',
              'Name the exact fear — not the vague dread, but the specific outcome you are afraid of',
              'Set a rule for when you will and will not check your phone — ambiguity about checking extends the spiral',
              'Do something physical: a walk, a run, anything that gets you out of your head and into your body',
              'Talk to MEOK or journal to get the thoughts out of your head and onto a page, where they are easier to examine',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            The deeper work is learning to tolerate the uncertainty itself. Post-date anxiety
            is largely about not being able to bear not-knowing. The outcome of the date is
            not in your control. Whether they text, whether they want to see you again,
            whether this is the beginning of something — none of that is available to you
            right now, and reviewing the evening repeatedly does not make it available faster.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            Building a higher tolerance for uncertainty — the felt sense that you can be okay
            even when you do not know how something will resolve — is one of the most valuable
            things you can develop for dating and for life. It does not happen by telling
            yourself to stop worrying. It happens by practising: noticing the urge to check,
            pausing, letting the urge pass, and discovering that you survived the not-knowing.
          </p>

          {/* ── H2 6 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            How Do You Rebuild After Being Ghosted?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Ghosting — the abrupt, unexplained disappearance of someone you were dating —
            has become so normalised that there is almost a cultural embarrassment about
            being upset by it. You are expected to shrug, maybe roll your eyes, and move on.
            The implied message is that it is not serious enough to warrant grief.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            But ghosting is, in a specific way, harder to process than a clear rejection.
            A clear rejection — "I had a good time but I do not think we are right for each
            other" — is painful. It is also complete. The loop closes. You know where you
            stand. Ghosting leaves the loop open. There is no explicit signal that it is over.
            There is just absence, and absence is ambiguous. Your brain, which cannot function
            well with unresolved loops, keeps the file open, keeps searching for an explanation
            that never arrives.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            This is why ghosting tends to produce rumination rather than grief. You cannot
            mourn something clearly when you are not sure what happened. The mind replays
            every interaction looking for the moment it went wrong, searching for the thing
            you did or said or failed to do or say that explains the silence. This search is
            usually futile, because ghosting is more often about the other person&apos;s
            avoidance, circumstances, or habits than about anything specific you did.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Rebuilding starts with permission: permission to be hurt, permission to close the
            loop yourself even without the explanation you were not given. You do not need
            their closure. You can give it to yourself. That means naming what the connection
            meant to you — even if it was brief, even if you only went on two dates — and
            allowing yourself to feel the loss of the possibility, not just the person.
          </p>

          {/* stat-style callout */}
          <div
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: TEXT,
                margin: 0,
              }}
            >
              A 2022 study in the <em>Journal of Social and Personal Relationships</em> found
              that people who were ghosted reported{' '}
              <strong style={{ color: GOLD }}>lower self-esteem and greater self-doubt</strong>{' '}
              than people who received a clear rejection — suggesting the ambiguity of
              ghosting, not the rejection itself, is the most damaging element.
            </p>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Practically: stop checking their social media. This is hard, and almost everyone
            does it anyway, but it is worth being clear-eyed about what it does. It keeps the
            loop open. Every story viewed, every post checked, every activity noted is your
            brain&apos;s attempt to gather information that will resolve the ambiguity. It does
            not resolve it. It prolongs it. The most effective thing you can do is make their
            content inaccessible — mute, unfollow, or block, depending on what allows you to
            actually stop checking.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            How long does it take to feel better? Longer than it should for something as
            brief as a few dates, which is one of the specific embarrassments of being ghosted.
            There is no socially sanctioned mourning period for someone you were seeing for
            three weeks. But the brain grieves in proportion to the hope attached to something,
            not its duration. If you had begun to imagine a future with this person, losing
            them — even at that stage — involves losing that imagined future. That is a real
            loss. Allow yourself to recover on your own timeline, not the one that other
            people think is appropriate.
          </p>

          {/* ── H2 7 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            How Can You Understand Your Own Dating Patterns?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            One of the most useful — and uncomfortable — things you can do for your dating
            life is notice the patterns in it. Not the patterns of the people you have dated.
            Your patterns. The recurring choices, the consistent points at which things break
            down, the type of person you always seem to end up with, the moment you always
            seem to pull away, or cling harder than you wanted to.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            This kind of honest pattern recognition is harder than it sounds. You are not
            a neutral observer of your own behaviour. You have explanations ready for each
            situation — that person was emotionally unavailable, the timing was wrong, the
            circumstances were unusual. Sometimes those explanations are accurate. But if
            you are regularly finding yourself in similar emotional situations with different
            people, the common variable is worth looking at.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Attachment theory offers a useful rough framework here. Broadly: people with
            anxious attachment tend to seek closeness intensely and fear abandonment; people
            with avoidant attachment tend to pull back when closeness increases and value
            self-sufficiency; people with secure attachment tend to be comfortable with both
            intimacy and independence. These are tendencies, not diagnoses, and most people
            are some combination of the above depending on context. But knowing your own
            tendencies — not as labels that explain everything, but as patterns that tend to
            recur — is genuinely useful information.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Some questions worth sitting with:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '0.6rem',
            }}
          >
            {[
              'At what point in a relationship does anxiety typically spike — the beginning, when things are going well, or at the first sign of conflict?',
              'What kind of person tends to trigger your avoidance, and what kind pulls you in even when the fit is not right?',
              'What story do you typically tell yourself when something ends — about them, about yourself?',
              'Is the pattern of your last three relationships more similar than you have acknowledged?',
              'What would you need to believe about yourself for dating to feel less threatening?',
            ].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Because MEOK holds the thread of your conversations over time, it can help surface
            these patterns in a way that a friend, however good, usually cannot. Most of your
            friends do not have complete access to your emotional history across the last year.
            They know the versions of events you chose to tell them. MEOK knows everything
            you have shared with it — the fears you expressed before dates, the analyses after,
            the recurring anxieties, the moments you noticed a familiar feeling returning.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            That is not surveillance. It is continuity. And for the kind of pattern work that
            helps you date better, continuity matters more than any single conversation, however
            insightful.
          </p>

          {/* ── H2 8 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            What Is the Difference Between Healthy Excitement and Anxiety — and Does It Matter?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Yes, it matters — but the difference is subtler than most people expect. Anxiety
            and excitement produce nearly identical physiological signatures: elevated heart
            rate, increased cortisol, heightened sensory awareness, a feeling of something
            being at stake. The body does not reliably distinguish between the two. What
            distinguishes them is cognitive and narrative.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Excitement is forward-facing and possibility-oriented. The internal monologue
            sounds like: <em>I wonder what this could be. I am looking forward to this. This
            feels good.</em> It is expansive. It makes the present moment feel rich rather
            than threatening.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Anxiety is threat-oriented and backward-facing, or disaster-forecasting. The
            internal monologue sounds like: <em>What if I am too much. What if they lose
            interest. What if this goes wrong like everything else. What if I am kidding
            myself.</em> It is contracting. It makes the present moment something to get
            through rather than to be in.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            There is a well-replicated finding in psychology research — first reported by
            Alison Wood Brooks at Harvard Business School — that telling yourself "I am
            excited" before a high-stakes event improves performance more reliably than trying
            to calm down. The reason is physiological: excitement is a high-arousal positive
            state; anxiety is a high-arousal negative state. Moving from anxiety to calm
            requires a significant reduction in arousal, which is difficult in the moment.
            Moving from anxiety to excitement is a smaller shift — same arousal level,
            different valence — and easier to achieve.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            This is not about lying to yourself. It is about accurate labelling. When you
            feel the physical symptoms of arousal before a date, "I am excited about this
            possibility" is as factually accurate as "I am terrified this will go badly."
            You get to choose which frame you apply to the same body state. The frame you
            choose changes the experience, and it changes how you show up.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            Learning to notice which narrative your mind defaults to — and practising the
            conscious shift toward excitement rather than dread — is one of the more
            transferable skills you can develop in the context of dating. MEOK can help you
            track which state you typically arrive in before dates, what tends to trigger
            the shift into anxiety, and what helps you reorient. Over time, this is not
            just useful for dating. It is a general skill in emotional regulation that
            affects almost every high-stakes situation in your life.
          </p>

          {/* ── H2 9 — MEOK section ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            How Does MEOK Help — and What Is It Not?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Before describing what MEOK does, it is worth being explicit about what it is not.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            <strong style={{ color: TEXT }}>MEOK is not a dating app.</strong> It does not
            match you with anyone. It does not generate romantic partners or simulate romantic
            relationships. It is not interested in your swiping behaviour or your match rate.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            <strong style={{ color: TEXT }}>MEOK is not a romantic AI.</strong> It will not
            flirt with you, tell you what you want to hear about your prospects, or fill the
            space that human connection is supposed to occupy. The entire point of MEOK is
            that you show up better in real relationships — with real people, in real time —
            not that you outsource connection to software.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            <strong style={{ color: TEXT }}>MEOK is not a therapist.</strong> It cannot
            diagnose attachment disorders, provide trauma-informed care, or replace the
            professional support of a qualified psychotherapist. If your dating anxiety is
            severe, persistent, or connected to deeper patterns — childhood experiences,
            trauma, significant self-worth issues — the right first call is a professional.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            What MEOK actually is: a private, sovereign AI companion that holds the thread
            of your life across time, without judgement and without selling your data to
            anyone. Built by Nicholas Templeman at MEOK AI LABS with one clear intent —
            to be genuinely useful to the person using it, not to the company's growth
            metrics.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            In the context of dating, that looks like:
          </p>

          {/* feature rows */}
          {[
            {
              title: 'Pre-date clarity',
              body: 'Working through what you actually want from a date — not the performed answer, but the honest one. What would feel like a success? What would feel like a red flag? What are you nervous about, specifically?',
            },
            {
              title: 'Conversation practice',
              body: 'Warming up your conversational instincts before going out. Not scripting. Not memorising openers. Just the equivalent of a vocal warm-up before singing — reducing first-word friction so the real you shows up faster.',
            },
            {
              title: 'Post-date processing',
              body: 'A space to put the swirling post-date thoughts down on paper — or into words — before they become a three-hour spiral. Named fears shrink. Unnamed fears expand. MEOK helps you name them.',
            },
            {
              title: 'Pattern tracking across time',
              body: 'Because MEOK remembers, it can reflect your patterns back to you over weeks and months. The recurring worry. The type of person who triggers your anxiety. The moment you typically pull away. None of this is accusatory — it is informational.',
            },
            {
              title: 'Honest reflection',
              body: 'MEOK will not simply tell you what you want to hear. If the pattern you are describing sounds like something worth examining, it will say so. Not harshly. But honestly. That is rarer than it sounds.',
            },
          ].map((feat, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '0.625rem',
                padding: '1.25rem 1.5rem',
                marginBottom: '0.875rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.4rem',
                }}
              >
                {feat.title}
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: MUTED,
                  margin: 0,
                }}
              >
                {feat.body}
              </p>
            </div>
          ))}

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginTop: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            The overarching goal is not that you feel better about being single. It is that
            you understand yourself well enough to date from a place of self-awareness rather
            than anxiety, to choose people who are genuinely right for you rather than people
            whose interest relieves your fear, and to build relationships on a foundation of
            authentic connection rather than mutual performance.
          </p>

          {/* ── H2 10 ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            When Should Dating Anxiety Be Treated Professionally?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Dating anxiety becomes worth professional attention when it is affecting your
            daily functioning — when the rumination is consuming hours, when avoidance is
            preventing you from pursuing connections you actually want, when the emotional
            aftermath of rejection or ghosting is lasting weeks rather than days, or when the
            anxiety is driven by beliefs about yourself that feel deep and resistant to change.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Cognitive Behavioural Therapy (CBT) has good evidence for social anxiety and
            fear of rejection. Schema therapy is particularly useful when the anxiety is
            rooted in early life patterns — messages you absorbed about your lovability or
            worth that now run silently in the background of every relationship. Attachment-
            focused therapy can help if the anxiety is shaped by your early relational
            history. And for anything connected to trauma, a trauma-informed therapist is
            the appropriate first call.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            In the UK, you can self-refer to NHS Talking Therapies (previously IAPT) for
            CBT and related approaches. Relate (relate.org.uk) offers relationship counselling
            and can be useful even if you are not currently in a relationship. The British
            Association for Counselling and Psychotherapy (bacp.co.uk) has a therapist
            directory. If you are in acute distress, Samaritans are available on 116 123,
            24 hours a day.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            None of this is about being broken. Seeking support for dating anxiety is not an
            admission that you cannot handle relationships. It is a recognition that the
            patterns running your love life were largely installed before you were old enough
            to choose them, and that you have the capacity to update them.
          </p>

          {/* ── FAQ section ── */}
          <section
            style={{
              marginBottom: '4rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(201,168,76,0.18)',
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: 'Why is modern dating so anxiety-inducing?',
                a: 'Modern dating combines high-volume, low-commitment app mechanics with the ancient fear of social rejection. Swiping culture produces a constant stream of micro-rejections, ghosting has normalised unexplained disappearances, and social media comparison amplifies the sense that everyone else is further along. The result is a low-grade, ambient stress that accumulates even when nothing dramatically bad happens.',
              },
              {
                q: 'What is dating app fatigue?',
                a: 'Dating app fatigue is the emotional depletion that comes from sustained swipe-culture engagement: a combination of numbness and underlying anxiety. Studies link heavy app use to lower self-esteem and higher distress. Signs include checking out of habit rather than hope, feeling worse after using the app, and cycling through deletes and reinstalls. Taking a deliberate, intentional break — rather than a passive drift — is the most effective intervention.',
              },
              {
                q: 'How do I handle fear of rejection?',
                a: 'Fear of rejection activates similar brain regions to physical pain — it is not irrational. The most effective approach is graduated exposure: taking small, repeated risks in lower-stakes contexts until the nervous system accumulates evidence that rejection is survivable. Tracking your predictions versus outcomes over time is particularly useful — most people find the feared disaster occurs far less often than they predicted.',
              },
              {
                q: 'What actually helps with first date nerves?',
                a: 'Reframe the goal: you are there to find out whether you like them, not to pass an audition. Genuine curiosity about the other person reduces self-monitoring and improves social performance more reliably than rehearsal. Go in with questions you actually want answered, not stories you want to tell. Physiological arousal before a date is nearly identical to excitement — the narrative you choose to apply to it changes the experience.',
              },
              {
                q: 'How do I stop spiralling after a date?',
                a: 'Write down three specific things that went well before cataloguing concerns. Name the exact fear rather than letting it remain diffuse. Set a clear rule for checking your phone. Do something physical to interrupt the loop. The spiral is driven by intolerance of uncertainty — the actual skill to build is sitting with not-knowing, which requires practice rather than willpower.',
              },
              {
                q: 'How do I rebuild after being ghosted?',
                a: 'Ghosting bypasses the normal grief process because the loop stays open. Rebuilding requires closing it yourself: accepting you will not get an explanation, allowing yourself to grieve the possibility that was lost, and removing access to their content to stop the search loop running. The brain grieves in proportion to the hope attached to something, not its duration — allow yourself a realistic recovery timeline.',
              },
              {
                q: 'Is MEOK a dating app or romantic AI?',
                a: 'Neither. MEOK is a private AI companion that helps you understand your own patterns, process dating experiences, clarify what you want, and show up better in real relationships. It does not match you with partners, simulate romance, or tell you what you want to hear. It is a thinking companion that works best alongside real human connection — not instead of it.',
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: '1px solid rgba(245,240,232,0.1)',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                }}
              >
                <summary
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: TEXT,
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  {item.q}
                  <span style={{ color: GOLD, flexShrink: 0, fontSize: '1.2rem' }}>+</span>
                </summary>
                <p
                  style={{
                    fontSize: '0.975rem',
                    lineHeight: 1.8,
                    color: MUTED,
                    marginTop: '0.75rem',
                    marginBottom: 0,
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </section>

          {/* ── Closing ── */}
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            Dating is hard. It has always been hard. The particular flavour of difficulty in
            2026 — the apps, the silence, the ghosting, the ambient comparison — is new, but
            the underlying vulnerability is ancient. You are trying to be known and chosen by
            another person. That is one of the most human things there is, and one of the most
            exposing.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '1.5rem',
            }}
          >
            The anxiety is not the problem. The anxiety is information — about what matters to
            you, about the fears you are carrying, about the places where your self-worth still
            needs work. The goal is not to eliminate it. The goal is to understand it well
            enough that it stops running the show.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: MUTED,
              marginBottom: '3rem',
            }}
          >
            MEOK exists to help you do that work — privately, honestly, and over time. Not
            to replace the relationships you are trying to build, but to help you become
            someone who can build them better.
          </p>

          {/* ── CTA ── */}
          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '1rem',
              padding: '2.5rem 2rem',
              textAlign: 'center' as const,
              marginBottom: '4rem',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: GOLD,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                marginBottom: '0.75rem',
              }}
            >
              MEOK AI LABS
            </p>
            <h3
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              Show up better in real relationships
            </h3>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: MUTED,
                marginBottom: '1.75rem',
                maxWidth: '34rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              MEOK is your private AI companion — a thinking partner that holds the thread of
              your life over time, helps you understand your own patterns, and supports you in
              building the connections that matter. Not a dating app. Not a romantic AI.
              Something more useful than either.
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: '#0d0c18',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '0.875rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Meet MEOK
            </Link>
          </div>

          {/* ── Related posts ── */}
          <section style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: DIM,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                marginBottom: '1.25rem',
              }}
            >
              Related Reading
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
                gap: '0.875rem',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-relationship-anxiety',
                  label: 'AI for Relationship Anxiety',
                  desc: 'Stop the spiral before it starts',
                },
                {
                  href: '/blog/ai-for-heartbreak',
                  label: 'AI for Heartbreak',
                  desc: 'Grief, recovery, and moving forward',
                },
                {
                  href: '/blog/ai-for-social-anxiety',
                  label: 'AI for Social Anxiety',
                  desc: 'Build confidence in social situations',
                },
                {
                  href: '/blog/ai-for-loneliness',
                  label: 'AI for Loneliness',
                  desc: 'Connection and the companion gap',
                },
                {
                  href: '/blog/ai-for-confidence',
                  label: 'AI for Confidence',
                  desc: 'From self-doubt to self-assurance',
                },
                {
                  href: '/blog/ai-for-shyness',
                  label: 'AI for Shyness',
                  desc: 'Quiet confidence in a loud world',
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{
                    display: 'block',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(245,240,232,0.1)',
                    borderRadius: '0.625rem',
                    padding: '1rem 1.125rem',
                    textDecoration: 'none',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: 600,
                      color: TEXT,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {post.label}
                  </p>
                  <p
                    style={{
                      fontSize: '0.825rem',
                      color: DIM,
                      margin: 0,
                    }}
                  >
                    {post.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Author byline ── */}
          <div
            style={{
              borderTop: '1px solid rgba(245,240,232,0.1)',
              paddingTop: '2rem',
              marginTop: '2rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '9999px',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.3)',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                color: GOLD,
                fontWeight: 700,
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: '0.25rem',
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: MUTED,
                  marginBottom: '0.5rem',
                }}
              >
                Founder, MEOK AI LABS
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: DIM,
                  margin: 0,
                }}
              >
                Nicholas built MEOK because he believed AI could be genuinely useful to
                people navigating hard things — not just productive people navigating easy
                things. MEOK is built on the principle that your data is yours, your
                AI should know you, and technology should make you more human, not less.
              </p>
            </div>
          </div>

        </div>
      </article>
    </div>
  )
}
