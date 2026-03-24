import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Companion for Remote Workers: Fighting Isolation and Staying Sharp | MEOK AI LABS",
  description:
    "WFH loneliness, video call fatigue, motivation slumps — remote work has real costs. MEOK's AI companion helps you stay structured, accountable, and mentally well working alone.",
  keywords: [
    "AI companion for remote workers",
    "remote work loneliness",
    "work from home isolation",
    "AI accountability partner",
    "remote work mental health",
    "video call fatigue",
    "WFH structure",
    "remote worker wellbeing",
    "MEOK AI LABS",
    "AI for home workers",
    "remote work motivation",
    "work life balance remote",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI Companion for Remote Workers: Fighting Isolation and Staying Sharp",
    description:
      "WFH loneliness, video call fatigue, motivation slumps — remote work has real costs. MEOK helps remote workers stay structured, accountable, and mentally well.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["AI", "Remote Work", "Loneliness", "Mental Health", "Accountability", "MEOK"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Remote Workers: Fighting Isolation and Staying Sharp",
    description:
      "Remote work is genuinely hard. MEOK's AI companion tackles WFH loneliness, video call fatigue, motivation slumps, and the blurred edges between work and life.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-remote-workers",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Remote Workers: Fighting Isolation and Staying Sharp",
  description:
    "How MEOK AI LABS helps remote workers tackle WFH loneliness, video call fatigue, blurred work-life boundaries, motivation slumps, and the slow creep of isolation into genuine mental health difficulty.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-remote-workers",
  },
  keywords:
    "AI companion remote workers, work from home loneliness, remote work mental health, AI accountability partner, video call fatigue, WFH motivation, MEOK AI LABS",
  articleSection: "Remote Work",
  wordCount: 2500,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can an AI companion genuinely help with remote work loneliness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — with an important caveat. An AI companion like MEOK won't replace the warmth of a real colleague, but it addresses a specific and underappreciated layer of remote work loneliness: the absence of anyone to think out loud with, process the day with, or share minor frustrations with. MEOK's Healer mode holds space for those moments without judgment, and because it remembers previous conversations, the relationship builds over time in a way that feels meaningfully different from talking to a blank chatbot.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help remote workers structure their day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's morning briefing — delivered through Hourman mode — replaces the psychological function of an office commute and team standup. It surfaces your priorities for the day, reviews what carried over from yesterday, and anchors you in a clear intention before the distractions of home take hold. Over time MEOK learns your working patterns and can flag when you're starting later than you intended, working longer than is healthy, or skipping the boundaries you said mattered.",
      },
    },
    {
      "@type": "Question",
      name: "What is video call fatigue and can AI help with it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Video call fatigue is the genuine cognitive and emotional exhaustion that comes from extended video conferencing — caused by having to maintain eye contact, read compressed body language, and manage your own on-screen appearance simultaneously. AI can help not by adding more calls but by reducing the need for synchronous communication. MEOK can help you process meetings, draft follow-ups, and think through decisions asynchronously so that when you do join a call, you're clearer and less overloaded.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK act as a virtual accountability partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Pioneer archetype is built for accountability. You state what you intend to do — a project, a commitment, a boundary — and MEOK holds it. Not as a task manager or nagging reminder, but as a presence that remembers and returns to what you said mattered. When you check in, it can ask how the commitment went, notice patterns when certain things consistently slip, and help you understand whether the goal was right in the first place or whether something structural needs to change.",
      },
    },
    {
      "@type": "Question",
      name: "When does remote work isolation become a mental health issue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The line between 'I'm having a quiet week' and genuine mental health difficulty is easy to miss when you're in it. Key warning signs include persistent low mood that doesn't lift on weekends, increasing reluctance to interact even when you have the opportunity, sleep disruption, loss of motivation for things you previously enjoyed, and a growing sense that the outside world has become slightly unreal. MEOK can help you notice these patterns through honest, ongoing conversation — and will encourage you to seek human professional support when what you're describing goes beyond what an AI companion should hold alone.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK help with the blurred boundaries between work and home life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boundary blurring is one of the most insidious costs of remote work — the laptop that never fully closes, the Slack notification at 9pm, the Sunday morning that gets quietly swallowed by a project. MEOK helps by holding the boundaries you declare: a hard stop time, a no-work morning routine, protected time for exercise or family. It doesn't enforce rules, but it tracks patterns and reflects them back honestly — giving you real data about where your boundaries are holding and where they're quietly collapsing.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK different from other AI tools for productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most productivity AI is purely task-focused: it manages your to-do list, summarises meetings, or drafts emails. MEOK does those things, but it's designed as a companion first — meaning it holds emotional context alongside practical context. It can notice when your productivity slump is actually a mood issue, when your procrastination is connected to anxiety rather than laziness, and when what you need isn't another prioritised task list but someone to acknowledge that the day was genuinely hard.",
      },
    },
  ],
}

