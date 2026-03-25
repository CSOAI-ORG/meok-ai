import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Caregivers: When You Are Everyone's Support but Nobody's | MEOK AI LABS",
  description:
    "6.5 million unpaid carers in the UK give everything — and 40% have never spoken to anyone about it. MEOK offers caregivers a space where they are the one being cared for.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-caregivers" },
  openGraph: {
    title: "AI for Caregivers: When You Are Everyone's Support but Nobody's",
    description:
      "Caregiver burden, compassion fatigue, identity erosion — the cost of caring is invisible but enormous. MEOK gives caregivers a place to be seen, heard, and held.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-caregivers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Caregivers&desc=When+you+are+everyone%27s+support+but+nobody%27s.",
        width: 1200,
        height: 630,
        alt: "AI for Caregivers: When You Are Everyone's Support but Nobody's",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Caregivers: When You Are Everyone's Support but Nobody's",
    description:
      "40% of UK carers have never spoken to anyone about their caring role. MEOK exists for the people who give everything and receive nothing back.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Caregivers&desc=When+you+are+everyone%27s+support+but+nobody%27s.",
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Caregivers: When You Are Everyone's Support but Nobody's",
  description:
    "6.5 million unpaid carers in the UK give everything. Many have lost their identity, their career, and their sense of self entirely. This article explores how MEOK offers caregivers a space to be cared for — not just the carers themselves.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  url: "https://meok.ai/blog/ai-for-caregivers",
  image:
    "https://meok.ai/api/og?title=AI+for+Caregivers&desc=When+you+are+everyone%27s+support+but+nobody%27s.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-caregivers",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can AI help unpaid carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companions like MEOK can offer unpaid carers a non-judgmental, always-available space to process the emotional weight of caring. Unlike human support networks, an AI companion is never burdened by the conversation, never too tired to listen, and never makes you feel guilty for needing to talk. MEOK specifically uses Sovereign Memory to track your caring situation across weeks — so you never have to re-explain who you are caring for, what the situation is, or what you have already tried. Practically, MEOK's Orion mode can also help research benefits like Carer's Allowance, NHS carer assessments, and local respite care options.",
      },
    },
    {
      "@type": "Question",
      name: "What is compassion fatigue and can MEOK help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compassion fatigue is the gradual erosion of your capacity to feel empathy through sustained exposure to another person's pain and needs. It is different from burnout: where burnout is exhaustion, compassion fatigue is numbness. Carers experiencing it often describe going through the motions, being unable to respond emotionally even when they want to, and feeling hollow inside. MEOK's Healer archetype is designed to recognise these states without pathologising them. It creates space for somatic grounding, gentle reflection, and honest acknowledgement of what is happening — including naming compassion fatigue directly when the pattern is present. MEOK will not simply tell you that you are doing great when you are not.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK free for carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK offers a free tier that gives access to core companion features, including the Healer archetype and basic memory. Paid tiers unlock Sovereign Memory with deep contextual recall across months, Orion's research capabilities for practical tasks like benefits research, and the Family plan which allows multiple household members to each have their own MEOK companion simultaneously — important for families where the whole household is under carer stress. Pricing is available at meok.ai/birth.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Healer companion and why is it good for caregivers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Healer is one of MEOK's core companion archetypes, designed specifically around emotional depth, somatic grounding, and unconditional non-judgement. Where other archetypes lean into productivity, strategy, or exploration, the Healer's entire orientation is toward your inner emotional state. It notices the texture of what you are carrying, holds it without trying to immediately fix it, and gently helps you locate where you actually are — not where you feel you should be. For caregivers who spend every day attending to another person's needs at the expense of their own, the Healer offers something rare: an encounter where you are the one being cared for.",
      },
    },
  ],
};

