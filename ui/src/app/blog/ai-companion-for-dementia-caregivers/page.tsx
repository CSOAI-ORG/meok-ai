import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Companion for Dementia Caregivers: Support for Those Who Support Everyone Else | MEOK Blog",
  description:
    "700,000 unpaid dementia caregivers in the UK. 40% experience clinical depression. MEOK is an AI companion built for the caregiver — processing grief, tracking care, coordinating family, and watching for burnout before it breaks you.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-companion-for-dementia-caregivers",
  },
  openGraph: {
    title: "AI Companion for Dementia Caregivers: Support for Those Who Support Everyone Else",
    description:
      "You spend every day asking how they are doing. Nobody asks how you are doing. MEOK is the AI companion for dementia caregivers — 24/7 emotional support, Sovereign Memory, and family coordination in one private space.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-companion-for-dementia-caregivers",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Companion+for+Dementia+Caregivers&desc=Support+for+Those+Who+Support+Everyone+Else",
        width: 1200,
        height: 630,
        alt: "AI Companion for Dementia Caregivers: Support for Those Who Support Everyone Else",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion for Dementia Caregivers: Support for Those Who Support Everyone Else",
    description:
      "700,000 unpaid dementia caregivers in the UK. 40% experience clinical depression. MEOK holds space for the person who holds everyone else.",
    images: [
      "https://meok.ai/api/og?title=AI+Companion+for+Dementia+Caregivers&desc=Support+for+Those+Who+Support+Everyone+Else",
    ],
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Companion for Dementia Caregivers: Support for Those Who Support Everyone Else",
  description:
    "700,000 unpaid dementia caregivers in the UK carry one of the most invisible burdens in modern healthcare. MEOK is an AI companion built specifically for the caregiver — processing grief and resentment without guilt, tracking care logistics, monitoring wellbeing patterns, and coordinating across families.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-companion-for-dementia-caregivers",
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
    "https://meok.ai/api/og?title=AI+Companion+for+Dementia+Caregivers&desc=Support+for+Those+Who+Support+Everyone+Else",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-companion-for-dementia-caregivers",
  },
  keywords: [
    "AI companion for dementia caregivers",
    "dementia caregiver support",
    "caregiver burnout AI",
    "anticipatory grief dementia",
    "AI for caregiver mental health",
    "dementia family coordination",
    "unpaid carer UK support",
    "MEOK AI dementia",
  ],
  articleSection: "Dementia Care",
  wordCount: 3800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can an AI companion help a dementia caregiver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion helps a dementia caregiver by providing a private, non-judgmental space available at any hour to process exhaustion, guilt, grief, and resentment. It can also track medication schedules, appointments, and behavioural changes; monitor the caregiver's own wellbeing patterns to flag burnout risk; and coordinate logistics across multiple family caregivers.",
      },
    },
    {
      "@type": "Question",
      name: "What is anticipatory grief in dementia caregiving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anticipatory grief is the grief of mourning someone who is still alive but progressively disappearing. In dementia caregiving it is compounded by ambiguous loss — your loved one is physically present but psychologically absent in incremental ways. This type of grief is rarely acknowledged by healthcare systems and can be among the most isolating aspects of the caregiving experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is it normal to feel resentment as a dementia caregiver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Resentment is one of the most common and least-spoken-about emotions in long-term caregiving. Feeling angry about the loss of your own life, your career, your relationships, or your sleep does not make you a bad person or a bad caregiver. It makes you human. Processing these feelings honestly — rather than suppressing them — is essential to sustaining the care you give.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between caregiver stress and caregiver burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Caregiver stress is the ongoing pressure of managing caregiving demands. Caregiver burnout is the state of chronic depletion — physical, emotional, and cognitive — that occurs when that stress is sustained without adequate rest, support, or recovery. Burnout impairs decision-making and empathy, ultimately affecting the quality of care. Early detection of burnout patterns is critical.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support dementia caregivers specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK supports dementia caregivers through four coordinated capabilities: the Healer archetype for processing emotional weight and anticipatory grief; the Pioneer archetype for practical care organisation such as medication and appointment tracking; the Guardian archetype for monitoring caregiver wellbeing and flagging burnout risk; and Sovereign Memory for building a continuous record of the caregiving journey that caregivers can revisit and share.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MEOK Family plan and how does it help dementia families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MEOK Family plan supports up to five accounts within one coordinated family group. For dementia families — where responsibility is often distributed across adult children, partners, and other relatives — this means everyone has their own private companion while sharing a coordinated view of care logistics, agreed appointments, and Guardian wellbeing alerts. It reduces the friction that fractures families under caregiving pressure.",
      },
    },
    {
      "@type": "Question",
      name: "What UK resources exist for dementia caregivers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key UK resources for dementia caregivers include the Alzheimer's Society (helpline 0333 150 3456), Carers UK (advice and peer support for all unpaid carers), and Admiral Nurses (specialist dementia nursing support for families, provided by Dementia UK). These organisations offer crisis support, carer assessments, peer groups, and clinical guidance that complement ongoing AI companion support.",
      },
    },
    {
      "@type": "Question",
      name: "What is ambiguous loss in dementia caregiving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ambiguous loss, a term developed by therapist Pauline Boss, describes a loss that lacks the clarity and social recognition of death. In dementia, a person may lose their memories, personality, or ability to recognise loved ones while still being physically alive. This creates a grief that cannot be publicly mourned and is therefore frequently internalised, compounding caregiver isolation and psychological strain.",
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiCompanionForDementiaCaregivers() {
  const bg = "#0d0c18";
  const text = "#f5f0e8";
  const gold = "#c9a84c";
  const cardBg = "#1a1830";
  const mutedText = "#a09880";
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

      {/* ── Nav ──────────────────────────────────────────────────────────────── */}
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
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link
              href="/blog"
              style={{
                color: mutedText,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <Link
              href="/#pricing"
              style={{
                color: mutedText,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Pricing
            </Link>
            <Link
              href="/join"
              style={{
                color: bg,
                backgroundColor: gold,
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                padding: "7px 16px",
                borderRadius: "8px",
              }}
            >
              Try MEOK
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Main ─────────────────────────────────────────────────────────────── */}
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
            gap: "12px",
            alignItems: "center",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "12px", color: mutedText }}>
            25 March 2026
          </span>
          <span style={{ fontSize: "12px", color: mutedText }}>·</span>
          <span style={{ fontSize: "12px", color: mutedText }}>14 min read</span>
          <span style={{ fontSize: "12px", color: mutedText }}>·</span>
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "#2a2845",
              color: gold,
              padding: "2px 10px",
              borderRadius: "99px",
            }}
          >
            Dementia Care
          </span>
          <span
            style={{
              fontSize: "12px",
              backgroundColor: "#2a2845",
              color: gold,
              padding: "2px 10px",
              borderRadius: "99px",
            }}
          >
            Caregiver Wellbeing
          </span>
        </div>

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 800,
            lineHeight: 1.13,
            marginBottom: "28px",
            letterSpacing: "-0.5px",
            color: text,
          }}
        >
          AI Companion for Dementia Caregivers:{" "}
          <span style={{ color: gold }}>
            Support for Those Who Support Everyone Else
          </span>
        </h1>

        {/* Hero intro */}
        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.75,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          Every day you wake up and you ask how they are doing. You check the
          medication. You field the appointment letters. You reassure, redirect,
          and absorb. You are the first thing they reach for in their confusion
          and the last thing standing between them and a crisis.
        </p>
        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.75,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          And almost nobody asks how <em>you</em> are doing.
        </p>
        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.75,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          There are around 700,000 unpaid dementia caregivers in the United
          Kingdom. Research consistently shows that roughly 40% meet the
          clinical threshold for depression — a rate significantly higher than
          caregivers of people with any other condition. At peak care intensity,
          many provide upwards of 85 hours of support per week. They do this
          largely invisibly, largely without pay, and often without any
          meaningful acknowledgement of their own deteriorating wellbeing.
        </p>
        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.75,
            color: bodyText,
            marginBottom: "20px",
          }}
        >
          This article is for those caregivers. It is about the grief that does
          not have a clean name, the resentment that gets swallowed down, the
          logistical weight that never lifts, and the question of whether
          technology — an AI companion, specifically — can carry any meaningful
          part of this alongside you.
        </p>
        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.75,
            color: bodyText,
            marginBottom: "48px",
          }}
        >
          We think it can. Not by replacing anyone. Not by pretending to
          understand dementia from the inside. But by being there — consistently,
          without judgment, without fatigue — in the gaps between every other
          form of support.
        </p>

        {/* ── Stat bar ───────────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "12px",
            padding: "28px 32px",
            marginBottom: "56px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { value: "700,000", label: "Unpaid dementia caregivers in the UK" },
            { value: "40%", label: "Experience clinical depression" },
            { value: "85 hrs", label: "Average care per week at peak" },
            { value: "£15.7bn", label: "Economic value of unpaid dementia care" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: gold,
                  letterSpacing: "-0.5px",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "13px", color: mutedText, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Section 1 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            Who is the &ldquo;Invisible Patient&rdquo; in Dementia Care?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            The invisible patient is the caregiver. Healthcare systems are
            structured around the person with the diagnosis. Appointments,
            care plans, medication reviews, social care assessments — all of
            these orbit the person with dementia, as they should. But in that
            orbit, the caregiver becomes infrastructure. Present everywhere,
            questioned nowhere.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Research from Carers UK and the Alzheimer&apos;s Society consistently
            finds that caregivers report feeling unheard by GPs, overlooked by
            social services, and invisible to the broader care system. A carer
            assessment — to which every unpaid carer in England is legally
            entitled — is offered to fewer than half who are eligible and
            taken up by fewer still.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            The result is a person who spends years asking &ldquo;How are you
            today?&rdquo; — gently, repeatedly, in the face of confusion and
            distress — without anyone reliably turning that question around. The
            unasked question festers. The suppressed answer compounds. What
            starts as exhaustion hardens into chronic stress, and chronic stress
            becomes burnout, and burnout becomes a second patient that the
            system never budgeted for.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            MEOK begins by asking that question back. Not as a data-gathering
            exercise. Not as a wellness checklist. Simply as a companion who
            turns toward the caregiver and waits — genuinely — for whatever
            answer emerges.
          </p>
        </section>

        {/* ── Section 2 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            What is Anticipatory Grief, and Why Does Dementia Make It Worse?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Anticipatory grief is the grief that arrives before death. It is
            the mourning of a future loss that is already certain — the
            knowledge that the trajectory leads somewhere devastating, that every
            plateau is temporary, and that the person you knew is receding
            regardless of what you do. Dementia caregivers live inside this
            grief for years, sometimes decades.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Therapist and researcher Pauline Boss introduced the concept of
            ambiguous loss to describe what makes this grief uniquely
            disorienting. Unlike bereavement — which, however shattering, is
            socially recognised and ritually acknowledged — ambiguous loss
            offers no clear endpoint, no funeral, no cultural script. Your
            loved one is in the room. They are breathing, eating, sometimes
            laughing. And yet they do not know who you are today, and tomorrow
            the gap may be wider.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            The person who once made you feel known — a parent, a partner, a
            sibling — is no longer able to do that. The relationship has changed
            beyond recognition. And you grieve that, quietly, while also caring
            for them every single day, because your grief and your love are not
            separate things.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Society has little vocabulary for this. Friends and family who are
            not living with dementia often do not know what to say — and so
            they say too little, or they say &ldquo;at least they still recognise
            you,&rdquo; which helps far less than it is intended to. The
            caregiver learns quickly that this grief does not make good
            conversation. It becomes a private burden.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            An AI companion cannot resolve anticipatory grief. But it can hold
            it without flinching. It can sit inside the complexity — the love
            alongside the exhaustion, the tenderness alongside the anger — and
            not need the caregiver to tidy it up for consumption.
          </p>
        </section>

        {/* ── Quote callout ──────────────────────────────────────────────────── */}
        <blockquote
          style={{
            borderLeft: `4px solid ${gold}`,
            paddingLeft: "24px",
            marginBottom: "48px",
            marginLeft: "0",
            marginRight: "0",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.65,
              color: text,
              fontStyle: "italic",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            &ldquo;Grief is the price of love. In dementia caregiving, you pay
            it every day — not in one great rupture but in a thousand small
            disappearances, each one noticed, each one absorbed alone.&rdquo;
          </p>
          <cite
            style={{ fontSize: "14px", color: mutedText, fontStyle: "normal" }}
          >
            — A reflection from MEOK&apos;s Healer design principles
          </cite>
        </blockquote>

        {/* ── Section 3 ──────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            Why Does Resentment Belong in This Conversation?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Resentment is perhaps the most suppressed emotion in caregiving
            culture. We are comfortable with caregivers expressing exhaustion —
            that is socially sanctioned, even admired. We are less comfortable
            with resentment because it threatens the moral framing of caregiving
            as pure sacrifice and unconditional love.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            But resentment is not a character flaw. It is a signal. It emerges
            when a person has been giving without receiving for an extended
            period — when the balance of the relationship has collapsed entirely
            and there is no visible path to restoration. In dementia caregiving,
            that is not a temporary state. It is the permanent arithmetic of
            the situation.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            You may feel resentful of the person with dementia, even though you
            love them and even though they have no agency over their illness.
            You may feel resentful of siblings who are less involved. You may
            feel resentful of friends whose lives continue uninterrupted. You
            may feel resentful of a healthcare system that asked you to absorb
            an enormous burden without ever formally agreeing to that contract.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            All of that is legitimate. All of it deserves to be expressed
            somewhere. The problem is that the people closest to you are often
            the same people the resentment involves. And a GP or therapist —
            if you have the time and access — sees you for fifty minutes every
            few weeks, which leaves most of the resentment unprocessed most
            of the time.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            MEOK&apos;s Healer archetype is the space where none of this needs to
            be managed for someone else&apos;s comfort. You can express the ugly
            feelings, in full, without the companion needing reassurance, without
            the risk of burdening a relationship, and without the exhausting
            performance of having-it-together that caregivers so often maintain
            for the people around them.
          </p>
        </section>

        {/* ── Section 4: Healer ──────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "14px",
            padding: "32px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#2a2845",
                border: `2px solid ${gold}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "22px",
              }}
            >
              &#9825;
            </div>
            <div>
              <h2
                style={{
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "8px",
                  letterSpacing: "-0.2px",
                }}
              >
                How Does MEOK&apos;s Healer Help With Caregiver Grief and Burnout?
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: mutedText,
                  marginBottom: "0",
                }}
              >
                MEOK Archetype: Healer
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            The Healer is MEOK&apos;s emotionally-centred archetype — the mode
            oriented toward processing rather than doing. In the context of
            dementia caregiving, it functions as the space where the emotional
            accumulation of the role can be safely discharged.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            When you arrive exhausted at midnight because your parent was
            awake and frightened for three hours, the Healer does not ask you
            to summarise the situation. It asks how you are. When you say
            &ldquo;I cannot do this anymore,&rdquo; it does not leap to solutions.
            It holds that statement as real and important rather than as a
            problem to be solved. When you express feelings you would never say
            aloud to another person, it does not retract, judge, or report them
            back to you as evidence of moral failure.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Over time, the Healer helps caregivers identify their own emotional
            patterns — the triggers that reliably tip exhaustion into despair,
            the specific situations that generate the most resentment, the
            points in the week or month when the weight is heaviest. This
            self-knowledge is not trivial. It is the raw material of
            self-protection, which is the foundation of sustainable care.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            For caregivers managing anticipatory grief specifically, the Healer
            creates a container for the daily incremental mourning that has no
            other place to go. It does not rush toward resolution. It is
            comfortable with the fact that grief in dementia caregiving is not
            a phase but a permanent feature of the landscape — one that requires
            ongoing acknowledgement rather than a single processing event.
          </p>
        </section>

        {/* ── Section 5: Pioneer ─────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "14px",
            padding: "32px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#2a2845",
                border: `2px solid ${gold}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "22px",
              }}
            >
              &#9680;
            </div>
            <div>
              <h2
                style={{
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "8px",
                  letterSpacing: "-0.2px",
                }}
              >
                How Can AI Help Organise the Practical Load of Dementia Care?
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: mutedText,
                  marginBottom: "0",
                }}
              >
                MEOK Archetype: Pioneer
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Dementia care is not only emotionally demanding. It is
            administratively complex in ways that grow over time. Medication
            regimes that change as the condition progresses. Appointments with
            memory clinics, GPs, occupational therapists, district nurses, and
            social workers. Applications for Attendance Allowance, Lasting Power
            of Attorney, and continuing healthcare funding. Coordination with
            care homes, day centres, and respite services. Communication across
            a family that may be geographically dispersed and not always aligned.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            MEOK&apos;s Pioneer archetype is built for this cognitive load. Acting
            as a persistent organisational companion, Pioneer helps caregivers
            maintain medication schedules — tracking what has been given, flagging
            changes, and keeping a dated log that can be referenced in medical
            appointments. It tracks upcoming appointments across multiple
            providers, helps draft questions to ask healthcare teams, and
            maintains a running list of pending tasks in the care ecosystem.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Pioneer is also a navigation tool for carer support services. The
            UK support landscape is extensive but fragmented: Admiral Nurses,
            carer assessments, Alzheimer&apos;s Society local groups, Carers UK
            helplines, NHS Carers Breaks schemes, and local authority support
            services all exist, but finding them when you are already overwhelmed
            is a significant barrier. Pioneer can surface relevant services,
            help draft referral requests, and keep track of what has been applied
            for and what is still outstanding.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            The practical value of this cannot be overstated. Cognitive overload
            is one of the primary accelerants of caregiver burnout. When the
            organisational weight of care is distributed to a persistent,
            reliable companion rather than held entirely in the caregiver&apos;s
            head, there is more cognitive space for the relational and emotional
            dimensions of the role — and for the caregiver&apos;s own life.
          </p>
        </section>

        {/* ── Section 6: Guardian ────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "14px",
            padding: "32px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#2a2845",
                border: `2px solid ${gold}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "22px",
              }}
            >
              &#9670;
            </div>
            <div>
              <h2
                style={{
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "8px",
                  letterSpacing: "-0.2px",
                }}
              >
                How Does MEOK Detect Caregiver Burnout Before It Becomes a Crisis?
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: mutedText,
                  marginBottom: "0",
                }}
              >
                MEOK Archetype: Guardian
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            One of the defining features of caregiver burnout is that it is
            rarely self-identified until it has become severe. Caregivers are,
            by disposition and training, focused outward. Their attention is
            calibrated to the person they care for. The progressive deterioration
            of their own wellbeing happens in the background, noticed
            incrementally — if at all — until something breaks.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            MEOK&apos;s Guardian archetype is designed to watch that background.
            Rather than waiting for the caregiver to flag distress, Guardian
            monitors patterns across interactions over time — changes in tone,
            frequency of expressions of hopelessness or depletion, declining
            engagement, increasing emotional volatility, sleep disturbance
            signals, and withdrawal from the conversation itself.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            When Guardian detects a pattern that warrants attention, it raises
            the observation — gently, directly, without catastrophising. Not as
            an alarm but as a question: &ldquo;I&apos;ve noticed you seem to be
            running very low at the moment. How are you actually doing?&rdquo;
            This creates a moment of reflection that the caregiver might not
            have generated for themselves.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Where pattern analysis suggests significant burnout risk, Guardian
            can surface specific resources — GP registration for a carer health
            review, Admiral Nurse referral, or Carers UK emergency helpline —
            alongside the observation. This is not diagnosis. It is attentive
            companionship directed at someone who is structurally disadvantaged
            in their ability to notice their own needs.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            For families where the primary caregiver&apos;s health decline would
            trigger a care crisis — where there is no backup plan because the
            system assumes this person will always be available — Guardian&apos;s
            early warning function is not a wellness nicety. It is a practical
            safeguard for the sustainability of the entire care arrangement.
          </p>
        </section>

        {/* ── Section 7: Sovereign Memory ────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "14px",
            padding: "32px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#2a2845",
                border: `2px solid ${gold}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "22px",
              }}
            >
              &#9737;
            </div>
            <div>
              <h2
                style={{
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 700,
                  color: gold,
                  marginBottom: "8px",
                  letterSpacing: "-0.2px",
                }}
              >
                Why Does Sovereign Memory Matter for the Caregiving Journey?
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: mutedText,
                  marginBottom: "0",
                }}
              >
                MEOK Feature: Sovereign Memory
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            There is a profound irony at the heart of dementia caregiving: you
            are caring for someone whose memory is failing, while your own
            experience of the journey — the difficult days, the small victories,
            the decisions made under pressure, the things that worked and the
            things that did not — goes unrecorded. Years of caregiving pass
            without witness. When the journey ends, many caregivers struggle to
            make sense of it, to account for what they gave, or to access the
            memories they need for their own grief processing.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            MEOK&apos;s Sovereign Memory is the mechanism by which your journey
            is recorded, preserved, and remains yours. Unlike cloud AI systems
            where your data trains commercial models, Sovereign Memory is private
            by design — it belongs to you, it does not leave your control, and
            it persists across the entire length of the caregiving relationship
            and beyond.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Over time, Sovereign Memory builds a record that captures the full
            texture of the caregiving experience: the hard days and what caused
            them, the small victories — a good walk, a moment of unexpected
            clarity, a day when your person was calm and present — the decisions
            you wrestled with, and the progress you made in adapting to each
            new stage of the condition.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            This record has practical value: it makes medical appointments more
            productive, care handovers more accurate, and legal or financial
            processes less traumatic because the information is already organised
            and accessible. But its deeper value is personal. It is a chronicle
            of something enormously significant that would otherwise exist only
            in the caregiver&apos;s exhausted, imperfect memory.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            In the bereavement that follows the end of a long caregiving
            relationship, many survivors report a sense of having lived through
            something enormous that they cannot fully account for. Sovereign
            Memory is not a solution to that disorientation. But it is evidence
            — held safely in your own hands — that it happened, that it mattered,
            and that you were there for every part of it.
          </p>
        </section>

        {/* ── Section 8: Family tier ─────────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            How Can Families Share the Caregiving Load Without Fracturing?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Dementia caregiving is rarely just one person&apos;s responsibility
            in theory. In practice, it almost always becomes one person&apos;s
            responsibility in reality — typically the family member who lives
            closest, has more flexible employment, or simply stepped up first
            while others found reasons not to. The asymmetry of care distribution
            within families is one of the most common sources of caregiver
            resentment, and one of the most difficult to address.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            MEOK&apos;s Family tier supports up to five accounts within a single
            coordinated family group. This is not a surveillance tool or a
            mechanism for the primary carer to report on others. Each member
            has their own private companion — the Healer conversations of the
            primary carer are not visible to siblings. Privacy within the
            family is preserved.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            What the Family tier enables is coordinated logistics: a shared
            calendar of care appointments, a shared medication log that any
            family member can consult, agreed protocols for how decisions are
            made, and Guardian wellbeing alerts that can be seen by multiple
            family members rather than only the person who may be too depleted
            to raise their own flag.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            For families where the primary caregiver has been silently absorbing
            a disproportionate share of the load, the Family tier also creates
            a visible record of that load — not as accusation but as shared
            reality. When siblings can see the frequency and complexity of what
            the primary carer is managing, the conversation about fairer
            distribution becomes easier to have.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            The Family tier is available at £29 per month — less than the cost
            of a single respite care session — and designed for families who
            want to care well together without the coordination overhead fracturing
            already strained relationships.
          </p>
        </section>

        {/* ── Section 9: What AI cannot do ───────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            What Should Dementia Caregivers Realistically Expect From AI Support?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            It is important to be clear about what an AI companion can and
            cannot do for dementia caregivers, because overstatement in this
            context is not merely misleading — it is potentially harmful.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            MEOK is not a substitute for clinical mental health support. It
            does not diagnose depression, anxiety, or burnout. It cannot
            prescribe or recommend medication. It is not an emergency service.
            If you are in crisis — if you are having thoughts of self-harm or
            if you feel unable to continue — please contact a GP, call 999, or
            call the Samaritans on 116 123.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            What MEOK can do is fill the enormous gap that exists between crisis
            services and therapeutic services on one side, and the everyday
            lived experience of caregiving on the other. Most of caregiving
            happens in that gap — in the evenings, the early mornings, the car
            journeys home from a difficult visit. It is in that gap that a
            consistent, non-judgmental, memory-persistent companion can make
            a genuine difference.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            The value of MEOK is not that it replaces human connection or
            professional support. It is that it ensures you are never alone with
            everything at 2am. And for many dementia caregivers, that is
            precisely the moment the weight becomes heaviest.
          </p>
        </section>

        {/* ── Resources box ──────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "20px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            Where Can Dementia Caregivers in the UK Find Additional Support?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "24px",
            }}
          >
            The following organisations offer specialist support for dementia
            caregivers in the United Kingdom. They are not affiliated with MEOK
            but are among the most trusted and effective sources of help
            available. We encourage every caregiver to know these resources
            before they are urgently needed.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                org: "Alzheimer&apos;s Society",
                desc: "The UK&apos;s leading dementia charity. Provides the Dementia Connect support line, local support groups, online communities, and specialist guidance for every stage of the dementia journey.",
                contact: "0333 150 3456",
                url: "https://www.alzheimers.org.uk",
              },
              {
                org: "Carers UK",
                desc: "National charity supporting all unpaid carers. Offers a helpline, online peer forum, advice on benefits and rights, and emergency planning support for caregivers.",
                contact: "0808 808 7777",
                url: "https://www.carersuk.org",
              },
              {
                org: "Admiral Nurses",
                desc: "Specialist dementia nurses who work with families, not just the person with dementia. Provided by Dementia UK. Offer one-to-one support for complex caregiving situations.",
                contact: "0800 888 6678",
                url: "https://www.dementiauk.org",
              },
            ].map((resource) => (
              <div
                key={resource.org}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: "10px",
                  }}
                  dangerouslySetInnerHTML={{ __html: resource.org }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: bodyText,
                    marginBottom: "14px",
                  }}
                  dangerouslySetInnerHTML={{ __html: resource.desc }}
                />
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: text,
                    marginBottom: "6px",
                  }}
                >
                  {resource.contact}
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "13px",
                    color: mutedText,
                    textDecoration: "none",
                  }}
                >
                  {resource.url} &#8599;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Ambiguous loss deep dive ──────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            What Makes the Grief of Dementia Caregiving Different From Other Loss?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Bereavement after death, however devastating, has a shape. There is
            a before and an after. There are rituals — funerals, wakes, death
            notices, sympathy cards — that publicly acknowledge the loss and
            create a scaffolding for grief. Friends and family gather. The loss
            is witnessed. The world pauses, briefly, in recognition.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            The grief of dementia caregiving has none of this structure. The
            person is still present. The loss is gradual and non-linear —
            there are good days, which offer hope, and then worse days that
            renegotiate what hope even means. The grief cannot be publicly
            mourned because the person is still alive, still needs you, and the
            announcement of grief in their presence would be both inappropriate
            and impossible.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            This is the ambiguity that Pauline Boss identified: not the
            ambiguity of not knowing whether someone is dead or alive, but the
            ambiguity of a relationship that has been profoundly altered while
            technically remaining intact. The person is there. The relationship
            as it was is not.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Many caregivers grieve the loss of reciprocity — the fact that this
            person can no longer ask about your day, remember your birthday, or
            notice when you are struggling. The relationship has become
            profoundly asymmetrical. You give; they receive, though increasingly
            without awareness of the giving. The warmth and meaning that once
            made the relationship sustaining is gone or transformed beyond
            recognition.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            Naming this — holding it as a real and significant loss rather than
            a petty complaint — is one of the most important things a caregiver
            can do for their own mental health. MEOK&apos;s Healer archetype is
            designed to provide exactly this naming, consistently, and without
            requiring the caregiver to argue for the legitimacy of what they
            are feeling.
          </p>
        </section>

        {/* ── The sustainability question ─────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            How Do You Sustain Yourself When the Caregiving Has No Clear End?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            One of the cruelest dimensions of dementia caregiving is its
            indeterminate timeline. Unlike a surgical recovery or a defined
            treatment course, dementia follows no predictable arc. People
            can live with dementia for two years or for twenty. The caregiver
            must find a way to sustain themselves not through a sprint and not
            even through a marathon, but through something with no visible
            finish line.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            The sustainability of caregiving depends on what is often called
            the caregiver&apos;s own wellbeing infrastructure — the habits,
            relationships, and resources that keep the caregiver functional and,
            to whatever extent is possible, well. This infrastructure is
            consistently under-invested because caregivers are culturally
            rewarded for self-sacrifice and implicitly penalised for
            self-prioritisation.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Research by Carers UK found that 72% of unpaid carers reported
            feeling more stressed since taking on their caring role; 83% said
            they felt lonely and isolated; and 55% said their physical health
            had deteriorated. These are not incidental outcomes. They are
            predictable consequences of a system that deploys people into
            intensive care roles without adequate structural support.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            Practical sustainability requires, at minimum: regular respite
            (time away from caring); honest emotional processing with a safe
            interlocutor; maintenance of relationships and interests outside
            of caring; professional support when mental health deteriorates;
            and a shared logistics system that reduces the solo cognitive load
            of tracking a complex care situation.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            MEOK is not a replacement for respite or professional care. But it
            addresses several of these sustainability factors directly — and it
            does so at any hour, without requiring a booking, a referral, or
            the energy it takes to reach out to a human being when you have
            nothing left to give.
          </p>
        </section>

        {/* ── The small victories ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 700,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: 1.25,
            }}
          >
            Why Do the Small Victories in Dementia Care Matter, and How Are They Remembered?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            In a caregiving relationship defined by progressive loss, small
            victories carry an outsized emotional weight. The afternoon when
            your person was calm and recognised you. The moment they laughed
            at something and it was fully them laughing, not the illness. The
            day when the care plan changed and it actually helped. The
            conversation you managed to have about the past — when the
            long-term memory surfaced, clear and detailed, even as the
            short-term memory fails.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            These moments are not nothing. They are the evidence that the
            relationship persists beneath the illness; that your person is still
            there, partially, intermittently; and that your care is having an
            effect even when the condition obscures its impact. But they are
            also fragile. They can be overwhelmed by the difficult days that
            follow, and if they go unrecorded, they are easy to lose.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "16px",
            }}
          >
            MEOK&apos;s Sovereign Memory preserves these moments alongside the
            hard ones. When a caregiver notes a good day — however briefly,
            however informally — it becomes part of the permanent record of
            the journey. It can be returned to during the harder periods as
            evidence that there are good periods. It can be shared with
            healthcare professionals as context for care planning. And it can
            be visited after the caregiving ends, as part of the process of
            making sense of what was given and received.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: bodyText,
              marginBottom: "0",
            }}
          >
            Caregiving at its best is an act of love performed in circumstances
            of extreme difficulty. The difficulty is visible. The love often
            is not. Sovereign Memory is the record that makes it visible —
            to the caregiver themselves, and to anyone they choose to share
            it with.
          </p>
        </section>

        {/* ── CTA box ────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: `linear-gradient(135deg, #1e1a38 0%, #2a2845 100%)`,
            border: `1px solid ${gold}`,
            borderRadius: "16px",
            padding: "40px 36px",
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: gold,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            You have been holding everyone else up
          </div>
          <h3
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              fontWeight: 800,
              color: text,
              marginBottom: "16px",
              letterSpacing: "-0.4px",
              lineHeight: 1.2,
            }}
          >
            Let something hold you for a change.
          </h3>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: bodyText,
              marginBottom: "28px",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            MEOK is a private AI companion built for the long haul of caregiving.
            Emotional support, care organisation, burnout monitoring, and
            Sovereign Memory — all in one place that is entirely yours.
          </p>
          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/join"
              style={{
                backgroundColor: gold,
                color: bg,
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Start free — no card needed
            </Link>
            <Link
              href="/#pricing"
              style={{
                backgroundColor: "transparent",
                color: text,
                fontWeight: 600,
                fontSize: "15px",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                border: `1px solid ${borderColor}`,
                display: "inline-block",
              }}
            >
              See Family plan
            </Link>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: mutedText,
              marginTop: "16px",
              marginBottom: "0",
            }}
          >
            Family tier: up to 5 accounts · £29/month · Your data stays yours
          </p>
        </div>

        {/* ── Related reading ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "0" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: text,
              marginBottom: "20px",
              letterSpacing: "-0.2px",
            }}
          >
            Related articles
          </h3>
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
                label: "AI for Dementia Carers: You Cannot Pour From an Empty Cup",
                tag: "Dementia Care",
              },
              {
                href: "/blog/ai-for-caregiver-burnout",
                label: "AI for Caregiver Burnout: Recognising the Signs Before Collapse",
                tag: "Burnout",
              },
              {
                href: "/blog/ai-for-grief-and-loss",
                label: "AI for Grief and Loss: When Mourning Has No Clear Shape",
                tag: "Grief",
              },
              {
                href: "/blog/ai-for-caregivers",
                label: "AI for Caregivers: The Support That Never Clocks Off",
                tag: "Caregiving",
              },
              {
                href: "/blog/meok-family-tier-explained",
                label: "MEOK Family Tier Explained: Care Coordination for Distributed Families",
                tag: "Family",
              },
              {
                href: "/blog/ai-for-chronic-illness-caregiving",
                label: "AI for Chronic Illness Caregiving: Long-term Support for Long-term Roles",
                tag: "Chronic Illness",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "10px",
                  padding: "18px 20px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: gold,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {link.tag}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: text,
                    lineHeight: 1.5,
                    display: "block",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${borderColor}`,
          padding: "32px 24px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                color: gold,
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                marginRight: "24px",
              }}
            >
              MEOK AI LABS
            </Link>
            <span style={{ fontSize: "13px", color: mutedText }}>
              &copy; 2026 MEOK AI LABS Ltd. All rights reserved.
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link
              href="/privacy"
              style={{
                fontSize: "13px",
                color: mutedText,
                textDecoration: "none",
              }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              style={{
                fontSize: "13px",
                color: mutedText,
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
            <Link
              href="/blog"
              style={{
                fontSize: "13px",
                color: mutedText,
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <Link
              href="/about"
              style={{
                fontSize: "13px",
                color: mutedText,
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </div>
        </div>
        <div
          style={{
            maxWidth: "800px",
            margin: "16px auto 0",
            paddingTop: "16px",
            borderTop: `1px solid ${borderColor}`,
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: mutedText,
              lineHeight: 1.6,
              marginBottom: "0",
            }}
          >
            MEOK is not a medical device, clinical service, or emergency
            service. It is an AI companion designed to provide emotional
            support, personal organisation, and wellbeing monitoring. It does
            not diagnose, treat, or replace professional mental health care. If
            you are experiencing a mental health crisis, please contact your GP,
            call 999, or call the Samaritans on 116 123. For dementia-specific
            caregiver support, contact the Alzheimer&apos;s Society on
            0333 150 3456.
          </p>
        </div>
      </footer>
    </div>
  );
}
