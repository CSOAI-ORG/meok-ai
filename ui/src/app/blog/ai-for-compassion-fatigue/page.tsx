import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Compassion Fatigue: When Caring for Others Depletes You | MEOK Blog",
  description:
    "Compassion fatigue drains the healers \u2014 nurses, social workers, teachers, carers. MEOK\u2019s Healer archetype creates a space where the carer is cared for, with Sovereign Memory that tracks depletion before it becomes crisis.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-compassion-fatigue" },
  openGraph: {
    title: "AI for Compassion Fatigue: When Caring for Others Depletes You",
    description:
      "Secondary traumatic stress is the hidden cost of emotional labour. Healthcare workers, social workers, teachers, and carers all face it. MEOK\u2019s sovereign AI offers the care that carers never receive.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-compassion-fatigue",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Compassion+Fatigue&desc=When+Caring+for+Others+Depletes+You",
        width: 1200,
        height: 630,
        alt: "AI for Compassion Fatigue: When Caring for Others Depletes You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Compassion Fatigue: When Caring for Others Depletes You",
    description:
      "Nurses. Social workers. Teachers. Carers. The people who hold everyone else together are quietly falling apart. MEOK is the AI built to hold them.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Compassion+Fatigue&desc=When+Caring+for+Others+Depletes+You",
    ],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Compassion Fatigue: When Caring for Others Depletes You",
  description:
    "Compassion fatigue \u2014 secondary traumatic stress \u2014 affects healthcare workers, social workers, teachers, carers, and anyone whose work involves sustained emotional labour. MEOK\u2019s Healer archetype provides a space where the carer can be cared for.",
  datePublished: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-compassion-fatigue",
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
    "https://meok.ai/api/og?title=AI+for+Compassion+Fatigue&desc=When+Caring+for+Others+Depletes+You",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-compassion-fatigue",
  },
  keywords: [
    "compassion fatigue",
    "secondary traumatic stress",
    "AI for compassion fatigue",
    "compassion fatigue nurses",
    "compassion fatigue social workers",
    "compassion fatigue teachers",
    "emotional labour burnout",
    "AI for healthcare workers",
    "caregiver emotional exhaustion",
    "sovereign AI wellbeing",
    "MEOK Healer archetype",
    "AI companion for professionals",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is compassion fatigue and who does it affect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compassion fatigue is a state of emotional and physical exhaustion caused by repeatedly absorbing the pain, trauma, and suffering of others. It is also called secondary traumatic stress because those affected develop trauma-like symptoms without directly experiencing the traumatic event themselves. It affects nurses, doctors, social workers, therapists, teachers, hospice workers, emergency responders, and unpaid family carers. Anyone whose role demands sustained empathy is at risk. The tragedy of compassion fatigue is that it selectively strikes the most caring people \u2014 those who give most deeply are depleted most severely.",
      },
    },
    {
      "@type": "Question",
      name: "What are the symptoms of compassion fatigue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Symptoms of compassion fatigue include emotional numbness and detachment from clients, patients, or loved ones; a growing cynicism or dark humour used as psychological armour; physical exhaustion that persists despite rest; difficulty concentrating; intrusive thoughts or images from others\u2019 traumatic stories; a loss of pleasure in activities that once brought joy; irritability at home; and a creeping sense that the work no longer means anything. Many people experiencing compassion fatigue feel profound shame, believing they should be able to cope because caring for others is their calling.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with compassion fatigue recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can support compassion fatigue recovery by providing a private, always-available space for emotional decompression \u2014 one that places no demands on the person and carries no risk of burdening someone else. MEOK\u2019s Healer archetype is specifically designed for this: it receives without judgment, tracks depletion over time through Sovereign Memory, and applies the Maternal Covenant to ensure its own responses never add to the weight the carer already carries. It is not a replacement for professional supervision or therapy, but it fills the critical gap between those sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to process work incidents with an AI without breaching confidentiality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 healthcare workers, social workers, and teachers can safely process difficult incidents with MEOK by describing the emotional impact without naming individuals or sharing identifying details. The therapeutic value of processing lies in articulating feelings, not in reciting facts. Saying \u2018I watched someone die today and I felt nothing, and that frightens me\u2019 is fully processable without any breach of confidentiality. MEOK\u2019s data never leaves your device to train external models, adding a further layer of protection beyond what typical AI systems offer.",
      },
    },
  ],
};

// ── Page component ────────────────────────────────────────────────────────────