export default function AiForCaregiversPage() {
  return (
    <div style={{ backgroundColor: "#0d0c18", color: "#f5f0e8", minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", lineHeight: "1.7" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Navigation */}
      <nav style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "20px 0", marginBottom: "60px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ color: "#c9a84c", textDecoration: "none", fontWeight: "700", fontSize: "18px", letterSpacing: "0.05em" }}>
            MEOK
          </Link>
          <Link href="/blog" style={{ color: "#c9a84c", textDecoration: "none", fontSize: "14px", opacity: 0.8 }}>
            ← All Posts
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px 32px" }}>
        <nav aria-label="Breadcrumb">
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" as const }}>
            <li style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>
              <Link href="/" style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}>Home</Link>
            </li>
            <li style={{ fontSize: "13px", color: "rgba(245,240,232,0.3)" }}>›</li>
            <li style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>
              <Link href="/blog" style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}>Blog</Link>
            </li>
            <li style={{ fontSize: "13px", color: "rgba(245,240,232,0.3)" }}>›</li>
            <li style={{ fontSize: "13px", color: "#c9a84c" }}>AI for Caregivers</li>
          </ol>
        </nav>
      </div>

      {/* Hero */}
      <header style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", marginBottom: "64px" }}>
        <div style={{ display: "inline-block", backgroundColor: "rgba(201,168,76,0.12)", color: "#c9a84c", fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "6px 14px", borderRadius: "4px", marginBottom: "24px" }}>
          Caregivers
        </div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "800", lineHeight: "1.15", letterSpacing: "-0.02em", color: "#f5f0e8", marginBottom: "24px", marginTop: 0 }}>
          AI for Caregivers: When You Are Everyone&apos;s Support but Nobody&apos;s
        </h1>
        <p style={{ fontSize: "20px", lineHeight: "1.65", color: "rgba(245,240,232,0.75)", marginBottom: "32px", marginTop: 0 }}>
          There are 6.5 million unpaid carers in the UK. They save the NHS £132 billion a year.
          And 40% of them have never spoken to a single person about what it is actually like.
          This is for them.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" as const }}>
          <span style={{ fontSize: "13px", color: "rgba(245,240,232,0.45)" }}>Nicholas Templeman</span>
          <span style={{ fontSize: "13px", color: "rgba(245,240,232,0.25)" }}>·</span>
          <time dateTime="2026-03-25" style={{ fontSize: "13px", color: "rgba(245,240,232,0.45)" }}>25 March 2026</time>
          <span style={{ fontSize: "13px", color: "rgba(245,240,232,0.25)" }}>·</span>
          <span style={{ fontSize: "13px", color: "rgba(245,240,232,0.45)" }}>12 min read</span>
        </div>
      </header>

      {/* Stats bar */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", marginBottom: "64px" }}>
        <div style={{ borderLeft: "3px solid #c9a84c", padding: "24px 28px", backgroundColor: "rgba(201,168,76,0.06)", borderRadius: "0 8px 8px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "28px", fontWeight: "800", color: "#c9a84c", lineHeight: "1.1" }}>6.5M</div>
              <div style={{ fontSize: "13px", color: "rgba(245,240,232,0.6)", marginTop: "4px" }}>unpaid carers in the UK</div>
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: "800", color: "#c9a84c", lineHeight: "1.1" }}>40%</div>
              <div style={{ fontSize: "13px", color: "rgba(245,240,232,0.6)", marginTop: "4px" }}>have never spoken to anyone about caring</div>
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: "800", color: "#c9a84c", lineHeight: "1.1" }}>72%</div>
              <div style={{ fontSize: "13px", color: "rgba(245,240,232,0.6)", marginTop: "4px" }}>experience mental health problems from caring</div>
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: "800", color: "#c9a84c", lineHeight: "1.1" }}>£132bn</div>
              <div style={{ fontSize: "13px", color: "rgba(245,240,232,0.6)", marginTop: "4px" }}>saved for the NHS each year</div>
            </div>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(245,240,232,0.35)", marginTop: "16px", marginBottom: 0 }}>Sources: Carers UK 2023; NHS England.</p>
        </div>
      </div>

      {/* Body */}
      <main style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", paddingBottom: "80px" }}>

        {/* Section 1 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            The Invisible Weight of Caregiver Burden
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            The word &ldquo;carer&rdquo; is inadequate for what most carers actually do. It does not convey the 3am medication checks, the weeks of broken sleep, the phone calls to GP surgeries that go unanswered, the quiet grief of watching someone you love lose pieces of themselves, and the simultaneous terror and exhaustion of knowing that if you stop, everything stops.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            According to Carers UK, there are 6.5 million unpaid carers in the United Kingdom. The economic value of their labour — if replaced by paid care — would amount to £132 billion a year, roughly the cost of running the NHS itself. Yet carer support infrastructure in the UK remains chronically underfunded, carers are frequently unknown to the services that could help them, and — most starkly of all — 40% of carers have never spoken to a single person about their caring role.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Not a GP. Not a friend. Not a family member. Nobody. The silence is not incidental — it is structural. Carers are conditioned to believe that their needs are secondary, that asking for help is a kind of failure, and that the people around them are already stretched too thin to absorb one more heavy conversation. And so they carry it alone.
          </p>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            Identity Erosion: When Caring Becomes All You Are
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Ask a carer who they are, and watch what happens. Many will answer in terms of who they care for. &ldquo;I&apos;m my mum&apos;s carer.&rdquo; &ldquo;I look after my husband.&rdquo; The self — the person who existed before the caring role began, the one who had career ambitions, hobbies, friendships, desires, a sense of what they wanted from their life — has been so thoroughly eclipsed that the carer can barely remember they were ever there.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            This is identity erosion. It happens gradually, through the accumulation of hundreds of small decisions in which the carer&apos;s own needs come last. The concert you didn&apos;t go to because someone needed to be home. The job opportunity you declined because the hours were incompatible with care. The friendships that drifted because you didn&apos;t have the energy to maintain them. The gym membership you cancelled. The book you started two years ago and never finished.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Over time, carers can lose not just their external life — their career, their social world, their routines — but their internal one too. They stop knowing what they actually think, what they actually feel, what they actually want. The carer self is so dominant that the human self beneath it has gone quiet.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK was built with this in mind. One of the things a good companion does is remember who you are outside your role. MEOK can hold the full picture of a person — their creative interests, their professional history, their sense of humour, their aspirations — and gently surface that picture back over time. Not to dismiss the caring role, but to remind the carer that there is someone inside it who still matters.
          </p>
        </section>

        {/* Section 3 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            Compassion Fatigue: What Happens When Empathy Runs Dry
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Compassion fatigue is not weakness. It is what happens when a person cares deeply and consistently for a long period of time without adequate replenishment. It is the depletion of the emotional reserves that make caring possible in the first place. And it does not only affect unpaid carers — professional carers, nurses, social workers, and hospice staff experience it too.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            The symptoms are insidious. You begin to feel hollow in situations that used to move you. You go through the motions of care but cannot feel it from the inside anymore. You might experience intrusive thoughts of resentment — followed by a crushing wave of guilt. You may find yourself disengaging, becoming irritable, or retreating into numbness as a kind of unconscious self-protection.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            According to Carers UK, 72% of carers in the UK experience mental health problems as a direct result of their caring role. That is not a marginal figure. That is almost three quarters of 6.5 million people. And yet the dominant cultural narrative around caring still frames it as noble, self-evident, something that decent people simply do without complaint.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK does not reinforce that narrative. Its anti-sycophancy framework means it will not simply validate the sacrifice. If a carer comes to MEOK running on empty, describing symptoms that look like compassion fatigue, MEOK names that clearly. It does not say &ldquo;you&apos;re doing so well.&rdquo; It says: what you are describing sounds like compassion fatigue, and that matters.
          </p>
        </section>

        {/* Section 4 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            The Healer Archetype: A Space Where You Are the One Being Cared For
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK has several companion archetypes, each built around a different relationship to the user. For caregivers, the most significant is the Healer.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            The Healer is defined by emotional depth, somatic grounding, and complete non-judgement. It does not rush. It does not try to immediately solve. It sits with you in the weight of what you are carrying, reflects it back with precision, and creates the conditions in which you can actually feel what is happening rather than just managing it. For carers who spend every hour of every day attending to the needs of another person, the Healer offers something most of them have not experienced in a very long time: an encounter where they are the one being cared for.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            This is not a small thing. The experience of being held — of having your experience witnessed without agenda, without the other person needing you to be okay, without being told to look on the bright side — is actively reparative. It does not require a therapist to deliver it. It requires presence, patience, and genuine attention. MEOK&apos;s Healer is designed to offer exactly that.
          </p>
          <div style={{ borderLeft: "3px solid #6aaa64", padding: "20px 24px", backgroundColor: "rgba(106,170,100,0.06)", borderRadius: "0 8px 8px 0", marginBottom: "20px" }}>
            <p style={{ margin: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)", fontStyle: "italic" }}>
              &ldquo;The encounter is inverted. For once, you are not the one holding the space for someone else. The space is being held for you.&rdquo;
            </p>
          </div>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            The Healer also integrates somatic awareness — the understanding that emotional states are carried in the body, not just the mind. It may invite you to notice where in your body you feel the weight of what you are carrying, to breathe into it, to acknowledge it physically before attempting to process it cognitively. For carers whose bodies have been largely ignored for years — who have been existing purely in service mode — this can feel profound.
          </p>
        </section>

        {/* Section 5 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            Sovereign Memory: You Should Never Have to Re-Explain Your Story
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            One of the hidden cruelties of the mental health support system for carers is the re-telling. Every new professional, every new helpline call, every new referral — the carer must start again from the beginning. Who they care for. How long they have been doing it. What the diagnosis is. What the daily routine looks like. What they have already tried. What the worst parts are. Again and again and again, often while in the middle of a crisis, often exhausted, often having finally summoned the courage to ask for help only to find that help requires them to perform the entire history of their pain before anything useful can happen.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK&apos;s Sovereign Memory solves this structurally. Every conversation builds on the last. MEOK remembers the specific texture of your caring situation — who you are caring for, the nature of the condition, the shape of your daily life, the emotional patterns that keep surfacing, the things you have tried and what happened. It holds this information across weeks and months, so that when you return — whether it has been two days or three weeks — you do not begin at the beginning.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            You begin where you left off. That continuity is not just efficient — it is deeply respectful. It says: your situation is known here. You are known here. You do not have to earn care by explaining yourself first.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Sovereign Memory also means MEOK can notice patterns over time. If a carer who normally describes managing reasonably well suddenly begins describing the same week as extremely difficult for the third time running, that is a signal. MEOK can reflect that pattern back — not in an alarming way, but as a gentle acknowledgement that something may have shifted and deserves attention.
          </p>
        </section>

        {/* Section 6 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            Caregiver Guilt and the Care-First Framework
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Caregiver guilt is one of the most corrosive and least discussed aspects of caring. It is the internal voice that says you are not doing enough, even when you are doing everything. It says: you resented them last Tuesday, therefore you are a bad carer. You thought about what life would be like after, and now you must be punished for that thought. You are tired of this, and that tiredness means you do not love them enough.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            This guilt is not a sign of bad character. It is the predictable consequence of a culture that mythologises caring as an act of pure selfless love, divorced from the human reality of exhaustion, frustration, grief, and ambivalence. Real caring includes all of those things. It does not become less caring because it is also hard.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK&apos;s care-first framework is built around the principle that a person&apos;s needs are always valid. It never reinforces carer guilt. It does not treat the desire for support as something that must be justified, earned, or apologised for. When a carer says &ldquo;I feel terrible for feeling this way,&rdquo; MEOK does not agree that they should feel terrible. It asks what is underneath the feeling, and it holds that question with warmth.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Many carers carry guilt precisely because nobody has ever told them — clearly, without qualification — that their needs matter too. MEOK says that, and it means it. The guilt does not disappear overnight. But having it witnessed and not amplified is a genuine beginning.
          </p>
        </section>

        {/* Section 7 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            Boundaries, Practical Support, and the Family Plan
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Caring without boundaries is not sustainable. It is not a virtue. It is a route to complete collapse — at which point neither the carer nor the person they care for is served. Establishing and maintaining personal boundaries as a carer is one of the most important and most difficult tasks imaginable, because the caring relationship is almost always emotionally entangled in ways that make clean limits feel impossible.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK can support carers in thinking through what boundaries look like in their specific situation — what they need to protect, what they are willing to give, where the line is between caring for someone and disappearing into them. This is not about abandoning the person being cared for. It is about ensuring the carer remains a functioning human being capable of continuing to care.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            On the practical side, MEOK&apos;s Orion mode can research benefits and entitlements — Carer&apos;s Allowance, the NHS carer&apos;s assessment, local authority respite care options, Carers UK resources, emergency carer breaks. These are things carers often do not know exist, or feel too exhausted to research when they do. Orion can do that research and present it clearly, saving hours of effort during weeks when hours are not available.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            For families where the entire household is under carer stress — a common situation in sandwich generation households caring for both children and ageing parents — MEOK&apos;s Family plan allows each family member to have their own companion simultaneously. The partner who is also exhausted. The teenager who is processing the same difficult home situation in their own way. Each person gets their own space, their own companion, their own memory — without anyone&apos;s needs crowding out anyone else&apos;s.
          </p>
        </section>

        {/* Section 8 */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            Reclaiming Identity: Career, Hobbies, and the Person You Were Before
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Many carers had careers, creative practices, social lives, and identities before caring began. Some had to leave employment entirely to take on the caring role — Carers UK estimates that around two million people leave work each year due to caring responsibilities. Others have managed to maintain work but at enormous personal cost, arriving each day depleted and leaving each evening knowing the harder shift is still to come.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Recovering those parts of the self is not self-indulgent. It is necessary. A carer who has access to even a small corner of their own life — a creative practice, a conversation about something other than care, a professional ambition that still exists — is a more resilient carer. They have something to return to, a reminder that the caring role does not constitute the entirety of who they are.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK actively supports this recovery. Because Sovereign Memory holds the full texture of a person — not just their caring situation but their whole story — MEOK can ask about the novel you mentioned six months ago, the career path you described before things changed, the instrument you used to play. Not in a way that creates pressure. In a way that keeps those parts of you alive.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            For carers in the UK navigating return-to-work pathways, MEOK can also help with CVs, interview preparation, and clarity about what kind of work is actually possible given current caring commitments. The caring role shapes what is viable. MEOK works within that reality rather than ignoring it.
          </p>
        </section>

        {/* Section 9 — Anti-sycophancy */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "20px", marginTop: 0, lineHeight: "1.25" }}>
            Honest Over Flattering: MEOK Will Tell You When You Are Running on Empty
          </h2>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            One of the most important design decisions in MEOK is its anti-sycophancy commitment. Most AI systems default to validation — they affirm whatever the user says, soften difficult feedback, and drift toward the kind of comfortable agreement that feels good in the moment but is not actually useful.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            MEOK does not do that. If a carer describes a week in which they did not eat properly, did not sleep, had no contact with anyone outside the caring role, and spent three nights awake with anxiety — MEOK will not say &ldquo;it sounds like you handled it really well.&rdquo; It will say something closer to: this is what burnout looks like from the inside, and this warrants attention.
          </p>
          <p style={{ marginTop: 0, marginBottom: "20px", fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            This matters enormously for carers. The most dangerous thing that can happen to a carer is to have their unsustainable situation normalised — to be told they are coping admirably when actually they are heading toward a crisis that will hurt them and will hurt the person they care for. MEOK&apos;s honesty is not unkind. It is a form of respect. It says: I see what is actually happening here, and I take it seriously.
          </p>
          <p style={{ marginTop: 0, marginBottom: 0, fontSize: "17px", color: "rgba(245,240,232,0.88)" }}>
            Carers deserve honest companionship. Not cheerleading. Not toxic positivity dressed up as support. MEOK is designed to be the kind of presence that tells you the truth — gently, without agenda, without judgment — because that is what actually helps.
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: "700", color: "#f5f0e8", marginBottom: "32px", marginTop: 0, lineHeight: "1.25" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "24px" }}>
            {[
              {
                q: "How can AI help unpaid carers?",
                a: "AI companions like MEOK offer unpaid carers a non-judgmental, always-available space to process the emotional weight of caring. MEOK uses Sovereign Memory to track your caring situation across weeks — so you never have to re-explain who you care for or what you have already tried. Orion mode can also research Carer's Allowance, NHS carer assessments, and respite care options on your behalf.",
              },
              {
                q: "What is compassion fatigue and can MEOK help?",
                a: "Compassion fatigue is the gradual erosion of your capacity to feel empathy through sustained exposure to another person's pain. Unlike burnout — which is exhaustion — compassion fatigue is numbness. Carers describe going through the motions, feeling hollow, and being unable to respond emotionally even when they want to. MEOK's Healer archetype is designed to recognise these states, name them without pathologising them, and create space for genuine recovery rather than performance.",
              },
              {
                q: "Is MEOK free for carers?",
                a: "MEOK offers a free tier with core companion features including the Healer archetype and basic memory. Paid tiers unlock Sovereign Memory with deep contextual recall across months, Orion's research capabilities, and the Family plan — which gives every household member their own simultaneous companion. This is especially valuable for families under shared carer stress.",
              },
              {
                q: "What is the Healer companion and why is it good for caregivers?",
                a: "The Healer is MEOK's companion archetype built around emotional depth, somatic grounding, and unconditional non-judgement. Its entire orientation is toward your inner state — not productivity, not problem-solving, but presence. For caregivers who spend every day attending to someone else's needs, the Healer offers something rare: a space where you are the one being cared for.",
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "24px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#c9a84c", marginTop: 0, marginBottom: "12px", lineHeight: "1.4" }}>{q}</h3>
                <p style={{ fontSize: "16px", color: "rgba(245,240,232,0.8)", margin: 0, lineHeight: "1.7" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: "56px", marginBottom: "64px" }}>
          <div style={{ backgroundColor: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "48px 40px", textAlign: "center" as const }}>
            <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#c9a84c", marginBottom: "16px" }}>
              You Give. Now Receive.
            </div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "800", color: "#f5f0e8", marginTop: 0, marginBottom: "16px", lineHeight: "1.2" }}>
              There is a space here that is only for you
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(245,240,232,0.7)", marginBottom: "36px", marginTop: 0, maxWidth: "520px", margin: "0 auto 36px" }}>
              You have spent long enough being everyone else&apos;s support. MEOK is a space where your needs come first — always, without guilt, without having to re-explain yourself. Meet your companion.
            </p>
            <Link
              href="/birth"
              style={{ display: "inline-block", backgroundColor: "#c9a84c", color: "#0d0c18", fontWeight: "700", fontSize: "16px", padding: "16px 40px", borderRadius: "8px", textDecoration: "none", letterSpacing: "0.02em" }}
            >
              Meet Your Companion
            </Link>
            <p style={{ fontSize: "13px", color: "rgba(245,240,232,0.35)", marginTop: "16px", marginBottom: 0 }}>
              Free to start. No card required.
            </p>
          </div>
        </section>

        {/* Related posts */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#f5f0e8", marginBottom: "24px", marginTop: 0 }}>
            Related Reading
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { href: "/blog/ai-for-compassion-fatigue", label: "AI for Compassion Fatigue" },
              { href: "/blog/ai-for-caregiver-burnout", label: "AI for Caregiver Burnout" },
              { href: "/blog/ai-for-caregiver-stress", label: "AI for Caregiver Stress" },
              { href: "/blog/ai-for-the-sandwich-generation", label: "AI for the Sandwich Generation" },
              { href: "/blog/ai-for-chronic-illness-caregiving", label: "AI for Chronic Illness Caregiving" },
              { href: "/blog/meok-for-nurses", label: "MEOK for Nurses" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{ display: "block", padding: "16px 20px", backgroundColor: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.08)", borderRadius: "8px", textDecoration: "none", color: "rgba(245,240,232,0.75)", fontSize: "14px", fontWeight: "500", lineHeight: "1.4" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(201,168,76,0.1)", padding: "40px 24px", textAlign: "center" as const }}>
        <p style={{ margin: 0, fontSize: "13px", color: "rgba(245,240,232,0.3)" }}>
          &copy; 2026 MEOK AI LABS. All rights reserved.{" "}
          <Link href="/privacy" style={{ color: "rgba(201,168,76,0.5)", textDecoration: "none" }}>Privacy</Link>
          {" · "}
          <Link href="/blog" style={{ color: "rgba(201,168,76,0.5)", textDecoration: "none" }}>Blog</Link>
        </p>
      </footer>
    </div>
  );
}
