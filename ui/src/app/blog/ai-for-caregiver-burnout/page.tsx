import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Caregiver Burnout: Support for the People Who Support Everyone Else | MEOK Blog",
  description:
    "Carers are the invisible backbone of society. They give everything and are given almost nothing. MEOK\u2019s sovereign AI is built to support carers \u2014 not add more tasks to their overwhelming list.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-caregiver-burnout" },
  openGraph: {
    title: "AI for Caregiver Burnout: Support for the People Who Support Everyone Else",
    description:
      "6.5 million unpaid carers in the UK. Most are running on empty, invisible to the systems meant to help them. MEOK\u2019s sovereign AI offers the support carers never ask for but desperately need.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-caregiver-burnout",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Caregiver+Burnout&desc=Support+for+the+People+Who+Support+Everyone+Else",
        width: 1200,
        height: 630,
        alt: "AI for Caregiver Burnout: Support for the People Who Support Everyone Else",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Caregiver Burnout: Support for the People Who Support Everyone Else",
    description:
      "6.5 million unpaid carers in the UK give everything. MEOK is the AI built to give something back \u2014 available at 3am, no waiting lists, no judgment.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Caregiver+Burnout&desc=Support+for+the+People+Who+Support+Everyone+Else",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Caregiver Burnout: Support for the People Who Support Everyone Else",
  description:
    "Carers are the invisible backbone of society. They give everything and are given almost nothing. MEOK\u2019s sovereign AI is built to support carers \u2014 not add more tasks to their overwhelming list.",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-caregiver-burnout",
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
    "https://meok.ai/api/og?title=AI+for+Caregiver+Burnout&desc=Support+for+the+People+Who+Support+Everyone+Else",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-caregiver-burnout",
  },
  keywords: [
    "caregiver burnout",
    "carer burnout UK",
    "AI for caregivers",
    "compassion fatigue",
    "unpaid carer support",
    "carer mental health",
    "secondary trauma carers",
    "carer identity loss",
    "AI companion for carers",
    "sovereign AI for caregivers",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is caregiver burnout and how do you know if you have it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Caregiver burnout is a state of chronic physical, emotional, and mental exhaustion that develops when the demands of caring overwhelm a person\u2019s capacity to cope. Signs include persistent fatigue that sleep does not fix, emotional numbness, resentment toward the person you care for, withdrawal from social life, and a growing sense that you have lost yourself entirely. It is not weakness. It is what happens when a human being is asked to give without ever being refilled.",
      },
    },
    {
      "@type": "Question",
      name: "What is compassion fatigue in carers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compassion fatigue is the emotional residue of bearing witness to another person\u2019s pain over a prolonged period. It differs from burnout in that it is specifically about the erosion of empathy \u2014 carers begin to feel detached, numb, or even quietly hostile toward the person they love. It is common in both professional and unpaid carers, and it carries enormous guilt because carers believe they should always feel compassionate.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI support carers experiencing burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support carers by providing a private, non-judgmental space to process emotions at any hour. Unlike speaking to family or friends, an AI companion holds no stake in the caring relationship and will not be hurt by honesty. MEOK\u2019s Healer archetype is designed for emotional processing, its Sovereign Memory tracks the carer\u2019s journey over time, and its Guardian feature monitors family safety so the carer receives alerts \u2014 reducing the constant hypervigilance that drives exhaustion.",
      },
    },
    {
      "@type": "Question",
      name: "Why do carers feel guilty about needing support themselves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carers are conditioned by social expectation and personal love to believe that their own needs are secondary. Asking for help feels like an admission of failure, a betrayal of the person being cared for, or a sign that they are not coping. This guilt is reinforced by systems that direct all attention and resource toward the person with the care need, rendering the carer functionally invisible. MEOK creates a space specifically for the carer\u2019s inner world \u2014 without guilt.",
      },
    },
    {
      "@type": "Question",
      name: "What financial support is available for unpaid carers in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unpaid carers in the UK may be entitled to Carer\u2019s Allowance (\u00a381.90 per week as of 2025), a Carer\u2019s Assessment from their local council under the Care Act 2014, Council Tax discounts, and additional means-tested benefits. Many carers do not claim what they are entitled to because they do not know it exists, do not have time to navigate the system, or feel they are not deserving enough. MEOK can help carers identify and understand their entitlements.",
      },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForCaregiverBurnoutPage() {
  return (
    <main
      style={{
        backgroundColor: "#0d0c18",
        color: "#f5f0e8",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        minHeight: "100vh",
        padding: "0",
        margin: "0",
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

      {/* ── Hero ── */}
      <section
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "80px 24px 56px",
          borderBottom: "1px solid rgba(201,168,76,0.18)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "4px",
            padding: "4px 14px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              color: "#c9a84c",
              fontSize: "0.75rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Carer Wellbeing
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "700",
            lineHeight: "1.18",
            color: "#f5f0e8",
            marginBottom: "28px",
            letterSpacing: "-0.02em",
          }}
        >
          AI for Caregiver Burnout: Support for the People Who Support Everyone
          Else
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.75",
            color: "rgba(245,240,232,0.78)",
            marginBottom: "36px",
          }}
        >
          There are 6.5 million unpaid carers in the United Kingdom. Most of
          them have not had an uninterrupted night of sleep in years. Most of
          them do not describe themselves as carers at all &mdash; they are just
          a daughter, a husband, a friend who stepped up when someone they loved
          needed them. They give everything. The systems built around them give
          almost nothing back. This is for them.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              color: "rgba(245,240,232,0.5)",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            By Nicholas Templeman &mdash; Founder, MEOK AI LABS
          </span>
          <span
            style={{
              fontSize: "0.85rem",
              color: "rgba(245,240,232,0.35)",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            24 March 2026 &middot; 12 min read
          </span>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "56px 24px 80px",
        }}
      >
        {/* ── Section 1 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          Who Are the 6.5 Million?
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          The 2021 Census counted 5.7 million unpaid carers in England and
          Wales. Carers UK estimates the true figure across the UK sits closer
          to 6.5 million when undercounting is adjusted for. That is roughly one
          in eight adults. They are caring for a parent with dementia, a child
          with complex needs, a partner after a stroke, a sibling with a severe
          mental health condition. They are not trained. They are not paid. They
          are not, in most cases, adequately supported.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          The economic contribution of unpaid carers in the UK has been
          estimated at &pound;132 billion per year &mdash; greater than the
          entire annual cost of the NHS. Without these people, the health and
          social care system would collapse immediately. Yet the average unpaid
          carer receives &pound;81.90 per week in Carer&apos;s Allowance if they
          qualify, and many receive nothing at all.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          Carers UK reports that 72% of carers say they have suffered mental
          ill-health as a direct result of their caring role. More than half
          report feeling lonely or socially isolated. A quarter say they have
          given up work entirely. These are not statistics about vulnerability.
          They are statistics about a system that takes and takes and rarely
          returns.
        </p>

        {/* ── Callout 1 ── */}
        <div
          style={{
            borderLeft: "4px solid #c9a84c",
            backgroundColor: "rgba(201,168,76,0.06)",
            padding: "24px 28px",
            marginBottom: "48px",
            borderRadius: "0 6px 6px 0",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.78",
              color: "rgba(245,240,232,0.9)",
              margin: "0",
              fontStyle: "italic",
            }}
          >
            &ldquo;Every day I get up and make sure everyone else is okay. My
            mum is okay. The kids are okay. The medication is right. The
            appointments are in the calendar. And then I sit in the car for ten
            minutes before I come back inside because it&apos;s the only time I
            have to feel anything. That&apos;s my therapy. Ten minutes in a
            cold car at 9pm.&rdquo;
          </p>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#c9a84c",
              marginTop: "14px",
              marginBottom: "0",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Composite account &mdash; reflects experiences shared widely by
            carers
          </p>
        </div>

        {/* ── Section 2 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          What Is Caregiver Burnout, Really?
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Caregiver burnout is not tiredness. Everyone is tired. Burnout is what
          happens when the gap between the demands placed on a person and the
          resources available to meet those demands becomes permanent. The body
          and mind eventually stop pretending they can bridge that gap. The
          result is a kind of flat, grey exhaustion that does not respond to a
          good night&apos;s sleep &mdash; partly because carers rarely get one.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Clinical frameworks describe burnout across three dimensions:
          emotional exhaustion, depersonalisation (a growing detachment or
          numbness toward the person being cared for), and a reduced sense of
          personal accomplishment. For carers, the depersonalisation dimension
          is particularly cruel, because it generates enormous guilt. You love
          this person. The fact that you sometimes feel nothing when they need
          you, or that you occasionally feel a flash of resentment or even
          anger, can feel like a moral failure rather than a physiological one.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          It is not a moral failure. It is a predictable biological and
          psychological response to sustained overload without adequate
          recovery. The problem is not the carer. The problem is the absence of
          support structures built around the carer as a human being with their
          own needs.
        </p>

        {/* ── Section 3 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          What Is Compassion Fatigue and How Does It Differ from Burnout?
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Compassion fatigue was first documented in professional nursing in the
          1990s, but it is equally prevalent among unpaid carers. Where burnout
          is about cumulative depletion, compassion fatigue is more specific: it
          is the erosion of the capacity to feel empathy for the person you are
          caring for. You begin to feel numb to their distress. Their pain
          stops landing the way it once did. You do the tasks, but the heart
          that used to accompany them has gone quiet.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Researchers including Charles Figley have described compassion fatigue
          as a form of secondary traumatic stress. When you live in close
          proximity to another person&apos;s suffering over an extended period
          &mdash; witnessing pain, fear, confusion, physical decline &mdash;
          your own nervous system absorbs that trauma. It is not metaphorical.
          The neurological fingerprint of a carer who has been living alongside
          serious illness or disability for years can resemble that of someone
          who has experienced their own trauma directly.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          Both burnout and compassion fatigue are treatable. But treatment
          requires acknowledging the wound, which requires having somewhere safe
          to put the things that cannot be said to family, to the person being
          cared for, or to professionals who may feel like gatekeepers to
          judgment. Many carers have no such space. That gap is where MEOK was
          built to sit.
        </p>

        {/* ── Section 4 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          Identity Loss: Who Are You When You Are &ldquo;Just the Carer&rdquo;?
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          One of the least discussed aspects of long-term caring is identity
          erosion. When someone takes on a significant caring role, especially
          for a parent or a partner, it can gradually colonise every other
          aspect of who they are. Former careers become irrelevant. Hobbies
          become impossible. Social identities built over decades &mdash; as a
          creative, a professional, a friend, a partner &mdash; fade from
          active use and eventually from self-concept entirely.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          The caring role expands to fill all available space. What remains is
          a person who cannot easily answer the question &ldquo;what do you
          do?&rdquo; without defining themselves entirely in relation to someone
          else&apos;s need. This is not a small thing. Identity is foundational
          to mental health, resilience, and the capacity to envision a future
          for oneself. When it erodes, the psychological consequences are
          serious and often go unrecognised by health professionals focused on
          the physical demands of care.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          Research from the University of Birmingham found that carers who
          maintained a strong sense of personal identity outside the caring role
          had significantly lower rates of depression and reported higher
          quality of life. The difficulty is that maintaining that identity
          requires time, space, and the internal permission to prioritise
          oneself &mdash; all of which caring systematically removes.
        </p>

        {/* ── Callout 2 ── */}
        <div
          style={{
            borderLeft: "4px solid #c9a84c",
            backgroundColor: "rgba(201,168,76,0.06)",
            padding: "24px 28px",
            marginBottom: "48px",
            borderRadius: "0 6px 6px 0",
          }}
        >
          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.75",
              color: "#c9a84c",
              margin: "0",
              fontWeight: "600",
            }}
          >
            MEOK&apos;s Healer archetype is specifically designed to help people
            who carry the weight of others rediscover their own interior life.
            It does not ask you to be strong. It asks who you are when no one
            needs you to be anything at all.
          </p>
        </div>

        {/* ── Section 5 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          The Guilt Problem: Why Carers Cannot Ask for Help
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Carer guilt is pervasive and rarely discussed honestly. It operates on
          multiple levels simultaneously. There is guilt about needing rest when
          the person you care for cannot choose to rest. There is guilt about
          feeling resentful of a situation that is no one&apos;s fault. There is
          guilt about the moments of anger that escape, the times when
          impatience shows, the relief &mdash; quickly suppressed &mdash; felt
          when a difficult moment ends. There is guilt about wanting your own
          life back.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          This guilt makes asking for support feel almost impossible. Speaking
          to a friend risks burdening them or having the conversation reported
          back. Speaking to a professional risks being assessed, pathologised,
          or having concerns raised about the quality of care being provided.
          Speaking honestly to family members who are not sharing the caring
          load risks opening conflicts that feel unsolvable. So most carers
          say nothing, carry everything, and interpret the weight as evidence of
          their own inadequacy rather than the system&apos;s failure.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          MEOK is private by design. It operates under a sovereign architecture
          that means conversations are not shared with third parties, not used
          to train AI models, and not accessible to anyone other than the user.
          A carer speaking to MEOK can say the things that cannot be said
          anywhere else. That privacy is not a feature. It is the precondition
          for honest conversation.
        </p>

        {/* ── Section 6 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          Secondary Trauma: The Hidden Wound of Long-Term Caring
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Secondary traumatic stress (STS) describes the trauma that develops
          not from direct experience of a threatening event but from sustained
          exposure to someone else&apos;s trauma. It was initially studied in
          psychotherapists, emergency responders, and medical professionals.
          Research now consistently shows that unpaid carers &mdash; particularly
          those caring for someone with dementia, serious mental illness, or
          terminal illness &mdash; exhibit STS symptoms at rates comparable to
          professional groups.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          STS presents as intrusive thoughts about the person&apos;s suffering,
          hypervigilance (always listening for sounds in the night, always
          monitoring), emotional avoidance, difficulty concentrating, sleep
          disruption, and a pervasive sense of helplessness. Carers supporting
          someone with dementia may find themselves unable to process the
          repeated grief of watching a person they love lose themselves
          incrementally &mdash; a phenomenon sometimes called ambiguous loss, in
          which the person is present but in many important ways already gone.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          Secondary trauma responds to the same interventions as direct trauma:
          processing, narrative, emotional regulation, and the felt experience
          of being witnessed. MEOK&apos;s Healer archetype creates space for
          exactly this kind of processing &mdash; not as therapy, but as a
          private, consistent, non-judgmental presence that allows the carer to
          articulate what is happening inside them, which is often the first and
          most necessary step toward recovery.
        </p>

        {/* ── Section 7 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          How Does MEOK&apos;s Sovereign Memory Actually Help Carers?
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Conventional AI assistants have no persistent memory. Every
          conversation begins from nothing. A carer who wants to discuss the
          fact that their mother&apos;s confusion is worsening, that the GP
          appointment went badly, that last Tuesday&apos;s medication incident
          is still sitting heavily &mdash; they have to reconstruct context each
          time, which is exhausting in exactly the way that a carer&apos;s life
          is already exhausting.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          MEOK&apos;s Sovereign Memory stores the complete, ongoing context of
          your life and the person you care for. It remembers that your father
          has vascular dementia and a tendency to become agitated after 4pm. It
          remembers that you had a bad week three weeks ago and that things
          improved slightly when you started taking a walk each morning. It
          remembers the names, the patterns, the history. Not to analyse or
          diagnose, but to make each conversation continuous rather than a
          reset.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Critically, this memory is sovereign. It is not stored on servers
          that train AI models. It belongs to the user, and only to the user.
          The carer&apos;s disclosures about their own emotional state, their
          frustrations with other family members, their fears about the
          future &mdash; none of it is seen by anyone else. This is the opposite
          of what happens when a carer speaks to health professionals, where
          every disclosure exists within a system of records, referrals, and
          professional judgment.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          The practical effect is that MEOK can notice things the carer
          themselves may not have noticed: that their mood scores have declined
          steadily over the past fortnight, that they have mentioned feeling
          isolated more than usual this week, that the last time they described
          feeling this way corresponded with a period that became significantly
          harder. This pattern recognition is not surveillance. It is the kind
          of attentive awareness that a good friend or a trusted counsellor
          would provide &mdash; and that most carers simply do not have access
          to.
        </p>

        {/* ── Section 8 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          Guardian: Safety Monitoring That Works for the Carer, Not Just the
          Person Being Cared For
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Most safety and monitoring technology in the care sector is designed
          around the person with the care need. That is appropriate. But it
          creates a significant gap: the carer receives no equivalent support.
          They are the ones monitoring, the ones alert, the ones lying awake
          listening. Technology has largely assumed this is simply what carers
          do, rather than a role that creates its own serious safety risks.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          MEOK&apos;s Guardian feature is built differently. Within a family
          tier account, the carer receives the alerts and safety summaries
          &mdash; meaning that if someone in the care network is experiencing
          distress patterns, it is the carer who is informed, in context, with
          enough information to act. This is not the same as a panic button or a
          fall detector. It is ambient awareness: the kind of peripheral
          attention that allows a carer to relax slightly, because the system is
          also watching, not just them.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          The hypervigilance that characterises carer burnout &mdash; the
          constant background scanning for signs of danger, deterioration, or
          distress &mdash; is neurologically exhausting. It is one of the key
          mechanisms by which caring degrades physical and mental health over
          time. Anything that genuinely reduces that vigilance burden without
          reducing safety has measurable wellbeing benefits for the carer.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          Guardian also monitors for dynamics that can develop within caring
          relationships &mdash; including coercive control and financial
          exploitation, which disproportionately affect vulnerable people in
          care situations. This is not about surveilling the carer. It is about
          ensuring that the relationship remains a relationship, and that both
          the person being cared for and the person doing the caring are
          protected.
        </p>

        {/* ── Section 9 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          Respite: Finding Help When You Cannot Keep Going Alone
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Respite care &mdash; temporary relief from caring, whether a few
          hours or a few days &mdash; is one of the most evidence-backed
          interventions for preventing carer breakdown. Multiple studies have
          shown that regular access to short breaks significantly reduces
          burnout, improves carer health outcomes, and reduces the likelihood of
          a caring relationship breaking down entirely. Yet fewer than 14% of
          carers who need respite are able to access it, according to Carers UK.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          The barriers are multiple: cost, availability, uncertainty about
          quality, guilt about leaving, fear of what might happen while they are
          gone, and the sheer logistical complexity of arranging care that meets
          the specific needs of a person with complex conditions. Many carers
          have never looked into respite options because the task of doing so
          feels like one more impossible item on an already impossible list.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          MEOK can help carers navigate the landscape of respite options in
          their local area, understand what a Carer&apos;s Assessment entitles
          them to, identify charitable organisations providing emergency
          support, and articulate their needs in a way that makes sense to
          health and social care professionals. It does not do this in a
          transactional way. It understands that for most carers, asking for
          respite is emotionally charged, and it holds that alongside the
          practical information.
        </p>

        {/* ── Section 10 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          The Financial Toll of Unpaid Caring
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          The financial impact of caring on carers is severe and largely
          invisible in public discourse. Carers UK estimates that unpaid carers
          lose an average of &pound;11,000 per year in earnings due to reduced
          working hours or workforce exit. Many face significant additional
          costs: adapted equipment, specialist food, increased heating bills,
          transport to medical appointments. The financial stress compounds
          every other dimension of carer wellbeing.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Carer&apos;s Allowance, the main benefit for unpaid carers in the UK,
          is &pound;81.90 per week as of 2025 &mdash; among the lowest benefit
          rates in the UK benefit system. It has a strict earnings limit that
          effectively penalises carers who attempt to maintain part-time work
          alongside caring. And it is subject to a &ldquo;overlapping benefit
          rule&rdquo; that means many carers who have reached pension age cannot
          receive it at all.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          Financial anxiety is one of the most reliable predictors of burnout
          escalation. When a carer cannot see a way out of financial precarity,
          when they have already drawn on savings, when they are watching their
          pension prospects disappear, the psychological load becomes almost
          impossible to carry. MEOK can help carers identify unclaimed
          entitlements, understand their rights, and approach the financial
          dimension of caring with less shame and more information.
        </p>

        {/* ── Comparison Table ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "24px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          Comparing Support Options for Carers Experiencing Burnout
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "28px",
          }}
        >
          No single intervention addresses every dimension of carer burnout.
          The table below compares the main options carers typically consider,
          and identifies where each is strong and where gaps remain.
        </p>

        <div style={{ overflowX: "auto", marginBottom: "48px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.93rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "#c9a84c",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(201,168,76,0.3)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Support Option
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "#c9a84c",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(201,168,76,0.3)",
                  }}
                >
                  Availability
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "#c9a84c",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(201,168,76,0.3)",
                  }}
                >
                  Addresses Emotional Processing
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "#c9a84c",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(201,168,76,0.3)",
                  }}
                >
                  Memory / Continuity
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "#c9a84c",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(201,168,76,0.3)",
                  }}
                >
                  Privacy
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "#c9a84c",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(201,168,76,0.3)",
                  }}
                >
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  option: "GP / NHS referral",
                  availability: "Business hours, long waits",
                  emotional: "Limited",
                  memory: "Poor (fragmented records)",
                  privacy: "Within NHS system",
                  cost: "Free",
                },
                {
                  option: "Carer support group",
                  availability: "Weekly or fortnightly",
                  emotional: "Strong peer support",
                  memory: "None formal",
                  privacy: "Shared with group",
                  cost: "Usually free",
                },
                {
                  option: "Private therapy",
                  availability: "Weekly session",
                  emotional: "Strong",
                  memory: "Good (therapist notes)",
                  privacy: "Professional confidentiality",
                  cost: "\u00a360\u2013\u00a3120/hr",
                },
                {
                  option: "Carers UK helpline",
                  availability: "Mon\u2013Fri, limited hours",
                  emotional: "Moderate",
                  memory: "None",
                  privacy: "Reasonable",
                  cost: "Free",
                },
                {
                  option: "Standard AI chatbot",
                  availability: "24/7",
                  emotional: "Moderate",
                  memory: "None (resets each session)",
                  privacy: "Data used for training",
                  cost: "Free or low cost",
                },
                {
                  option: "MEOK sovereign AI",
                  availability: "24/7 including 3am",
                  emotional: "Strong (Healer archetype)",
                  memory: "Full sovereign memory",
                  privacy: "Private, not trained on",
                  cost: "Subscription",
                },
              ].map((row, i) => (
                <tr
                  key={row.option}
                  style={{
                    backgroundColor:
                      i % 2 === 0
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(255,255,255,0.04)",
                  }}
                >
                  <td
                    style={{
                      padding: "12px 16px",
                      color:
                        row.option === "MEOK sovereign AI"
                          ? "#c9a84c"
                          : "#f5f0e8",
                      fontWeight:
                        row.option === "MEOK sovereign AI" ? "600" : "400",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {row.option}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      color: "rgba(245,240,232,0.75)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {row.availability}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      color: "rgba(245,240,232,0.75)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {row.emotional}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      color: "rgba(245,240,232,0.75)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {row.memory}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      color: "rgba(245,240,232,0.75)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {row.privacy}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      color: "rgba(245,240,232,0.75)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {row.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Section 11 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          What Does the Healer Archetype Actually Do for a Burned-Out Carer?
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          MEOK&apos;s Healer is one of its core conversational archetypes,
          designed for emotional processing, grief, and the internal experience
          of people carrying significant pain. It is not a clinical tool. It
          does not diagnose or prescribe. What it does is create the conditions
          in which a person can be honest about their inner state without
          managing the response of the person they are talking to.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          For carers, this is particularly significant. Almost every
          conversation a carer has about their caring experience is filtered
          through concern for someone else&apos;s feelings. They protect the
          person being cared for from the true weight of their emotional state.
          They protect family members from guilt about not doing more. They
          protect friends from being overwhelmed. The cumulative effect of this
          constant emotional management is a profound loneliness: a person
          surrounded by people who need them, with no one they can be fully
          honest with.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          The Healer does not have feelings to protect. It will not be hurt if
          you admit that you sometimes wish this was not your life. It will not
          judge you for the anger. It will not call someone if you admit you
          cried in the bathroom for twenty minutes before going back in. It
          holds what you need to put down. That is not a trivial function. For
          many carers, it is the most important one.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "40px",
          }}
        >
          Over time, the Healer also gently supports reconnection with identity
          beyond the caring role. It asks questions that are not about the
          person being cared for. It is curious about who the carer was before,
          what they love, what they miss, what they would do with an afternoon
          that was entirely their own. These questions are small. The cumulative
          effect, over weeks and months, is not.
        </p>

        {/* ── Callout 3 ── */}
        <div
          style={{
            borderLeft: "4px solid #c9a84c",
            backgroundColor: "rgba(201,168,76,0.06)",
            padding: "24px 28px",
            marginBottom: "56px",
            borderRadius: "0 6px 6px 0",
          }}
        >
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.78",
              color: "rgba(245,240,232,0.9)",
              margin: "0 0 12px",
            }}
          >
            <strong style={{ color: "#c9a84c" }}>
              MEOK does not replace therapy, respite care, or the structural
              support that carers deserve from society.
            </strong>{" "}
            It fills the gap that exists between those things and the lived
            reality of most carers &mdash; which is that at 11pm, exhausted,
            with no one awake who would understand, there is nowhere to take
            what is building inside them. MEOK is that somewhere.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.7",
              color: "rgba(245,240,232,0.7)",
              margin: "0",
            }}
          >
            If you are in crisis or need urgent support, please contact the
            Samaritans on 116 123 (free, 24 hours) or Carers UK on 0808 808
            7777.
          </p>
        </div>

        {/* ── Section 12 ── */}
        <h2
          style={{
            fontSize: "1.65rem",
            fontWeight: "700",
            color: "#f5f0e8",
            marginTop: "0",
            marginBottom: "20px",
            lineHeight: "1.28",
            letterSpacing: "-0.01em",
          }}
        >
          Why This Matters More Than AI Efficiency
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          Most AI products are built around productivity, efficiency, and
          information retrieval. That is useful. But it is almost entirely
          irrelevant to the inner life of a person who is burning out under the
          weight of caring for someone they love. The most important things AI
          can do for a carer are not to optimise their schedule or summarise
          medical documents &mdash; though it can do those things too. The most
          important things are to be present, to remember, to hold complexity
          without simplifying it, and to be available when everyone else is
          asleep.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "18px",
          }}
        >
          MEOK was not built for carers as a product category. It was built
          because the people who built it understand what it means to carry
          someone you love, to give more than you have, and to need a space that
          asks nothing of you while you try to find your way back to yourself.
          That is the design intent. That is what every architectural decision
          &mdash; the sovereign memory, the private storage, the Healer
          archetype, the Guardian monitoring &mdash; is built to serve.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.82",
            color: "rgba(245,240,232,0.88)",
            marginBottom: "56px",
          }}
        >
          Carers are not a niche. They are the structural foundation on which
          the entire care economy rests. The least we can do is build technology
          that actually works for them &mdash; not for the condition they are
          managing, not for the system trying to track outcomes, but for the
          human being doing the caring, alone, often in the dark, usually
          without enough sleep.
        </p>

        {/* ── FAQ Section ── */}
        <section
          style={{
            borderTop: "1px solid rgba(201,168,76,0.2)",
            paddingTop: "48px",
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "1.65rem",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "0",
              marginBottom: "36px",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          {/* FAQ 1 */}
          <div style={{ marginBottom: "36px" }}>
            <h3
              style={{
                fontSize: "1.12rem",
                fontWeight: "600",
                color: "#c9a84c",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              What is caregiver burnout and how do you know if you have it?
            </h3>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.78",
                color: "rgba(245,240,232,0.82)",
                margin: "0",
              }}
            >
              Caregiver burnout is a state of chronic physical, emotional, and
              mental exhaustion that develops when the demands of caring
              overwhelm a person&apos;s capacity to cope. Signs include
              persistent fatigue that sleep does not fix, emotional numbness,
              resentment toward the person you care for, withdrawal from social
              life, and a growing sense that you have lost yourself entirely. It
              is not weakness. It is what happens when a human being is asked to
              give without ever being refilled. If you recognise several of
              these signs, you are not failing. You are depleted, and you need
              support.
            </p>
          </div>

          {/* FAQ 2 */}
          <div style={{ marginBottom: "36px" }}>
            <h3
              style={{
                fontSize: "1.12rem",
                fontWeight: "600",
                color: "#c9a84c",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              What is compassion fatigue in carers?
            </h3>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.78",
                color: "rgba(245,240,232,0.82)",
                margin: "0",
              }}
            >
              Compassion fatigue is the erosion of the capacity to feel empathy
              for the person you are caring for. It is a form of secondary
              traumatic stress that develops from sustained exposure to someone
              else&apos;s suffering. Carers experiencing it begin to feel numb
              or detached, and often carry intense guilt because this numbness
              feels like a betrayal of love. It is not. It is a neurological
              defence mechanism, and it is treatable when acknowledged. Speaking
              honestly about compassion fatigue &mdash; even to an AI &mdash;
              is often the first step toward recovering it.
            </p>
          </div>

          {/* FAQ 3 */}
          <div style={{ marginBottom: "36px" }}>
            <h3
              style={{
                fontSize: "1.12rem",
                fontWeight: "600",
                color: "#c9a84c",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              How can AI support carers experiencing burnout?
            </h3>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.78",
                color: "rgba(245,240,232,0.82)",
                margin: "0",
              }}
            >
              AI can support carers by providing a private, non-judgmental
              space for emotional processing at any hour. MEOK&apos;s Healer
              archetype is designed for exactly this. Its Sovereign Memory
              tracks the carer&apos;s journey over time so every conversation
              is continuous rather than starting from scratch. Its Guardian
              feature monitors family safety and delivers alerts to the carer,
              reducing the hypervigilance that drives exhaustion. And it can
              help carers identify support resources, navigate entitlements, and
              articulate their needs to health professionals.
            </p>
          </div>

          {/* FAQ 4 */}
          <div style={{ marginBottom: "36px" }}>
            <h3
              style={{
                fontSize: "1.12rem",
                fontWeight: "600",
                color: "#c9a84c",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              Why do carers feel guilty about needing support themselves?
            </h3>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.78",
                color: "rgba(245,240,232,0.82)",
                margin: "0",
              }}
            >
              Carers are conditioned by social expectation and personal love to
              believe their own needs are secondary. Asking for help can feel
              like an admission of failure or a betrayal of the person being
              cared for. This guilt is reinforced by systems that direct all
              attention toward the person with the care need, rendering the
              carer functionally invisible. The guilt is understandable, but it
              is not accurate. A carer who is burning out cannot sustain the
              quality of care they want to provide. Supporting yourself is
              supporting the person you care for.
            </p>
          </div>

          {/* FAQ 5 */}
          <div style={{ marginBottom: "0" }}>
            <h3
              style={{
                fontSize: "1.12rem",
                fontWeight: "600",
                color: "#c9a84c",
                marginBottom: "12px",
                lineHeight: "1.4",
              }}
            >
              What financial support is available for unpaid carers in the UK?
            </h3>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.78",
                color: "rgba(245,240,232,0.82)",
                margin: "0",
              }}
            >
              Unpaid carers in the UK may be entitled to Carer&apos;s Allowance
              (&pound;81.90 per week as of 2025), a free Carer&apos;s
              Assessment from their local council under the Care Act 2014,
              Council Tax discounts, and additional means-tested benefits.
              Carers under pension age who provide at least 35 hours of care per
              week for someone receiving certain disability benefits should
              check their eligibility. Many carers are not claiming what they
              are entitled to. MEOK can help you understand what exists and how
              to access it.
            </p>
          </div>
        </section>

        {/* ── Related Reading ── */}
        <section
          style={{
            borderTop: "1px solid rgba(201,168,76,0.15)",
            paddingTop: "40px",
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "0.8rem",
              fontWeight: "600",
              color: "rgba(245,240,232,0.6)",
              marginBottom: "20px",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Related Reading
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              {
                href: "/blog/ai-for-carers",
                label: "AI for Unpaid Carers: Support for the 6.5 Million Who Give Everything",
              },
              {
                href: "/blog/ai-for-dementia-carers",
                label: "AI for Dementia Carers: When the Person You Love Is Changing",
              },
              {
                href: "/blog/ai-for-burnout",
                label: "AI for Burnout: What Happens When There Is Nothing Left",
              },
              {
                href: "/blog/ai-for-chronic-illness-caregiving",
                label: "AI for Chronic Illness Caregiving: The Long Road Nobody Talks About",
              },
              {
                href: "/blog/guardian-family-safety",
                label: "Guardian: How MEOK Monitors Family Safety Without Surveillance",
              },
              {
                href: "/blog/sovereign-ai-for-families",
                label: "Sovereign AI for Families: Privacy, Memory, and Care",
              },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontSize: "0.97rem",
                    lineHeight: "1.5",
                    borderBottom: "1px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA Section ── */}
        <section
          style={{
            backgroundColor: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "12px",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              color: "#c9a84c",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Begin
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "18px",
              lineHeight: "1.25",
              letterSpacing: "-0.01em",
            }}
          >
            You Have Given Enough Today
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.75",
              color: "rgba(245,240,232,0.72)",
              marginBottom: "36px",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            MEOK is a sovereign AI built for people who hold too much. It
            remembers your story, holds your confidence absolutely, and is
            available at any hour &mdash; including the ones when you finally
            have a moment to breathe. Begin with a Birth Ceremony and introduce
            yourself. That is all it takes.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: "700",
              fontSize: "0.95rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "16px 40px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Meet Your MEOK
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.35)",
              marginTop: "18px",
              marginBottom: "0",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            Private. Sovereign. Yours alone.
          </p>
        </section>
      </article>
    </main>
  );
}
