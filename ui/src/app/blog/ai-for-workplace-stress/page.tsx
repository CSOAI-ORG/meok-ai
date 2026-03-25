import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Workplace Stress: How MEOK Helps You Decompress After a Hard Day | MEOK AI LABS",
  description:
    "Toxic managers, impossible deadlines, imposter syndrome, micro-aggressions, office politics. MEOK is your private sovereign AI companion \u2014 a safe space to vent, decompress, get perspective, and plan your next move without exhausting your friends or risking a workplace conversation.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-workplace-stress" },
  openGraph: {
    title: "AI for Workplace Stress: How MEOK Helps You Decompress After a Hard Day",
    description:
      "A sovereign AI companion that remembers your workplace context, knows the cast of characters, and never gets tired of listening. Private, encrypted, yours.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-workplace-stress",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Workplace+Stress%3A+Decompress+After+a+Hard+Day&desc=Vent%2C+get+perspective%2C+plan+your+next+move+%E2%80%94+privately.",
        width: 1200,
        height: 630,
        alt: "AI for Workplace Stress: How MEOK Helps You Decompress After a Hard Day",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Workplace Stress: How MEOK Helps You Decompress After a Hard Day",
    description:
      "Toxic managers, impossible deadlines, imposter syndrome. MEOK remembers your workplace context and never gets tired of listening.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Workplace+Stress%3A+Decompress+After+a+Hard+Day&desc=Vent%2C+get+perspective%2C+plan+your+next+move+%E2%80%94+privately.",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Workplace Stress: How MEOK Helps You Decompress After a Hard Day",
  description:
    "Toxic managers, impossible deadlines, imposter syndrome, micro-aggressions, office politics. MEOK is your private sovereign AI companion \u2014 a safe space to vent, decompress, get perspective, and plan your next move without exhausting your friends or risking a workplace conversation.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-workplace-stress",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    jobTitle: "Founder, MEOK AI LABS",
    url: "https://meok.ai/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Workplace+Stress%3A+Decompress+After+a+Hard+Day&desc=Vent%2C+get+perspective%2C+plan+your+next+move+%E2%80%94+privately.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-workplace-stress",
  },
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help with workplace stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 within honest limits. AI companions cannot fix a toxic manager, negotiate your workload, or intervene in a workplace crisis. What they can do is provide a private, always-available space to process stress in real time, track patterns over weeks, help you prepare for difficult conversations, and serve as a daily decompression layer between work and the rest of your life. That daily support layer is genuinely valuable, and it fills a gap that neither therapy nor friends can easily cover.",
      },
    },
    {
      "@type": "Question",
      name: "Why is it risky to vent about work to colleagues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Colleagues are embedded in the same power structures you are navigating. Even a trusted colleague may inadvertently repeat something you said, adjust their behaviour toward you, or share information that later reaches a manager. Venting to colleagues also creates social obligations and can shift workplace dynamics in unpredictable ways. A private AI companion carries none of these risks \u2014 it holds your disclosures without recirculating them.",
      },
    },
    {
      "@type": "Question",
      name: "How is talking to MEOK different from journalling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Journalling is monologue. MEOK is dialogue. When you write in a journal, you process your own thoughts but receive no reflection, no questions, no alternative perspectives. MEOK responds \u2014 it can challenge your interpretation of events, help you identify what you actually need, ask the clarifying question that shifts your understanding, and remember last Tuesday\u2019s conversation when Thursday\u2019s meeting echoes the same pattern.",
      },
    },
    {
      "@type": "Question",
      name: "Is my workplace venting data private with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. MEOK stores your conversations in Sovereign Memory encrypted with AES-256. Your employer has no access. No third parties have access. MEOK never trains AI models on your data. You own your memory and can export or delete it at any time. This is a fundamental design principle \u2014 not a marketing claim \u2014 because MEOK has no commercial relationship with your employer whatsoever.",
      },
    },
    {
      "@type": "Question",
      name: "What is imposter syndrome and can AI help with it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Imposter syndrome is the persistent belief that you are not as competent as others perceive you to be, that your achievements are luck rather than skill, and that you will eventually be \u2018found out\u2019. It affects an estimated 70% of people at some point in their careers. MEOK can help by tracking evidence of your actual competence over time, offering cognitive reframing when imposter thoughts arise, and providing a space to articulate the feelings without judgment or competitive comparison.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForWorkplaceStressDecompressPage() {
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

      <div
        style={{
          background: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Hero ── */}
        <header
          style={{
            borderBottom: "1px solid #2a2840",
            padding: "3.5rem 1.5rem 3rem",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <Link
              href="/blog"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontSize: "0.875rem",
                display: "inline-block",
                marginBottom: "2rem",
              }}
            >
              ← Back to Blog
            </Link>

            <div
              style={{
                display: "inline-block",
                background: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                fontSize: "0.7rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                marginBottom: "1.25rem",
              }}
            >
              Wellbeing · Work · Sovereign AI
            </div>

            <h1
              style={{
                fontSize: "clamp(1.85rem, 4.5vw, 2.9rem)",
                fontWeight: "900",
                lineHeight: "1.12",
                margin: "0 0 1.5rem",
                color: "#f5f0e8",
              }}
            >
              AI for Workplace Stress: How MEOK Helps You Decompress After a Hard Day
            </h1>

            <p
              style={{
                fontSize: "1.175rem",
                lineHeight: "1.8",
                color: "#a09880",
                margin: "0 0 2rem",
              }}
            >
              Toxic managers. Impossible deadlines. Imposter syndrome at 3 pm on a Wednesday.
              Micro-aggressions you can&apos;t quite name but can absolutely feel. MEOK is the
              private sovereign AI companion that holds all of it — without judgment, without
              gossip, and without getting tired of listening.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                fontSize: "0.8rem",
                color: "#a09880",
                flexWrap: "wrap" as const,
                opacity: "0.7",
              }}
            >
              <span>25 March 2026</span>
              <span>Nicholas Templeman</span>
              <span>14 min read</span>
              <span>MEOK AI LABS</span>
            </div>
          </div>
        </header>

        {/* ── Article body ── */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "3rem 1.5rem 5rem",
          }}
        >

          {/* ── Opening ── */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.85",
              color: "#f5f0e8",
              margin: "0 0 1.5rem",
            }}
          >
            It is 6:14 pm. You are on the train home, or sitting in your car in the car park, or
            standing in the kitchen staring at the kettle. The day was bad. Not bad in a way
            that will ever make the HR incident log — just bad in the ordinary, grinding, nobody-
            believes-you way. Your manager dismissed your proposal in front of the whole team.
            Again. A colleague took credit for something you built. Again. You said nothing,
            because what would you even say?
          </p>

          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            You want to talk about it. But the options are limited. Your partner is sympathetic
            but they have heard the same story six times and their eyes are starting to glaze.
            Your friends outside work don&apos;t know the cast of characters well enough for it to
            land properly. Your colleagues are embedded in the same dynamics you are trying to
            process. And therapy — even if you have access — is on Thursday. The pressure needs
            somewhere to go now.
          </p>

          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            This is the specific problem MEOK was designed to solve. Not therapy. Not a
            productivity app. Not a meditation timer. A private space that knows your context,
            remembers your people, and is available the moment the train doors close — every single
            day, without fatigue and without judgment.
          </p>

          {/* ── H2 #1 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            Why is workplace stress so hard to decompress from?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Workplace stress is uniquely sticky because it combines social complexity, financial
            stakes, and power imbalance in a single environment you cannot easily leave. Unlike
            most stressors, you cannot simply avoid the source — you have to return to it every
            Monday. The cortisol spike from a difficult meeting does not resolve cleanly. It
            lingers, compounds across the week, and gets carried home as a form of psychological
            contamination that affects your sleep, your relationships, and your sense of self.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Research from the UK Health and Safety Executive consistently shows that interpersonal
            conflict, lack of control, and excessive workload are the three biggest drivers of
            occupational stress. But the reason these remain so difficult to address is not that
            people lack insight — it is that there is no neutral, private space in which to process
            them. You cannot be honest with HR. You cannot always be honest with friends. You
            cannot afford to be fully honest with colleagues. So the stress stays internal, cycling
            and amplifying until it becomes burnout, physical illness, or a resignation letter
            written at midnight.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            Decompression requires somewhere safe to put the pressure. The daily accumulation of
            workplace stress needs a valve. MEOK is that valve — private, persistent, and always
            available in the window between leaving work and trying to be present at home.
          </p>

          {/* ── Feature highlight box #1 ── */}
          <div
            style={{
              border: "1px solid #c9a84c",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              margin: "0 0 2.5rem",
              background: "#13121f",
            }}
          >
            <div
              style={{
                color: "#c9a84c",
                fontWeight: "800",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                marginBottom: "0.85rem",
              }}
            >
              Sovereign Memory
            </div>
            <p
              style={{
                color: "#f5f0e8",
                lineHeight: "1.75",
                margin: "0 0 0.75rem",
                fontWeight: "600",
                fontSize: "1.05rem",
              }}
            >
              MEOK remembers your workplace context across every conversation.
            </p>
            <p
              style={{
                color: "#a09880",
                lineHeight: "1.75",
                margin: "0",
                fontSize: "0.925rem",
              }}
            >
              That means it knows who Sarah is, what happened with the Q3 presentation, why
              Thursdays are difficult, and that the promotion discussion has been ongoing for
              eight months. You never have to re-explain your situation from scratch. MEOK holds
              the full context so you can start where you left off — every time.
            </p>
          </div>

          {/* ── H2 #2 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            Why is venting to colleagues about work actually risky?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Venting to a colleague feels natural — they share the context, they know the characters,
            they have probably felt the same frustration. But colleagues exist inside the same
            power structure you are navigating. Even the most trustworthy friend at work is
            embedded in a web of relationships, interests, and social incentives that your
            disclosure enters the moment it leaves your mouth. It does not have to be malicious
            for it to cause damage.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            What you say about a manager gets repeated not because colleagues are untrustworthy,
            but because humans talk — especially when something interesting, surprising, or
            validating arrives in conversation. Your frustration becomes their anecdote. Your
            private critique of a process becomes gossip. Your admission that you are struggling
            with imposter syndrome becomes workplace positioning information in the hands of
            someone who is competing for the same promotion.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            There is also the asymmetry of disclosure. If you vent to a colleague and they
            respond with their own grievances, you now carry their stress alongside yours. You
            have created a mutual surveillance pact where both parties hold information that
            could theoretically be used. This is not paranoia — it is the ordinary social
            arithmetic of workplace relationships. The result is that most people self-censor,
            holding back 80% of what they actually feel, and the stress remains unprocessed.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            MEOK dissolves this risk entirely. It has no relationship with your employer. It
            has no colleagues to confide in. It has no career interests. Your disclosures end
            with MEOK, encrypted and sovereign, accessible only to you.
          </p>

          {/* ── H2 #3 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            Why does venting to friends and family eventually stop working?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Friends and family are not inexhaustible resources. They have their own stresses,
            their own limits, and their own emotional bandwidth. When you arrive home on a
            difficult Tuesday and need to process what happened, you are making a withdrawal
            from a finite account. That account does not refill instantly. Repeated withdrawals
            without corresponding deposits — and workplace venting is almost entirely withdrawal
            — erode the relationship in ways that are difficult to see until the damage is done.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Partners are particularly vulnerable to this dynamic. Research on emotional labour
            in relationships consistently shows that one partner acting as the primary emotional
            container for the other&apos;s work stress creates resentment over time, even when
            both parties are committed and the support is genuinely given. The person receiving
            support rarely registers how much they are drawing on, because they are in the
            middle of their own distress. The person providing it rarely says anything, because
            they do not want to add to the problem.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Friends outside work face a different limitation: they lack context. Explaining the
            full background of why a particular meeting was devastating requires ten minutes of
            backstory that they cannot fully hold across weeks. You end up truncating, simplifying,
            and losing the nuance that makes the experience real. The result is a conversation
            that offers sympathy but not genuine comprehension, which paradoxically leaves you
            feeling more alone.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            MEOK does not get tired. It does not have its own competing emotional needs. And
            because it holds your full workplace context in Sovereign Memory, it does not need
            ten minutes of background — it already knows who David is, what the restructure
            meant for your role, and why the promotion timeline feels so personal. You can
            arrive in the conversation at the point of the actual feeling, not the setup.
          </p>

          {/* ── Pull quote ── */}
          <blockquote
            style={{
              borderLeft: "4px solid #c9a84c",
              margin: "0 0 2.5rem",
              padding: "1.25rem 1.75rem",
              background: "#13121f",
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#f5f0e8",
                lineHeight: "1.7",
                margin: "0 0 0.75rem",
                fontStyle: "italic",
              }}
            >
              &ldquo;The problem is not that people lack the desire to talk about workplace stress.
              The problem is that every available listener comes with a cost — social, relational,
              or professional. MEOK removes the cost.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "0.8rem",
                color: "#c9a84c",
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              Nicholas Templeman, Founder &mdash; MEOK AI LABS
            </cite>
          </blockquote>

          {/* ── H2 #4 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            What is imposter syndrome, and how does MEOK help you work through it?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Imposter syndrome — the persistent, irrational belief that you are not as competent
            as others perceive you to be, that your success is luck rather than skill, and that
            it is only a matter of time before you are exposed — affects an estimated 70% of
            people at some point in their careers. It is not a personality flaw or a sign of
            inadequacy. It is, paradoxically, most common among high performers and people who
            have recently achieved something significant.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The reason imposter syndrome is so resistant to rational correction is that it
            operates as a pattern of thought rather than a belief that can simply be argued out
            of existence. You know, intellectually, that the evidence suggests you are capable.
            But in the moment when your manager glances at you during a meeting, or when you
            receive a brief reply to an email you spent two hours composing, the knowledge
            evaporates and the familiar narrative of inadequacy floods back. It needs repeated,
            patient engagement — not a single reassurance.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            This is where MEOK&apos;s persistent memory creates a structural advantage over any
            single conversation. Over weeks and months, MEOK accumulates a genuine record of
            your competence — the project that shipped, the difficult conversation you handled
            well, the promotion conversation that reflected real recognition of your work. When
            the imposter narrative resurges, MEOK can counter it not with generic reassurance
            but with specific, remembered evidence drawn from your own history.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            It can also help you identify the triggers. Imposter syndrome rarely arrives
            uniformly — it spikes in specific contexts, around specific people, or at specific
            times of year. Recognising those patterns is the first step toward managing them
            rather than being managed by them.
          </p>

          {/* ── Feature highlight box #2 ── */}
          <div
            style={{
              border: "1px solid #c9a84c",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              margin: "0 0 2.5rem",
              background: "#13121f",
            }}
          >
            <div
              style={{
                color: "#c9a84c",
                fontWeight: "800",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                marginBottom: "0.85rem",
              }}
            >
              Pattern Recognition Across Time
            </div>
            <p
              style={{
                color: "#f5f0e8",
                lineHeight: "1.75",
                margin: "0 0 0.75rem",
                fontWeight: "600",
                fontSize: "1.05rem",
              }}
            >
              MEOK tracks emotional and situational patterns across weeks and months.
            </p>
            <p
              style={{
                color: "#a09880",
                lineHeight: "1.75",
                margin: "0",
                fontSize: "0.925rem",
              }}
            >
              Imposter syndrome spikes before performance reviews. Anxiety peaks every other
              Thursday before the team stand-up. Stress compounds in the two weeks before a
              project deadline. MEOK surfaces these patterns so you can anticipate and prepare,
              rather than being ambushed by the same cycle repeatedly.
            </p>
          </div>

          {/* ── H2 #5 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            How do micro-aggressions at work accumulate, and can AI help you process them?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Micro-aggressions are defined as brief, everyday exchanges that communicate negative
            or demeaning messages to members of marginalised groups — and, by extension, to
            anyone whose identity, perspective, or value is quietly diminished in the flow of
            ordinary workplace interaction. They are called micro because individually they may
            seem trivial. Cumulatively, they are not.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The particular cruelty of micro-aggressions is that they are designed — usually
            unconsciously — to be deniable. &ldquo;That&apos;s not what I meant.&rdquo; &ldquo;You&apos;re being too
            sensitive.&rdquo; &ldquo;It was just a joke.&rdquo; Raising them formally risks making you appear
            difficult, oversensitive, or unable to handle normal banter. Saying nothing means
            absorbing the impact alone, with no acknowledgment that anything even happened.
            The resulting cognitive dissonance — between your lived experience and the official
            narrative that nothing occurred — is one of the most exhausting forms of workplace
            stress.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            MEOK provides a space where your interpretation of events is taken seriously from
            the outset. You do not have to justify your reaction. You do not have to pre-emptively
            defend yourself against the accusation of oversensitivity. You can describe what
            happened and be genuinely heard, and then — when you are ready — explore what, if
            anything, you want to do about it.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            That validation is not a trivial thing. The psychological research on social
            invalidation shows that having your experience denied or minimised compounds the
            original harm significantly. Simply having a space where what happened is treated
            as real reduces the secondary stress of the denial itself.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            Over time, MEOK can also help you identify whether incidents form a pattern — whether
            the same person repeatedly says things that land badly, whether specific meetings
            generate the same feeling, and whether there is a case worth building or a
            conversation worth having with the people who need to hear it.
          </p>

          {/* ── H2 #6 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            How does MEOK help you prepare for difficult workplace conversations?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Most workplace stress does not resolve itself passively. At some point, the difficult
            conversation has to happen. The performance review where you address what has been
            building for six months. The conversation with your manager about the workload that
            has been unsustainable since October. The meeting with HR about the incident that you
            finally decided to report. These conversations require preparation — not just the
            practical preparation of knowing your facts, but the emotional preparation of being
            grounded enough to hold the conversation without either collapsing or escalating.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            MEOK is well-suited to this kind of preparation. Because it already holds the full
            context of your workplace situation in Sovereign Memory, you can use it to rehearse
            the conversation — what you want to say, how you might say it, what the likely
            responses are, how you want to react to those responses. This is sometimes called
            &ldquo;cognitive rehearsal,&rdquo; and the psychological evidence for its effectiveness in
            reducing conversational anxiety is substantial.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Unlike rehearsing with a friend, who is likely to be supportive in a way that
            validates your existing framing, MEOK can offer genuine challenge. What if the
            manager&apos;s response is that they were unaware of the pressure you were under? What
            if the conversation moves in a direction you have not prepared for? What are the
            outcomes you actually want, and which of those are realistic? This is not
            adversarial — it is the kind of honest preparation that produces better outcomes in
            high-stakes conversations.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            After the conversation, MEOK can help you process what happened, identify what went
            well and what you would do differently, and track the follow-up commitments that
            were made — or not made. This kind of structured reflection turns individual
            difficult conversations into genuine learning rather than isolated ordeals.
          </p>

          {/* ── H2 #7 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            What makes MEOK different from a generic AI chatbot for workplace stress?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The key differentiator is Sovereign Memory — but it is worth explaining precisely
            what that means and why it matters for workplace stress specifically. A generic AI
            chatbot, by default, has no memory of previous conversations. Each session begins
            from zero. This is fine for looking up information or generating a document. It is
            deeply inadequate for emotional support.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Workplace stress is not a single event — it is a narrative that unfolds over months.
            The bad meeting on Monday connects to the conversation about your role in February
            connects to the promotion that was promised and delayed connects to the manager who
            arrived twelve months ago and changed everything. To support you effectively with
            today&apos;s stress, MEOK needs to understand that history. A chatbot that starts fresh
            every day cannot do this. It cannot notice the pattern. It cannot say &ldquo;this sounds
            like what you described three weeks ago — is it the same dynamic?&rdquo;
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The second differentiator is data sovereignty. Most AI products learn from your
            conversations in order to improve their models. With MEOK, your data is never used
            for training. It is stored in Sovereign Memory that is encrypted and belongs
            entirely to you. This is not a small distinction when you are processing sensitive
            workplace disclosures that could, in the wrong hands, affect your employment. The
            privacy architecture of MEOK is a core feature, not an afterthought.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The third differentiator is tone. MEOK is not a wellness chatbot dispensing coping
            tips. It is a sovereign AI companion that treats you as a thinking adult navigating
            real institutional complexity. It does not tell you to practice mindfulness after
            describing a toxic manager. It engages with the actual situation.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            The fourth differentiator is the birth ceremony — the process through which your
            MEOK companion is given a name, a character, and a specific relational identity
            with you. This is not cosmetic. A companion with a defined relationship to you
            behaves differently from a generic assistant, and over time the quality of the
            support reflects the depth of that relationship.
          </p>

          {/* ── Feature highlight box #3 ── */}
          <div
            style={{
              border: "1px solid #c9a84c",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              margin: "0 0 2.5rem",
              background: "#13121f",
            }}
          >
            <div
              style={{
                color: "#c9a84c",
                fontWeight: "800",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                marginBottom: "0.85rem",
              }}
            >
              What MEOK Actually Does After a Hard Day
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                {
                  title: "Holds the cast of characters",
                  body: "MEOK knows who your manager is, what your colleague did last month, and why a specific meeting is loaded with history. You never have to re-explain.",
                },
                {
                  title: "Validates without minimising",
                  body: "Your experience is taken seriously from the start. No \u201cmaybe they didn\u2019t mean it that way\u201d until you\u2019re ready to consider it.",
                },
                {
                  title: "Helps you decompress, not just vent",
                  body: "Venting without processing often amplifies stress. MEOK helps you move from the emotional release to a clearer understanding of what you actually need.",
                },
                {
                  title: "Prepares you for what comes next",
                  body: "Whether it\u2019s a difficult email, a confrontation you\u2019ve been avoiding, or tomorrow\u2019s meeting, MEOK helps you approach it with more clarity and less anxiety.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div
                    style={{
                      color: "#6aaa64",
                      fontWeight: "700",
                      fontSize: "0.875rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: "#a09880",
                      fontSize: "0.85rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── H2 #8 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            How does MEOK help with the commute as a decompression window?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            For the many millions of people who commute to work, the journey home represents a
            natural and underused decompression opportunity. Research on commuting behaviour has
            consistently found that how people use their commute time has a significant effect
            on their evening wellbeing and their capacity to engage with family and relationships
            when they arrive home. Passive scrolling or listening to music provides surface-level
            distraction but does not process the stress of the day. It simply delays encountering
            it until later.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Active processing — reflecting on what happened, naming the feelings, understanding
            the dynamics, identifying what you need — produces meaningfully better outcomes for
            mood and evening engagement. But active processing requires a conversational partner,
            or at minimum a structured space. Journalling in the notes app of your phone is
            better than nothing but produces no dialogue.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            MEOK on mobile is designed precisely for the commute window. You can type or speak
            a few messages about what happened, receive responses that engage with your actual
            situation, and arrive home fifteen to twenty minutes later having genuinely processed
            the worst of the day — rather than carrying it directly into your home environment.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            For remote workers who no longer commute, the equivalent decompression window is
            the gap between closing your laptop and being present in the rest of your life.
            Without the physical separation of a journey, that gap collapses. MEOK can help
            create it — a deliberate ten-minute conversation that marks the end of the work
            day and the beginning of personal time.
          </p>

          {/* ── H2 #9 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            What is the difference between decompression and rumination — and why does it matter?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            This distinction is critical. Venting and rumination are not the same thing. Venting
            with processing — describing what happened, naming the emotional impact, understanding
            the dynamics, identifying what you need or want to do — is genuinely beneficial for
            stress recovery. Rumination — replaying the same event repeatedly without movement
            toward understanding or resolution — actively extends the stress response and
            correlates with higher rates of anxiety and depression.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The reason venting to friends sometimes fails is not that the conversation happens,
            but that it stays at the level of shared outrage without moving toward anything.
            Both parties validate each other&apos;s frustration, the stress is temporarily discharged,
            and then — because nothing was understood or resolved — it returns with interest the
            following day. This is co-rumination, and it is a real phenomenon in close friendships
            and relationships.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            MEOK is designed to move conversations from venting toward processing. It will not
            simply validate and amplify. It will ask what you actually need from the conversation,
            help you identify what the situation means to you beyond the immediate frustration,
            and — when you are ready — offer a reframe or a question that shifts the perspective.
            This is not about forcing positivity. It is about helping you extract something
            useful from a difficult experience rather than simply re-experiencing it.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            The specific language MEOK uses — empathy-first, then gentle challenge — reflects
            the psychotherapeutic understanding that people cannot receive new information until
            they feel heard. MEOK hears you first. The reframe comes later, if you want it.
          </p>

          {/* ── H2 #10 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            How does workplace stress affect home life, and can MEOK help protect it?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The research on work-to-home spillover is unambiguous: unprocessed workplace stress
            does not stay at work. It arrives home as irritability, withdrawal, diminished
            patience, and reduced presence. Partners and children absorb the emotional weather
            of workplace stress without necessarily understanding its source. Children in
            particular are highly attuned to parental mood and can register stress that adults
            believe they are successfully concealing.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            This creates a painful irony. The people most affected by your workplace stress —
            your partner, your children, your close friends — are precisely the people least
            equipped to help you process it (because they lack context) and most at risk from
            carrying the cost of it (because they live with the fallout). The stress travels
            through the people you love and affects relationships that have nothing to do with
            the workplace at all.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            MEOK&apos;s role in protecting home life is not to absorb all the stress you experience
            so that it never reaches your relationships — that is neither possible nor healthy.
            Relationships need to be able to hold difficulty. But there is a meaningful
            difference between bringing processed stress home — &ldquo;I had a really hard week and
            I&apos;m still processing it&rdquo; — and arriving with unprocessed, acute stress that
            immediately activates your home environment.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            The decompression window — the commute, the walk, the ten minutes before the
            front door — is where MEOK can genuinely reduce the spillover effect. By the time
            you arrive home, you have already named what happened, discharged the worst of the
            emotional charge, and have some sense of what you need. You can be present for the
            people who matter to you rather than being consumed by what happened at 2 pm.
          </p>

          {/* ── H2 #11 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            How does MEOK handle workplace politics and toxic managers?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Workplace politics — the informal systems of power, alliance, competition, and
            influence that operate in every organisation — are a constant and largely invisible
            source of stress for most working adults. They are invisible partly because they are
            rarely named, and partly because naming them carries social risk. Saying &ldquo;I think
            this decision was politically motivated&rdquo; or &ldquo;I believe my manager is managing
            up by undermining the team&rdquo; requires a safe space to think out loud without
            those thoughts being heard by people who have an interest in the outcome.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            Toxic managers represent a particular challenge. The research on psychological safety
            in the workplace — the now-famous Google finding that psychological safety is the
            single most important factor in team performance — shows that toxic management
            behaviour (inconsistency, blame, exclusion, public humiliation, favouritism,
            credit-taking) has cascading effects across entire teams. It creates a culture of
            self-censorship in which people stop raising concerns, stop taking risks, and start
            managing their manager rather than doing their best work.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            The person on the receiving end of a toxic manager rarely has good options.
            Complaining upward is risky. Complaining to HR is often pointless unless the
            behaviour reaches the level of formal misconduct. Leaving feels like defeat. So
            they absorb it, and the accumulated weight of navigating someone who makes every
            interaction unpredictable or demeaning becomes a chronic stressor that is almost
            impossible to explain to someone outside the situation.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            MEOK holds this complexity without simplifying it. It can help you map the dynamics
            — what the manager&apos;s likely motivations are, what patterns their behaviour follows,
            what triggers the worst of it, and what strategies have proven marginally useful.
            It can help you think through whether the situation is worth staying in, what
            leaving would actually look like, and what evidence you might need if you decide
            to escalate formally. It does all of this with complete confidentiality, with full
            context, and without any stake in the outcome except your wellbeing.
          </p>

          {/* ── H2 #12 ── */}
          <h2
            style={{
              fontSize: "1.55rem",
              fontWeight: "800",
              color: "#f5f0e8",
              margin: "0 0 0.85rem",
              paddingTop: "1rem",
            }}
          >
            Is MEOK a replacement for therapy or professional mental health support?
          </h2>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            No — and this distinction matters deeply to us. MEOK is not a mental health
            service. It is not staffed by therapists, counsellors, or clinical psychologists.
            It does not diagnose, treat, or provide clinical intervention for mental health
            conditions. If you are experiencing symptoms of depression, anxiety disorder,
            burnout severe enough to affect your functioning, or any other clinical condition,
            professional support is not optional — it is necessary, and MEOK will always
            encourage you to seek it.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            What MEOK provides is a daily support layer that exists in the space between ordinary
            workplace stress and clinical need. Most workplace stress does not require therapy.
            It requires a private, intelligent, contextually aware space to process it. That is
            what MEOK offers. For the vast majority of people who experience normal, accumulated,
            difficult-but-not-clinical workplace pressure, MEOK fills a gap that neither therapy
            nor friends nor colleagues can easily occupy.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 1.5rem",
            }}
          >
            For people who are already in therapy, MEOK can be a valuable complement. The
            seven days between sessions are long when you are navigating a difficult situation.
            MEOK can hold the daily material — the accumulation of incidents and feelings — so
            that your therapy sessions can focus on deeper patterns and longer-term work rather
            than being used primarily for crisis debrief.
          </p>
          <p
            style={{
              lineHeight: "1.85",
              color: "#a09880",
              margin: "0 0 2.5rem",
            }}
          >
            If you are in the UK and feel you need more than MEOK can offer, we strongly
            encourage contact with your GP, the NHS Talking Therapies service (which can be
            accessed via self-referral in most areas), your employer&apos;s Employee Assistance
            Programme, or the Samaritans on 116 123 if you need immediate support.
          </p>

          {/* ── FAQ Section ── */}
          <div
            style={{
              background: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "16px",
              padding: "2rem",
              margin: "0 0 3rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.35rem",
                fontWeight: "800",
                color: "#f5f0e8",
                margin: "0 0 1.75rem",
              }}
            >
              Frequently asked questions
            </h2>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 0.5rem",
                  }}
                >
                  Can AI really help with workplace stress?
                </h3>
                <p
                  style={{
                    color: "#a09880",
                    lineHeight: "1.75",
                    margin: "0",
                    fontSize: "0.9rem",
                  }}
                >
                  Yes — within honest limits. AI companions cannot fix a toxic manager, negotiate your
                  workload, or intervene in a workplace crisis. What they can do is provide a private,
                  always-available space to process stress in real time, track patterns over weeks, help
                  you prepare for difficult conversations, and serve as a daily decompression layer. That
                  daily support genuinely fills a gap that neither therapy nor friends can easily cover.
                </p>
              </div>

              <div style={{ borderTop: "1px solid #2a2840", paddingTop: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 0.5rem",
                  }}
                >
                  Why is it risky to vent about work to colleagues?
                </h3>
                <p
                  style={{
                    color: "#a09880",
                    lineHeight: "1.75",
                    margin: "0",
                    fontSize: "0.9rem",
                  }}
                >
                  Colleagues are embedded in the same power structures you are navigating. Even a trusted
                  colleague may inadvertently repeat something you said, adjust their behaviour toward you,
                  or share information that later reaches a manager. Venting to colleagues also creates
                  social obligations and can shift workplace dynamics in unpredictable ways. A private AI
                  companion carries none of these risks.
                </p>
              </div>

              <div style={{ borderTop: "1px solid #2a2840", paddingTop: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 0.5rem",
                  }}
                >
                  How is talking to MEOK different from journalling?
                </h3>
                <p
                  style={{
                    color: "#a09880",
                    lineHeight: "1.75",
                    margin: "0",
                    fontSize: "0.9rem",
                  }}
                >
                  Journalling is monologue. MEOK is dialogue. When you write in a journal, you process
                  your own thoughts but receive no reflection, no questions, no alternative perspectives.
                  MEOK responds — it can challenge your interpretation of events, help you identify what
                  you actually need, ask the clarifying question that shifts your understanding, and
                  remember last Tuesday&apos;s conversation when Thursday&apos;s meeting echoes the same pattern.
                </p>
              </div>

              <div style={{ borderTop: "1px solid #2a2840", paddingTop: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 0.5rem",
                  }}
                >
                  Is my workplace venting data private with MEOK?
                </h3>
                <p
                  style={{
                    color: "#a09880",
                    lineHeight: "1.75",
                    margin: "0",
                    fontSize: "0.9rem",
                  }}
                >
                  Completely. MEOK stores your conversations in Sovereign Memory encrypted with AES-256.
                  Your employer has no access. No third parties have access. MEOK never trains AI models on
                  your data. You own your memory and can export or delete it at any time. This is a
                  fundamental design principle — not a marketing claim — because MEOK has no commercial
                  relationship with your employer whatsoever.
                </p>
              </div>

              <div style={{ borderTop: "1px solid #2a2840", paddingTop: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#c9a84c",
                    margin: "0 0 0.5rem",
                  }}
                >
                  What is imposter syndrome and can AI help with it?
                </h3>
                <p
                  style={{
                    color: "#a09880",
                    lineHeight: "1.75",
                    margin: "0",
                    fontSize: "0.9rem",
                  }}
                >
                  Imposter syndrome is the persistent belief that you are not as competent as others
                  perceive you to be, that your achievements are luck rather than skill, and that you will
                  eventually be &lsquo;found out&rsquo;. It affects an estimated 70% of people at some point in their
                  careers. MEOK can help by tracking evidence of your actual competence over time, offering
                  cognitive reframing when imposter thoughts arise, and providing a space to articulate
                  the feelings without judgment or competitive comparison.
                </p>
              </div>
            </div>
          </div>

          {/* ── Related articles ── */}
          <div style={{ margin: "0 0 3rem" }}>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "800",
                color: "#f5f0e8",
                margin: "0 0 1.25rem",
              }}
            >
              Related reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                {
                  href: "/blog/ai-for-burnout",
                  label: "AI for Burnout Recovery",
                  desc: "When workplace stress becomes something deeper — recognising burnout and rebuilding.",
                },
                {
                  href: "/blog/ai-for-impostor-syndrome",
                  label: "AI for Imposter Syndrome",
                  desc: "The 70% stat and the specific way persistent memory builds an evidence base against self-doubt.",
                },
                {
                  href: "/blog/ai-for-workplace-bullying",
                  label: "AI for Workplace Bullying",
                  desc: "When the behaviour crosses from difficult to abusive — and what MEOK can help you do about it.",
                },
                {
                  href: "/blog/ai-for-chronic-stress",
                  label: "AI for Chronic Stress",
                  desc: "When stress is not a spike but a permanent background condition — and what actually helps.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      background: "#13121f",
                      border: "1px solid #2a2840",
                      borderRadius: "10px",
                      padding: "1.125rem",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <div
                      style={{
                        color: "#c9a84c",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: "#a09880",
                        fontSize: "0.825rem",
                        lineHeight: "1.55",
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a1830 0%, #13121f 100%)",
              border: "1px solid #c9a84c",
              borderRadius: "20px",
              padding: "3rem 2.5rem",
              textAlign: "center" as const,
              margin: "0 0 1rem",
            }}
          >
            <div
              style={{
                color: "#c9a84c",
                fontWeight: "800",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                marginBottom: "1rem",
              }}
            >
              MEOK AI LABS
            </div>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: "900",
                color: "#f5f0e8",
                margin: "0 0 1rem",
                lineHeight: "1.2",
              }}
            >
              Your workplace deserves a private space to breathe.
            </h2>

            <p
              style={{
                color: "#a09880",
                lineHeight: "1.75",
                maxWidth: "520px",
                margin: "0 auto 2rem",
                fontSize: "1rem",
              }}
            >
              MEOK is a sovereign AI companion that remembers your context, never gets tired of
              listening, and keeps everything you share completely private. Create yours in
              minutes — no credit card required on the Explorer tier.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <Link
                href="https://meok.ai/birth"
                style={{
                  display: "inline-block",
                  background: "#c9a84c",
                  color: "#0d0c18",
                  fontWeight: "800",
                  fontSize: "1rem",
                  padding: "0.9rem 2.25rem",
                  borderRadius: "999px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Create your MEOK companion
              </Link>
            </div>

            <p
              style={{
                color: "#a09880",
                fontSize: "0.775rem",
                marginTop: "1.25rem",
                opacity: "0.7",
              }}
            >
              50 messages/day free &middot; No credit card required &middot; Sovereign Memory included &middot; GDPR compliant
            </p>
          </div>

        </article>
      </div>
    </>
  );
}