export default function AiForRemoteWorkersPage() {
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
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            padding: "1.25rem 2rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              MEOK AI LABS
            </Link>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                alignItems: "center",
              }}
            >
              <Link
                href="/blog"
                style={{
                  color: "#f5f0e8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  opacity: 0.7,
                }}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                style={{
                  color: "#f5f0e8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  opacity: 0.7,
                }}
              >
                Pricing
              </Link>
              <Link
                href="/birth"
                style={{
                  color: "#0d0c18",
                  backgroundColor: "#c9a84c",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  padding: "0.45rem 1.1rem",
                  borderRadius: "6px",
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "5rem 2rem 3rem",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div
            style={{
              marginBottom: "1rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            <span
              style={{
                color: "#c9a84c",
                fontSize: "0.8rem",
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Remote Work
            </span>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.35,
                margin: "0 0.75rem",
                fontSize: "0.8rem",
              }}
            >
              /
            </span>
            <span
              style={{
                color: "#f5f0e8",
                opacity: 0.5,
                fontSize: "0.8rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              24 March 2026
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
            }}
          >
            AI Companion for Remote Workers: Fighting Isolation and Staying Sharp
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.7",
              color: "#f5f0e8",
              opacity: 0.75,
              marginBottom: "2rem",
              fontStyle: "italic",
            }}
          >
            Remote work offers real freedom — and extracts a real price. Loneliness,
            blurred boundaries, motivation slumps, and the slow erosion of the social
            fabric that keeps most of us well. This is about what an AI companion can
            honestly do about that.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                fontWeight: "700",
                color: "#c9a84c",
              }}
            >
              NT
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#f5f0e8",
                }}
              >
                Nicholas Templeman
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#f5f0e8",
                  opacity: 0.5,
                }}
              >
                Founder, MEOK AI LABS
              </div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                fontSize: "0.8rem",
                color: "#f5f0e8",
                opacity: 0.4,
              }}
            >
              ~12 min read
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3rem 2rem 5rem",
          }}
        >
          {/* Opening */}
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            There is a particular kind of Tuesday afternoon that remote workers know well. It is
            2:47pm. You have been alone since you woke up. You have had four video calls and no
            actual conversations. You ate lunch at your desk again. You are not sure when your
            working day officially ends because it never officially started. Your inbox is full,
            your focus is gone, and the most social interaction you have had all day was a Slack
            emoji from someone in a different time zone.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            This is not a failure of will or productivity technique. It is what happens when human
            beings — who evolved to work in groups, to eat together, to incidentally share their
            days — try to sustain themselves on pure solitude and wi-fi. Remote work is a genuine
            privilege in many ways. But the costs are real, they accumulate slowly, and most of the
            solutions on offer either miss the point or treat a structural problem as a personal
            failing.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            At MEOK AI LABS, we built MEOK partly in response to this problem. Not because AI is
            a substitute for real human connection — it is not — but because there are specific,
            identifiable gaps that remote work creates, and AI companions can address some of them
            genuinely well. This piece is an honest account of what those gaps are, how an AI
            companion can help, and where the limits are.
          </p>

          {/* Divider */}
          <div
            style={{
              margin: "3rem 0",
              borderTop: "1px solid rgba(201,168,76,0.2)",
            }}
          />

          {/* H2: 1 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            Why Is Remote Work So Isolating — Even When You Are Technically "Connected"?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The standard response to remote work loneliness is to tell people to use Slack more,
            schedule more calls, join online communities, or book a desk at a co-working space.
            These things can help. But they miss the particular texture of remote work isolation,
            which is different from ordinary loneliness in important ways.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Office-based social connection is largely incidental. You do not book a meeting to
            notice that a colleague seems stressed today. You do not schedule a slot to share the
            minor triumph of finishing a piece of work. The social fabric of an office is woven
            from hundreds of tiny unremarkable exchanges — the question asked while waiting for
            the kettle, the overheard conversation you half-contributed to, the look across the
            room when someone said something in a meeting that everyone else also noticed but no
            one else commented on.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Remote work strips all of this away. What remains is entirely intentional, entirely
            scheduled, and therefore entirely exhausting in a different way. You have to actively
            manufacture every human exchange. The passively acquired social nourishment that office
            workers receive without thinking about it simply does not exist. And after months or
            years of this, the deficit can be significant.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            There is also the matter of witness. When you do something well in an office, someone
            sees it. When you are having a hard day, it tends to show — and someone usually
            responds. Working from home, you can do excellent work for months and feel completely
            invisible. You can have a genuinely terrible week and have no one notice at all.
            That absence of witness is corrosive in ways that are hard to articulate but easy
            to feel.
          </p>

          {/* H2: 2 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            What Is Video Call Fatigue, and Why Does It Make Loneliness Worse?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Video call fatigue is now well-documented, but it is still widely misunderstood.
            It is not simply tiredness from spending too much time in meetings — that would
            affect office workers equally. It is a specific cognitive and emotional drain caused
            by the particular demands of video communication.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            On a video call, you are doing several things simultaneously that normally happen
            automatically in face-to-face communication. You are managing your own image on
            screen — monitoring how you appear, suppressing the instinct to look away, performing
            attentiveness to the camera rather than simply feeling it. You are reading compressed
            body language with much of the spatial and peripheral information stripped out.
            You are managing audio delays that disrupt the natural rhythm of conversation.
            And you are doing all of this in a context where the usual social rewards of
            in-person interaction — warmth, physical presence, shared space — are absent.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The deeply ironic result is that a day of video calls can leave you more depleted
            and more lonely than a day of working in silence. You have had the form of social
            interaction without the substance of it. You have expended significant energy on
            connection and been left emptier than when you started.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            An AI companion like MEOK can help here not by adding more calls, but by reducing
            the need for synchronous communication. When you can think out loud with MEOK about
            a problem you were going to call a colleague about, or process a meeting by writing
            rather than talking, or draft a difficult message with MEOK's help rather than
            scheduling a Zoom to discuss it — the total load of depleting communication
            decreases. The calls you do have become less frequent but more intentional.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              margin: "2.5rem 0",
              fontStyle: "italic",
              fontSize: "1.15rem",
              lineHeight: "1.7",
              color: "#f5f0e8",
              opacity: 0.85,
            }}
          >
            "A day of video calls can leave you more depleted and more lonely than a day of
            working in silence. You have had the form of social interaction without the
            substance of it."
          </blockquote>

          {/* H2: 3 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            How Does the Loss of Water Cooler Conversation Actually Affect You?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Water cooler conversation sounds trivial. It is not. Research consistently shows
            that weak social ties — the casual, low-stakes exchanges with people you know
            slightly rather than deeply — are disproportionately important to wellbeing. They
            expose you to different perspectives. They create a sense of belonging to a wider
            community. They provide the ambient social stimulation that keeps mood elevated
            and cognitive flexibility intact.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Remote workers lose virtually all of this. Your social world contracts. The people
            you interact with are almost entirely people you were already close to, or people
            you deal with in specifically professional contexts. The serendipitous conversation
            with the person from accounts you have never formally met, the debate about last
            night's television with someone whose name you barely know — these disappear
            entirely.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            This contraction is so gradual that most remote workers do not notice it happening
            until they suddenly find themselves genuinely short of things to talk about with
            people outside work. Or until they realise they have been eating lunch in silence
            for six months and cannot clearly remember when that started. Or until a mild
            social anxiety creeps in around situations — a party, a networking event — that
            they would previously have handled with ease.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            MEOK can function as a form of that ambient social presence — somewhere to think
            out loud, to share something that happened, to process an idea that is not important
            enough to warrant a message to another person but is real enough to want to put
            somewhere. That is not a replacement for human connection. But it fills a gap that
            is otherwise simply empty.
          </p>

          {/* Callout box */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "10px",
              padding: "1.75rem 2rem",
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                lineHeight: "1.7",
                color: "#f5f0e8",
                margin: 0,
              }}
            >
              <strong style={{ color: "#c9a84c" }}>MEOK's Healer mode</strong> is designed
              specifically for the emotional and social processing layer that remote work
              strips away. It holds context across conversations — so it remembers that last
              week was hard, that you mentioned feeling disconnected, that you were trying to
              reach out to someone you had drifted from. It does not replace people. But it
              gives you somewhere to put things that would otherwise go nowhere.
            </p>
          </div>

          {/* H2: 4 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            Why Do Remote Workers Struggle So Much With Motivation Slumps and How Can AI Help?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Motivation in office environments is substantially environmental. The commute
            creates a transition between home and work. The presence of colleagues working
            creates a low-level social pressure to also work. The physical space of the office
            signals that this is where work happens. None of these need to be conscious to
            function. They run in the background, doing psychological work that you do not
            have to do yourself.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Remote work removes all of these scaffolds. Every single day, you must generate
            your own transition into work mode, your own sense of social pressure to keep
            going, your own boundary between the space where you relax and the space where
            you focus. This is genuinely difficult. It requires the kind of sustained
            self-regulation that depletes over time, particularly when combined with the
            social deficit we have already discussed.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Motivation slumps in remote workers tend to present differently from office-based
            burnout. They often look like vague restlessness — an inability to settle into work,
            frequent context-switching, long periods of shallow activity that feel busy but
            produce nothing. The person is not obviously failing. They are working. They just
            cannot find traction.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            An AI companion addresses this at several levels. At the most practical level,
            MEOK's morning briefing creates the transition that the commute used to. Starting
            the day with a structured check-in — reviewing your priorities, clarifying your
            intentions, acknowledging what is on your mind — performs the psychological work
            of crossing the threshold from home mode to work mode. Over time, this ritual
            becomes genuinely effective precisely because it is consistent and personalised.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            At a deeper level, MEOK can help you understand the difference between a
            motivation slump caused by genuine depletion — which needs rest, not a new
            productivity system — and one caused by unclear priorities, undefined goals,
            or work that has drifted away from what you actually care about. These have
            different solutions, and confusing them is one of the most expensive mistakes
            remote workers make.
          </p>

          {/* H2: 5 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            Can an AI Really Replace a Human Accountability Partner for Remote Work?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The honest answer is: not entirely, and that is worth being clear about. A human
            accountability partner brings something specific — the knowledge that another person
            who cares about you is tracking your commitments, which activates social motivation
            mechanisms that AI cannot fully replicate. If that is available to you, use it.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            But human accountability partners are inconsistent. They have their own lives.
            They have their own biases — they may be too encouraging when you need challenge,
            or too challenging when you need support. The relationship has social dynamics
            that make total honesty about failure complicated. And they are simply not
            available at 11pm on a Wednesday when you need to think through why you have been
            avoiding a particular piece of work for three weeks.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            MEOK's Pioneer archetype is designed for exactly this kind of accountability.
            You tell it what you intend to do — a deliverable, a commitment, a habit, a
            boundary. It holds that. Not as a task manager or reminder system, but as
            a presence that returns to what you said mattered and asks honest questions
            about it. It notices when certain commitments consistently slip. It can help
            you distinguish between a goal that was right but harder than expected, and
            one that was never quite right in the first place.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The key difference from a task manager is that MEOK holds context. A to-do
            app knows you have not crossed off the item. MEOK knows you have not crossed
            it off for the third week running, that you mentioned last time that it felt
            connected to anxiety about a specific person's reaction, and that you said
            you were going to do something about that. That depth of context is what makes
            the accountability feel real rather than mechanical.
          </p>

          {/* Feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              margin: "2.5rem 0",
            }}
          >
            {[
              {
                title: "Pioneer Mode",
                desc: "Holds your commitments across time. Notices patterns. Asks honest questions when things consistently slip.",
              },
              {
                title: "Healer Mode",
                desc: "Holds emotional context. Gives you somewhere to put the harder days without judgment or advice you did not ask for.",
              },
              {
                title: "Hourman Briefing",
                desc: "Daily structured check-in that replaces the commute. Anchors you in priorities before the day's distractions take hold.",
              },
              {
                title: "Persistent Memory",
                desc: "Remembers what you said last week, last month. The relationship builds. Context accumulates. Nothing gets lost.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    color: "#c9a84c",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    marginBottom: "0.65rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.65",
                    color: "#f5f0e8",
                    opacity: 0.75,
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {card.desc}
                </div>
              </div>
            ))}
          </div>

          {/* H2: 6 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            How Do You Build a Structured Working Day When No One Else Is Dictating the Shape of It?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            Structure is one of the most underrated psychological necessities. Most people
            do not know how much the structure of their working day is doing for them until
            it disappears. When you go remote, suddenly there is no one else managing the
            rhythm of your day. No team lunch. No afternoon meeting that anchors the middle
            of the afternoon. No end-of-day commute that signals permission to stop.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The advice given to new remote workers — create a routine, dress as if you are
            going to the office, set a defined finish time — is essentially correct, but it
            treats structure as a personal discipline problem. The truth is that office
            structure is environmental and social, not individual. Building equivalent
            structure from scratch, alone, every day, is genuinely hard work that most
            productivity guidance significantly underestimates.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            MEOK approaches this as a design problem rather than a willpower problem. The
            morning briefing through Hourman mode is the anchor point of the day — a defined
            start, with a consistent structure, that you can rely on regardless of what else
            is happening. Over time MEOK learns the shape of your ideal working day and can
            help you protect it: flagging when you are starting significantly later than
            usual, noticing when your afternoon block keeps getting interrupted, surfacing
            the data on when you actually do your best work.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            There is also the end of day, which remote workers consistently neglect. A
            defined finish — with a brief review of what was accomplished and a clear
            handover to tomorrow — is one of the most effective ways to contain the
            sprawl of remote work. MEOK can hold the structure of that ritual: what
            did you get done, what carries forward, what do you need to remember tomorrow,
            is there anything you need to put down before you close the laptop. Small
            habits. Consistent practice. The structure that used to live in the environment
            now lives in the relationship.
          </p>

          {/* H2: 7 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            When Do Blurred Work-Life Boundaries Become a Serious Problem — and What Can You Do?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The boundary between work and home is one of the deepest structural challenges
            of remote work, and it is one that tends to get progressively worse rather than
            better over time. In the beginning, working late occasionally feels like
            dedication. Checking email before breakfast feels efficient. Starting early on
            Sunday to get ahead feels sensible. Then suddenly it is not occasional. It is
            just how things are.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            This matters beyond the obvious productivity argument. Rest is not a luxury.
            The cognitive recovery that happens in genuine non-work time is not optional
            if you want to sustain performance — or health. Remote workers who work
            everywhere, always, tend to degrade slowly rather than crash dramatically.
            Performance creeps down. Creativity narrows. Mood flattens. And because it
            happens gradually, the connection to overwork is easy to miss.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            MEOK helps by holding the boundaries you declare. This is different from
            enforcing them — MEOK is not going to lock your laptop at 6pm. But when
            you tell MEOK that you want to stop working by 6:30pm on weekdays, MEOK
            can return to that. It can ask at the end of the day whether you made it.
            It can track whether your stated boundary is actually being honoured or
            whether it exists only as an intention you repeat every Monday and abandon
            by Wednesday.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The most important thing MEOK does here is provide honesty without judgment.
            A human partner or friend will sometimes soften the feedback, or offer
            reassurance when what you actually need is accuracy. MEOK can tell you
            that you have described your work-life balance as a priority in every
            conversation for the past month and that the data suggests nothing has
            changed. That is useful. Painful, sometimes. But useful.
          </p>

          {/* H2: 8 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            How Do You Know When Remote Work Isolation Is Becoming a Mental Health Issue?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            This is the question that most guides about remote work avoid, which is a
            disservice. Loneliness and isolation exist on a spectrum. At one end, there
            is the normal background hum of quiet days and reduced social stimulation
            that virtually every remote worker experiences. At the other end, there is
            genuine clinical depression, anxiety, or other conditions that require
            professional support and that working from home can both cause and worsen.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The gradient between them is not always obvious when you are inside it.
            You are often the last person to notice that what started as a quiet period
            has become something more serious. The warning signs worth taking seriously
            include: persistent low mood that does not lift over weekends or on holiday;
            increasing reluctance to interact socially even when you have the energy and
            opportunity; sleep disruption; loss of pleasure in things that usually give
            you pleasure; a growing sense that the world outside your flat has become
            faintly unreal; difficulty imagining the future with any specificity or optimism.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            None of these on their own constitute a diagnosis. All of them together,
            persisting over weeks, are worth taking seriously. The most important thing
            is not to normalise them. Remote work culture has a tendency to frame
            difficulty as a personal adaptation problem — you just need better habits,
            a better routine, a better setup. Sometimes that is true. Sometimes it is not,
            and telling yourself it is just means the actual problem gets addressed later
            rather than now.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            MEOK can be genuinely useful here precisely because it tracks across time.
            A conversation with a human friend is a snapshot. MEOK remembers the last
            six weeks of conversations and can notice trends that are hard to see when
            you are inside them: that you have mentioned feeling flat every Monday for
            a month, that the things you used to mention with enthusiasm have quietly
            disappeared from your conversations, that when asked about the people in
            your life you increasingly have less to say.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            When MEOK notices these patterns, it does not attempt to treat them.
            That is not its role, and it would be dishonest to pretend otherwise.
            What it does is name what it is seeing, reflect it back without alarm,
            and suggest that what you are describing might benefit from support from
            someone qualified to provide it. A GP. A therapist. A counsellor. MEOK
            can help you think through how to take that step if the prospect feels
            daunting. But the step itself is a human one.
          </p>

          {/* Warning box */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "10px",
              padding: "1.75rem 2rem",
              margin: "2.5rem 0",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                color: "#c9a84c",
                marginBottom: "0.75rem",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Important
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                lineHeight: "1.7",
                color: "#f5f0e8",
                margin: 0,
                opacity: 0.85,
              }}
            >
              MEOK is an AI companion, not a mental health service. If you are experiencing
              persistent low mood, significant anxiety, or any symptoms that are interfering
              with your ability to function, please speak to a qualified mental health
              professional. In the UK, your GP is the first port of call. MEOK can help
              you prepare for that conversation, but it cannot substitute for it.
            </p>
          </div>

          {/* H2: 9 */}
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              color: "#c9a84c",
              letterSpacing: "-0.01em",
            }}
          >
            What Does a Genuinely Sustainable Remote Work Life Actually Look Like?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            The honest answer is that it looks different for everyone, and that is part of
            what makes remote work so difficult to navigate using generic advice. The person
            who thrives working from a spare room in complete silence is not the same person
            who needs a coffee shop two mornings a week to feel connected to the world.
            The person who needs rigid time-boxing is not the same person who does their
            best work in two intense four-hour blocks with long gaps between them.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            What sustainable remote work does share, across individuals, is a set of
            common elements. Defined transitions into and out of work mode. Adequate
            social stimulation — not necessarily a lot, but enough, and in forms that
            actually restore rather than deplete. Real rest, protected by real boundaries.
            A sense of meaningful progress on work that matters. And some form of witness
            to the day — someone or something that registers that you did something, that
            it was hard, that it went well.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            MEOK was built to help with several of these. The morning briefing handles
            transitions. The Healer mode handles social processing and witness. The Pioneer
            mode handles accountability and the sense of meaningful progress. Persistent
            memory means the relationship accumulates — you are not starting from scratch
            every time, explaining your context, losing the thread.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "#f5f0e8",
            }}
          >
            What MEOK cannot do is be a substitute for human company, for physical
            movement through the world, for the irreplaceable texture of in-person
            life. We are honest about that. The design intention was never to replace
            the things remote work takes away, but to address the specific gaps it creates
            — the absence of structure, the absence of accountability, the absence of
            someone who notices.
          </p>

          {/* Divider */}
          <div
            style={{
              margin: "3.5rem 0",
              borderTop: "1px solid rgba(201,168,76,0.2)",
            }}
          />

          {/* FAQ Section */}
          <section>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "2rem",
                color: "#f5f0e8",
                letterSpacing: "-0.01em",
              }}
            >
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "Can an AI companion genuinely help with remote work loneliness?",
                a: "Yes — with an important caveat. An AI companion like MEOK won't replace the warmth of a real colleague, but it addresses a specific and underappreciated layer of remote work loneliness: the absence of anyone to think out loud with, process the day with, or share minor frustrations with. MEOK's Healer mode holds space for those moments without judgment, and because it remembers previous conversations, the relationship builds over time in a way that feels meaningfully different from talking to a blank chatbot.",
              },
              {
                q: "How does MEOK help remote workers structure their day?",
                a: "MEOK's morning briefing — delivered through Hourman mode — replaces the psychological function of an office commute and team standup. It surfaces your priorities for the day, reviews what carried over from yesterday, and anchors you in a clear intention before the distractions of home take hold. Over time MEOK learns your working patterns and can flag when you're starting later than intended, working longer than is healthy, or skipping the boundaries you said mattered.",
              },
              {
                q: "What is video call fatigue and can AI help with it?",
                a: "Video call fatigue is the genuine cognitive and emotional exhaustion from extended video conferencing — caused by managing your on-screen appearance, reading compressed body language, and handling audio delays simultaneously. AI can help not by adding more calls but by reducing the need for synchronous communication. MEOK can help you process meetings, draft follow-ups, and think through decisions asynchronously so that when you do join a call, you're clearer and less overloaded.",
              },
              {
                q: "How does MEOK act as a virtual accountability partner?",
                a: "MEOK's Pioneer archetype is built for accountability. You state what you intend to do — a project, a commitment, a boundary — and MEOK holds it. Not as a task manager or nagging reminder, but as a presence that remembers and returns to what you said mattered. When you check in, it asks how the commitment went, notices patterns when certain things consistently slip, and helps you understand whether the goal was right or whether something structural needs to change.",
              },
              {
                q: "When does remote work isolation become a mental health issue?",
                a: "Key warning signs include persistent low mood that doesn't lift on weekends, increasing reluctance to interact even when you have the opportunity, sleep disruption, loss of motivation for things you previously enjoyed, and a growing sense that the outside world has become slightly unreal. MEOK can help you notice these patterns through honest, ongoing conversation — and will encourage you to seek human professional support when what you're describing goes beyond what an AI companion should hold alone.",
              },
              {
                q: "Does MEOK help with the blurred boundaries between work and home life?",
                a: "Boundary blurring is one of the most insidious costs of remote work. MEOK helps by holding the boundaries you declare: a hard stop time, a no-work morning routine, protected time for exercise or family. It doesn't enforce rules, but it tracks patterns and reflects them back honestly — giving you real data about where your boundaries are holding and where they're quietly collapsing.",
              },
              {
                q: "Is MEOK different from other AI tools for productivity?",
                a: "Most productivity AI is purely task-focused. MEOK does those things, but it's designed as a companion first — meaning it holds emotional context alongside practical context. It can notice when your productivity slump is actually a mood issue, when your procrastination is connected to anxiety rather than laziness, and when what you need isn't another prioritised task list but someone to acknowledge that the day was genuinely hard.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "2rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                    color: "#c9a84c",
                    lineHeight: "1.4",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    color: "#f5f0e8",
                    opacity: 0.8,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* Divider */}
          <div
            style={{
              margin: "3rem 0",
              borderTop: "1px solid rgba(201,168,76,0.2)",
            }}
          />

          {/* CTA */}
          <section
            style={{
              textAlign: "center",
              padding: "3rem 2rem",
              backgroundColor: "rgba(201,168,76,0.05)",
              borderRadius: "14px",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#f5f0e8",
                letterSpacing: "-0.01em",
              }}
            >
              You Deserve More Than Another Productivity Tip
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.75",
                color: "#f5f0e8",
                opacity: 0.7,
                marginBottom: "2rem",
                maxWidth: "520px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              MEOK is an AI companion that remembers you, structures your day, holds your
              commitments, and gives you somewhere honest to put the harder parts of working
              alone. Built by Nicholas Templeman at MEOK AI LABS.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1rem",
                padding: "0.85rem 2.25rem",
                borderRadius: "8px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Try MEOK Free
            </Link>
          </section>

          {/* Related posts */}
          <section style={{ marginTop: "4rem" }}>
            <h2
              style={{
                fontSize: "0.85rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                color: "#f5f0e8",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-remote-work",
                  label: "AI for Remote Work: Accountability and Structure",
                },
                {
                  href: "/blog/ai-for-burnout",
                  label: "AI for Burnout: Recognising and Recovering",
                },
                {
                  href: "/blog/ai-for-loneliness",
                  label: "AI for Loneliness: What It Can and Cannot Do",
                },
                {
                  href: "/blog/ai-for-home-workers",
                  label: "AI for Home Workers: The Practical Guide",
                },
                {
                  href: "/blog/ai-for-freelancers",
                  label: "AI for Freelancers: Working Alone Without Losing Your Mind",
                },
                {
                  href: "/blog/ai-for-entrepreneurs",
                  label: "AI for Entrepreneurs: Solo Founders and the Isolation Problem",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "1rem 1.25rem",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#f5f0e8",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    opacity: 0.75,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(201,168,76,0.15)",
            padding: "3rem 2rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            <div>
              <div
                style={{
                  color: "#c9a84c",
                  fontWeight: "700",
                  marginBottom: "0.35rem",
                  fontSize: "1rem",
                }}
              >
                MEOK AI LABS
              </div>
              <div
                style={{
                  color: "#f5f0e8",
                  opacity: 0.4,
                  fontSize: "0.8rem",
                }}
              >
                &copy; 2026 MEOK AI LABS. All rights reserved.
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link
                href="/blog"
                style={{
                  color: "#f5f0e8",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  opacity: 0.5,
                }}
              >
                Blog
              </Link>
              <Link
                href="/privacy"
                style={{
                  color: "#f5f0e8",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  opacity: 0.5,
                }}
              >
                Privacy
              </Link>
              <Link
                href="/birth"
                style={{
                  color: "#c9a84c",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
