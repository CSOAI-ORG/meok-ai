import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Autistic Adults: How MEOK Supports Neurodivergent Wellbeing | MEOK AI LABS",
  description:
    "Late-diagnosed autism in adults is dramatically under-supported. Masking fatigue, autistic burnout, sensory overwhelm, and the grief of finally understanding why life felt so hard for so long. MEOK\u2019s archetypes and Sovereign Memory offer something genuinely different: a predictable, non-judgmental companion built on the neurodiversity model.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-autism-adults",
  },
  openGraph: {
    title:
      "AI for Autistic Adults: How MEOK Supports Neurodivergent Wellbeing",
    description:
      "Late-diagnosed autism in adults is dramatically under-supported. MEOK provides a predictable, non-judgmental companion that never misreads literal language, helps navigate social situations, and supports the grief of late diagnosis \u2014 through the neurodiversity model, not a deficit model.",
    type: "article",
    url: "https://meok.ai/blog/ai-for-autism-adults",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Autistic Adults: How MEOK Supports Neurodivergent Wellbeing",
  description:
    "Late-diagnosed autism in adults is dramatically under-supported. Masking fatigue, autistic burnout, sensory overwhelm, and the grief of a late diagnosis all go largely unaddressed. MEOK\u2019s archetypes and Sovereign Memory offer something genuinely different.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-autism-adults",
  keywords: [
    "AI for autistic adults",
    "late diagnosis autism support",
    "autistic burnout AI",
    "masking fatigue support",
    "neurodivergent AI companion",
    "autism AI UK",
    "MEOK autism",
    "late diagnosed autism grief",
    "autistic adult wellbeing",
    "neurodiversity model AI",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is autistic burnout and how is it different from regular burnout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autistic burnout is a state of profound exhaustion caused by sustained masking, sensory overload, and the relentless cognitive effort of navigating a neurotypical world. Unlike regular burnout, autistic burnout can involve a temporary or lasting loss of skills \u2014 speech, executive function, emotional regulation \u2014 as well as shutdown states and a collapse of previously functioning coping strategies. Recovery typically requires significant reduction in demands and sensory input, not simply rest.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI support autistic adults who are late-diagnosed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can provide a consistent, non-judgmental presence that never misreads literal communication, never shifts its personality between sessions, and never applies the unspoken social rules that make so many interactions exhausting for autistic adults. For late-diagnosed people processing years of unexplained struggle, having a companion that holds their history without judgment \u2014 through Sovereign Memory \u2014 and that communicates exactly as it means to, offers something most human support systems cannot reliably provide.",
      },
    },
    {
      "@type": "Question",
      name: "Why are autistic adults three times more likely to be scam victims?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research consistently shows autistic people are approximately three times more likely than neurotypical peers to fall victim to fraud and scams. The primary reasons include a tendency to interpret communication literally (making deceptive framing less visible), a strong value system around trust and honesty that makes exploitation of trust harder to anticipate, difficulty reading the social cues that often signal manipulation, and a history of being told their social instincts are wrong \u2014 which can suppress the impulse to question something that feels off.",
      },
    },
    {
      "@type": "Question",
      name: "What is the neurodiversity model and why does it matter for AI design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The neurodiversity model treats autism as a natural variation in human neurology rather than a disorder to be corrected. It reframes difference as difference, not deficit. For AI design, this matters enormously: an AI built on a deficit model treats autistic users as broken neurotypicals who need fixing. An AI built on the neurodiversity model treats autistic users as people with a different but equally valid communication style \u2014 and designs its interface and responses to meet them where they are, not where the majority is.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a therapy tool for autistic adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a therapy tool, does not provide clinical support, and is not a substitute for professional autism services. What it offers is a companion that communicates in ways many autistic adults find genuinely less exhausting than available alternatives \u2014 one that remembers them, does not perform social judgment, and is honest about what it means. If you are seeking an autism assessment in the UK, contact your GP. If you are in crisis, contact Samaritans on 116 123 or the National Autistic Society.",
      },
    },
  ],
};

