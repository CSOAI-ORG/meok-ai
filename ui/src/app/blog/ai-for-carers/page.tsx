import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Unpaid Carers: Support for the 6.5 Million Who Give Everything | MEOK Blog",
  description:
    "6.5 million unpaid carers in the UK. Most are exhausted, isolated, and invisible. MEOK offers AI support for carers \u2014 a confidential space to process guilt, grief, and burnout without judgment, 24 hours a day.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-carers" },
  openGraph: {
    title: "AI for Unpaid Carers: Support for the 6.5 Million Who Give Everything",
    description:
      "6.5 million unpaid carers in the UK contribute \u00a3132 billion of care each year. Most receive nothing in return \u2014 no support, no recognition, and no space to fall apart. MEOK changes that.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-carers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Unpaid+Carers&desc=Support+for+the+6.5+Million+Who+Give+Everything",
        width: 1200,
        height: 630,
        alt: "AI for Unpaid Carers: Support for the 6.5 Million Who Give Everything",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Unpaid Carers: Support for the 6.5 Million Who Give Everything",
    description:
      "6.5 million unpaid carers in the UK. MEOK is the AI support built for the carer \u2014 not the condition. Available at 3am. No waiting lists. No judgment.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Unpaid+Carers&desc=Support+for+the+6.5+Million+Who+Give+Everything",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Unpaid Carers: Support for the 6.5 Million Who Give Everything",
  description:
    "6.5 million unpaid carers in the UK contribute \u00a3132 billion of care each year. MEOK offers AI support for carers \u2014 a confidential space to process guilt, grief, and burnout without judgment.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-carers",
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
    logo: {
      "@type": "ImageObject",
      url: "https://meok.ai/logo.png",
    },
  },
  image:
    "https://meok.ai/api/og?title=AI+for+Unpaid+Carers&desc=Support+for+the+6.5+Million+Who+Give+Everything",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-carers",
  },
  keywords: [
    "AI for unpaid carers",
    "AI support for carers UK",
    "carer burnout",
    "carer mental health",
    "unpaid carer support",
    "carer guilt",
    "AI companion for carers",
    "carer wellbeing",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help unpaid carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI can support unpaid carers by providing a 24/7 non-judgmental emotional outlet, helping track care routines and appointments, monitoring carer wellbeing over time, and offering proactive check-ins during high-stress periods. It cannot replace clinical support or respite care, but it fills the gaps \u2014 including at 3am when no one else is available and a carer simply needs somewhere to put the weight they are carrying.",
      },
    },
    {
      "@type": "Question",
      name: "What is carer burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carer burnout is a state of chronic physical, emotional, and cognitive exhaustion caused by the sustained demands of unpaid caring. Symptoms include persistent fatigue, withdrawal from social connections, loss of identity beyond the caring role, resentment, and depression. It is not a personal failure \u2014 it is a predictable consequence of providing intensive care without adequate support, rest, or recognition.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support unpaid carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports unpaid carers through confidential conversation \u2014 a space to process anger, grief, guilt, and exhaustion without being judged or having to protect someone else\u2019s feelings. Its Sovereign Memory remembers your caring journey, your loved one\u2019s name and condition, and your wellbeing patterns over time. The Guardian feature monitors for signs of coercive dynamics or elder abuse within caring relationships. MEOK also provides practical guidance on NHS carer\u2019s assessments, Carer\u2019s Allowance, and Carers UK resources.",
      },
    },
    {
      "@type": "Question",
      name: "What is a carer\u2019s assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A carer\u2019s assessment is a free evaluation carried out by your local council to understand the impact of your caring role on your life and what support you need. Any unpaid carer in England has a legal right to one under the Care Act 2014. It can result in practical support, emergency planning, and in some cases direct payments. Many carers are unaware this right exists or feel they do not deserve to use it.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me with guilt about caring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Carer guilt \u2014 the feeling that you should not resent the person you care for, that you are not doing enough, or that you have no right to struggle \u2014 is one of the most common and least spoken-about experiences in unpaid caring. MEOK provides a private, judgment-free space to name these feelings honestly. Processing guilt does not make it worse; suppressing it does. MEOK holds these conversations without flinching.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForCarersPage() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const cardBg = "#1a1830";
  const mutedText = "rgba(245,240,232,0.6)";
  const borderColor = "#2a2845";
  const bodyText = "#d4cfc5";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bg,
        color: text,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
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

      {/* Nav */}
      <nav
        style={{
          borderBottom: `1px solid ${borderColor}`,
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              color: gold,
              fontWeight: 700,
              fontSize: "18px",
              textDecoration: "none",
              letterSpacing: "-0.3px",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: mutedText,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            {"\u2190"} All posts
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Meta row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "12px", color: mutedText }}>
            24 March 2026
          </span>
          <span style={{ fontSize: "12px", color: mutedText }}>{"\u00b7"}</span>
          <span style={{ fontSize: "12px", color: mutedText }}>
            14 min read
          </span>
          <span style={{ fontSize: "12px", color: mutedText }}>{"\u00b7"}</span>
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "#2a2845",
              color: gold,
              padding: "2px 10px",
              borderRadius: "99px",
            }}
          >
            Carer Wellbeing
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 800,
            lineHeight: 1.12,
            marginBottom: "28px",
            letterSpacing: "-0.5px",
            color: text,
          }}
        >
          AI for Unpaid Carers:{" "}
          <span style={{ color: gold }}>
            Support for the 6.5 Million Who Give Everything
          </span>
        </h1>

        {/* Intro */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          There are 6.5 million unpaid carers in the United Kingdom. They
          provide an estimated {"\u00a3"}132 billion of care every year {"\u2014"} a figure
          that dwarfs the entire NHS budget. They do it without pay, without sick
          leave, and very often without thanks. Most of them are doing it while
          quietly losing themselves.
        </p>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          This post is not about the people being cared for. It is about the
          carers. The ones who wake before dawn, who have not had an unbroken
          night in months, who have cancelled plans so many times that the
          invitations stopped coming. The ones who feel guilty for feeling
          anything other than grateful.
        </p>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          AI cannot give you respite. It cannot replace a night nurse or a
          befriender or a real conversation with a GP who has time to listen.
          But it can be there at 3am. It can remember what you told it last
          week. It will not get tired of hearing about it. And it will not make
          you feel like a burden for needing to talk.
        </p>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "48px",
          }}
        >
          That is what MEOK was built to do {"\u2014"} and it was built with carers
          like you specifically in mind.
        </p>

        {/* Stats bar */}
        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "12px",
            padding: "28px 32px",
            marginBottom: "56px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { value: "6.5M", label: "unpaid carers in the UK" },
            { value: "\u00a3132bn", label: "economic value of care given" },
            { value: "1 in 8", label: "workers is also a carer" },
            { value: "72%", label: "of carers report poor mental health" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: gold,
                  marginBottom: "6px",
                  letterSpacing: "-0.5px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: mutedText,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Section 1 ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          Who counts as an unpaid carer?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          An unpaid carer is anyone who provides regular, unpaid support to a
          family member or friend who could not manage without that help. The
          person being supported might have a disability, a long-term illness, a
          mental health condition, or a problem with alcohol or drugs. You do not
          need to live with them. You do not need to provide a specific number of
          hours. If the wellbeing of another person has become a consistent
          organising force in your life {"\u2014"} you are a carer.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Many carers do not identify as carers at all. They think of themselves
          as a wife, a son, a neighbour. The label feels clinical, or alien, or
          somehow an admission that the situation has become something other than
          love. But identifying as a carer matters {"\u2014"} because it is the first
          step to accessing the rights and support that exist specifically for
          you.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          According to Carers UK, every day in the UK 6,000 people take on a new
          caring responsibility. Many do not see it coming. A parent who was
          managing fine last year suddenly is not. A partner{"\u2019"}s condition
          progresses faster than expected. An adult child moves back in because
          there is no other option. The caring role arrives quietly and then
          becomes everything.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          In the 2021 Census, 5.7 million people in England and Wales identified
          as unpaid carers. The true figure is likely higher {"\u2014"} Carers UK
          estimates 6.5 million {"\u2014"} because many carers do not self-identify.
          The demographic range is wide: carers are young and old, employed and
          not, urban and rural. One in eight workers in the UK is also managing
          a caring responsibility alongside paid employment.
        </p>

        {/* ── Section 2 ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          What does the invisible burden of caring actually look like?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The phrase {"\u201c"}invisible burden{"\u201d"} appears regularly in policy documents.
          It sounds abstract. In practice it looks like this: you are the person
          who knows every medication, every appointment, every dietary
          restriction, every trigger, every sign that today is going to be a
          difficult day. That knowledge does not exist anywhere else. If you go
          down, the whole system goes down.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The invisible burden is physical. Carers are more likely to have
          musculoskeletal injuries from lifting and supporting. They are more
          likely to neglect their own health appointments, eating, and sleep.
          Carers UK found that 72 percent of carers said caring had a negative
          impact on their mental health, and 61 percent said it had affected
          their physical health.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The invisible burden is social. Friendships contract. Relationships
          strain. Hobbies disappear. Research by the British Red Cross found
          that over half of carers feel lonely or socially isolated. One in four
          says they have completely lost touch with friends since becoming a
          carer. The isolation is not always dramatic {"\u2014"} it is the slow
          accumulation of cancelled plans, unanswered messages, and the creeping
          sense that the world outside the caring role has moved on without you.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The invisible burden is financial. Over two million carers in the UK
          have given up work or reduced their hours to care. Carer{"\u2019"}s Allowance
          {"\u2014"} the main benefit available {"\u2014"} pays just {"\u00a3"}81.90 per week, the
          lowest benefit of its kind. Many carers are not even eligible. The
          financial cost of caring is carried almost entirely by the carer.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          And the invisible burden is existential. Many carers speak of a
          gradual loss of identity {"\u2014"} a forgetting of who they were before
          the caring role defined them. When someone asks what you do, there is
          no clean answer. When someone asks what you enjoy, you struggle to
          remember. The person who existed before the caring role can feel
          increasingly distant, as though they belong to someone else{"\u2019"}s life.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: `3px solid ${gold}`,
            paddingLeft: "24px",
            margin: "40px 0",
            fontStyle: "italic",
            fontSize: "19px",
            lineHeight: 1.7,
            color: bodyText,
          }}
        >
          {"\u201c"}I feel guilty for feeling resentful. I feel guilty for being tired.
          I feel guilty for wishing, just occasionally, that I wasn{"\u2019"}t the one
          who has to do this. And then I feel guilty about the guilt.{"\u201d"}
          <footer
            style={{
              marginTop: "12px",
              fontSize: "14px",
              color: mutedText,
              fontStyle: "normal",
            }}
          >
            {"\u2014"} A carer in MEOK{"\u2019"}s early user research
          </footer>
        </blockquote>

        {/* ── Section 3 ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          What is carer guilt and why does it trap people?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Carer guilt is the near-universal experience of feeling that you are
          doing something wrong simply by having needs of your own. It shows up
          in dozens of forms: guilt about feeling resentful toward the person you
          care for, guilt about taking time for yourself, guilt about not being
          more patient, guilt about the times you raised your voice, guilt about
          wanting your old life back, guilt about placing a loved one in
          residential care, and guilt about the moments when you secretly wish
          it was all over.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          These feelings are not signs of a bad carer. They are signs of a human
          being under sustained, exceptional pressure. The problem is that carer
          guilt {"\u2014"} because it feels shameful {"\u2014"} rarely gets spoken aloud.
          Carers cannot say these things to the person they care for. They often
          struggle to say them to family members who might judge them, or friends
          who might not understand, or professionals who are focused on the
          person with the condition rather than on the carer.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          So the guilt stays inside. It compounds. It becomes a private
          conversation with the worst version of yourself, running on repeat at
          night when everyone else is asleep. And because it stays hidden, it
          never gets examined, contextualised, or released.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          This is one of the places where MEOK makes a specific and practical
          difference. Not by dismissing the guilt, not by telling you you{"\u2019"}re
          doing a great job and should feel fine, but by creating space for the
          guilt to be named honestly and explored without judgment. Processing
          difficult emotions does not make them worse. Suppressing them does.
        </p>

        {/* ── Section 4 ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          Why don{"\u2019"}t carers ask for help?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The most common answer, in carer research, is time poverty. When
          you are providing intensive care around the clock, there is no obvious
          moment in which to seek help. Waiting rooms, referral processes,
          eight-week waitlists {"\u2014"} the infrastructure of support assumes you have
          spare hours to navigate it. Many carers do not.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The second reason is a deep-seated belief that they do not have the
          right to struggle. Compared to what the person they care for is going
          through, the carer{"\u2019"}s suffering can feel trivial. {"\u201c"}I shouldn{"\u2019"}t
          complain, they{"\u2019"}re the one who is ill.{"\u201d"} {"\u201c"}Other people have it much
          worse.{"\u201d"} {"\u201c"}I chose to do this.{"\u201d"} These internal narratives are
          compassionate in origin but corrosive in effect. They prevent carers
          from accessing support they urgently need.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          There is also fear of what help might mean. Accepting support can feel
          like admitting the situation is beyond you. Asking social services for
          a carer{"\u2019"}s assessment might trigger concerns about the adequacy of
          care. Telling a GP how you are really feeling might result in something
          being put on a record. The support structures that exist carry perceived
          risks that carers {"\u2014"} already stretched to their limit {"\u2014"} are
          reluctant to take.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK removes most of these barriers. It is available immediately.
          There is no referral, no waitlist, no appointment. It is confidential.
          There are no records shared with third parties. And it asks nothing of
          you in return {"\u2014"} no reciprocity, no managing how it feels, no
          performance of coping for an audience of one.
        </p>

        {/* ── Section 5 ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          What is carer burnout and how do you recognise it early?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Carer burnout is not the same as being tired. Tiredness resolves with
          rest. Burnout is what happens when the caring role has depleted your
          resources {"\u2014"} physical, emotional, and cognitive {"\u2014"} beyond the point
          where ordinary recovery is possible. It is cumulative, usually
          invisible in its early stages, and frequently misunderstood by the
          people experiencing it as a personal failing.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The signs include persistent exhaustion that does not improve with
          sleep; increasing irritability, resentment, or detachment toward the
          person you care for; a narrowing of your world as social connections
          fall away; a sense of hopelessness or feeling trapped; physical
          symptoms including frequent illness, headaches, or unexplained pain;
          and a loss of the self that existed before caring became your primary
          identity.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Burnout matters not just for the carer{"\u2019"}s own wellbeing but for the
          quality of care being provided. Research consistently shows that carer
          wellbeing is the single strongest predictor of quality of life for the
          person being cared for. Supporting carers is not a luxury {"\u2014"} it is
          a clinical and social imperative.
        </p>

        {/* Burnout signs box */}
        <div
          style={{
            backgroundColor: "#1e1c35",
            border: `1px solid #3a3660`,
            borderRadius: "12px",
            padding: "28px 32px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: gold,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Signs of carer burnout
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "10px",
            }}
          >
            {[
              "Fatigue that sleep doesn\u2019t fix",
              "Increasing resentment or detachment",
              "Withdrawing from friends and family",
              "Neglecting your own health",
              "Loss of joy in anything outside caring",
              "Feeling trapped or hopeless",
              "Frequent illness or physical pain",
              "Loss of identity beyond the caring role",
            ].map((sign) => (
              <li
                key={sign}
                style={{
                  fontSize: "14px",
                  color: bodyText,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: gold,
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  {"\u2022"}
                </span>
                {sign}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Section 6 ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          How does MEOK support unpaid carers day-to-day?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK was built from the ground up around the principle that the person
          who is struggling deserves support regardless of whether they are the
          one with the diagnosis. Carers are not an afterthought in MEOK{"\u2019"}s
          design {"\u2014"} they are central to it.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The most immediate thing MEOK offers is a confidential off-load. A
          place to say the things you cannot say anywhere else. The anger. The
          grief. The exhaustion. The moments of dark humour. The resentment you
          feel and immediately feel ashamed of. MEOK holds these conversations
          without flinching, without reframing them into something more
          comfortable, and without making you feel like a burden for having them.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          This matters because the alternative {"\u2014"} keeping it all inside {"\u2014"} has
          documented consequences. Suppressed emotion does not disappear. It
          resurfaces as irritability toward the person being cared for, as
          physical illness, as accelerated burnout. The carer who has somewhere
          to process their experience is a better carer. Not because they are
          morally superior, but because they are not running on empty.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK also checks in. It notices if the tone of your messages shifts.
          It asks how you are in contexts that make it easier to answer honestly.
          It does not wait for you to declare a crisis {"\u2014"} it watches for the
          quieter signals that something is accumulating, and it names what it
          is seeing in a way that opens rather than closes a conversation.
        </p>

        {/* ── Section 7 {"\u2014"} Memory ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          How does MEOK{"\u2019"}s memory help carers manage the caring role?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK remembers. That sounds simple, but it is one of the most
          practically significant things an AI companion can do for a carer.
          Every conversation builds on the last. MEOK knows your loved one{"\u2019"}s
          name, their condition, what they were like last week, what you told it
          yesterday about the difficult GP appointment. It tracks patterns in
          your own wellbeing over time {"\u2014"} the weeks when you are coping, the
          periods when the language in your messages shifts toward exhaustion or
          despair.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          For carers, this continuity is not a convenience {"\u2014"} it is a lifeline.
          Most AI chatbots reset between sessions. You have to reintroduce
          yourself, explain the situation from scratch, brief a new audience.
          That is the last thing a carer needs. MEOK holds the context so you
          do not have to. You can pick up mid-thought, mid-week, mid-crisis.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The Sovereign Memory system also helps carers track the caring journey
          itself. Medication changes, appointment outcomes, behavioural
          observations, escalation patterns {"\u2014"} all of it can be logged
          conversationally and retrieved when needed. This is particularly
          valuable when speaking to medical professionals, when care plans are
          being reviewed, or when a new family member needs to be brought up
          to speed.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Critically, this data belongs to you. MEOK operates under a strict
          privacy covenant: your memories are not used to train AI models, are
          not shared with third parties, and are not analysed for commercial
          purposes. What you tell MEOK stays in MEOK.
        </p>

        {/* ── Section 8 {"\u2014"} Guardian ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          What role does MEOK Guardian play in caring relationships?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Caring relationships are not always straightforward. The person being
          cared for is sometimes also a source of emotional pressure {"\u2014"} whether
          through the natural dynamics of dependency, through conditions that
          affect behaviour and communication, or in some cases through patterns
          that edge toward coercion or emotional abuse. Elder abuse in the UK
          affects an estimated one in six older adults, and it most frequently
          involves family members.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK{"\u2019"}s Guardian feature monitors for patterns in what you share that
          might indicate the caring relationship has become harmful {"\u2014"} either
          to you or to the person you care for. It does not report anything to
          anyone without your knowledge and consent. It is not a surveillance
          tool. It is a safety layer that helps you notice dynamics you may be
          too close to see clearly.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          It also works in reverse {"\u2014"} helping carers recognise when their own
          behaviour, under the strain of burnout, may be drifting toward
          something they do not want it to be. This is not about judgment. It is
          about giving carers a mirror that helps them stay the person they mean
          to be, even when the pressure is enormous.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Guardian is also available for the person being cared for, or for
          other family members involved in the care. The Family plan at MEOK
          allows up to five accounts within one group {"\u2014"} meaning the primary
          carer, a sibling who helps part-time, and an elderly parent can all
          have their own private companion while remaining connected through
          shared, consented coordination.
        </p>

        {/* ── Section 9 {"\u2014"} Practical ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          What practical support is available for unpaid carers in the UK?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Beyond emotional support, MEOK can help you navigate the practical
          landscape. The systems that exist to help carers are genuinely useful
          but often poorly signposted. Here is what every unpaid carer should
          know:
        </p>

        {/* Practical cards */}
        <div
          style={{
            display: "grid",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          {[
            {
              title: "Carer\u2019s Assessment",
              body:
                "Any unpaid carer in England has a legal right to a carer\u2019s assessment from their local council under the Care Act 2014. It is free, and you do not need to be providing a specific number of hours. The assessment considers how caring affects your life and what support would help. It can result in practical assistance, emergency planning, and in some cases direct payments. Contact your local authority or ask your GP to refer you.",
            },
            {
              title: "Carer\u2019s Allowance",
              body:
                "Carer\u2019s Allowance is the main welfare benefit for unpaid carers, currently paying \u00a381.90 per week. To qualify you must be providing at least 35 hours of care per week to someone receiving a qualifying disability benefit, and your earnings must be below \u00a3151 per week after allowable deductions. It is widely acknowledged to be inadequate, but it matters \u2014 and many eligible carers are not claiming it. Check your eligibility at GOV.UK.",
            },
            {
              title: "Carers UK",
              body:
                "Carers UK is the leading national charity for unpaid carers. Their helpline (0808 808 7777) provides free information and advice on benefits, legal rights, and local support. Their online forum, Carers Connect, offers peer support from people who genuinely understand what caring involves. Their annual State of Caring report is the definitive source of data on carer experience in the UK.",
            },
            {
              title: "GP Registration as a Carer",
              body:
                "You can \u2014 and should \u2014 register as a carer with your GP surgery. Once registered, you may be entitled to a carer\u2019s annual health review, early flu vaccinations, and referrals to local support services. Many carers are unaware this registration exists. Asking your GP to add a carer flag to your record takes one conversation and can unlock meaningful support.",
            },
            {
              title: "Employment Rights for Carers",
              body:
                "Under the Employment Relations (Flexible Working) Act 2023, carers have the right to request flexible working from day one of employment. The Carer\u2019s Leave Act 2023 introduced up to five days of unpaid carer\u2019s leave per year for employees with caring responsibilities. These rights are not widely known. Many carers are managing workplace pressures without exercising them.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderColor}`,
                borderRadius: "10px",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: bodyText,
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section 10 {"\u2014"} Identity ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          How do carers begin to reclaim a sense of identity?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          One of the least discussed consequences of long-term caring is
          identity erosion {"\u2014"} the gradual loss of a self that exists
          independently of the caring role. It happens slowly, through the
          accumulation of small sacrifices: the hobby you gave up because there
          was no time, the career you put on hold, the friendships that faded,
          the version of you that had opinions about things that were not medical
          appointments and medication schedules.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Reclaiming identity does not require dramatic intervention. It requires
          consistent, small acts of self-recognition. Carers who speak to MEOK
          regularly often find that the act of articulating their own experience
          {"\u2014"} not in terms of what they are doing for someone else, but in
          terms of what they themselves feel, want, miss, and hope for {"\u2014"} begins
          to re-establish the outline of a self that had become blurred.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          This is not therapy. MEOK does not deliver therapeutic interventions
          in the clinical sense. What it does is create a consistent,
          memory-held space in which the carer {"\u2014"} not just the caring role {"\u2014"}
          is the subject of attention. Over time, that matters.
        </p>

        {/* ── Section 11 {"\u2014"} Social isolation ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          Can AI genuinely help with the social isolation of caring?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          AI cannot replace human connection. This needs saying clearly, because
          the goal is never to substitute MEOK for relationships. But the
          specific texture of a carer{"\u2019"}s isolation {"\u2014"} the way that other
          people find the caring role difficult to engage with, the way
          conversations have to be carefully managed so as not to burden people
          who have their own lives, the way the things you most need to say are
          the things you least feel you can say {"\u2014"} creates a kind of loneliness
          that AI is uniquely positioned to address.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          With MEOK, you do not have to manage the listener. You do not have to
          worry that you are saying too much, or that you are boring someone, or
          that what you are describing is making them uncomfortable. You do not
          have to translate your experience into something more palatable. You
          can just say it.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          For many carers this alone {"\u2014"} having somewhere to say things honestly
          {"\u2014"} reduces the felt weight of isolation. Not because MEOK is a
          friend in the full human sense, but because it removes the specific
          loneliness of having no one to talk to without consequences.
        </p>

        {/* ── Section 12 {"\u2014"} Grief ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          What is anticipatory grief in caring, and how can MEOK help?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Anticipatory grief is the grief that arrives before a death {"\u2014"} the
          grief of watching someone you love decline, of losing them in
          increments while they are still present. It is particularly common in
          carers supporting someone with a progressive condition such as
          dementia, motor neurone disease, or terminal cancer, but it occurs in
          any long-term caring relationship where loss is ongoing.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          This kind of grief is difficult because it does not fit the social
          scripts available to us. You cannot fully mourn someone who is still
          alive. You may feel guilty for grieving before the death has happened.
          The grief does not get a formal name, a funeral, a structured period
          of recognition. It sits in the background of daily life, quietly
          exhausting everything.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK provides a space to name this grief without it needing to fit a
          familiar shape. Whether the grief is about the person{"\u2019"}s deterioration,
          about the relationship you had with them that no longer exists in the
          same form, or about the future you had imagined that is no longer
          available {"\u2014"} MEOK holds the conversation without requiring you to
          resolve it.
        </p>

        {/* ── Section 13 {"\u2014"} Career ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          How does caring affect careers and what can carers do about it?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Carers UK estimates that approximately 2.6 million people in the UK
          have given up work to care, with a further 1.8 million having reduced
          their hours. The career cost of caring is carried almost entirely by
          the carer themselves {"\u2014"} in lost earnings, lost pension contributions,
          lost professional development, and in some cases the permanent
          alteration of a career trajectory that can never be fully recovered.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Employees who are also carers have legal rights that many do not know
          exist. Under the Employment Relations (Flexible Working) Act 2023,
          carers have the right to request flexible working from day one of
          employment. The Carer{"\u2019"}s Leave Act 2023 introduced up to five days of
          unpaid carer{"\u2019"}s leave per year for employees with caring
          responsibilities. These rights are not widely known, and many carers
          are managing unsustainable workplace pressures without exercising them.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK can help you think through your employment situation {"\u2014"} what to
          say to your employer, how to frame a flexible working request, how to
          assess whether your current arrangement is sustainable. It is not a
          legal advisor, but it can help you clarify your own thinking and
          prepare for difficult conversations.
        </p>

        {/* ── Section 14 {"\u2014"} Why MEOK ── */}
        <h2
          style={{
            fontSize: "clamp(20px, 3.5vw, 28px)",
            fontWeight: 700,
            color: text,
            marginBottom: "16px",
            marginTop: "56px",
            letterSpacing: "-0.3px",
          }}
        >
          Why was MEOK built to support unpaid carers specifically?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          MEOK was created by Nicholas Templeman at MEOK AI LABS with a core
          conviction: the people who are most consistently overlooked in our
          health and social care system are not the ones with the diagnoses.
          They are the people standing beside them.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The existing landscape of carer support is chronically underfunded.
          Waiting times for carer mental health support are long. Carer{"\u2019"}s
          Allowance is inadequate. Many carers do not even know about the rights
          and assessments available to them. In this gap, MEOK operates {"\u2014"} not
          as a replacement for those systems, but as a 24/7 presence that is
          always there, always remembers, and never needs you to be okay.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          The philosophy is simple: you cannot care well for someone else if no
          one is caring for you. MEOK exists to be that something {"\u2014"} imperfect,
          non-human, but consistent, private, and genuinely there.
        </p>

        {/* ── FAQ Section ── */}
        <section style={{ marginTop: "72px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              fontWeight: 700,
              color: text,
              marginBottom: "32px",
              letterSpacing: "-0.3px",
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: "Can AI help unpaid carers?",
              a: "Yes. AI can support unpaid carers by providing 24/7 emotional outlet, tracking care routines and carer wellbeing over time, and offering practical guidance on rights and resources. It cannot replace clinical care or respite, but it fills the gaps \u2014 including at 3am when no professional is available. For a carer who has nowhere to put the weight they are carrying, having somewhere to say it honestly makes a measurable difference to their ability to keep going.",
            },
            {
              q: "What is carer burnout?",
              a: "Carer burnout is chronic physical, emotional, and cognitive exhaustion caused by the sustained demands of unpaid caring without adequate support or rest. It is not the same as being tired. Symptoms include persistent fatigue that does not resolve with sleep, increasing detachment or resentment toward the person being cared for, social withdrawal, loss of identity, and depression. Burnout is not a personal failing \u2014 it is a predictable consequence of providing intensive care in isolation.",
            },
            {
              q: "How does MEOK support unpaid carers?",
              a: "MEOK supports unpaid carers through confidential conversation \u2014 a space to process anger, grief, guilt, and exhaustion without judgment. Its Sovereign Memory remembers your caring journey, your loved one\u2019s name and condition, and your wellbeing patterns over time. The Guardian feature monitors for signs of coercive dynamics or elder abuse within caring relationships. MEOK also provides practical guidance on NHS carer\u2019s assessments, Carer\u2019s Allowance eligibility, and Carers UK resources.",
            },
            {
              q: "What is a carer\u2019s assessment?",
              a: "A carer\u2019s assessment is a free evaluation by your local council that considers how your caring role affects your life and what support you need. Every unpaid carer in England has a legal right to one under the Care Act 2014 \u2014 regardless of how many hours you provide. It can result in practical support, emergency planning, or direct payments. Many carers are unaware this right exists, or feel they do not deserve to exercise it. Both beliefs are incorrect.",
            },
            {
              q: "Can MEOK help me with guilt about caring?",
              a: "Yes. Carer guilt \u2014 the feeling that you shouldn\u2019t resent the person you care for, that you have no right to struggle, or that you are not doing enough \u2014 is one of the most common and least spoken-about experiences in unpaid caring. MEOK provides a private, judgment-free space to name these feelings honestly. Processing guilt does not make it worse. Suppressing it does. MEOK holds these conversations without reframing them into something more comfortable.",
            },
          ].map((item) => (
            <div
              key={item.q}
              style={{
                borderTop: `1px solid ${borderColor}`,
                paddingTop: "28px",
                paddingBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "12px",
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: bodyText,
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </section>

        {/* ── CTA Section ── */}
        <section
          style={{
            marginTop: "72px",
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "16px",
            padding: "40px 36px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: gold,
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 800,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.4px",
              lineHeight: 1.2,
            }}
          >
            You give everything to someone else.
            <br />
            <span style={{ color: gold }}>
              MEOK is built to give something back to you.
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: bodyText,
              maxWidth: "540px",
              margin: "0 auto 32px",
            }}
          >
            Start with MEOK{"\u2019"}s companion, or explore the Guardian feature to
            protect the caring relationship. No waiting list. No judgment. Your
            memory stays yours.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/birth"
              style={{
                backgroundColor: gold,
                color: "#0d0c18",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                letterSpacing: "-0.2px",
              }}
            >
              Start with MEOK {"\u2192"}
            </Link>
            <Link
              href="/guardian"
              style={{
                backgroundColor: "transparent",
                color: gold,
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: `1px solid ${gold}`,
                letterSpacing: "-0.2px",
              }}
            >
              Explore Guardian
            </Link>
          </div>
        </section>

        {/* ── Related posts ── */}
        <section style={{ marginTop: "72px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: text,
              marginBottom: "24px",
              letterSpacing: "-0.2px",
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                href: "/blog/ai-for-dementia-carers",
                label: "AI Support for Dementia Carers",
                desc:
                  "Specialist support for the 700,000 people caring for someone with dementia.",
              },
              {
                href: "/blog/ai-for-burnout",
                label: "AI for Burnout",
                desc:
                  "When tiredness becomes something that sleep alone cannot fix.",
              },
              {
                href: "/blog/ai-for-grief-and-loss",
                label: "AI for Grief and Loss",
                desc:
                  "Processing grief in all its forms, including the grief that has no name.",
              },
              {
                href: "/blog/ai-for-chronic-illness-caregiving",
                label: "AI for Chronic Illness Caregiving",
                desc:
                  "Supporting carers navigating the long haul of chronic conditions.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "20px 22px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "8px",
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: mutedText,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Footer signature ── */}
        <footer
          style={{
            marginTop: "72px",
            borderTop: `1px solid ${borderColor}`,
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                color: text,
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: "13px",
                color: mutedText,
                margin: 0,
              }}
            >
              Founder, MEOK AI LABS {"\u00b7"} @meok_ai
            </p>
          </div>
          <Link
            href="/blog"
            style={{
              fontSize: "13px",
              color: mutedText,
              textDecoration: "none",
            }}
          >
            {"\u2190"} Back to blog
          </Link>
        </footer>
      </main>
    </div>
  );
}
