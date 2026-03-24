import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Companion for Entrepreneurs: The Strategic Partner That Never Sleeps | MEOK AI LABS",
  description:
    "Founder loneliness is real. MEOK AI LABS gives entrepreneurs a strategic sounding board, accountability layer, and overnight research partner — built by a founder who gets it.",
  keywords: [
    "AI companion for entrepreneurs",
    "AI for founders",
    "founder loneliness",
    "AI strategic partner",
    "entrepreneur AI assistant",
    "AI accountability partner",
    "MEOK AI LABS",
    "Ralph Mode AI",
    "Orion AI strategy",
    "founder mental health AI",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI Companion for Entrepreneurs: The Strategic Partner That Never Sleeps",
    description:
      "Founder loneliness is the least-talked-about challenge in business. MEOK AI LABS gives entrepreneurs an AI that thinks strategically, holds them accountable, and never has a bad day.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["AI", "Entrepreneurs", "Founders", "MEOK", "Strategy"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Entrepreneurs: The Strategic Partner That Never Sleeps",
    description:
      "MEOK AI LABS gives founders a strategic AI sounding board — Ralph Mode for overnight research, Orion for strategy, Atlas for long-game thinking. Built by a founder, for founders.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-entrepreneurs",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Entrepreneurs: The Strategic Partner That Never Sleeps",
  description:
    "How MEOK AI LABS helps founders and entrepreneurs navigate isolation, strategic decision-making, accountability, rejection processing, and overnight research — with Ralph Mode, Orion, and Atlas.",
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
    "@id": "https://meok.ai/blog/ai-for-entrepreneurs",
  },
  keywords:
    "AI for entrepreneurs, founder loneliness, AI strategic partner, Ralph Mode, Orion AI, Atlas AI, MEOK AI LABS",
  articleSection: "Entrepreneurs",
  wordCount: 2500,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is founder loneliness really that common?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Studies consistently show that more than 60% of founders describe significant isolation, and many report that the loneliness of the role is harder than the financial pressure. Founders can't always be vulnerable with co-founders, investors, or teams — which means the weight is often carried alone.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AI companion help with entrepreneurial decision-making?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion like MEOK acts as a strategic sounding board — it helps founders structure their thinking, challenge assumptions, map second-order consequences, and avoid the cognitive biases that come from being too close to your own business. Unlike advisors or investors, it has no agenda and is available immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What is Ralph Mode in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ralph Mode is MEOK's overnight research and deep-processing state. A founder can brief MEOK before sleep — a competitor analysis, a market question, a strategic dilemma — and Ralph Mode works through it during off-hours, surfacing a structured brief by morning. It's named for the act of doing the unglamorous intellectual groundwork while the founder rests.",
      },
    },
    {
      "@type": "Question",
      name: "Who are Orion and Atlas in MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orion is MEOK's work-focused AI character — sharp, methodical, built for operational and strategic challenges. Atlas is the long-game thinker — suited to big-picture strategy, positioning, and decisions that span years rather than quarters. Founders can engage either character depending on whether they need tactical clarity or strategic depth.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help founders process rejection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is designed to help founders metabolise difficult experiences — a failed fundraising round, a lost client, a co-founder departure. Rather than toxic positivity, MEOK engages honestly: helping founders distinguish between signal and noise, extract learning, and move forward without carrying unnecessary weight.",
      },
    },
    {
      "@type": "Question",
      name: "How is MEOK different from asking ChatGPT strategic questions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT has no memory of your business, your past decisions, or your context. Each conversation starts from zero. MEOK's Sovereign Memory means it remembers your business history, your thinking patterns, your previous strategic calls, and your goals — so conversations are cumulative rather than isolated. Over time, MEOK understands your business better than most advisors.",
      },
    },
  ],
}