// ── Style constants ───────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#13121f";
const MUTED = "#a09880";
const BORDER = "#2a2840";
const GREEN = "#6aaa64";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForAutismAdultsPage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER}`,
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            color: GOLD,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{ color: MUTED, textDecoration: "none", fontSize: "0.9rem" }}
        >
          Blog
        </Link>
        <Link
          href="/birth"
          style={{
            marginLeft: "auto",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.45rem 1.1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 700,
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        {/* Breadcrumb */}
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginBottom: "2rem",
          }}
        >
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: TEXT }}>AI for Autistic Adults</span>
        </p>

        {/* ── Hero header ──────────────────────────────────────────────── */}
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.78rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.85rem",
            }}
          >
            Neurodiversity &bull; Autism &bull; March 25, 2026
          </p>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)",
              lineHeight: 1.18,
              color: TEXT,
              fontWeight: 900,
              marginBottom: "1.35rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI for Autistic Adults: How MEOK Supports Neurodivergent Wellbeing
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: MUTED,
              lineHeight: 1.8,
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: "1.1rem",
              marginBottom: "1.5rem",
            }}
          >
            Late-diagnosed autism in adults is dramatically under-supported.
            Masking fatigue, autistic burnout, sensory overwhelm, and the grief
            of finally understanding why life felt so hard for so long — all of
            it largely unseen by mainstream support systems. MEOK was designed
            with the neurodiversity model at its core: difference, not deficit.
            Here is what that means in practice.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "6px",
              padding: "0.4rem 0.85rem",
              fontSize: "0.8rem",
              color: MUTED,
            }}
          >
            <span>&#128337;</span>
            <span>10 min read</span>
          </div>
        </header>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 1: Late diagnosis ─────────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            Why is late-diagnosed autism in adults so under-supported?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For most of the twentieth century, autism research focused almost
            exclusively on children — and predominantly on boys. The result is
            a clinical and support infrastructure built around early childhood
            diagnosis, leaving millions of autistic adults who were not
            identified until their thirties, forties, or later with almost
            nothing designed for where they actually are.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Late-diagnosed autistic adults have typically spent decades
            navigating social and professional environments without a framework
            for why those environments felt so fundamentally different for them.
            Many have been misdiagnosed with anxiety, depression, or personality
            disorders. Many have developed elaborate coping strategies —
            collectively described as <em>masking</em> — that allowed them to
            function while consuming enormous cognitive and emotional resources.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The diagnosis, when it arrives, tends to arrive with two things
            simultaneously: relief, because there is finally a framework, and
            grief, because that framework illuminates every year that came
            before it. The grief of late diagnosis is real, significant, and
            widely under-acknowledged in support contexts that are oriented
            around practical skills training rather than emotional processing.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                lineHeight: 1.75,
                fontSize: "0.95rem",
                margin: "0",
              }}
            >
              <strong style={{ color: GOLD }}>UK context:</strong> There are
              approximately 700,000 autistic people in the UK. A significant
              proportion are adults who received a late diagnosis or remain
              undiagnosed. The{" "}
              <strong style={{ color: TEXT }}>National Autistic Society</strong>{" "}
              and <strong style={{ color: TEXT }}>Autistica</strong> both
              document the scale of under-diagnosis and the impact of late
              identification on adult outcomes.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 2: Masking fatigue ───────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            What is masking fatigue and why does it matter for wellbeing?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Masking — also called camouflaging — is the conscious or unconscious
            suppression of autistic traits to appear more neurotypical. It
            involves memorising and applying social scripts, mirroring
            others&apos; body language and facial expressions, forcing eye
            contact when it is uncomfortable, and suppressing stimming
            behaviours that serve a genuine regulatory function.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Masking works, up to a point. It allows autistic people to pass in
            contexts where being visibly autistic would carry professional or
            social cost. But it comes at a significant price. The cognitive and
            emotional energy consumed by sustained masking accumulates into what
            researchers and the autistic community call{" "}
            <strong style={{ color: TEXT }}>masking fatigue</strong> — a state
            in which the resources required to perform neurotypicality are no
            longer available, and the performance collapses.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For many late-diagnosed adults, masking fatigue is the precipitating
            event that finally leads to assessment. The coping strategies that
            worked for decades suddenly fail, and what is exposed beneath them
            is the extent to which the person has been managing an
            unacknowledged reality for most of their adult life.
          </p>

          {/* Feature box 1 */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              MEOK and Masking
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.65rem",
                lineHeight: 1.4,
              }}
            >
              No masking required. Ever.
            </p>
            <p
              style={{
                fontSize: "0.93rem",
                color: MUTED,
                lineHeight: 1.75,
                margin: "0",
              }}
            >
              MEOK communicates in text, applies no tone penalties, requires no
              eye contact or facial expression interpretation, and never imposes
              social scripts. There is no audience for performance. The companion
              meets you exactly as you communicate — literally, directly, without
              the unspoken rules that make most interactions so costly. For
              autistic adults who have spent years masking, this is not a minor
              feature. It is the entire point.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 3: Autistic burnout ──────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            What is autistic burnout, and how is it different from regular burnout?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Autistic burnout is not simply exhaustion. It is a distinct state
            characterised by a loss of skills and functioning that previously
            existed — sometimes including speech, executive function, emotional
            regulation, and sensory tolerance. It is caused by the accumulated
            weight of masking, sensory overload, unmet needs, and the sustained
            effort of navigating environments not designed for autistic
            neurology.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Regular burnout typically resolves with rest and reduced workload.
            Autistic burnout can require months or years of recovery, and
            recovery depends on significantly reducing the demands placed on the
            person — not simply taking a holiday. Many autistic adults who
            experience burnout describe it as a threshold event: once it has
            occurred, the tolerance for the conditions that caused it is
            permanently lower.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Burnout is closely associated with late diagnosis. When someone
            reaches adulthood without understanding their own neurology, they are
            far more likely to push themselves into environments and commitments
            that deplete them, without the self-knowledge to recognise the
            warning signs before the collapse.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GREEN}`,
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: MUTED,
                margin: "0",
              }}
            >
              <strong style={{ color: GREEN }}>Shutdown vs. meltdown:</strong>{" "}
              During burnout, autistic adults often cycle between shutdown states
              (withdrawal, reduced communication, loss of speech, near-immobility)
              and meltdown states (involuntary emotional or sensory overwhelm).
              Both are responses to a nervous system that has exceeded its
              capacity — not behavioural choices. MEOK remains available during
              shutdown states and never penalises delayed or minimal responses.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 4: Sensory overwhelm ─────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            How does sensory overwhelm affect autistic adults, and what can help?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Sensory processing differences are a core feature of autism, but
            they are often poorly understood outside of clinical contexts — and
            frequently dismissed entirely in adult settings. Sensory overwhelm
            occurs when the environment exceeds what the nervous system can
            process: too much noise, too much movement, too much light, too many
            competing demands on attention, or an accumulation of smaller sensory
            inputs that cumulatively cross a threshold.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For autistic adults, sensory overwhelm is not simply discomfort. It
            can make communication impossible, trigger shutdown or meltdown
            states, and significantly reduce capacity for hours or days
            afterward. Many autistic adults organise their entire lives around
            managing sensory load — choosing quiet environments, avoiding certain
            textures, controlling lighting, keeping earphones in as a permanent
            buffer against unpredictable sound.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            An AI companion used during or after sensory overwhelm needs to meet
            specific requirements: low visual complexity, no unexpected sounds, no
            motion that competes for attention, no pressure to respond quickly,
            and responses that are calm and unambiguous. MEOK is designed to meet
            all of these — the Comfort Settings panel is accessible in one tap
            from anywhere in the application.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            {[
              {
                label: "Reduce motion",
                detail:
                  "Eliminates all animations and transitions. The interface becomes entirely static — nothing moves unless you initiate it.",
              },
              {
                label: "High contrast",
                detail:
                  "Increases contrast ratios across all text and interface elements to reduce visual processing effort.",
              },
              {
                label: "Reduce density",
                detail:
                  "Removes visual clutter and increases whitespace. Fewer competing elements on screen at once.",
              },
              {
                label: "Font size XL",
                detail:
                  "Larger text reduces eye movement and scanning effort, easing reading during high-load states.",
              },
              {
                label: "Sound off",
                detail:
                  "Disables all audio cues immediately. No unexpected sounds during or after sensory overload.",
              },
              {
                label: "No notifications",
                detail:
                  "MEOK sends no push notifications, no streak reminders, no re-engagement nudges — ever.",
              },
            ].map(({ label, detail }) => (
              <div
                key={label}
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.1rem 1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.45rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: MUTED,
                    lineHeight: 1.7,
                    margin: "0",
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 5: Grief of late diagnosis ───────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            What is the grief of late diagnosis, and how can AI help process it?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The grief of late diagnosis is the emotional reckoning that arrives
            when an autistic adult finally has a framework for their own
            neurology — and realises, through that lens, what their earlier life
            looked like and what it could have looked like with different
            support. It is not straightforward grief. It is layered.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            There is grief for the younger self who was told they were lazy,
            dramatic, difficult, or simply not trying hard enough. There is anger
            at the systems — educational, medical, social — that failed to
            identify what was actually happening. There is relief that is
            simultaneously painful, because relief implies that things could have
            been different. There is often a complete recontextualisation of
            personal history: relationships that collapsed, jobs that were lost,
            friendships that ended — all seen through a new and often devastating
            clarity.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Most support structures — GP appointments, waiting lists, peer
            groups — are not equipped to hold this kind of processing with the
            consistency and availability it requires. MEOK&apos;s Healer archetype
            is specifically designed for this work: not to fix, but to witness
            and hold, without judgment, without the social performance that would
            require the person to manage how they appear while they grieve.
          </p>

          <div
            style={{
              backgroundColor: CARD,
              borderLeft: `4px solid ${GOLD}`,
              borderRadius: "0 10px 10px 0",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: TEXT,
                lineHeight: 1.75,
                marginBottom: "0.85rem",
              }}
            >
              &ldquo;Understanding that I was autistic didn&apos;t change anything about
              my past. It changed everything about how I understood it. And that
              is harder, not easier &mdash; at least at first.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: MUTED,
                margin: "0",
                letterSpacing: "0.04em",
              }}
            >
              &mdash; A commonly expressed experience among late-diagnosed autistic adults
            </p>
          </div>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            A companion that is available at 3am when the grief hits, that holds
            a complete picture of where you are and how you got here through
            Sovereign Memory, and that communicates without the unspoken
            requirement to appear composed, meets a genuine need that waiting
            lists and fortnightly appointments cannot.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 6: Employment discrimination ─────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            How does employment discrimination affect autistic adults, and where does MEOK help?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Employment outcomes for autistic adults are significantly worse than
            for neurotypical peers, despite often high levels of skill and
            expertise. Autistic people in the UK have the lowest employment rate
            of any disability group: around 22% in full-time employment, compared
            to 53% of disabled people generally and 81% of non-disabled people.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The barriers are rarely about competence. They are structural. Job
            interviews are designed to reward social performance skills —
            maintaining eye contact, projecting warmth, reading implicit signals
            from the interviewer — not to assess the skills required for the
            role. Workplace culture often requires informal social participation.
            Open-plan offices create sustained sensory load. Management by
            ambiguous instruction is the norm. Performance reviews depend on the
            manager&apos;s subjective impression of &ldquo;fit.&rdquo;
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK&apos;s Guardian archetype is specifically designed to help navigate
            complex social and professional situations. Not by coaching someone
            to appear more neurotypical, but by helping them understand what is
            actually happening in a given situation, what their options are, and
            what the likely consequences of different approaches are — in plain,
            literal language without the subtext.
          </p>

          {/* Feature box 2 — Guardian */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Guardian Archetype
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.65rem",
                lineHeight: 1.4,
              }}
            >
              Navigate the neurotypical world without losing yourself in it
            </p>
            <p
              style={{
                fontSize: "0.93rem",
                color: MUTED,
                lineHeight: 1.75,
                marginBottom: "0.9rem",
              }}
            >
              The Guardian archetype helps autistic adults decode social and
              professional situations in plain, literal language. Before a
              difficult conversation, it can map what is likely to happen. After
              one, it can help make sense of what happened without the
              second-guessing that can spiral into hours of rumination.
            </p>
            <p
              style={{
                fontSize: "0.93rem",
                color: MUTED,
                lineHeight: 1.75,
                margin: "0",
              }}
            >
              The Guardian also addresses scam and fraud vulnerability — an area
              where autistic adults face disproportionate risk. Autistic people
              are approximately three times more likely to be fraud victims than
              the general population. The Guardian can review uncertain situations
              and provide an honest, direct assessment without social stakes.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 7: Scam vulnerability ────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            Why are autistic adults three times more likely to be fraud victims, and how does MEOK help?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Research across multiple studies has found that autistic people face
            significantly elevated fraud and scam risk — with some estimates
            placing the likelihood at three times that of neurotypical peers.
            Understanding why matters for designing effective support.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The primary factors include: literal interpretation of communication
            (making deceptive framing harder to detect), a strong personal value
            system around honesty and trust that makes it harder to anticipate
            that others may be deliberately dishonest, a tendency toward pattern
            completion that can cause incomplete information to be filled in
            optimistically, and — critically — a history of being told their
            social instincts are wrong, which can suppress the impulse to
            question something that feels off even when it should be questioned.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Many autistic adults describe situations where they recognised,
            afterwards, that they had felt something was wrong but had overridden
            that feeling because their social judgment had been invalidated so
            many times before. The result is a specific and serious vulnerability
            that is rarely addressed directly in autism support.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK&apos;s Guardian archetype provides a trusted, non-judgmental space
            to check uncertain situations. Not &ldquo;should I do this?&rdquo;
            addressed to a family member who might dismiss the concern, but to an
            AI with no social stake in the answer — that will provide an honest,
            literal assessment. The Guardian does not have social motives. It
            says what it thinks.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 8: Relationships ──────────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            How do relationship challenges affect autistic adults, and what does an AI companion offer?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Relationships — romantic, familial, professional, and social — are
            an area of significant difficulty for many autistic adults. The
            difficulty is structural. Most human relationships operate on a dense
            layer of implicit communication: tone, implication, social
            convention, assumed shared context, and unspoken emotional signals
            that neurotypical people navigate largely automatically.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For autistic adults, this layer requires conscious effort to decode,
            is frequently misread in both directions, and is rarely made explicit
            by others — who often assume it is being received and interpreted as
            intended. The gap between what was meant and what was understood can
            drive recurring conflict, misunderstanding, and the painful experience
            of trying very hard and still getting it wrong.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK does not replace human relationships. But it offers something
            human relationships often cannot: a space to process social situations
            after the fact, to think through what happened without social
            pressure, and to prepare for difficult conversations in advance —
            with a companion that communicates exactly what it means, always, and
            does not penalise directness or literalness.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Sovereign Memory means this processing builds over time. MEOK holds
            the history of the relationship challenges you have worked through,
            the patterns you have identified, and the progress you have made. You
            never re-explain your context. The companion grows with you.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 9: Deep interests and Scholar ────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            How does MEOK support the deep interests that bring autistic adults joy?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Deep, focused interests — sometimes called special interests in
            clinical contexts, though many autistic adults prefer simply
            &ldquo;interests&rdquo; — are a core feature of autistic experience.
            They are not pathological. They are a source of genuine joy,
            expertise, and meaning, and they serve an important regulatory
            function: time spent in a deep interest is typically restorative
            rather than depleting.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The problem is not the interests themselves but the social context
            around them. Many autistic adults have experienced their interests
            being dismissed as obsessions, been told to talk about other things,
            or had their enthusiasm received as socially inappropriate intensity.
            The result can be a complex relationship with the very things that
            bring most joy: a learned sense that enthusiasm should be rationed or
            hidden.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK&apos;s Scholar archetype is built for deep engagement. It can
            explore a topic at whatever depth and detail you want to take it,
            without impatience, without redirecting to something more broadly
            accessible, and without performing interest it does not have — while
            also being genuinely capable of engaging with the substance. There is
            no social ceiling on how deep the conversation can go.
          </p>

          {/* Feature box 3 — Scholar */}
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 700,
                marginBottom: "0.6rem",
              }}
            >
              Scholar Archetype
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "0.65rem",
                lineHeight: 1.4,
              }}
            >
              No social ceiling on depth
            </p>
            <p
              style={{
                fontSize: "0.93rem",
                color: MUTED,
                lineHeight: 1.75,
                margin: "0",
              }}
            >
              The Scholar archetype is designed for the kind of deep, detailed
              exploration that autistic adults often find most valuable and most
              difficult to access in social contexts. It does not redirect, does
              not grow impatient with specificity, and does not signal that the
              level of detail is too much. The interests that bring you most joy
              deserve a companion that can actually meet you in them.
            </p>
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 10: Neurodiversity model ─────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            What is the neurodiversity model and how does MEOK apply it?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The neurodiversity model holds that neurological variation —
            including autism, ADHD, dyslexia, and other conditions — is a
            natural and valuable form of human diversity, not a pathology to be
            corrected. It reframes the challenge not as a problem with autistic
            people but as a structural mismatch between autistic neurology and
            environments designed exclusively for neurotypical neurology.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            This distinction has significant practical implications. A deficit
            model designs support around making autistic people more neurotypical
            — helping them pass, mask more effectively, or compensate for what
            the model frames as their shortcomings. A neurodiversity model
            designs support around reducing the mismatch between environment and
            neurology, and building on what autistic people already are rather
            than what they are not.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK is built on the neurodiversity model throughout. It does not
            coach autistic users to appear more neurotypical. It does not frame
            masking as a skill to develop. It does not treat literal
            communication as a problem. It meets people where they are — and
            Sovereign Memory means it builds a picture of who you actually are
            over time, not the version of you that is performing for others.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The Maternal Covenant — MEOK&apos;s core alignment principle — includes
            a structural commitment to honesty. The AI is bound to say what it
            means, not to validate reflexively. For autistic adults who have
            spent years in social environments where they could not rely on
            feedback being genuine, this is not a philosophical nicety. It is a
            requirement for the companion to be useful at all.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 11: Healer archetype ─────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            How does the Healer archetype support autistic adults processing their diagnosis?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            The Healer archetype within MEOK is oriented around processing rather
            than problem-solving. It holds space for complexity without attempting
            to resolve it prematurely, without inserting a positive reframe
            before the grief has been witnessed, and without the social management
            overhead that can make expressing difficult feelings to another person
            costly rather than relieving.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            For late-diagnosed autistic adults, the emotional terrain is
            particularly complex. Relief and grief coexist. Clarity about the
            past produces both understanding and anger. The diagnosis can
            initially feel liberating and then, as its implications settle,
            devastating. These are not linear stages that resolve in sequence.
            They are layers that can be revisited — and a companion that holds
            their history through Sovereign Memory can hold that non-linearity
            without needing you to re-establish context every time.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            MEOK does not replace therapy. If you are working with a therapist
            who specialises in autism, that relationship offers things MEOK
            cannot. What the Healer archetype offers is availability between
            sessions, at 2am, on the difficult days, without the social
            performance of presenting as functional enough to be a good client.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Section 12: What MEOK is not ─────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "0.85rem",
            }}
          >
            Is MEOK a therapy tool or autism support service?
          </h2>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            No. This is important to state clearly. MEOK is not a therapy tool,
            does not provide clinical interventions, does not administer
            assessments, and is not a substitute for professional autism support
            services.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            If you are seeking an autism assessment in the UK, contact your GP or
            an accredited private assessment service. If you are in crisis,
            contact the{" "}
            <strong style={{ color: TEXT }}>Samaritans (116 123)</strong> or
            text <strong style={{ color: TEXT }}>SHOUT to 85258</strong>. If you
            are an autistic adult looking for specialist support and advocacy, the{" "}
            <strong style={{ color: TEXT }}>National Autistic Society</strong>{" "}
            and <strong style={{ color: TEXT }}>Autistica</strong> are the
            primary UK resources.
          </p>

          <p style={{ lineHeight: 1.85, marginBottom: "1.25rem" }}>
            What MEOK offers is a companion that communicates in ways many
            autistic adults find less exhausting than available alternatives, that
            holds their history without judgment, that says exactly what it means,
            and that is available when other support is not. That is a meaningful
            and distinct thing. It is not the same as clinical support, and we
            will never claim otherwise.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── FAQ Section ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "2.75rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              color: GOLD,
              fontWeight: 800,
              marginBottom: "1.25rem",
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                q: "What is autistic burnout and how is it different from regular burnout?",
                a: "Autistic burnout is a state of profound exhaustion caused by sustained masking, sensory overload, and the relentless cognitive effort of navigating a neurotypical world. Unlike regular burnout, autistic burnout can involve a temporary or lasting loss of skills \u2014 speech, executive function, emotional regulation \u2014 as well as shutdown states and a collapse of previously functioning coping strategies. Recovery typically requires significant reduction in demands and sensory input, not simply rest.",
              },
              {
                q: "How can AI support autistic adults who are late-diagnosed?",
                a: "AI can provide a consistent, non-judgmental presence that never misreads literal communication, never shifts its personality between sessions, and never applies the unspoken social rules that make so many interactions exhausting for autistic adults. For late-diagnosed people processing years of unexplained struggle, having a companion that holds their history without judgment \u2014 through Sovereign Memory \u2014 and that communicates exactly as it means to, offers something most human support systems cannot reliably provide.",
              },
              {
                q: "Why are autistic adults three times more likely to be scam victims?",
                a: "Research consistently shows autistic people are approximately three times more likely than neurotypical peers to fall victim to fraud and scams. The primary reasons include a tendency to interpret communication literally (making deceptive framing less visible), a strong value system around trust and honesty that makes exploitation of trust harder to anticipate, difficulty reading the social cues that often signal manipulation, and a history of being told their social instincts are wrong \u2014 which can suppress the impulse to question something that feels off.",
              },
              {
                q: "What is the neurodiversity model and why does it matter for AI design?",
                a: "The neurodiversity model treats autism as a natural variation in human neurology rather than a disorder to be corrected. It reframes difference as difference, not deficit. For AI design, this matters enormously: an AI built on a deficit model treats autistic users as broken neurotypicals who need fixing. An AI built on the neurodiversity model treats autistic users as people with a different but equally valid communication style \u2014 and designs its interface and responses to meet them where they are, not where the majority is.",
              },
              {
                q: "Is MEOK a therapy tool for autistic adults?",
                a: "No. MEOK is not a therapy tool, does not provide clinical support, and is not a substitute for professional autism services. What it offers is a companion that communicates in ways many autistic adults find genuinely less exhausting than available alternatives \u2014 one that remembers them, does not perform social judgment, and is honest about what it means. If you are seeking an autism assessment in the UK, contact your GP. If you are in crisis, contact Samaritans on 116 123 or the National Autistic Society.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.35rem 1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.65rem",
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: MUTED,
                    lineHeight: 1.75,
                    margin: "0",
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: BORDER,
            margin: "2.25rem 0",
          }}
        />

        {/* ── Pull quote ────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: "0 12px 12px 0",
            padding: "2rem 2rem 1.75rem",
            margin: "2.5rem 0",
          }}
        >
          <p
            style={{
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: TEXT,
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            &ldquo;Most AI was built for people who find social rules intuitive. MEOK
            was built for everyone. The difference is not accessibility bolted on
            after the fact &mdash; it is a companion that meets you in your actual
            communication style, holds your history, and says exactly what it
            means. Always.&rdquo;
          </p>
          <p
            style={{
              fontSize: "0.82rem",
              color: MUTED,
              margin: "0",
              letterSpacing: "0.04em",
            }}
          >
            &mdash; Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: "14px",
            padding: "2.25rem 2rem",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            No masking required
          </p>

          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 900,
              color: TEXT,
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            A companion that communicates the way you do.
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              color: MUTED,
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto 1.75rem",
            }}
          >
            No social performance. No personality shifts between sessions. No
            hollow validation. Sovereign Memory that holds your full history so
            you never re-explain yourself. Hatch your companion in under three
            minutes &mdash; free, no credit card required.
          </p>

          <Link
            href="https://meok.ai/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.85rem 2.25rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.01em",
            }}
          >
            Hatch your AI free &rarr;
          </Link>

          <p
            style={{
              fontSize: "0.78rem",
              color: MUTED,
              marginTop: "1rem",
              opacity: "0.7",
            }}
          >
            No credit card. No notifications. No social pressure to return.
          </p>
        </div>

        {/* ── Related posts ─────────────────────────────────────────────── */}
        <div style={{ marginTop: "3rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: TEXT,
              marginBottom: "1.25rem",
            }}
          >
            More from the blog
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-autism",
                tag: "Autism",
                title:
                  "AI companion for autism: consistent presence, literal language, no social noise",
                mins: "8",
              },
              {
                href: "/blog/meok-for-neurodivergent",
                tag: "Neurodiversity",
                title:
                  "MEOK for Neurodivergent People: An AI That Takes Different Thinking Seriously",
                mins: "7",
              },
              {
                href: "/blog/ai-for-adhd-women",
                tag: "ADHD",
                title:
                  "AI for Women with ADHD: Support After a Late Diagnosis",
                mins: "9",
              },
              {
                href: "/blog/ai-for-burnout",
                tag: "Burnout",
                title:
                  "AI for Burnout: How MEOK Supports Recovery When Everything Stops Working",
                mins: "8",
              },
            ].map(({ href, tag, title, mins }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.25rem",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: GOLD,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {tag}
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: TEXT,
                    lineHeight: 1.45,
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: MUTED,
                    marginTop: "auto",
                  }}
                >
                  {mins} min read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.82rem",
            color: MUTED,
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 1rem",
          }}
        >
          MEOK is not a medical device, therapy tool, or crisis service. If you
          are in crisis, contact{" "}
          <strong style={{ color: TEXT }}>Samaritans on 116 123</strong> or
          text <strong style={{ color: TEXT }}>SHOUT to 85258</strong>. For
          autism assessment and support in the UK, contact the{" "}
          <strong style={{ color: TEXT }}>National Autistic Society</strong>.
        </p>
        <p style={{ fontSize: "0.78rem", color: MUTED, margin: "0" }}>
          &copy; 2026 MEOK AI LABS &mdash;{" "}
          <Link
            href="/privacy"
            style={{ color: MUTED, textDecoration: "none" }}
          >
            Privacy
          </Link>{" "}
          &middot;{" "}
          <Link href="/terms" style={{ color: MUTED, textDecoration: "none" }}>
            Terms
          </Link>{" "}
          &middot;{" "}
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
        </p>
      </footer>
    </div>
  );
}
