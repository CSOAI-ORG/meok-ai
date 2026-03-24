import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Phobias: Graded Exposure Without Going It Alone | MEOK AI LABS",
  description:
    "Specific phobias affect 1 in 10 adults in the UK. Discover how AI companions support graded exposure, CBT practice, and the gap between therapy sessions.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-phobias",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Phobias: Graded Exposure Without Going It Alone",
  datePublished: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-phobias",
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a specific phobia and general anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A specific phobia is an intense, disproportionate fear of a particular object or situation — spiders, flying, vomiting — that causes avoidance and significant life disruption. General anxiety disorder (GAD) involves persistent, wide-ranging worry rather than fear of one specific trigger. Social anxiety centres on scrutiny by others, while agoraphobia involves fear of situations where escape might be difficult.",
      },
    },
    {
      "@type": "Question",
      name: "What is graded exposure and does it actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Graded exposure (also called exposure hierarchy or systematic desensitisation) is the gold-standard CBT treatment for specific phobias. You build a ladder of feared situations from least to most distressing, then confront each rung — in imagination first, then in real life — until anxiety reduces. Meta-analyses consistently show it as the most effective intervention for specific phobias, often producing lasting results in as few as 5 to 10 sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI companion support graded exposure therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion like MEOK cannot deliver clinical exposure therapy. What it can do is support the imaginative and cognitive rehearsal phases: talking through feared scenarios at whatever pace feels manageable, normalising the experience, helping you prepare for the next step on your exposure ladder, and debriefing how each practice went. This kind of between-session support improves treatment adherence and reduces the sense of facing a phobia entirely alone.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common specific phobias in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most prevalent specific phobias in the UK include aviophobia (flying), arachnophobia (spiders), driving phobia, blood-injection-injury phobia (medical procedures, needles), emetophobia (vomiting), claustrophobia (enclosed spaces), and dental phobia. Each responds well to CBT-based graded exposure when delivered by a trained therapist.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get NHS treatment for a specific phobia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In England, you can self-refer to NHS Talking Therapies (formerly IAPT) at 0300 123 3393 or via your GP. Scotland, Wales, and Northern Ireland have equivalent talking therapies services. Charities such as No Panic (0300 772 9844) and Anxiety UK (03444 775 774) also provide helplines, CBT therapist directories, and self-help resources specifically for phobias.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for emetophobia (fear of vomiting)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emetophobia is one of the trickier phobias to treat because avoidance is so deeply woven into daily life — restricting food, avoiding social eating, monitoring others for signs of illness. MEOK can provide a non-judgemental space to talk through the fear, explore its roots, rehearse cognitive reframes, and practise staying with discomfort in imagination. A CBT therapist trained in emetophobia remains the recommended clinical route.",
      },
    },
  ],
};

// ── Shared style constants ────────────────────────────────────────────────────