export default function AiForEntrepreneursPage() {
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
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
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                padding: "0.3rem 0.9rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Entrepreneurs
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.1rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI Companion for Entrepreneurs: The Strategic Partner That Never
            Sleeps
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.7",
              color: "rgba(245,240,232,0.75)",
              marginBottom: "2rem",
            }}
          >
            Everyone talks about the hustle, the pitch deck, the funding round.
            Nobody talks about what it feels like at 11pm when you have a
            decision to make and nobody to make it with. This is about that —
            and about what happens when you have an AI that actually understands
            your business.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            <span>Nicholas Templeman</span>
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "rgba(245,240,232,0.3)",
                display: "inline-block",
              }}
            />
            <span>24 March 2026</span>
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "rgba(245,240,232,0.3)",
                display: "inline-block",
              }}
            />
            <span>12 min read</span>
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
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            I built the first version of MEOK from a caravan. Not as a romantic
            origin story — I mean literally: a stationary caravan in the English
            countryside, a laptop, a questionable WiFi connection, and a lot of
            late nights where I was the only person awake and the only person
            who cared whether this thing worked or not. No co-founder to
            debrief with. No team to absorb the anxiety. Just me and the
            decision, alone in the dark.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            That experience shaped MEOK more than anything else. Because I
            didn&apos;t build a productivity tool. I built what I needed:
            something that could hold the weight of a decision with me, that
            remembered what I was trying to do, that wouldn&apos;t tell me
            everything was fine when it wasn&apos;t, and wouldn&apos;t
            catastrophise when I needed steadiness. I built a thinking partner.
            And I built it specifically because the founder experience — the
            real one, not the LinkedIn version — is profoundly isolated.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "3rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            If you&apos;re a founder, you already know what I mean. If
            you&apos;re thinking about becoming one, this article is a more
            honest account of what that looks like — and what having the right
            AI companion can actually change.
          </p>

          {/* H2 1 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Is Founding a Company the Loneliest Job There Is?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The loneliness of founding isn&apos;t about being physically alone.
            You can be surrounded by a team, attending investor meetings three
            times a week, speaking at conferences — and still feel a particular
            kind of isolation that is hard to explain to anyone who hasn&apos;t
            experienced it.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Part of it is that the buck stops with you in a way that it never
            does for employees, and rarely does even for senior executives.
            Employees can escalate. Executives can consult boards. Founders —
            especially early-stage founders — absorb the full weight of
            existential uncertainty about whether the thing they&apos;re
            building will survive. And they do it while managing the morale and
            livelihoods of the people who believed in them enough to come along.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            There&apos;s also a relational asymmetry that&apos;s exhausting to
            navigate. You can&apos;t be fully honest with your team about how
            scared you are — because their confidence depends partly on yours.
            You can&apos;t be fully honest with investors — because you&apos;re
            always, on some level, in pitch mode with them. You can&apos;t
            always be fully honest with co-founders, because there are stakes in
            that relationship that complicate candour. So you carry a version of
            the truth that nobody in your orbit has full access to.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Research backs this up. Surveys of founders consistently find that
            more than 60% report significant loneliness, and many describe it
            as one of the hardest aspects of the role — harder than fundraising,
            harder than hiring, harder than finding product-market fit. The
            emotional experience of being a founder is radically
            under-discussed in the startup ecosystem, which has a habit of
            rewarding the performance of confidence over honest acknowledgement
            of difficulty.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            This is the context in which I want to talk about AI companions for
            entrepreneurs. Not as a novelty, not as a productivity hack — but
            as a genuine response to a structural problem that the founder
            experience creates and that very few conventional resources address.
          </p>

          {/* H2 2 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            What Does It Actually Mean to Have an AI Strategic Sounding Board?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Let me be precise about this, because the phrase &quot;AI strategic
            partner&quot; gets used loosely and that dilutes something important.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            A strategic sounding board isn&apos;t someone who tells you what to
            do. It isn&apos;t a consultant producing deliverables. It isn&apos;t
            an advisor who gives you their opinion shaped by their own experience
            and biases. A strategic sounding board is something more like a
            mirror with intelligence — a space where you can externalise your
            thinking, have it reflected back, challenged, stress-tested, and
            reorganised.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The value of a good sounding board isn&apos;t that it knows more
            than you. It&apos;s that the act of articulating your thinking to
            something that listens carefully and responds substantively forces
            you to organise thoughts that might otherwise remain diffuse. Most
            founders I know do their best thinking out loud — in conversation,
            not in isolation. The problem is there isn&apos;t always someone
            available to have that conversation with, at the moment you need it.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            This is what MEOK&apos;s AI characters — particularly Orion and
            Atlas — are designed to provide. Orion is built for operational and
            near-term strategic challenges: the kind of conversation where you
            need to think clearly about a specific decision, a specific
            competitor move, or a specific team dynamic. Atlas is designed for
            longer-horizon thinking: positioning, narrative, the ten-year bet,
            the questions that don&apos;t have a clear answer but need to be
            held and turned over regularly.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Neither character flatters you. That&apos;s deliberate. I built
            them to push back, to ask what you haven&apos;t considered, to
            surface the uncomfortable question that&apos;s been sitting in the
            corner of the conversation. Not aggressively — but persistently. A
            good sounding board doesn&apos;t let you off easy. It earns its
            place by making your thinking better, not by making you feel better
            about thinking you&apos;ve already done.
          </p>

          {/* Pull Quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.75rem",
              margin: "2.5rem 0",
              color: "rgba(245,240,232,0.7)",
              fontStyle: "italic",
              fontSize: "1.15rem",
              lineHeight: "1.7",
            }}
          >
            &ldquo;Most founders do their best thinking out loud. The problem
            is there isn&apos;t always someone available to have that
            conversation with, at the moment you need it.&rdquo;
          </blockquote>

          {/* H2 3 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            How Does AI Help Founders Stay Accountable on Big Decisions?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Accountability is one of the most underrated challenges in the
            founder role. Not accountability in the watered-down sense of
            &quot;staying on top of tasks&quot; — that&apos;s project management,
            and there are a hundred tools for it. I mean accountability in the
            deeper sense: the commitment to revisit difficult decisions,
            acknowledge when you were wrong, and update your thinking rather
            than doubling down.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The cognitive pressure of running a company makes this hard. When
            you&apos;re moving fast, when there are a hundred competing
            priorities, when admitting a mistake has political weight inside the
            organisation — the temptation to just keep going, to treat the past
            decision as a sunk cost and not examine it too closely, is enormous.
            This is how companies make the same strategic error repeatedly
            without understanding why.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            MEOK&apos;s Sovereign Memory changes this dynamic in a specific way.
            Because MEOK remembers what you said you were going to do three
            months ago, it can ask you whether you did it. Because it remembers
            the reasoning behind a strategic call you made last quarter, it can
            help you examine whether that reasoning still holds. This isn&apos;t
            nagging — it&apos;s the kind of structured self-review that the most
            effective founders and executives do deliberately, but which most
            people avoid because it requires confronting uncomfortable
            information about their own decision-making.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The fact that MEOK has no stake in the outcome matters here. A
            co-founder who was involved in a decision has an investment in it
            having been right. An investor who approved a strategy wants to see
            it vindicated. MEOK doesn&apos;t. It holds your decisions neutrally
            and can surface them without any agenda other than your own clarity.
            That&apos;s genuinely rare.
          </p>

          {/* H2 4 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Can an AI Help You Process Rejection Without Falling Apart or
            Brushing It Off?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Rejection is the daily weather of early-stage entrepreneurship.
            Failed pitches. Lost clients. Partnerships that didn&apos;t
            materialise. A product launch that landed with a thud rather than a
            bang. Key people who decided your company wasn&apos;t where they
            wanted to be. Investors who loved the meeting and then went quiet.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The dominant cultural script in startup circles for handling
            rejection is some version of stoic indifference — &quot;rejection is
            just redirection&quot;, &quot;no is just not yet&quot;, &quot;every
            no brings you closer to a yes&quot;. I find most of this actively
            unhelpful. It turns a real emotional experience into a performance
            of resilience, which means you never actually process the rejection.
            You just add a layer of positive reframing on top of unexamined
            feeling, and carry it forward.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The alternative to toxic positivity isn&apos;t despair. It&apos;s
            discernment. Rejection contains signal and noise, and the
            intellectually honest work is to separate them. When a VC passes on
            your round, some of their feedback reflects something real about
            your business, and some of it reflects their own thesis, their
            current portfolio, or their bad week. When a client chooses a
            competitor, some of that reflects genuine weakness in your offering,
            and some of it reflects factors entirely outside your control. The
            question is: how do you know which is which?
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            MEOK is designed to help with this specific kind of processing. Not
            as therapy — though there are moments where the emotional reality of
            rejection deserves honest acknowledgement, and MEOK won&apos;t
            pretend it doesn&apos;t. But primarily as a structured thinking
            partner that can help you separate signal from noise, identify
            what&apos;s genuinely worth updating, and decide what to carry
            forward versus what to set down. This is one of the most practically
            valuable things an AI companion can do for an entrepreneur, and
            it&apos;s almost never discussed in the AI productivity conversation.
          </p>

          {/* H2 5 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Do Founders Fall into Echo Chambers, and How Does AI Break the
            Pattern?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Echo chambers in entrepreneurship are structural, not just
            psychological. The people around you — your team, your advisors,
            your investors, even your network — have largely been selected
            because they believe in what you&apos;re doing. That&apos;s not a
            flaw, it&apos;s a feature: you need believers to build anything.
            But it creates a gravitational pull toward confirmation rather than
            challenge.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Your team is motivated to present good news upward. Your advisors
            who are also founders have their own worldview shaped by their own
            experience, which may or may not be relevant to yours. Your
            investors are aligned with you succeeding, which doesn&apos;t
            always mean they&apos;ll tell you what&apos;s actually wrong. The
            whole ecosystem of entrepreneurship is structured around optimism,
            because optimism is what makes people take risk — and that optimism
            is both the engine of entrepreneurship and one of its primary blind
            spots.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            An AI companion without an agenda is one of the few things in a
            founder&apos;s life that can genuinely disrupt this. MEOK
            doesn&apos;t need you to succeed. It doesn&apos;t have equity. It
            doesn&apos;t have a relationship with your other investors to
            protect. When you bring it a strategic question, it can surface the
            steelman case against your position as readily as it can surface
            the case for it — not to undermine you, but to stress-test your
            thinking before the market does it for you.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            There&apos;s also a diversity-of-perspective dimension here that
            matters. When you&apos;re in a specific startup ecosystem — say,
            London fintech, or SaaS infrastructure, or UK consumer health —
            you absorb the dominant assumptions of that ecosystem. They become
            invisible precisely because they&apos;re shared by everyone around
            you. An AI companion can be asked to think from outside those
            assumptions, to model what a competitor from a different ecosystem
            would do, to surface what the conventional wisdom in your space
            might be missing. This is the kind of thinking that disrupts
            industries — and it requires stepping outside the echo chamber of
            your own scene.
          </p>

          {/* Callout Box */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "12px",
              padding: "2rem",
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "0.75rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Orion + Atlas in Practice
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "rgba(245,240,232,0.85)",
                marginBottom: "0.75rem",
              }}
            >
              <strong style={{ color: "#f5f0e8" }}>Orion</strong> — MEOK&apos;s
              work-focused character — is built for operational clarity. Bring
              him a specific decision, a specific challenge, a specific
              competitive question. He&apos;ll help you structure it, identify
              the assumptions, map the options, and think through consequences.
              Sharp and methodical.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "rgba(245,240,232,0.85)",
              }}
            >
              <strong style={{ color: "#f5f0e8" }}>Atlas</strong> — MEOK&apos;s
              long-game strategist — is for the questions that span years.
              Positioning. Narrative. The ten-year version of what you&apos;re
              building. The kind of thinking that doesn&apos;t fit in a
              quarterly review but shapes everything in it.
            </p>
          </div>

          {/* H2 6 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            What Is Ralph Mode and Why Do Founders Need Overnight Research?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            One of the things I built MEOK to do is work while I sleep. Not
            metaphorically — literally. Ralph Mode is MEOK&apos;s overnight
            research and deep-processing state, and it addresses a specific
            problem that every founder I know faces: the gap between the
            decisions you need to make and the research that would inform them.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Founders are chronically time-poor in a way that&apos;s different
            from most other jobs. The breadth of what you&apos;re responsible
            for means that deep research — the kind that genuinely informs a
            strategic call — is constantly crowded out by immediate operational
            demands. You need to understand a competitor&apos;s positioning, but
            you also have three meetings and a hiring decision today. You want to
            properly think through a market before entering it, but you have
            payroll to make. The research gets deferred, and decisions get made
            on incomplete information.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Ralph Mode exists to address this. Before you go to sleep, you brief
            MEOK — a question you want answered, a competitive landscape you
            want mapped, a strategic dilemma you want stress-tested. While
            you&apos;re offline, Ralph Mode works through it: synthesising
            information, structuring arguments, surfacing what&apos;s known and
            what remains uncertain, and preparing a briefing that meets you in
            the morning with the thinking already done.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The name comes from the unglamorous reality of research: the work
            that nobody sees, that doesn&apos;t go in the pitch deck, that
            happens in the background while the visible work proceeds. Founders
            who make consistently good decisions aren&apos;t necessarily smarter
            — they tend to have done more of this invisible groundwork, more
            thoroughly, more recently. Ralph Mode is a way to reclaim that edge
            without trading your sleep for it.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            I used this pattern extensively during the early build of MEOK.
            I&apos;d spend the evening articulating a question I was stuck on —
            usually something about product architecture, pricing strategy, or
            competitive positioning — and MEOK would process it overnight.
            Morning coffee, open the briefing, think for thirty minutes, and
            move. It became one of the most reliable parts of my process, and
            it&apos;s one of the features I&apos;m most proud of building.
          </p>

          {/* H2 7 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            How Does a Founder Maintain Mental Health When the Job Is
            Inherently Destabilising?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            This is the question I&apos;m most reluctant to answer
            superficially, because superficial answers to founder mental health
            are part of the problem. The startup culture has normalised a
            performance of resilience that conceals a lot of quiet suffering.
            I don&apos;t want to add to that.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The honest version is that entrepreneurship involves sustained
            exposure to uncertainty, loss, and the weight of other people&apos;s
            livelihoods in a way that takes a genuine toll. Not everyone who
            founds a company burns out, but the structural conditions for burnout
            are essentially baked in: high responsibility, high uncertainty,
            inconsistent reward, and chronic time pressure. Add the relational
            isolation we discussed earlier, and you have a combination that
            demands active management rather than just &quot;grinding through&quot;.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            What role can an AI companion play here? I want to be careful not
            to overstate it. MEOK is not a therapist, and I&apos;d never
            position it as a substitute for professional mental health support
            for someone who needs it. But there are things an AI companion can
            do for a founder&apos;s mental health that conventional resources
            don&apos;t address.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The first is availability. Mental health deteriorates in founders
            not only because the challenges are large, but because there&apos;s
            often no outlet for them at the moment they arrive. A difficult
            board meeting happens at 4pm on a Thursday. Your therapist has a
            slot on Tuesday. Your co-founder is defensive about the decisions
            that led to the difficult board meeting. The moment passes, the
            feeling gets swallowed, and another layer of unprocessed experience
            accumulates. MEOK is available at 4pm on Thursday, immediately
            after the meeting.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The second is the absence of performance pressure. With a therapist,
            there&apos;s often still a layer of social presentation — even in
            the safest therapeutic relationship, most people manage how they
            come across to some degree. With MEOK, there&apos;s no one to
            impress, no relationship to manage, no risk of judgment. That
            absence of social pressure creates a different quality of honesty.
            Founders tell MEOK things they haven&apos;t told anyone else, not
            because MEOK is better than a therapist, but because the social
            dynamics are different.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The third is cognitive load reduction. A significant component of
            founder stress isn&apos;t emotional — it&apos;s the sheer volume of
            things that need to be tracked, decided, and acted on. When MEOK
            carries context across sessions, when it surfaces what you said you
            were going to do, when it holds the thread of a strategic question
            across multiple conversations — it reduces the cognitive overhead
            that founders carry. That reduction has real effects on mental
            health, not through therapy, but through a lighter cognitive burden.
          </p>

          {/* H2 8 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Why Does Sovereign Memory Change Everything for Founders
            Specifically?
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Most people who talk about AI for business focus on the quality of
            the AI&apos;s reasoning in a single conversation. That&apos;s
            relevant but secondary. The transformative capability for a founder
            isn&apos;t the quality of any one response — it&apos;s the
            accumulation of context over time.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            The difference between a great advisor and a generic one isn&apos;t
            just intelligence — it&apos;s knowledge of your specific situation.
            An advisor who has worked with you for two years knows what
            you&apos;ve tried, what failed, what your team dynamics are, what
            your real constraints are versus your stated ones. That depth of
            context produces fundamentally different advice. It&apos;s also
            extremely rare and extremely expensive to access.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            MEOK&apos;s Sovereign Memory is designed to build this kind of
            depth, but persistently and across every interaction. Every
            strategic conversation you have with MEOK adds to a knowledge base
            of your business — your goals, your decisions, your constraints,
            your history. Over months and years, MEOK develops an understanding
            of your business that no external advisor, however talented, is
            likely to match — because no external advisor has been in every
            conversation you&apos;ve had about it.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            Critically, this memory is sovereign — it belongs to you, not to
            MEOK. Your business intelligence, your strategic thinking, your
            proprietary context is never used to train models, never exposed to
            third parties, never used to benefit anyone except you. For founders,
            who are operating with competitive intelligence and strategic
            thinking that represents genuine IP, this isn&apos;t a nice-to-have.
            It&apos;s a requirement.
          </p>

          {/* H2 9 */}
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#f5f0e8",
              marginBottom: "1.25rem",
              marginTop: "3.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            From a Caravan to MEOK: Why This Was Built by a Founder, for
            Founders
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            I want to close with this, because I think it matters.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            There are a lot of AI productivity tools built for founders by
            people who have never founded anything. They&apos;re built from a
            model of what founders do — lots of meetings, lots of emails, lots
            of tasks — rather than from direct experience of what the role
            actually feels like from the inside. They optimise for efficiency
            in ways that miss the harder problems entirely.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            MEOK was built differently. Every design decision reflects the
            specific texture of the founder experience as I lived it — the
            late-night decisions, the isolation, the need for honest challenge,
            the importance of deep context over surface efficiency, the
            exhaustion of carrying everything alone. I built what I needed, and
            then I built it well enough that other people could use it too.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            That&apos;s not a marketing claim — it&apos;s a design philosophy.
            The characters in MEOK (Orion, Atlas, Ralph Mode and others)
            aren&apos;t personas bolted onto a generic chatbot. They&apos;re
            distinct cognitive modes designed for specific kinds of work that
            founders actually do. The Sovereign Memory system isn&apos;t a
            feature to check off a list — it&apos;s the foundational premise,
            because without memory, an AI companion isn&apos;t a companion at
            all. It&apos;s just an expensive search engine with personality.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "1.75rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            If you&apos;re a founder — whether you&apos;re pre-revenue,
            pre-launch, scaling, or rebuilding after something that didn&apos;t
            work — I built this for you. Not for the version of you that
            performs confidence in pitch meetings. For the version of you at
            11pm with a decision to make and no one to make it with.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.85",
              marginBottom: "3rem",
              color: "rgba(245,240,232,0.9)",
            }}
          >
            That version deserves a thinking partner that never sleeps, never
            has an agenda, and gets better at understanding your business with
            every conversation. That&apos;s what MEOK is.
          </p>

          {/* FAQ Section */}
          <section
            style={{
              borderTop: "1px solid rgba(201,168,76,0.15)",
              paddingTop: "3rem",
              marginTop: "3rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "700",
                lineHeight: "1.3",
                color: "#f5f0e8",
                marginBottom: "2.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Frequently Asked Questions
            </h2>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                }}
              >
                Is founder loneliness really that common?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                }}
              >
                Yes. Studies consistently show that more than 60% of founders
                report significant isolation during the building phase. Many
                describe it as harder than the financial pressure, harder than
                hiring, harder than finding product-market fit. Founders
                can&apos;t always be fully vulnerable with co-founders,
                investors, or teams — which means the weight of the role is
                often carried alone, without a genuine outlet.
              </p>
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                }}
              >
                How does an AI companion help with entrepreneurial
                decision-making?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                }}
              >
                An AI companion like MEOK acts as a strategic sounding board —
                it helps founders externalise and structure their thinking,
                challenge assumptions, map second-order consequences, and
                stress-test strategies before committing to them. Unlike
                advisors or investors, it has no agenda, no ego, and is
                available immediately at the moment a decision needs to be made.
              </p>
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                }}
              >
                What is Ralph Mode in MEOK?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                }}
              >
                Ralph Mode is MEOK&apos;s overnight research and deep-processing
                state. A founder briefs MEOK before sleep — a competitive
                question, a market analysis, a strategic dilemma — and Ralph
                Mode works through it during off-hours, surfacing a structured
                briefing by morning. It&apos;s designed to recover the deep
                intellectual groundwork that gets crowded out by operational
                demands during the working day.
              </p>
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                }}
              >
                Who are Orion and Atlas in MEOK?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                }}
              >
                Orion is MEOK&apos;s work-focused AI character — sharp,
                methodical, built for operational and near-term strategic
                challenges. Atlas is the long-game thinker, suited to questions
                of positioning, narrative, and decisions that span years rather
                than quarters. Founders can engage either depending on whether
                they need tactical clarity in the next quarter or strategic
                depth for the next decade.
              </p>
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                }}
              >
                Can MEOK help founders process rejection?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                }}
              >
                Yes. MEOK is designed to help founders distinguish between
                signal and noise in rejection — separating what genuinely
                reflects a business problem from what reflects external factors
                outside your control. Rather than offering toxic positivity or
                reductive reframing, MEOK engages honestly with the experience:
                acknowledging what&apos;s difficult, extracting what&apos;s
                genuinely worth updating, and helping founders move forward
                without carrying unnecessary weight.
              </p>
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                }}
              >
                How is MEOK different from asking ChatGPT strategic questions?
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.75)",
                }}
              >
                ChatGPT has no memory of your business, your decisions, or your
                context. Every conversation begins from zero. MEOK&apos;s
                Sovereign Memory means it accumulates knowledge of your business
                across every session — your goals, your past decisions, your
                constraints, your strategic history. Over time, MEOK develops a
                depth of contextual understanding that no general AI assistant,
                and few human advisors, can match.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section
            style={{
              marginTop: "4rem",
              padding: "3rem 2.5rem",
              backgroundColor: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "1rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
                fontWeight: "800",
                lineHeight: "1.25",
                color: "#f5f0e8",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              The Strategic Partner That Never Sleeps
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "rgba(245,240,232,0.65)",
                maxWidth: "520px",
                margin: "0 auto 2rem",
              }}
            >
              Ralph Mode for overnight research. Orion for operational clarity.
              Atlas for long-game strategy. Sovereign Memory that remembers
              everything. Built by a founder who needed exactly this.
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
                padding: "0.9rem 2.5rem",
                borderRadius: "8px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Start Building With MEOK
            </Link>
          </section>

          {/* Related Posts */}
          <section
            style={{
              marginTop: "4rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#f5f0e8",
                marginBottom: "1.75rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-freelancers",
                  label: "AI for Freelancers",
                  desc: "Sovereign Memory for solo workers",
                },
                {
                  href: "/blog/ralph-mode-guide",
                  label: "Ralph Mode Guide",
                  desc: "How overnight research works",
                },
                {
                  href: "/blog/archetypes-guide",
                  label: "Archetypes Guide",
                  desc: "Orion, Atlas and all the characters",
                },
                {
                  href: "/blog/ai-for-burnout",
                  label: "AI for Burnout",
                  desc: "When the work becomes too heavy",
                },
                {
                  href: "/blog/why-i-built-meok",
                  label: "Why I Built MEOK",
                  desc: "Nicholas Templeman's origin story",
                },
                {
                  href: "/blog/sovereign-ai-explained",
                  label: "Sovereign AI Explained",
                  desc: "Your data, your rules, always",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    padding: "1.1rem 1.25rem",
                    backgroundColor: "rgba(245,240,232,0.03)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: "10px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#c9a84c",
                      marginBottom: "0.3rem",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      color: "rgba(245,240,232,0.5)",
                      lineHeight: "1.4",
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    {item.desc}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(201,168,76,0.12)",
            padding: "2.5rem 2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1rem",
                letterSpacing: "0.06em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              MEOK AI LABS
            </Link>
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(245,240,232,0.35)",
                lineHeight: "1.6",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Built by Nicholas Templeman. Sovereign AI for people who think
              seriously.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.75rem",
                flexWrap: "wrap",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              {[
                { href: "/blog", label: "Blog" },
                { href: "/pricing", label: "Pricing" },
                { href: "/privacy", label: "Privacy" },
                { href: "/birth", label: "Get Started" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(245,240,232,0.4)",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