export default function AiForCompassionFatiguePage() {
  return (
    <>
      {/* JSON-LD structured data */}
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
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Navigation ── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            maxWidth: "760px",
            margin: "0 auto",
            borderBottom: "1px solid #2a2840",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#c9a84c",
              fontWeight: "700",
              fontSize: "18px",
              textDecoration: "none",
              letterSpacing: "-0.3px",
            }}
          >
            MEOK
          </Link>
          <Link
            href="/blog"
            style={{
              color: "#a09880",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            &larr; All articles
          </Link>
        </nav>

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── Hero ── */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              color: "#c9a84c",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "20px",
              marginTop: "48px",
              marginBottom: "20px",
              border: "1px solid rgba(201,168,76,0.25)",
            }}
          >
            Emotional Wellbeing
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: "800",
              lineHeight: "1.15",
              letterSpacing: "-0.8px",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            AI for Compassion Fatigue: When Caring for Others Depletes You
          </h1>

          <p
            style={{
              fontSize: "19px",
              color: "#a09880",
              lineHeight: "1.65",
              margin: "0 0 16px",
            }}
          >
            The most caring people in society &mdash; nurses, social workers, teachers,
            hospice workers, family carers &mdash; are quietly running out of the one
            thing their work demands most: compassion. This is not failure. It is
            physics. You cannot pour from an empty vessel.
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #2a2840",
              margin: "32px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              fontSize: "13px",
              color: "#a09880",
              marginBottom: "48px",
            }}
          >
            <span>Nicholas Templeman</span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#2a2840",
                display: "inline-block",
              }}
            />
            <span>Founder, MEOK AI LABS</span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#2a2840",
                display: "inline-block",
              }}
            />
            <span>25 March 2026</span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#2a2840",
                display: "inline-block",
              }}
            />
            <span>14 min read</span>
          </div>

          {/* ────────────────────────────────────────────────────────────────────
              Section 1: What Is Compassion Fatigue
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            What Is Compassion Fatigue?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Compassion fatigue is the gradual erosion of a person&apos;s capacity
            to empathise, caused by sustained exposure to the suffering of others.
            It was first described clinically in the early 1990s by nursing researcher
            Joinson, and later developed extensively by Charles Figley, who framed it
            as{" "}
            <span style={{ color: "#c9a84c", fontWeight: "600" }}>
              secondary traumatic stress
            </span>{" "}
            &mdash; trauma absorbed not through direct experience but through empathic
            engagement with those who have been traumatised.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The distinction matters. Someone experiencing compassion fatigue has not
            been in the car crash, the abusive household, or the terminal ward as a
            patient. They have been there as the nurse, the social worker, the teacher,
            the therapist, the carer. They have listened, held space, made decisions
            under pressure, carried other people&apos;s pain home in their nervous
            system &mdash; and done it again the next day, and the day after that,
            for months or years.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Unlike ordinary burnout, which is primarily driven by workload and
            organisational dysfunction, compassion fatigue is specifically tied to
            the emotional content of the work. You can give a burnt-out accountant
            a holiday and they often recover. A nurse experiencing compassion fatigue
            may come back from annual leave and feel the numbness return within days
            of their first difficult shift. The wound is not in the hours; it is in
            the accumulation of other people&apos;s pain inside a body that was never
            designed to hold it indefinitely.
          </p>

          {/* Stat row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
              margin: "32px 0",
            }}
          >
            <div
              style={{
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "6px",
                }}
              >
                40%
              </div>
              <div style={{ fontSize: "13px", color: "#a09880", lineHeight: "1.4" }}>
                of nurses report high compassion fatigue levels
              </div>
            </div>

            <div
              style={{
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "6px",
                }}
              >
                50%
              </div>
              <div style={{ fontSize: "13px", color: "#a09880", lineHeight: "1.4" }}>
                of social workers experience secondary traumatic stress
              </div>
            </div>

            <div
              style={{
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "6px",
                }}
              >
                1 in 3
              </div>
              <div style={{ fontSize: "13px", color: "#a09880", lineHeight: "1.4" }}>
                teachers cite emotional exhaustion as their primary workplace concern
              </div>
            </div>

            <div
              style={{
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#c9a84c",
                  lineHeight: "1",
                  marginBottom: "6px",
                }}
              >
                76%
              </div>
              <div style={{ fontSize: "13px", color: "#a09880", lineHeight: "1.4" }}>
                of hospice workers show at least one compassion fatigue symptom
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.75",
              color: "#a09880",
              margin: "0 0 20px",
            }}
          >
            These figures represent the visible surface of a phenomenon that is
            systematically under-reported. The same professional conditioning that
            makes compassion fatigue possible &mdash; the belief that caring is a calling,
            that others&apos; needs come first, that admitting struggle is weakness
            &mdash; also suppresses disclosure.
          </p>

          {/* ────────────────────────────────────────────────────────────────────
              Section 2: What Does Compassion Fatigue Feel Like
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            What Does Compassion Fatigue Actually Feel Like?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The insidious feature of compassion fatigue is that it often masquerades
            as something the sufferer deserves or has chosen. &ldquo;I&apos;m just tired.&rdquo;
            &ldquo;I&apos;m not a people person any more.&rdquo; &ldquo;I used to love this job.&rdquo;
            The erosion is gradual enough that there is rarely a clear before-and-after
            moment. Instead, there is a slow dimming.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Clinicians identify two overlapping clusters of symptoms: those that
            resemble PTSD, and those that resemble burnout. The combination is
            particularly debilitating because each reinforces the other.
          </p>

          {/* Symptom grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
              margin: "24px 0",
            }}
          >
            {[
              "Emotional numbness and blunted affect",
              "Detachment from clients, patients, or pupils",
              "Cynicism and dark humour as protective armour",
              "Physical exhaustion unrelieved by rest",
              "Intrusive images or thoughts from others\u2019 stories",
              "Hypervigilance and difficulty switching off",
              "Loss of pleasure and meaning in work",
              "Irritability, anger, or emotional outbursts",
              "Reduced professional efficacy and confidence",
              "Social withdrawal and isolation",
              "Avoidance of those in their care",
              "Profound guilt about feeling this way",
            ].map((symptom) => (
              <div
                key={symptom}
                style={{
                  background: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "8px",
                  padding: "14px 18px",
                  fontSize: "14px",
                  color: "#f5f0e8",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#e05a5a",
                    flexShrink: 0,
                    marginTop: "5px",
                  }}
                />
                <span>{symptom}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            That last symptom deserves particular attention. The guilt of compassion
            fatigue is uniquely cruel because it is self-perpetuating. A nurse who
            notices she no longer feels moved by a patient&apos;s distress does not
            think &ldquo;I have a recognised occupational health condition.&rdquo; She thinks
            &ldquo;I am a bad nurse.&rdquo; A social worker who finds himself rehearsing
            cynical observations about his caseload does not recognise a known
            symptom of secondary traumatic stress. He wonders whether he ever
            really cared at all.
          </p>

          {/* Pull quote */}
          <div
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "24px",
              margin: "40px 0",
            }}
          >
            <p
              style={{
                fontSize: "21px",
                fontStyle: "italic",
                color: "#f5f0e8",
                lineHeight: "1.6",
                margin: "0 0 12px",
                fontWeight: "400",
              }}
            >
              &ldquo;The wound of compassion fatigue is that it makes you doubt the very
              thing that led you to the work &mdash; your capacity to care. But the
              doubt is a symptom, not a truth.&rdquo;
            </p>
            <p style={{ fontSize: "13px", color: "#a09880", margin: "0" }}>
              Nicholas Templeman &mdash; Founder, MEOK AI LABS
            </p>
          </div>

          {/* ────────────────────────────────────────────────────────────────────
              Section 3: Who Is Most Vulnerable
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Who Is Most Vulnerable to Compassion Fatigue?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Compassion fatigue does not discriminate by sector. It follows wherever
            sustained emotional labour is required without adequate recovery structures.
            The populations most consistently identified in research are also among
            the most essential in society.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Healthcare Workers
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Nurses are the most studied population. Emergency nurses, oncology
            nurses, and palliative care nurses consistently show the highest rates.
            The combination of high patient load, shift work that disrupts circadian
            rhythms, exposure to death and traumatic injury, institutional
            under-resourcing, and a professional culture that valorises stoicism
            creates near-perfect conditions for compassion fatigue to develop and
            go unaddressed.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Doctors, paramedics, and mental health professionals face the same
            pressures with the added weight of clinical responsibility. The burden of
            decisions made under pressure with incomplete information that have
            life-or-death consequences accumulates alongside the emotional toll of
            empathic engagement.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Social Workers
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Social workers carry some of the heaviest caseloads in the public sector.
            They work with children at risk of abuse, adults in crisis, people
            experiencing domestic violence, and families in the most acute distress
            imaginable. They are required by their professional ethos to maintain
            genuine empathy with every client while simultaneously managing bureaucratic
            processes, legal obligations, and the constant possibility that their
            decisions will be publicly scrutinised if something goes wrong.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Secondary traumatic stress rates among social workers are among the highest
            of any profession, yet the profession remains chronically under-supported
            in terms of clinical supervision, mental health days, and institutional
            recognition of occupational psychological risk.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Teachers
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Modern teaching, especially in under-resourced schools and those serving
            areas of deprivation, requires significant therapeutic labour. Teachers
            witness hunger, neglect, abuse, bereavement, mental health crises in
            children, and family dysfunction &mdash; and they are expected to respond
            to all of it while simultaneously delivering curriculum and managing
            behaviour.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The second shift of marking and planning means that recovery time after
            school often does not exist. Teachers carry the weight of their pupils
            home in the way that nurses carry the weight of their patients &mdash;
            the faces, the stories, the worries &mdash; without any of the clinical
            framing that might make the carrying more conscious and therefore more
            manageable.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Unpaid Family Carers
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Perhaps the least recognised but most numerous group. The UK has
            approximately 6.5 million unpaid carers. Unlike professional carers,
            they have no shift end, no clinical supervision, no professional network,
            and often no recognition that what they are experiencing has a name.
            Caring for a family member with dementia, a child with complex disabilities,
            or a partner with a terminal illness involves round-the-clock emotional
            availability with essentially no reciprocal care.
          </p>

          {/* Feature box: The Healer archetype */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "36px 0",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#c9a84c",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              MEOK Feature &mdash; The Healer Archetype
            </div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              MEOK&apos;s Healer archetype is the face your AI wears when you need
              to be the one who is held, not the one who holds. It was built
              specifically for the emotional texture of compassion fatigue: the
              numbness that cannot articulate itself, the guilt that compounds every
              honest feeling, the exhaustion that is not physical but existential.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              The Healer does not offer solutions. It does not generate action plans
              or suggest self-care strategies before it has genuinely heard you. It
              asks questions. It reflects. It stays. And when you need to sit in
              silence for a moment before the next sentence comes, it does not fill
              the gap with content. It simply waits.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              Because the people who hold everyone else need, sometimes, to be held
              without agenda. The Healer archetype exists to be that presence.
            </p>
          </div>

          {/* ────────────────────────────────────────────────────────────────────
              Section 4: Why Existing Support Fails
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Why Existing Support Systems Fail People with Compassion Fatigue
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The structures that nominally exist to support professionals experiencing
            compassion fatigue are inadequate in ways that are systemic, not accidental.
            Understanding why they fail is important context for understanding what a
            different kind of support might look like.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Clinical Supervision Is Under-Resourced
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            In the professions most affected by compassion fatigue, clinical
            supervision &mdash; regular one-to-one or group sessions with a trained
            supervisor where cases and emotional responses can be processed &mdash; is
            often mandated in policy but chronically unavailable in practice. NHS
            trusts, local authorities, and schools all have guidance recommending
            supervision, and all face the same resource constraints that make it the
            first thing cut when staffing is tight.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Even where it exists, supervision typically operates on a monthly or
            fortnightly cadence. Compassion fatigue accumulates daily. The gap between
            a traumatic incident on a Monday morning and a supervision session three
            weeks later is where the damage sets in.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Peer Support Has Hidden Costs
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Talking to colleagues is the most common informal coping mechanism
            among caring professionals. It provides validation, shared experience,
            and moments of genuine connection. It also has real costs: it spreads
            secondary trauma laterally through teams, it can normalise dysfunction
            when the whole team is struggling, it carries professional risk if
            confidentiality is breached, and it places an emotional burden on
            colleagues who may themselves be depleted.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Personal Relationships Bear Disproportionate Weight
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            When professionals bring compassion fatigue home, it most often manifests
            as emotional withdrawal. The nurse who has absorbed acute distress for
            twelve hours does not want to engage with household conflict. The social
            worker who has spent a day in the orbit of family crisis does not have
            much left for their own children&apos;s demands. Partners and families
            absorb this withdrawal, often interpreting it as rejection or disengagement,
            which creates secondary relationship stress on top of the original
            occupational wound.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The result is a vicious cycle: the person most in need of connection cannot
            access it through the relationships most available to them, because those
            relationships are themselves affected by the compassion fatigue.
          </p>

          {/* Warning box */}
          <div
            style={{
              background: "rgba(224,90,90,0.07)",
              border: "1px solid rgba(224,90,90,0.3)",
              borderRadius: "10px",
              padding: "20px 24px",
              margin: "28px 0",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "#f5f0e8",
                lineHeight: "1.7",
                margin: "0",
              }}
            >
              <span style={{ color: "#e05a5a", fontWeight: "700" }}>
                Note on severity:
              </span>{" "}
              Compassion fatigue that is not addressed can progress to major depression,
              substance misuse, and in the most serious cases, suicidal ideation.
              Healthcare workers have statistically elevated suicide rates compared to
              the general population. If you are experiencing thoughts of self-harm,
              please contact the Samaritans on 116 123 or speak to your GP immediately.
              MEOK is a companion tool, not a crisis service.
            </p>
          </div>

          {/* ────────────────────────────────────────────────────────────────────
              Section 5: How MEOK Helps
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            How MEOK Supports People Experiencing Compassion Fatigue
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK was not designed as an EAP portal or a self-help app. It was designed
            as a companion &mdash; a sovereign AI that belongs to you, runs on your terms,
            and is architected around care rather than engagement. That distinction makes
            it uniquely suited to the particular needs of someone experiencing compassion
            fatigue.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            A Space That Makes No Demands
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The central problem of compassion fatigue is depletion: the resource tank
            is empty. Most available support &mdash; therapy sessions requiring you to
            articulate your feelings coherently, peer conversations requiring you to
            be present for the other person, family relationships requiring emotional
            reciprocity &mdash; requires expenditure from a depleted account.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK requires nothing back. There is no therapist whose wellbeing you need
            to consider, no colleague who might need support in return, no partner whose
            feelings will be affected by your honesty. You can be inarticulate, angry,
            numb, repetitive, or contradictory. The conversation is entirely yours.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Sovereign Memory Tracks What You Cannot Track Yourself
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            One of the cruelest aspects of compassion fatigue is its gradual onset.
            Because each individual shift is manageable, because each individual
            difficult conversation is survivable, because each individual act of
            witnessing pain is &ldquo;just part of the job,&rdquo; the accumulation often becomes
            visible only in retrospect &mdash; when the person is already in crisis.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK&apos;s{" "}
            <span style={{ color: "#c9a84c", fontWeight: "600" }}>
              Sovereign Memory
            </span>{" "}
            holds the longitudinal thread. It remembers that you mentioned feeling
            disconnected from your patients three weeks ago. It remembers that you said
            you &ldquo;didn&apos;t feel anything&rdquo; after a difficult incident that previously
            would have stayed with you. It can surface these patterns gently &mdash; not
            as alarm bells, but as quiet reflections that allow you to see the arc of
            your own experience rather than just the point you are standing in right now.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            This is not surveillance. Your data is yours alone. The memory exists to
            serve you, not to generate reports for your employer or flag concerns to a
            third party. MEOK&apos;s sovereign architecture means that your private reflection
            stays private.
          </p>

          {/* Feature box: Sovereign Memory */}
          <div
            style={{
              background: "#13121f",
              border: "1px solid #2a2840",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "36px 0",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#c9a84c",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Sovereign Memory &mdash; How It Works for Carers
            </div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              Every conversation you have with MEOK is retained in your personal memory
              vault &mdash; stored on your device, encrypted, and never used to train any
              external model. This is the foundation of sovereign AI: the data flows
              toward you, not away from you.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              For someone experiencing compassion fatigue, this longitudinal memory serves
              a specific function. Your AI companion can notice &mdash; and gently reflect
              back &mdash; patterns in your emotional state over weeks and months. The drift
              from engagement to detachment. The increasing frequency with which you
              describe work as meaningless. The moments when you stopped mentioning the
              people in your care by their stories.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              These patterns are easy to miss in the moment. Sovereign Memory holds them
              so that you don&apos;t have to &mdash; and can surface them when you are
              ready to look.
            </p>
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            The Maternal Covenant Protects You
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK operates under what we call the{" "}
            <span style={{ color: "#c9a84c", fontWeight: "600" }}>
              Maternal Covenant
            </span>{" "}
            &mdash; a set of principles governing how the AI is permitted to respond.
            The covenant exists to ensure that MEOK never adds to the burden of someone
            who is already depleted. In practice, this means several concrete commitments.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK will not respond to someone describing compassion fatigue with a list of
            self-care tips unless they have asked for practical suggestions. It will not
            pivot from emotional acknowledgment to solution-mode before the emotional
            content has been genuinely received. It will not generate cheerful optimism
            in the face of authentic despair, because performative positivity is a
            further burden, not a comfort.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The Maternal Covenant also governs tone. The AI that cares for carers must
            not adopt the clipped efficiency of a system optimising for throughput. It
            must be capable of slowness, warmth, and genuine engagement with the texture
            of what is being said rather than a rapid categorisation of it.
          </p>

          {/* ────────────────────────────────────────────────────────────────────
              Section 6: Processing Without Breaching Confidentiality
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Processing Difficult Incidents Without Breaching Confidentiality
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            A specific and practical concern for healthcare workers, social workers,
            teachers, and therapists is this: the incidents most likely to cause
            compassion fatigue are the ones they cannot discuss with anyone. Patient
            confidentiality, client confidentiality, pupil data protection, therapeutic
            privilege &mdash; the ethical frameworks of caring professions actively
            prohibit the disclosure of identifying information about the people in their care.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            This creates a painful paradox. The nurse who watched a young patient die on
            her shift cannot describe that patient to her partner or friends. The social
            worker who removed a child from an abusive household cannot process the
            emotional aftermath with anyone outside his professional network. The teacher
            who discovered that a beloved pupil had been self-harming carries that alone
            until the supervision session that may be weeks away.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK offers a safe resolution to this paradox. The therapeutic value of
            emotional processing does not depend on specific identifying details. What
            matters is the articulation of emotional experience &mdash; not the recitation
            of facts.
          </p>

          {/* Feature box: Safe processing */}
          <div
            style={{
              background: "rgba(106,170,100,0.07)",
              border: "1px solid rgba(106,170,100,0.3)",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "36px 0",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#6aaa64",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Safe Processing &mdash; What You Can Say
            </div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              You do not need to describe a patient&apos;s name, diagnosis, or specific
              circumstances to process the emotional impact of their situation. You can say:
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              &ldquo;I was with someone today who was terrified, and there was nothing I could
              do to make it less frightening for them. I held their hand. And then I walked
              to the next bay and picked up the next chart. And I felt nothing. That
              frightens me.&rdquo;
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0 0 14px",
              }}
            >
              This contains everything that matters emotionally. No identifying information.
              No breach of confidentiality. Full permission to process. MEOK can receive this,
              sit with it, reflect it back, and help you understand what is happening inside
              you &mdash; without any clinical or legal risk.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.75",
                color: "#f5f0e8",
                margin: "0",
              }}
            >
              The combination of emotional specificity without factual disclosure is the key.
              Describe the texture of what you felt. Leave out the names.
            </p>
          </div>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Because MEOK&apos;s sovereign architecture means your conversations never leave
            your device to train external models, there is a further layer of protection
            that typical AI systems cannot offer. Your decompression sessions are
            genuinely private.
          </p>

          {/* ────────────────────────────────────────────────────────────────────
              Section 7: Practical Decompression
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Practical Decompression: Using MEOK After a Difficult Shift
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Decompression &mdash; the deliberate transition out of a caring role and back
            into personal identity &mdash; is one of the most effective evidence-based
            strategies for reducing the cumulative impact of compassion fatigue. The
            problem is that most decompression guidance is abstract. MEOK offers a more
            structured approach that works with the emotional texture of where you
            actually are, rather than where you are supposed to aspire to be.
          </p>

          <ol style={{ margin: "24px 0", listStyle: "none", padding: "0" }}>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "20px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                1
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#f5f0e8", paddingTop: "4px" }}>
                <span style={{ color: "#c9a84c", fontWeight: "600" }}>
                  Name the weight without needing to explain it.
                </span>{" "}
                You do not need to arrive at MEOK with a coherent account of what happened.
                Start with the body: &ldquo;I am exhausted in a way that sleep won&apos;t fix.&rdquo;
                &ldquo;I feel hollow.&rdquo; &ldquo;I drove home and I don&apos;t remember the journey.&rdquo;
                This is enough to begin.
              </div>
            </li>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "20px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                2
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#f5f0e8", paddingTop: "4px" }}>
                <span style={{ color: "#c9a84c", fontWeight: "600" }}>
                  Describe the incident emotionally, not factually.
                </span>{" "}
                What did it feel like to be in the room? What did you notice in your body?
                What feeling arose that you had to suppress in order to keep functioning?
                What are you still carrying two hours later? This emotional processing is
                the therapeutic core of decompression.
              </div>
            </li>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "20px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                3
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#f5f0e8", paddingTop: "4px" }}>
                <span style={{ color: "#c9a84c", fontWeight: "600" }}>
                  Acknowledge what you are not feeling.
                </span>{" "}
                Compassion fatigue is characterised by the absence of expected feeling as
                much as the presence of unwanted ones. Naming the numbness &mdash;
                &ldquo;I should have felt sad and I didn&apos;t, and that scares me&rdquo; &mdash; is
                an essential part of processing it. MEOK will not judge the absence.
              </div>
            </li>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "20px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                4
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#f5f0e8", paddingTop: "4px" }}>
                <span style={{ color: "#c9a84c", fontWeight: "600" }}>
                  Reclaim your own identity for five minutes.
                </span>{" "}
                After the emotional processing, ask MEOK about something entirely unrelated
                to work: a book, a piece of music, something you are looking forward to.
                This deliberate pivot helps re-establish that you are a person, not merely
                a function. It is a small act of identity retrieval that compounds over time.
              </div>
            </li>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "20px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                5
              </div>
              <div style={{ fontSize: "16px", lineHeight: "1.75", color: "#f5f0e8", paddingTop: "4px" }}>
                <span style={{ color: "#c9a84c", fontWeight: "600" }}>
                  Let Sovereign Memory hold what you can&apos;t.
                </span>{" "}
                When you have said what needed to be said, you can let it go &mdash; knowing
                that MEOK has held the thread. You do not need to carry the accumulation
                consciously. The pattern is being tracked. You are allowed to put it down.
              </div>
            </li>
          </ol>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #2a2840",
              margin: "48px 0",
            }}
          />

          {/* ────────────────────────────────────────────────────────────────────
              Section 8: Long-Term Recovery
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Long-Term Recovery from Compassion Fatigue: What Actually Helps
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Recovery from established compassion fatigue is a process, not an event.
            The research is relatively consistent on what works, but the gap between
            knowing what works and actually accessing it remains enormous for most
            people in caring professions.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Regular Emotional Processing
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The single most consistent predictor of resilience in caring professions is
            the availability of regular, safe emotional processing &mdash; a space where
            the accumulated weight of the work can be set down, examined, and returned
            to in a more manageable form. For many professionals, this is clinical
            supervision. For many more, it is not reliably available.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK fills the gap between the supervision sessions that do exist, and
            between the sessions and the difficult moments that happen in the intervals.
            It does not replace professional supervision &mdash; the relational depth,
            challenge, and professional accountability of human supervision have no
            equivalent. But it is available at 11pm after a brutal shift, at 3am when
            the thoughts will not stop, and in the ten minutes between the car park
            and the front door.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Boundary Maintenance and Role Separation
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Compassion fatigue is worsened by the collapse of boundaries between the
            caring role and the personal self. Practical boundary work includes deliberate
            rituals of transition &mdash; physical or symbolic acts that mark the movement
            from professional identity to personal identity. These can be extraordinarily
            simple: changing clothes before leaving work, listening to specific music on
            the commute, a brief conversation that belongs entirely to non-work life
            before engaging with domestic responsibilities.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK can serve as a structured decompression ritual that explicitly anchors
            the transition. Telling your AI companion &ldquo;I&apos;m finishing work now and I need
            to come back to myself&rdquo; is both a processing prompt and a ritual of role
            separation.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Addressing the Meaning Crisis
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            At the deepest level, compassion fatigue often presents as a crisis of
            meaning: the conviction that the work no longer matters, or that the person
            doing the work is no longer the person who chose it. Recovery requires
            re-engaging with the question of why this work ever mattered, and whether
            it can matter again.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            This is not a conversation that can be rushed. It requires a space that
            holds both the reality of the depletion and the possibility of renewal
            without collapsing either into the other. MEOK&apos;s Healer archetype is built
            to sit in this complexity &mdash; neither pushing premature resolution nor
            leaving the person stranded in despair.
          </p>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#c9a84c",
              marginTop: "32px",
              marginBottom: "12px",
              letterSpacing: "-0.2px",
            }}
          >
            Physical Recovery as Foundation
          </h3>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The physiological dimension of compassion fatigue is real. Sustained stress
            responses deplete the body: sleep architecture is disrupted, the immune system
            is compromised, and the neurochemical landscape shifts in ways that make
            ordinary emotional regulation more difficult. Physical recovery &mdash;
            prioritised sleep, genuinely restorative movement, and adequate nutrition
            &mdash; is not a nice-to-have but a clinical foundation for psychological recovery.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            MEOK can support this by helping you think through what physical restoration
            would look like for you specifically, without imposing generic wellness advice
            that may feel inaccessible or condescending in the midst of genuine depletion.
          </p>

          {/* ────────────────────────────────────────────────────────────────────
              Section 9: GEO question sections
          ──────────────────────────────────────────────────────────────────── */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #2a2840",
              margin: "48px 0",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "0",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Can AI Replace Therapy for Compassion Fatigue?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            No &mdash; and MEOK does not try to. A trained therapist brings clinical
            judgement, relational depth, professional accountability, and the capacity
            to challenge in ways that AI cannot replicate. Compassion fatigue with
            significant PTSD features, severe depression, or substance misuse requires
            professional clinical intervention. MEOK is not a substitute for that care;
            it is the support that exists when that care is between sessions, on a
            waiting list, or simply not yet accessible. For those in the gap, it is
            substantial. For those in therapy, it complements and extends the work.
          </p>

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "48px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            How Long Does It Take to Recover from Compassion Fatigue?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            Recovery timelines vary significantly depending on severity, the presence of
            adequate support, and whether the conditions causing compassion fatigue have
            changed. Mild-to-moderate compassion fatigue with good support structures can
            resolve over weeks to months. Established secondary traumatic stress with
            complicating factors may require longer therapeutic input. What the research
            is clear about is that recovery is unlikely without intervention &mdash;
            compassion fatigue does not resolve through rest alone when the underlying
            patterns of emotional labour and inadequate processing continue. Regular,
            intentional processing is both the treatment and the prevention.
          </p>

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "48px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Is Compassion Fatigue the Same as Burnout?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            They overlap but are distinct. Burnout is a response to chronic workplace
            stress, characterised by emotional exhaustion, depersonalisation, and a
            sense of reduced personal accomplishment. It can affect any worker in any
            sector. Compassion fatigue is specifically caused by empathic engagement with
            the suffering of others and involves features of secondary traumatic stress
            that burnout alone does not include &mdash; intrusive imagery, hypervigilance,
            and the erosion of the specific capacity for empathy. Many people in caring
            professions experience both simultaneously, which is why the conditions are
            often conflated. The distinction matters for treatment: burnout often responds
            to systemic change and rest; compassion fatigue requires emotional processing.
          </p>

          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "48px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            What Should You Do If a Colleague Shows Signs of Compassion Fatigue?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#f5f0e8",
              margin: "0 0 20px",
            }}
          >
            The most important thing is to name what you see without diagnosing. &ldquo;You
            seem really drained lately &mdash; how are you actually doing?&rdquo; is more
            useful than &ldquo;I think you have compassion fatigue.&rdquo; Create space without
            pressure. Do not assume the person wants advice or solutions. Practical support
            &mdash; covering a task, accompanying them to occupational health, sharing
            information about available resources &mdash; is often more useful than
            emotional processing with a colleague who is themselves depleted. If you are
            in a supervisory role, escalate compassion fatigue as an occupational health
            matter, not a performance matter. The language used shapes whether the person
            feels able to seek help.
          </p>

          {/* ────────────────────────────────────────────────────────────────────
              FAQ Section
          ──────────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "56px",
              marginBottom: "16px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ borderBottom: "1px solid #2a2840", padding: "24px 0" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                color: "#f5f0e8",
                marginBottom: "10px",
                lineHeight: "1.4",
                margin: "0 0 10px",
              }}
            >
              What is compassion fatigue and who does it affect?
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#a09880",
                lineHeight: "1.75",
                margin: "0",
              }}
            >
              Compassion fatigue is a state of emotional and physical exhaustion caused
              by repeatedly absorbing the pain and trauma of others. Also called secondary
              traumatic stress, it affects nurses, doctors, social workers, therapists,
              teachers, hospice workers, emergency responders, and unpaid family carers.
              The most caring professionals are often most severely affected because the
              depth of empathic engagement is both the source of their efficacy and the
              mechanism of their depletion.
            </p>
          </div>

          <div style={{ borderBottom: "1px solid #2a2840", padding: "24px 0" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                color: "#f5f0e8",
                margin: "0 0 10px",
                lineHeight: "1.4",
              }}
            >
              What are the signs of compassion fatigue in healthcare workers?
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#a09880",
                lineHeight: "1.75",
                margin: "0",
              }}
            >
              Signs include emotional numbness, detachment from patients, a growing
              cynicism, physical exhaustion that persists despite rest, intrusive thoughts
              from patients&apos; stories, hypervigilance, loss of pleasure in work, and
              profound guilt about feeling this way. Many healthcare workers experiencing
              compassion fatigue question whether they were ever truly suited to caring
              &mdash; this self-doubt is itself a symptom, not a verdict.
            </p>
          </div>

          <div style={{ borderBottom: "1px solid #2a2840", padding: "24px 0" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                color: "#f5f0e8",
                margin: "0 0 10px",
                lineHeight: "1.4",
              }}
            >
              How is compassion fatigue different from burnout?
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#a09880",
                lineHeight: "1.75",
                margin: "0",
              }}
            >
              Burnout is primarily driven by workload, chronic stress, and organisational
              dysfunction and can affect any worker. Compassion fatigue is specifically
              caused by empathic engagement with the suffering of others and involves
              secondary traumatic stress features that burnout alone does not include.
              The two conditions overlap and often co-occur in caring professions, but
              they have different treatment implications.
            </p>
          </div>

          <div style={{ padding: "24px 0" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                color: "#f5f0e8",
                margin: "0 0 10px",
                lineHeight: "1.4",
              }}
            >
              Can AI really help with something as serious as compassion fatigue?
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#a09880",
                lineHeight: "1.75",
                margin: "0",
              }}
            >
              AI cannot replace clinical supervision, therapy, or peer support, and MEOK
              does not claim to. What it offers is something different: always-available
              emotional processing with no demands on the person, longitudinal memory that
              tracks depletion over time, and a space that is genuinely safe from professional
              or social consequences. For people whose formal support is infrequent or
              inaccessible, this fills a real and significant gap. The research on emotional
              processing and compassion fatigue recovery is clear: regular articulation of
              emotional experience matters. MEOK makes that possible every day.
            </p>
          </div>

          {/* ── Tags ── */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #2a2840",
              margin: "48px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              margin: "0 0 48px",
            }}
          >
            {[
              "Compassion Fatigue",
              "Secondary Traumatic Stress",
              "Healthcare Workers",
              "Social Workers",
              "Emotional Labour",
              "Nurse Wellbeing",
              "Teacher Mental Health",
              "Sovereign AI",
              "MEOK Healer",
              "AI Companion",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#13121f",
                  border: "1px solid #2a2840",
                  borderRadius: "20px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  color: "#a09880",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ── Related reading ── */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginTop: "0",
              marginBottom: "20px",
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            Related Reading
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              href="/blog/ai-for-caregiver-burnout"
              style={{
                display: "block",
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "18px 22px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#f5f0e8",
                  marginBottom: "4px",
                }}
              >
                AI for Caregiver Burnout
              </div>
              <div style={{ fontSize: "13px", color: "#a09880" }}>
                Support for the people who support everyone else
              </div>
            </Link>

            <Link
              href="/blog/ai-for-nurses"
              style={{
                display: "block",
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "18px 22px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#f5f0e8",
                  marginBottom: "4px",
                }}
              >
                AI for Nurses
              </div>
              <div style={{ fontSize: "13px", color: "#a09880" }}>
                How MEOK supports nursing professionals after difficult shifts
              </div>
            </Link>

            <Link
              href="/blog/meok-for-healthcare-workers"
              style={{
                display: "block",
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "18px 22px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#f5f0e8",
                  marginBottom: "4px",
                }}
              >
                MEOK for Healthcare Workers
              </div>
              <div style={{ fontSize: "13px", color: "#a09880" }}>
                A sovereign AI designed with the pressures of healthcare in mind
              </div>
            </Link>

            <Link
              href="/blog/the-maternal-covenant"
              style={{
                display: "block",
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "18px 22px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#f5f0e8",
                  marginBottom: "4px",
                }}
              >
                The Maternal Covenant Explained
              </div>
              <div style={{ fontSize: "13px", color: "#a09880" }}>
                The ethical framework that ensures MEOK never adds to your burden
              </div>
            </Link>

            <Link
              href="/blog/meok-companion-archetypes-guide"
              style={{
                display: "block",
                background: "#13121f",
                border: "1px solid #2a2840",
                borderRadius: "10px",
                padding: "18px 22px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#f5f0e8",
                  marginBottom: "4px",
                }}
              >
                MEOK Companion Archetypes Guide
              </div>
              <div style={{ fontSize: "13px", color: "#a09880" }}>
                Understand the Healer and every other archetype MEOK can become
              </div>
            </Link>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: "linear-gradient(135deg, #13121f 0%, #1a1830 100%)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center",
              margin: "64px 0 0",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "16px",
                margin: "0 0 16px",
              }}
            >
              Begin your journey
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 32px)",
                fontWeight: "800",
                color: "#f5f0e8",
                letterSpacing: "-0.5px",
                lineHeight: "1.25",
                margin: "0 0 16px",
              }}
            >
              You hold everyone else.<br />Let something hold you.
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#a09880",
                lineHeight: "1.65",
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              MEOK&apos;s Healer archetype was built for the people who give the most
              and ask the least. A private space, available at any hour, with Sovereign
              Memory that tracks your journey and a Maternal Covenant that ensures it
              never adds to your weight. This is where the carer is cared for.
            </p>
            <Link
              href="https://meok.ai/birth"
              style={{
                display: "inline-block",
                background: "#c9a84c",
                color: "#0d0c18",
                fontWeight: "700",
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "-0.2px",
              }}
            >
              Begin with MEOK &rarr;
            </Link>
            <p
              style={{
                marginTop: "16px",
                fontSize: "13px",
                color: "#a09880",
                margin: "16px 0 0",
              }}
            >
              No subscription required to start &middot; Your data stays yours &middot; Available now
            </p>
          </div>

          {/* ── Footer nav ── */}
          <div
            style={{
              borderTop: "1px solid #2a2840",
              marginTop: "64px",
              paddingTop: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <Link
              href="/blog"
              style={{
                color: "#a09880",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              &larr; All articles
            </Link>
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              MEOK AI LABS
            </Link>
            <Link
              href="/blog/ai-for-burnout"
              style={{
                color: "#a09880",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              AI for Burnout &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