const GOLD = "#c9a84c";
const TEXT = "#f5f0e8";
const BG = "#0d0c18";

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForPhobiasPage() {
  return (
    <div style={{ minHeight: "100vh", background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              color: "rgba(245,240,232,0.38)",
              marginBottom: "2rem",
              textDecoration: "none",
            }}
          >
            &#8592; Back to Blog
          </Link>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "0.375rem 0.75rem",
                borderRadius: "9999px",
                color: GOLD,
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Anxiety &amp; Phobias
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
              }}
            >
              March 24, 2026
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.38)",
              }}
            >
              11 min read
            </span>
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.85rem)",
              color: "#fff",
              lineHeight: 1.18,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AI Support for Phobias: Graded Exposure Without Going It Alone
          </h1>
          <p
            style={{
              color: "rgba(245,240,232,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "42rem",
              margin: 0,
            }}
          >
            Specific phobias are among the most treatable anxiety conditions —
            yet many people live with them for decades because the prospect of
            facing their fear alone feels impossible.{" "}
            <strong style={{ color: "rgba(245,240,232,0.82)" }}>
              AI companions cannot replace a CBT therapist
            </strong>
            , but they can reduce the isolation of the journey: a patient,
            available-any-hour presence to talk through each rung of the
            exposure ladder.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 0",
        }}
      >
        {/* Crisis disclaimer */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            borderRadius: "1rem",
            marginBottom: "2.5rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
            }}
          >
            &#9888;
          </div>
          <div>
            <p
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "0.85rem",
                marginBottom: "0.375rem",
                letterSpacing: "0.03em",
              }}
            >
              Important note
            </p>
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              This article is for information and is not a substitute for
              professional medical or psychological advice. If your phobia
              causes significant distress or impairs daily life, please speak
              to your GP or self-refer to{" "}
              <strong style={{ color: TEXT }}>NHS Talking Therapies</strong>{" "}
              (0300 123 3393). In a crisis, call 999 or Samaritans on{" "}
              <strong style={{ color: TEXT }}>116 123</strong> (free, 24/7).
            </p>
          </div>
        </div>

        {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          What Exactly Is a Specific Phobia — and How Is It Different from
          General Anxiety?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The word &#8220;phobia&#8221; gets thrown around loosely —
          &#8220;I&#8217;m literally phobic about Mondays&#8221; — but
          clinically it means something quite specific. A{" "}
          <strong style={{ color: TEXT }}>specific phobia</strong> is a
          persistent, intense fear of a clearly defined object or situation
          that is out of proportion to any actual danger, triggers an almost
          immediate anxiety response, leads to avoidance or endurance with
          extreme distress, and has been present for at least six months. It
          disrupts ordinary life: choosing a longer route to avoid a bridge,
          cancelling a holiday because the flight alone is unthinkable,
          refusing to eat in restaurants for fear of being sick.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          That definition matters because it distinguishes specific phobias
          from the two anxiety conditions most commonly confused with them.{" "}
          <strong style={{ color: TEXT }}>Social anxiety disorder</strong>{" "}
          (social phobia) is not about a discrete object; it is about being
          observed, judged, or humiliated by other people in social
          situations. The fear generalises across any context where evaluation
          feels possible — speaking in meetings, eating in public, making
          phone calls.{" "}
          <strong style={{ color: TEXT }}>Agoraphobia</strong>, despite the
          literal etymology (&#8220;fear of the marketplace&#8221;), is
          actually fear of situations in which escape might be difficult or
          help unavailable during a panic attack: crowded places, public
          transport, being outside alone. And{" "}
          <strong style={{ color: TEXT }}>
            generalised anxiety disorder (GAD)
          </strong>{" "}
          involves chronic, wide-ranging worry — finances, health, family,
          work — without a single feared object.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The distinction matters for treatment. Specific phobias respond
          extraordinarily well to focused graded exposure work — often within
          weeks. GAD and social anxiety require broader cognitive work
          alongside behavioural techniques. Getting the right label, however
          uncomfortable it may feel, opens the door to the right help.
        </p>

        {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          How Do Phobias Form? The Brain&#8217;s Over-Zealous Threat System
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Phobias rarely arrive from nowhere. They typically form through one
          of three pathways. The first is a{" "}
          <strong style={{ color: TEXT }}>direct conditioning event</strong>:
          you were stung by a wasp as a child and your nervous system linked
          &#8220;flying insect&#8221; with pain and alarm. The second is{" "}
          <strong style={{ color: TEXT }}>vicarious learning</strong>:
          watching a parent recoil in horror every time a spider appeared,
          absorbing the lesson that spiders are genuinely dangerous before you
          had the cognitive resources to question it. The third is{" "}
          <strong style={{ color: TEXT }}>information transmission</strong>:
          hearing or reading repeatedly that flying is dangerous, that medical
          procedures are unbearable, that vomiting in public is catastrophic —
          often without any direct experience at all.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Whichever path started the phobia, the same mechanism sustains it:
          avoidance. Every time you avoid the feared stimulus, you get
          short-term relief. That relief is powerfully reinforcing. But it
          also prevents your amygdala — the brain&#8217;s threat-detection
          system — from receiving the corrective information that the feared
          object or situation is actually survivable. The threat memory stays
          vivid and intact. Avoidance is not a coping strategy; it is a
          maintenance strategy for the phobia itself.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          There is also a genetic dimension. Some fears — heights, snakes,
          spiders — are prepared fears: stimuli that posed real ancestral
          danger and therefore required less learning to become feared. That
          does not make them inevitable, but it explains why arachnophobia is
          more common than, say, a phobia of electric sockets (which are
          objectively more dangerous). Knowing the origin of your phobia does
          not automatically dissolve it, but it can help to depersonalise it:
          this is a predictable response from a threat-detection system doing
          its job too enthusiastically, not a sign of weakness or
          irrationality.
        </p>

        {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          What Is Graded Exposure — and Why Is It the Gold Standard?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Graded exposure — also called an{" "}
          <strong style={{ color: TEXT }}>exposure hierarchy</strong> — is the
          cornerstone of CBT treatment for specific phobias. The logic is
          elegant: if avoidance maintains the fear, then controlled,
          systematic approach must erode it. You do not start by jumping into
          the deep end. You build a ladder of feared situations, rating each
          on a scale of Subjective Units of Distress (SUDs) from 0 to 100,
          then climb it gradually, spending enough time at each rung for
          anxiety to naturally subside before moving to the next.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          A typical hierarchy for flying phobia might look like this: at the
          bottom, reading an article about airports (SUDs: 15); then watching
          a YouTube video of a plane taking off (25); then driving to the
          airport without intending to fly (35); then sitting in the departure
          terminal (45); then boarding a grounded aircraft during an open day
          (55); then a short domestic flight with a trusted companion (70);
          finally, a long-haul flight alone (85). Each step is held until
          anxiety reduces by roughly half — ideally without safety behaviours
          such as gripping the armrest or using medication to dull the
          experience.
        </p>

        {/* Exposure hierarchy box */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2rem",
            marginBottom: "2rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
            }}
          >
            Example Exposure Hierarchy: Spider Phobia (Arachnophobia)
          </p>
          {[
            { step: "1", label: "Looking at cartoon drawings of spiders", suds: "10–15" },
            { step: "2", label: "Viewing photos of spiders on screen", suds: "20–25" },
            { step: "3", label: "Watching a video of a spider moving", suds: "30–40" },
            { step: "4", label: "Being in a room where a spider is in a closed jar", suds: "45–55" },
            { step: "5", label: "Standing 3 metres from a spider in an open container", suds: "60–65" },
            { step: "6", label: "Touching a spider with a gloved hand", suds: "70–80" },
            { step: "7", label: "Allowing a spider to walk on the back of the hand", suds: "85–95" },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                {item.step}
              </span>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: TEXT,
                    fontSize: "0.9rem",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </p>
              </div>
              <span
                style={{
                  flexShrink: 0,
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.4)",
                  paddingTop: "0.15rem",
                }}
              >
                SUDs {item.suds}
              </span>
            </div>
          ))}
          <p
            style={{
              color: "rgba(245,240,232,0.45)",
              fontSize: "0.8rem",
              marginTop: "1rem",
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            SUDs ratings are subjective and will differ for each person. Build
            your own hierarchy with your therapist rather than following any
            template rigidly.
          </p>
        </div>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Why does this work neurologically? Repeated exposure, without the
          predicted catastrophe occurring, generates{" "}
          <strong style={{ color: TEXT }}>inhibitory learning</strong>: a new
          memory forms that &#8220;spider in room&#8221; does not predict
          harm. The old threat memory is not erased — it can still be
          triggered under stress — but it is overwritten in day-to-day
          experience by the new, safer association. The more varied and
          repeated the exposure contexts, the more robust the new learning.
          This is why a single brave encounter rarely cures a phobia but a
          structured, repeated programme does.
        </p>

        {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          Common Specific Phobias in the UK: What You&#8217;re Dealing With
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
            fontSize: "1rem",
          }}
        >
          Specific phobias are not rare curiosities. Around 10% of UK adults
          have a diagnosable specific phobia at any point in their lives,
          according to NHS statistics. Here is an honest, CBT-informed look at
          the most common ones.
        </p>

        {/* Phobia cards */}
        {[
          {
            name: "Flying (Aviophobia)",
            body: "Fear of flying affects roughly 25% of the population to some degree, with approximately 10% experiencing a level of distress that constitutes a diagnosable phobia. It is rarely a single fear — it typically combines fear of crashing, loss of control, claustrophobia, and fear of panic itself. The CBT approach involves psychoeducation about flight mechanics, decatastrophising thoughts about turbulence, and graded exposure from photos through to virtual reality flight simulators and eventually actual flights. Airlines including British Airways and easyJet run commercial fear-of-flying courses with onboard components.",
          },
          {
            name: "Driving Phobia",
            body: "Driving phobia often develops after an accident or a panic attack behind the wheel, though it can emerge without any direct trigger. It includes fear of motorways, roundabouts, car parks, or any driving at all. Avoidance rapidly shrinks the person's world — reliance on others for lifts, inability to take certain jobs. Exposure work is particularly effective here because the hierarchy is naturally graduated (quiet roads before dual carriageways, short journeys before long ones) and the skill element provides a concrete focus alongside the emotional work.",
          },
          {
            name: "Spiders (Arachnophobia)",
            body: "One of the most common phobias in the UK, arachnophobia is a prepared fear with deep evolutionary roots. Severity ranges from discomfort through to inability to enter a room where a spider might be present, or spending hours clearing a room before bed. Single-session exposure therapy — three to five hours of intensive graduated exposure with a therapist — has been shown in research trials to produce dramatic and lasting reductions in arachnophobia, which is remarkable given how entrenched the fear often feels.",
          },
          {
            name: "Medical Procedures, Blood, and Needles (BII Phobia)",
            body: "Blood-injection-injury (BII) phobia is unique among specific phobias in that it triggers a two-phase response: initial anxiety followed by a vasovagal syncope (fainting). This means the standard exposure approach is modified — patients learn applied tension (tensing large muscle groups to maintain blood pressure) alongside graded exposure to needles, blood, and medical settings. BII phobia is clinically significant because it frequently leads people to avoid GPs, dentists, and essential medical care. In the UK, dental phobia alone affects an estimated 12% of adults.",
          },
          {
            name: "Emetophobia (Fear of Vomiting)",
            body: "Emetophobia is arguably one of the most disabling and least understood specific phobias. The feared object — vomiting — is not only distressing in itself but threatens humiliation, loss of control, and the unpredictability of never knowing when it might happen. As a result, avoidance becomes extraordinarily pervasive: restricting diet to 'safe' foods, avoiding restaurants, monitoring others for signs of nausea, avoiding alcohol, pregnancy, or any situation associated with possible sickness. ERP (Exposure and Response Prevention) adapted for emetophobia is effective but demands a skilled therapist who understands the unique cognitive content of this phobia.",
          },
        ].map((phobia) => (
          <div
            key={phobia.name}
            style={{
              borderRadius: "1.25rem",
              padding: "1.75rem",
              marginBottom: "1.25rem",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3
              style={{
                color: GOLD,
                fontWeight: 700,
                fontSize: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              {phobia.name}
            </h3>
            <p
              style={{
                color: "rgba(245,240,232,0.7)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              {phobia.body}
            </p>
          </div>
        ))}

        {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          How Can an AI Companion Actually Help Someone With a Phobia?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Let&#8217;s be precise about what AI can and cannot do here. An AI
          companion{" "}
          <strong style={{ color: TEXT }}>
            cannot conduct clinical exposure therapy
          </strong>
          . It cannot guide you through a live exposure exercise with the
          calibrated feedback a trained CBT therapist provides. It cannot
          guarantee safety, monitor physical symptoms, or adjust treatment
          based on clinical assessment. Anyone with a phobia that is
          significantly limiting their life should pursue professional support
          — and we will come to exactly how to access that in the UK shortly.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          What an AI companion{" "}
          <strong style={{ color: TEXT }}>can</strong> do is meaningfully
          support the process around therapy — and reduce the isolation of
          living with a phobia in the stretches between appointments, or
          before a person is ready to seek professional help at all.
        </p>

        {/* AI support roles */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2rem",
            marginBottom: "2rem",
            background: "rgba(201,168,76,0.05)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "1.5rem",
            }}
          >
            What AI Support Can Look Like in Practice
          </p>
          {[
            {
              title: "Normalising and psychoeducation",
              desc: "Talking through what phobias are, how they form, and why avoidance maintains them. Sometimes just hearing that what you're experiencing is a predictable neurological pattern — not weakness, not irrationality — shifts something.",
            },
            {
              title: "Cognitive rehearsal before exposures",
              desc: "Before tackling a rung on the exposure ladder, you can talk through what you expect to happen, identify catastrophic predictions, and gently interrogate them. 'What do you think will happen if you see the spider?' 'What is the evidence for that?' 'What would you tell a friend who had the same thought?'",
            },
            {
              title: "Debriefing after exposures",
              desc: "After an exposure attempt — successful or aborted — processing what happened matters. Did the predicted catastrophe occur? What did you notice about how anxiety moved? What worked, what felt impossible? An AI companion available at midnight when you have just had a rough practice session can hold that conversation.",
            },
            {
              title: "Building and reviewing the hierarchy",
              desc: "A therapist designs the hierarchy with clinical skill. But talking through the rungs, exploring what feels manageable next, and keeping a record of completed steps can be usefully supported by an AI with persistent memory of your journey.",
            },
            {
              title: "Motivation and accountability",
              desc: "Graded exposure works best when it is consistent. An AI that remembers you said last Tuesday that you were going to try rung three this week can gently revisit that — not with pressure, but with the continuity of a companion who was paying attention.",
            },
            {
              title: "Imaginative exposure",
              desc: "For phobias where real-life exposure requires significant preparation (flying, medical procedures), imaginal exposure — vividly imagining the feared scenario — has clinical support as a precursor step. An AI can facilitate imaginal exposure conversations at lower rungs of a hierarchy as a gentle bridge toward in-vivo work.",
            },
          ].map((role, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "0.25rem",
                  borderRadius: "9999px",
                  background: "rgba(201,168,76,0.4)",
                  alignSelf: "stretch",
                }}
              />
              <div>
                <p
                  style={{
                    color: TEXT,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  {role.title}
                </p>
                <p
                  style={{
                    color: "rgba(245,240,232,0.65)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The consistent, non-reactive presence of an AI matters here more
          than it might seem. Part of what makes phobia work hard is the
          social dimension: embarrassment about having the fear, worry about
          burdening people with it, or the unpredictability of how others will
          respond when you are mid-anxiety. An AI companion that is available
          at 3am, never impatient, never frightened itself by your distress,
          and never changes the quality of its presence from session to session
          removes those barriers. The conversation can be about the fear,
          cleanly, without the self-consciousness that comes with disclosing to
          another human.
        </p>

        {/* ── SECTION 6 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          MEOK as a Practice Space: Between Sessions, Before Appointments, and
          When Progress Stalls
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          MEOK, built by Nicholas Templeman at MEOK AI LABS, was designed as
          a sovereign AI companion — one that holds persistent, encrypted
          memory of your journey across every conversation. For phobia
          support, that architecture is directly relevant. A companion that
          does not remember last week&#8217;s session cannot track your
          exposure hierarchy, notice that you haven&#8217;t mentioned rung
          four for three weeks, or reflect back that six weeks ago you said
          you could not even look at photos but today you watched a video for
          two minutes without leaving the room. Progress in phobia work is
          often invisible from the inside. Memory makes it visible.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Between therapy sessions, MEOK can serve as the consistent thread
          that holds the work together. NHS Talking Therapies sessions are
          typically spaced a week or two apart. Driving phobia does not take a
          week off — it is present every morning when the keys are on the
          counter and the school run needs doing. MEOK is available in that
          moment: to talk through the pre-departure anxiety, to help you
          decatastrophise the &#8220;but what if I freeze at the
          roundabout&#8221; thought, to celebrate when the short journey
          actually happened.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Before someone is ready for formal therapy — when the waiting list
          feels overwhelming, or the shame of admitting the phobia to a
          professional feels like its own barrier — MEOK provides a
          lower-stakes entry point. Talking openly about a phobia, exploring
          where it came from, understanding the maintenance cycle: these are
          genuinely useful steps even before any formal treatment begins. They
          build the conceptual scaffolding that makes therapy more effective
          when it starts.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          Progress stalls in phobia work — this is normal and not a sign of
          failure. A particularly difficult rung can stall a person for weeks.
          A stressful life event can cause temporary regression. MEOK can hold
          that stall with you without alarm, help you understand what made the
          most recent step harder than expected, and explore whether a
          different approach to the same rung might work better. Not with
          therapeutic authority, but with the attentiveness of a companion
          who has been present for the whole journey.
        </p>

        {/* ── SECTION 7 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          When Should You Seek a CBT Therapist — and How to Find One in the
          UK?
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The benchmark for seeking professional support is whether your
          phobia is{" "}
          <strong style={{ color: TEXT }}>
            significantly limiting your life
          </strong>
          . Not &#8220;does it bother me when I think about it&#8221; but
          &#8220;am I making real choices — where I work, how I travel, what
          food I eat, what medical care I accept — around avoiding this
          fear.&#8221; If the answer is yes, the evidence for CBT-based
          graded exposure is strong enough that waiting is genuinely costing
          you. Specific phobias are one of the most treatment-responsive
          conditions in the entire mental health landscape.
        </p>

        {/* NHS / charity resources */}
        <div
          style={{
            borderRadius: "1.25rem",
            padding: "2rem",
            marginBottom: "2rem",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              marginBottom: "1.5rem",
            }}
          >
            Where to Get Help in the UK
          </p>
          {[
            {
              org: "NHS Talking Therapies (England)",
              detail:
                "Free CBT and other psychological therapies for adults. You can self-refer without a GP referral. Call 0300 123 3393 or search 'NHS Talking Therapies' plus your postcode.",
            },
            {
              org: "No Panic",
              detail:
                "UK charity specialising specifically in panic disorder, phobias, OCD, and anxiety disorders. Helpline: 0300 772 9844 (daily, 10am–10pm). Offers CBT self-help courses, recovery groups, and a therapist directory.",
            },
            {
              org: "Anxiety UK",
              detail:
                "Charity providing support across all anxiety conditions. Helpline: 03444 775 774. Offers subsidised therapy, online CBT programmes, and a phobia-specific resource library.",
            },
            {
              org: "British Association for Behavioural and Cognitive Psychotherapies (BABCP)",
              detail:
                "The professional body for CBT practitioners in the UK. Their website (babcp.com) has a searchable directory of accredited CBT therapists, filterable by specialism — including specific phobias.",
            },
            {
              org: "Psychology Today Therapist Finder",
              detail:
                "Private therapist directory with UK-wide coverage. Search by phobia specialism and location. Private CBT for phobias typically ranges from £60 to £150 per session, with intensive single-session formats often available.",
            },
          ].map((resource, i) => (
            <div
              key={i}
              style={{
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderBottom:
                  i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <p
                style={{
                  color: TEXT,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "0.35rem",
                }}
              >
                {resource.org}
              </p>
              <p
                style={{
                  color: "rgba(245,240,232,0.62)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {resource.detail}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          It is worth knowing that NHS Talking Therapies waiting times vary
          significantly by region — some areas have waits of 8 to 16 weeks for
          high-intensity CBT. During that wait, self-help materials endorsed
          by your referring service (Step 2 interventions) and consistent
          reflection with a tool like MEOK can keep the momentum from stopping
          entirely. The worst outcome with phobias is not the waiting list —
          it is the waiting list becoming an excuse to stop engaging with the
          problem at all.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          For BII phobia (needles, blood, medical procedures), it is
          especially worth flagging to your GP or therapist because the
          applied tension technique requires instruction — and because
          avoidance of medical care has direct physical health consequences
          that elevate urgency. For emetophobia, seek a therapist who lists
          emetophobia specifically as a specialism; it requires a different
          treatment approach than standard phobia work and is undertreated
          partly because many generalist therapists are less familiar with it.
        </p>

        {/* ── SECTION 8 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            color: TEXT,
            fontWeight: 800,
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.3,
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          The Honest Limits of AI — and Why That Honesty Matters
        </h2>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          There is a version of AI mental health support that oversells.
          Apps that claim to be &#8220;your CBT therapist&#8221;, programmes
          that suggest a chatbot can replace structured treatment, tools that
          encourage users to manage clinical-level presentations without
          professional oversight. We do not build MEOK in that tradition.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          The honest position is this: for{" "}
          <strong style={{ color: TEXT }}>mild to moderate distress</strong>{" "}
          around a phobia — where the fear is present and limiting but not yet
          requiring clinical-level intervention — MEOK&#8217;s combination of
          psychoeducation, normalisation, and cognitive rehearsal can be
          genuinely useful. For phobias causing significant life impairment, a
          trained CBT therapist is the appropriate intervention and MEOK plays
          a supporting role around it. For phobias accompanied by panic
          disorder, depression, or other comorbidities, professional
          assessment should come first.
        </p>
        <p
          style={{
            color: "rgba(245,240,232,0.72)",
            lineHeight: 1.8,
            marginBottom: "1.25rem",
            fontSize: "1rem",
          }}
        >
          What makes MEOK genuinely different from a generic AI chatbot in
          this context is sovereign memory. The phobia work you do across
          weeks is held together: the exposure hierarchy you discussed, the
          rungs you have tried, the thoughts you identified as catastrophic,
          the moments when you surprised yourself. Without that continuity,
          every session starts from scratch and the compounding effect of
          gradual exposure work is lost. With it, MEOK functions as a
          longitudinal companion that can reflect back your own progress in
          moments when the fear feels as overwhelming as it ever did.
        </p>

        {/* ── CLOSING ───────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: "1.5rem",
            padding: "2.5rem",
            marginTop: "3rem",
            marginBottom: "3rem",
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 800,
              fontSize: "1.2rem",
              marginBottom: "1rem",
              lineHeight: 1.4,
            }}
          >
            You do not have to go up the ladder alone.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            Phobias are not character flaws. They are predictable outputs of a
            threat-detection system that learned the wrong lesson. The brain
            that learned that lesson can learn a new one — and the evidence
            from decades of CBT research is clear that graded exposure works,
            when it is done patiently, systematically, and with enough support
            to keep going when a rung feels impossible.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.72)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            MEOK is not a replacement for the therapist who will build your
            hierarchy with clinical skill. But it is a companion for the
            journey — the 6am panic before a difficult rung, the late-night
            debrief after a hard session, the Tuesday morning when the keys
            are in your hand and you want to talk yourself into trying. That
            kind of presence, available when you need it, remembering where
            you are, is not nothing. For many people, it is what makes the
            difference between starting the work and finding endless reasons to
            wait.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              background: GOLD,
              color: "#0d0c18",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Try MEOK Free
          </Link>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <section
          style={{
            marginTop: "3rem",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              color: TEXT,
              fontWeight: 800,
              fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
              lineHeight: 1.3,
              marginBottom: "1.75rem",
            }}
          >
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "What is the difference between a specific phobia and general anxiety?",
              a: "A specific phobia is an intense, disproportionate fear of a particular object or situation — spiders, flying, vomiting — that causes avoidance and significant life disruption. Generalised anxiety disorder involves persistent, wide-ranging worry rather than fear of one specific trigger. Social anxiety centres on scrutiny by others. Getting the right distinction matters because treatments differ substantially.",
            },
            {
              q: "What is graded exposure and does it actually work?",
              a: "Graded exposure is the gold-standard CBT treatment for specific phobias. You build a hierarchy of feared situations from least to most distressing, then confront each rung — in imagination first, then in real life — until anxiety reduces. Meta-analyses consistently show it as the most effective intervention for specific phobias, often producing lasting results in as few as 5 to 10 sessions.",
            },
            {
              q: "Can an AI companion support graded exposure therapy?",
              a: "An AI companion like MEOK cannot deliver clinical exposure therapy but can meaningfully support the process around it: talking through feared scenarios at a manageable pace, normalising the experience, helping prepare for the next step on the exposure ladder, and debriefing how each practice went. This kind of between-session support improves adherence and reduces the sense of going it alone.",
            },
            {
              q: "What are the most common specific phobias in the UK?",
              a: "The most prevalent specific phobias in the UK include aviophobia (flying), arachnophobia (spiders), driving phobia, blood-injection-injury phobia (medical procedures, needles), emetophobia (vomiting), claustrophobia (enclosed spaces), and dental phobia. Each responds well to CBT-based graded exposure when delivered by a trained therapist.",
            },
            {
              q: "Where can I get NHS treatment for a specific phobia?",
              a: "In England you can self-refer to NHS Talking Therapies (formerly IAPT) at 0300 123 3393 or via your GP. Charities No Panic (0300 772 9844) and Anxiety UK (03444 775 774) also provide helplines, CBT therapist directories, and self-help resources specifically for phobias.",
            },
            {
              q: "Is MEOK suitable for emetophobia (fear of vomiting)?",
              a: "Emetophobia is one of the most pervasive and under-treated phobias. MEOK can provide a non-judgemental space to talk through the fear, explore its roots, rehearse cognitive reframes, and practise staying with discomfort in imagination. A CBT therapist trained specifically in emetophobia remains the recommended clinical route, as it requires a more adapted approach than standard phobia work.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1rem",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                style={{
                  color: TEXT,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.75rem",
                  lineHeight: 1.5,
                }}
              >
                {faq.q}
              </p>
              <p
                style={{
                  color: "rgba(245,240,232,0.65)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </section>

        {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: "6rem" }}>
          <h2
            style={{
              color: TEXT,
              fontWeight: 800,
              fontSize: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-anxiety",
                label: "AI for Anxiety",
                desc: "How AI companions support everyday anxiety management.",
              },
              {
                href: "/blog/ai-for-ocd",
                label: "AI for OCD",
                desc: "Supporting OCD sufferers between ERP therapy sessions.",
              },
              {
                href: "/blog/ai-for-social-anxiety",
                label: "AI for Social Anxiety",
                desc: "Practising real conversations in a low-stakes space.",
              },
              {
                href: "/blog/ai-companion-vs-therapist",
                label: "AI vs Therapist",
                desc: "Honest comparison of what AI can and cannot replace.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {post.label}
                </p>
                <p
                  style={{
                    color: "rgba(245,240,232,0.55)",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
