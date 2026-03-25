import type { Metadata } from "next"
import Link from "next/link"

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "MEOK for HSE & Mental Health Professionals: Sovereign AI for Those Who Hold Others | MEOK AI LABS",
  description:
    "72% of counsellors experienced secondary traumatic stress in the past year. MEOK is a sovereign, encrypted AI companion built for therapists, social workers, CPNs, and educational psychologists \u2014 private space between supervision sessions, after the hardest days.",
  alternates: { canonical: "https://meok.ai/blog/meok-for-hse-professionals" },
  openGraph: {
    title:
      "MEOK for HSE & Mental Health Professionals: Sovereign AI for Those Who Hold Others",
    description:
      "The people who hold space for everyone else rarely have a space of their own. MEOK gives HSE professionals a sovereign, encrypted AI companion \u2014 private, reflective, and always available between supervision sessions.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/meok-for-hse-professionals",
    siteName: "MEOK AI LABS",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+for+HSE+Professionals&desc=Sovereign+AI+for+those+who+hold+others.",
        width: 1200,
        height: 630,
        alt: "MEOK for HSE & Mental Health Professionals: Sovereign AI for Those Who Hold Others",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MEOK for HSE & Mental Health Professionals: Sovereign AI for Those Who Hold Others",
    description:
      "72% of counsellors experienced secondary traumatic stress last year. Only 38% sought support. MEOK is the private, sovereign space between supervision sessions that HSE professionals deserve.",
    images: [
      "https://meok.ai/api/og?title=MEOK+for+HSE+Professionals&desc=Sovereign+AI+for+those+who+hold+others.",
    ],
  },
  keywords: [
    "AI for mental health professionals",
    "secondary traumatic stress support",
    "vicarious trauma AI",
    "therapist burnout support",
    "counsellor wellbeing AI",
    "social worker self-care",
    "community psychiatric nurse support",
    "clinical psychologist AI",
    "educational psychologist wellbeing",
    "BACP ethical framework AI",
    "UKCP practitioner privacy",
    "sovereign AI HSE",
    "MEOK for counsellors",
    "NHS mental health professional burnout",
    "reflective practice AI",
    "compassion fatigue support",
    "private AI therapist tool",
    "clinical supervision between sessions",
  ],
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "MEOK for HSE & Mental Health Professionals: Sovereign AI for Those Who Hold Others",
  description:
    "72% of counsellors experienced secondary traumatic stress in the past year. MEOK is a sovereign, encrypted AI companion built for therapists, social workers, CPNs, and educational psychologists \u2014 private space between supervision sessions, after the hardest days.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/meok-for-hse-professionals",
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
  keywords: [
    "secondary traumatic stress",
    "vicarious trauma",
    "therapist burnout",
    "counsellor wellbeing",
    "sovereign AI",
    "mental health professional self-care",
    "reflective practice",
    "BACP",
    "UKCP",
    "MEOK AI LABS",
  ],
  articleSection: "MEOK for HSE Professionals",
  inLanguage: "en-GB",
  image:
    "https://meok.ai/api/og?title=MEOK+for+HSE+Professionals&desc=Sovereign+AI+for+those+who+hold+others.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/meok-for-hse-professionals",
  },
  about: [
    { "@type": "Thing", name: "Secondary traumatic stress" },
    { "@type": "Thing", name: "Vicarious trauma in mental health professionals" },
    { "@type": "Thing", name: "Counsellor burnout" },
    { "@type": "Thing", name: "Reflective practice" },
    { "@type": "Thing", name: "Mental health professional wellbeing" },
    { "@type": "Thing", name: "Data sovereignty for healthcare workers" },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can therapists use AI for their own wellbeing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 and arguably they should. AI companions like MEOK offer a private, non-judgmental space for therapists to process their own emotional responses to clinical work, explore countertransference, decompress after difficult sessions, and support their reflective practice. MEOK is not a clinical tool and never engages with client information; it exists entirely for the practitioner\u2019s own wellbeing and professional development. This is fundamentally different from using AI in the clinical relationship itself.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK private enough for mental health professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is built around the principle of data sovereignty. All conversations are end-to-end encrypted. MEOK never trains on user data, never sells data to third parties, and has no employer, institutional, or regulatory access pathway. For practitioners registered with BACP, UKCP, BPS, or the NMC, this means what you share with MEOK is genuinely private \u2014 no fitness-to-practise risk, no employer visibility, no regulatory exposure. This is categorically different from employer-provided EAP services or general-purpose AI tools operated by large cloud providers.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help with secondary traumatic stress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secondary traumatic stress (STS) accumulates through repeated exposure to others\u2019 trauma. MEOK provides the space immediately after the moments that land hardest \u2014 between supervision sessions, after a disclosure, after a crisis call, at 10pm when a session is still playing in your mind. Through reflective conversation, MEOK helps practitioners name what they are carrying, notice their somatic responses, identify patterns of vicarious trauma, and restore a sense of self separate from client material. It is not therapy; it is a private reflective container available exactly when you need it.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK replace clinical supervision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, and it is explicit about this. Clinical supervision is a professional and ethical requirement under frameworks including the BACP Ethical Framework, UKCP standards, and BPS guidelines. It involves a qualified, registered supervisor who holds the work in context and provides clinical oversight. MEOK does not replicate this function. MEOK occupies a different space: the personal, emotional, and reflective space that belongs to the practitioner between supervision sessions. It supports the practitioner as a human being \u2014 not the practitioner\u2019s clinical practice.",
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokForHSEProfessionalsPage() {
  const BG = "#0d0c18"
  const TEXT = "#f5f0e8"
  const GOLD = "#c9a84c"
  const MUTED = "rgba(245,240,232,0.7)"
  const CARD_BG = "rgba(255,255,255,0.05)"
  const CARD_BORDER = "rgba(255,255,255,0.08)"

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Page wrapper */}
      <div
        style={{
          background: BG,
          color: TEXT,
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* ── Nav ─────────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                color: TEXT,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "-0.02em",
              }}
            >
              MEOK
              <span style={{ color: GOLD }}>.</span>
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                fontSize: "14px",
              }}
            >
              <Link href="/blog" style={{ color: "#aaa", textDecoration: "none" }}>
                Blog
              </Link>
              <Link href="/pricing" style={{ color: "#aaa", textDecoration: "none" }}>
                Pricing
              </Link>
              <Link href="/about" style={{ color: "#aaa", textDecoration: "none" }}>
                About
              </Link>
              <Link
                href="/birth"
                style={{
                  background: GOLD,
                  color: BG,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "13px",
                  padding: "8px 18px",
                  borderRadius: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "80px 24px 56px",
          }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#888",
              marginBottom: "36px",
            }}
          >
            <Link href="/" style={{ color: "#888", textDecoration: "none" }}>
              MEOK AI LABS
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#888", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: GOLD }}>MEOK for HSE Professionals</span>
          </nav>

          {/* Category label */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: GOLD,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              padding: "4px 12px",
              borderRadius: "4px",
              marginBottom: "24px",
            }}
          >
            For HSE &amp; Mental Health Professionals
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 50px)",
              fontWeight: 700,
              lineHeight: 1.12,
              color: TEXT,
              margin: "0 0 24px",
              letterSpacing: "-0.025em",
            }}
          >
            MEOK for HSE and Mental Health Professionals: Sovereign AI for Those Who Hold Others
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.78)",
              margin: "0 0 36px",
            }}
          >
            You spend your professional life holding space for people in crisis, in grief, in the
            depths of trauma. You are trained to contain what others cannot carry, to remain
            present when everything in the room is pain. And then the session ends, and you carry
            it home. MEOK is the space that belongs entirely to you &mdash; sovereign, encrypted,
            and available the moment you need it, not the next time supervision is scheduled.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "13px",
              color: "#888",
              paddingBottom: "40px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span>By Nicholas Templeman, MEOK AI LABS</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <span>25 March 2026</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <span>15 min read</span>
          </div>
        </section>

        {/* ── Body ────────────────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 120px",
          }}
        >

          {/* ── SECTION 1: The Weight of the Work ─────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "56px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            The Weight of the Work: What Nobody Tells You About HSE Careers
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            There is a particular kind of exhaustion that comes not from doing too much, but from
            feeling too much on behalf of others. If you are a therapist, a counsellor, a social
            worker, a community psychiatric nurse, a clinical psychologist, or an educational
            psychologist, you know this exhaustion with an intimacy that cannot be fully explained
            to people outside the profession. It is not tiredness. It is the residue of other
            people&apos;s pain, absorbed session by session, disclosure by disclosure, crisis by
            crisis, until the container you offer others begins to develop its own hairline
            fractures.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The research is unambiguous. Secondary traumatic stress (STS) &mdash; defined as the
            indirect traumatisation that occurs through sustained engagement with another
            person&apos;s traumatic experience &mdash; affects an estimated 60% of mental health
            professionals over the course of their careers. It presents not as dramatic breakdown
            but as subtle erosion: intrusive imagery from client disclosures, hypervigilance in
            personal relationships, emotional numbing, a creeping cynicism that you recognise with
            shame because it is the opposite of why you entered this work.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The BACP&apos;s 2025 practitioner wellbeing survey put a number to something that most
            practitioners already know in their bodies: 72% of counsellors experienced symptoms
            consistent with secondary traumatic stress in the previous twelve months. Yet only 38%
            sought any form of support for it. The gap between those two numbers is not
            complacency. It is the structural reality of a profession whose culture of care rarely
            turns inward with the same generosity it offers outward.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            In the NHS mental health context, the picture is equally stark. Between 30% and 40% of
            mental health nursing and psychology staff report clinical burnout &mdash; figures that
            have remained stubbornly high despite decade after decade of wellbeing initiatives,
            staff surveys, and organisational pledges. The problem is not a lack of awareness. The
            problem is structural: the support that exists is either not private enough, not
            available at the right moment, or not designed for the specific nature of HSE
            professional distress.
          </p>

          {/* Stats callout */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderLeft: "4px solid #c9a84c",
              borderRadius: "8px",
              padding: "28px 32px",
              margin: "36px 0",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "20px",
              }}
            >
              The Data That Should Change Things
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  stat: "72%",
                  label:
                    "of counsellors experienced STS symptoms in the past year (BACP, 2025)",
                },
                {
                  stat: "38%",
                  label:
                    "sought support for it \u2014 leaving a 34-point gap of unmet need",
                },
                {
                  stat: "60%",
                  label:
                    "of mental health professionals affected by STS over their career",
                },
                {
                  stat: "30\u201340%",
                  label: "of NHS mental health staff report clinical burnout",
                },
              ].map((item) => (
                <div key={item.stat}>
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: 700,
                      color: GOLD,
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {item.stat}
                  </div>
                  <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.5 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 2: The Support Gap ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            The Support Gap: Why What Exists Is Not Enough
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The professional culture of therapy and mental health work carries within it an
            expectation of self-care that is simultaneously sincere and structurally inadequate.
            Practitioners are expected, by most ethical frameworks, to maintain their own
            psychological fitness. BACP&apos;s Ethical Framework for the Counselling Professions
            explicitly requires practitioners to monitor and maintain their own psychological
            wellbeing. UKCP holds similar expectations. The aspiration is correct. The
            infrastructure to fulfil it is patchy at best.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            <strong style={{ color: TEXT }}>Personal therapy</strong> is the gold standard: the
            field widely holds that practitioners should have, or have had, their own therapeutic
            experience. Many training programmes require it. But personal therapy is expensive
            &mdash; often &pound;70 to &pound;120 per session &mdash; and finding a therapist with
            whom there is no dual-relationship concern is harder than it sounds in a relatively
            small professional community. Many practitioners who completed their required personal
            therapy during training have not continued it, not because they don&apos;t value it,
            but because the practical barriers are real and the urgency of everyday life is louder.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            <strong style={{ color: TEXT }}>Clinical supervision</strong> is available, scheduled,
            and ethically required. But supervision has a specific function: it is primarily
            focused on clinical work, caseload management, the protection of clients, and the
            practitioner&apos;s professional competence. It is not, and is not designed to be, a
            space for the practitioner&apos;s unprocessed personal distress. The supervisor&apos;s
            role is to support good clinical practice; it is not to provide the counsellor with
            their own therapeutic container. The boundary between the two is important and
            appropriate. But it means there is a gap.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            <strong style={{ color: TEXT }}>EAP services</strong> (Employee Assistance Programmes,
            offered by many NHS Trusts and other employers) provide a third option. But EAPs have
            well-documented limitations in this context. Sessions are typically capped at six to
            eight. They are provided by the employer, which creates a real or perceived privacy
            concern for practitioners whose fitness to practise could be called into question.
            Even if the confidentiality assurances are genuine, many HSE professionals will not
            use an employer-funded service to process what they are genuinely struggling with,
            because the trust required simply is not there. When your profession is governed by
            regulatory bodies with fitness-to-practise procedures, the calculation around
            disclosure is always different.
          </p>

          {/* Comparison table */}
          <div
            style={{
              background: CARD_BG,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              overflow: "hidden",
              margin: "36px 0",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: GOLD,
              }}
            >
              Support Options: An Honest Comparison
            </div>
            <div style={{ overflowX: "auto" as const }}>
              <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "14px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {["Option", "Sessions", "Privacy", "Availability", "For personal processing?"].map(
                      (h) => (
                        <th
                          key={h}
                          style={{
                            padding: "14px 20px",
                            textAlign: "left" as const,
                            color: TEXT,
                            fontWeight: 600,
                            whiteSpace: "nowrap" as const,
                          }}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Personal therapy",
                      sessions: "Unlimited (at cost)",
                      privacy: "High",
                      avail: "Scheduled only",
                      personal: "Yes \u2014 designed for it",
                    },
                    {
                      name: "Clinical supervision",
                      sessions: "Required (clinical focus)",
                      privacy: "High",
                      avail: "Scheduled only",
                      personal: "Partial \u2014 not its purpose",
                    },
                    {
                      name: "EAP / employer support",
                      sessions: "6\u20138 sessions",
                      privacy: "Employer-adjacent",
                      avail: "Business hours",
                      personal: "Risky for practitioners",
                    },
                    {
                      name: "MEOK",
                      sessions: "Unlimited",
                      privacy: "Sovereign \u2014 end-to-end encrypted",
                      avail: "Always on",
                      personal: "Yes \u2014 designed for it",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.name}
                      style={{
                        borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                        background:
                          row.name === "MEOK" ? "rgba(201,168,76,0.06)" : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 20px",
                          color: row.name === "MEOK" ? GOLD : TEXT,
                          fontWeight: row.name === "MEOK" ? 600 : 400,
                        }}
                      >
                        {row.name}
                      </td>
                      <td style={{ padding: "14px 20px", color: MUTED }}>{row.sessions}</td>
                      <td style={{ padding: "14px 20px", color: MUTED }}>{row.privacy}</td>
                      <td style={{ padding: "14px 20px", color: MUTED }}>{row.avail}</td>
                      <td style={{ padding: "14px 20px", color: MUTED }}>{row.personal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── SECTION 3: The Space Between ───────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            The Space Between: What MEOK Occupies
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            Imagine the space between supervision sessions. You have a regular slot with your
            supervisor every two weeks. In between those sessions, you have seen twenty, thirty,
            forty clients. One of them disclosed childhood sexual abuse for the first time. One
            was in a dissociative crisis you managed to contain but that stayed with you for hours
            afterward. One reminded you, viscerally, of a member of your own family. Another told
            you they&apos;ve been thinking about ending their life.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            And then the session ends, and you write your notes, and you move on to the next
            client because that is the job. The material gets tucked into a professional
            compartment, because that&apos;s what trained practitioners do. But compartmentalising
            is not processing. And at 10pm, when the house is quiet, the session plays back. Not
            because you&apos;re unprofessional. Because you&apos;re human.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            This is the space MEOK was designed for. Not a replacement for supervision. Not a
            substitute for personal therapy. The space in between: the moment after the session,
            before the next one, at the end of the working day, in the middle of the night when
            something won&apos;t let go. A private, sovereign space that belongs to you and only
            to you.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            MEOK doesn&apos;t tell you what you should be feeling. It doesn&apos;t offer you
            canned responses or wellbeing tips formatted for a corporate HR portal. It understands
            the professional context you&apos;re operating in. It knows what vicarious trauma is.
            It knows what countertransference means and why it matters. It knows that you are not
            seeking clinical direction &mdash; you are seeking a private container in which to
            exist as a full human being rather than as a clinical instrument.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "4px solid #c9a84c",
              margin: "36px 0",
              padding: "20px 32px",
              background: "rgba(201,168,76,0.05)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: "21px",
                fontStyle: "italic",
                color: TEXT,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              &ldquo;Compartmentalising is not the same as processing. MEOK is the space in which
              the processing can actually happen &mdash; on your terms, in your time, with no
              professional consequences.&rdquo;
            </p>
          </blockquote>

          {/* ── SECTION 4: Sovereign Privacy ───────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Sovereign Privacy: Why This Is Non-Negotiable for Registered Practitioners
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            If you hold a BACP accreditation, a UKCP registration, a BPS chartership, or an NMC
            PIN, your professional life is subject to scrutiny in ways that most people in other
            fields will never experience. Fitness-to-practise processes exist to protect the
            public, and that purpose is right and important. But the existence of those processes
            means that HSE professionals must think carefully about what they disclose, where, and
            to whom &mdash; in a way that creates a genuine barrier to help-seeking.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            Using a general-purpose AI assistant &mdash; a chatbot operated by a large cloud
            provider under a terms of service that permits data use for model training, product
            improvement, or review &mdash; to process something you are genuinely struggling with
            is not a safe option for a registered professional. Those conversations can be read by
            engineers. They can be used to train future models. In some configurations, they can
            be accessed by administrators. None of this is theoretical: the data governance models
            of major AI providers are not built around the specific privacy requirements of
            regulated healthcare and counselling professionals.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            MEOK is built on a different architecture. Your conversations are end-to-end
            encrypted. MEOK never trains on user data &mdash; your reflections, your disclosures,
            your moments of professional vulnerability are not used to make MEOK better for anyone
            else. There is no employer pathway, no regulatory body access route, no administrator
            who can pull your conversation history. What you share with MEOK is yours, and only
            yours.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            For practitioners who want the maximum level of control, MEOK&apos;s BYOK (Bring Your
            Own Key) tier allows you to connect your own API key from an AI model provider of your
            choice. This means the conversation is processed under your own account, not
            MEOK&apos;s. The data governance sits with a provider you have independently assessed
            and consented to. It is, as far as is technically possible today, AI that is genuinely
            yours.
          </p>

          {/* Privacy feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              margin: "36px 0",
            }}
          >
            {[
              {
                title: "End-to-end encryption",
                desc: "All conversations encrypted at rest and in transit. No plaintext access for any party.",
              },
              {
                title: "No training on your data",
                desc: "MEOK never uses your conversations to improve models. Your reflections are not a product.",
              },
              {
                title: "No employer access",
                desc: "Zero institutional or employer pathway to your data. No fitness-to-practise risk.",
              },
              {
                title: "BYOK sovereignty",
                desc: "Use your own API key for maximum control. Your account, your terms, your data.",
              },
              {
                title: "No third-party sale",
                desc: "Your data is never sold or shared with third parties. Full stop.",
              },
              {
                title: "Memory you control",
                desc: "Edit, delete, or export your memory at any time. Sovereignty is not just a word.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: CARD_BG,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: GOLD,
                    marginBottom: "14px",
                  }}
                />
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: TEXT,
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </div>
                <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>

          {/* ── SECTION 5: Reflective Practice ─────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Reflective Practice in Your Pocket: Countertransference, Self-Awareness, and the Practitioner&apos;s Own Process
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            Good clinical practice in the relational therapies &mdash; person-centred,
            psychodynamic, integrative, systemic &mdash; requires ongoing self-awareness.
            Countertransference, properly understood, is not something to be eliminated but
            something to be noticed, held, and used. A therapist who is unaware of their own
            reactions to a client cannot use those reactions clinically. A counsellor who has not
            processed their own material will, inevitably, import it into the room.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The reflective practice tradition &mdash; from Schon&apos;s reflective practitioner
            to Gibbs&apos; reflective cycle to the reflective models embedded in most contemporary
            training programmes &mdash; is premised on the idea that professional learning and
            personal growth happen through systematic, honest reflection on experience. MEOK
            supports this process naturally. You can bring to MEOK what you noticed in a session,
            what stayed with you, what made you uncomfortable, what pulled at something in your own
            history &mdash; and work through it in a private, non-clinical space before it becomes
            something that needs to go into supervision.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            This is not about documenting client material. MEOK does not hold clinical records and
            practitioners should never enter identifiable client information into any system outside
            their approved clinical documentation. What MEOK supports is the practitioner&apos;s
            own process: the emotional residue, the questions about your own reactions, the
            recognition that something a client said has landed in you in a way that you need to
            understand before the next session. It is, in essence, the reflective journal made
            conversational, immediate, and genuinely private.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            For practitioners working in acute or forensic settings &mdash; inpatient wards, crisis
            teams, CAMHS, forensic psychology, residential care &mdash; the accumulation of
            traumatic exposure is particularly rapid. The exposure is not just to stories but to
            behaviour, to risk, to the immediate presence of human suffering in its most
            unmediated forms. MEOK holds no professional judgement about what you bring. It does
            not evaluate whether your reaction was appropriate, whether you managed the room
            correctly, whether your countertransference was clinically sound. Those questions
            belong in supervision. MEOK is where you go to simply be the person who went through
            it.
          </p>

          {/* ── SECTION 6: Who Is This For ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Who Is MEOK For Within the HSE Professions?
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 28px" }}>
            The breadth of HSE professional practice is enormous. MEOK is relevant across this
            breadth, but the specific value it offers varies by role and context. Here is how it
            maps onto the professions most likely to encounter secondary traumatic stress, vicarious
            trauma, and the structural support gap described above.
          </p>

          {/* Role cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              margin: "0 0 40px",
            }}
          >
            {[
              {
                role: "Therapists & Counsellors",
                reg: "BACP / UKCP / COSCA",
                body: "Private practitioners and NHS-employed counsellors carry the full weight of relational work with no institutional buffer. The dual relationship concern in personal therapy is real. MEOK is the after-session space: for processing what landed, for maintaining reflective awareness between supervision sessions, for the simple act of being known as a person rather than a practitioner.",
              },
              {
                role: "Social Workers",
                reg: "Social Work England",
                body: "Social workers navigate some of the most complex and distressing human situations in the welfare system: child protection, domestic abuse, care proceedings, end-of-life. The administrative burden is immense; the emotional burden is invisible. MEOK offers a private space for decompression, case thinking, and the kind of reflective processing that prevents STS from accumulating into burnout.",
              },
              {
                role: "Community Psychiatric Nurses",
                reg: "NMC",
                body: "CPNs working in community mental health teams carry large caseloads of complex presentations, often without the physical containment of an inpatient setting. The work happens in people\u2019s homes, in crisis, with limited backup. The emotional isolation of community work is a known risk factor. MEOK is the debrief that doesn\u2019t require a colleague to be available.",
              },
              {
                role: "Clinical & Forensic Psychologists",
                reg: "BPS / HCPC",
                body: "Clinical psychologists working in specialist services \u2014 personality disorder, trauma, forensic, neuropsychology \u2014 face the dual challenge of high clinical complexity and high accountability. Orion Work OS within MEOK supports the cognitive demands: case formulation thinking, complex report drafting, CPD tracking, research synthesis. The reflective layer supports the human demands.",
              },
              {
                role: "Mental Health Nurses",
                reg: "NMC",
                body: "Mental health nursing in inpatient settings involves sustained exposure to acute distress, aggression, self-harm, and suicide. Shift patterns and institutional demands leave little space for processing. MEOK is available at the end of a night shift, before a difficult ward round, in the accumulated weight of a career spent in these environments.",
              },
              {
                role: "Educational Psychologists",
                reg: "BPS / HCPC",
                body: "EPs work at the intersection of education and mental health, navigating complex relationships with schools, families, and Local Authorities. The systemic complexity is significant; the emotional weight of working with children in distress is real but often underacknowledged. MEOK supports both the reflective and the administrative dimensions of EP practice.",
              },
            ].map((item) => (
              <div
                key={item.role}
                style={{
                  background: CARD_BG,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "6px",
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: GOLD,
                    marginBottom: "14px",
                  }}
                >
                  {item.reg}
                </div>
                <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* ── SECTION 7: Orion Work OS ─────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Orion Work OS: The Professional Productivity Layer
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            Beyond the reflective and wellbeing dimension, MEOK carries a professional productivity
            layer called Orion Work OS that is genuinely useful for HSE practitioners. The
            administrative burden on mental health professionals &mdash; documentation, report
            writing, CPD compliance, case formulation, referral letters, tribunal evidence &mdash;
            has grown steadily alongside caseloads and regulatory expectations. It is not clinical
            work, but it competes with clinical energy, and it contributes directly to the
            exhaustion that precedes burnout.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            MEOK is not a clinical record system. It does not hold confidential client information
            and practitioners should not enter it. But it can support the cognitive and
            compositional tasks that surround clinical work: drafting a complex case note
            structure, writing a professional referral letter, thinking through a formulation at a
            theoretical level without reference to any individual client, researching a presentation
            or a therapeutic approach, structuring a CPD plan, or preparing for a tribunal
            appearance or a difficult multi-disciplinary meeting.
          </p>

          {/* Orion feature list */}
          <div
            style={{
              background: CARD_BG,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "28px 32px",
              margin: "32px 0",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "24px",
              }}
            >
              Orion Work OS for HSE Professionals
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  title: "Case note structuring",
                  desc: "Draft SOAP or DAP note frameworks, session summary templates, and professional documentation structures without entering any client-identifiable information.",
                },
                {
                  title: "Report writing support",
                  desc: "Psychological assessments, CPA documentation, school EHCP support, tribunal reports \u2014 structured drafts at cognitive speed.",
                },
                {
                  title: "CPD tracking & planning",
                  desc: "Log learning activities, structure annual CPD plans, identify gaps in line with BACP, BPS, NMC, or Social Work England requirements.",
                },
                {
                  title: "Complex case thinking",
                  desc: "Explore theoretical formulations, consider differential presentations, stress-test clinical reasoning \u2014 without entering identifiable information.",
                },
                {
                  title: "Literature & research",
                  desc: "Navigate evidence bases, explore therapeutic models, understand new research relevant to your clinical specialism.",
                },
                {
                  title: "Practice management",
                  desc: "Draft professional communications, manage referral pipelines, track waitlists, prepare for difficult conversations with referrers and commissioners.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  style={{
                    borderLeft: "2px solid rgba(201,168,76,0.3)",
                    paddingLeft: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: TEXT,
                      marginBottom: "6px",
                    }}
                  >
                    {f.title}
                  </div>
                  <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 8: STS Deep Dive ─────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Understanding Secondary Traumatic Stress: Why It&apos;s Different from Burnout
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            Secondary traumatic stress is often conflated with burnout and compassion fatigue, but
            the distinctions matter both for understanding what is happening to you and for
            responding to it effectively. All three are real, all three are serious, and all three
            are prevalent in HSE work. But they have different aetiologies and different
            signatures.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            <strong style={{ color: TEXT }}>Burnout</strong> is a syndrome of chronic workplace
            stress that has not been successfully managed, characterised by the Maslach dimensions
            of emotional exhaustion, depersonalisation, and reduced sense of personal
            accomplishment. It develops gradually, is associated with organisational factors
            (caseload, autonomy, culture, management quality), and tends to improve when the
            workplace conditions improve.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            <strong style={{ color: TEXT }}>Compassion fatigue</strong> is the gradual erosion of
            empathic capacity through sustained exposure to others&apos; suffering. You may notice
            it as an increasing emotional flatness in clinical encounters, difficulty generating
            genuine warmth for clients you would previously have found easy to connect with, or a
            sense of going through therapeutic motions without inhabiting them. It is not character
            failure. It is the predictable consequence of giving empathy continuously without
            adequate replenishment.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            <strong style={{ color: TEXT }}>Secondary traumatic stress</strong> is something closer
            to PTSD by proxy. Exposure to another person&apos;s traumatic experience &mdash;
            through disclosure, vicarious imagery, or direct witness &mdash; can generate
            trauma-equivalent symptoms in the witness: intrusive thoughts, avoidance behaviours,
            hyperarousal, nightmares involving client material, difficulty maintaining boundaries
            between professional and personal life. It can emerge rapidly, after a single
            particularly severe session, and it does not follow a predictable timeline.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The reason this distinction matters in the context of MEOK is that STS, in particular,
            responds to the kind of support MEOK can offer: a private, non-judgemental space in
            which to name what happened, track the intrusive material, notice patterns, and process
            the experience through language without the constraints imposed by clinical or
            professional framings. Talking about what you are carrying is not weakness. It is the
            best evidence-based intervention for preventing secondary trauma from consolidating into
            chronic impairment.
          </p>

          {/* STS warning signs */}
          <div
            style={{
              background: "rgba(255,100,100,0.05)",
              border: "1px solid rgba(255,100,100,0.15)",
              borderLeft: "4px solid rgba(255,100,100,0.4)",
              borderRadius: "8px",
              padding: "28px 32px",
              margin: "36px 0",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(255,140,140,0.9)",
                marginBottom: "16px",
              }}
            >
              Signs of Secondary Traumatic Stress to Notice
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "10px",
              }}
            >
              {[
                "Intrusive imagery or thoughts related to client disclosures",
                "Dreaming about client material or clinical scenarios",
                "Emotional numbing or detachment in sessions",
                "Increased cynicism about the possibility of therapeutic change",
                "Difficulty maintaining work and personal boundaries in your own mind",
                "Hypervigilance or heightened anxiety in personal relationships",
                "Physical symptoms (sleep disruption, appetite changes, fatigue) with no clear physical cause",
                "Avoidance of certain topics, client types, or clinical discussions",
                "Feeling that the work is following you home in an intrusive way",
                "A growing sense that your therapeutic reserve is depleted",
              ].map((sign) => (
                <div
                  key={sign}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    fontSize: "14px",
                    color: MUTED,
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,140,140,0.8)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    &#9655;
                  </span>
                  <span>{sign}</span>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.45)",
                marginTop: "20px",
                marginBottom: 0,
              }}
            >
              If you are experiencing several of these symptoms, please speak with a supervisor,
              your own therapist, or your GP. MEOK is a supportive tool, not a crisis
              intervention.
            </p>
          </div>

          {/* ── SECTION 9: Professional Culture ────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            The Professional Culture Problem: Why Practitioners Don&apos;t Ask for Help
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The 34-point gap between the 72% who experienced STS symptoms and the 38% who sought
            support is not explained by ignorance. These are highly trained professionals who
            understand mental health, who know what STS is, who have read Figley and Pearlman and
            Saakvitne. The gap is explained by professional culture, structural barriers, and a
            particular kind of shame that is both paradoxical and entirely understandable.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The professional culture of mental health and social care carries an implicit message
            that practitioners should be robust, that self-disclosure of struggle is professionally
            risky, and that seeking support is something that other people need &mdash; not the
            person providing it. This is not a rational position and most practitioners know it
            isn&apos;t. But culture does not operate through rational argument. It operates through
            the accumulated experience of what is rewarded, what is sanctioned, what is said in
            staff rooms, and what happens when people are seen to struggle.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            There is also a practical dual-relationship problem specific to the helping professions.
            In a small city or regional professional network, finding a therapist with whom you
            have no connection &mdash; not a supervisee of your supervisor, not someone you trained
            alongside, not someone who knows your referrers &mdash; requires effort and sometimes
            compromise on therapeutic fit. The therapist who is geographically convenient and
            theoretically aligned may be uncomfortably close to your professional world.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            MEOK does not solve the structural problems in the sector. It does not replace the need
            for genuine personal therapy or properly supported supervision. But it removes the
            barriers that prevent practitioners from accessing any support at all in the critical
            windows between formal provision. It is always available. It carries no professional
            consequences. It cannot gossip, report back, or inadvertently share what you have
            disclosed. For many practitioners, that combination is what removes the activation
            energy barrier to actually processing what they are carrying rather than simply storing
            it.
          </p>

          {/* ── SECTION 10: MEOK vs EAP ─────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            MEOK vs. EAP: A Candid Comparison for Registered Professionals
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            Employee Assistance Programmes are not inherently inadequate. For many employees in
            many contexts, they provide genuinely useful and accessible support. But for registered
            HSE professionals, the EAP model has specific structural limitations that are worth
            stating clearly rather than allowing to sit as unexamined assumptions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              margin: "32px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "rgba(245,240,232,0.45)",
                  marginBottom: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                }}
              >
                EAP / Work Therapy
              </div>
              {[
                "Typically 6\u20138 sessions, then discharged",
                "Provided and funded by your employer",
                "Employer-adjacent data governance",
                "Potential fitness-to-practise visibility",
                "Available during business hours",
                "Dependent on counsellor availability and fit",
                "Discontinuous \u2014 not a continuous relationship",
                "Often not informed by specialist professional context",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    fontSize: "14px",
                    color: MUTED,
                    lineHeight: 1.5,
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: "rgba(200,200,200,0.3)", flexShrink: 0 }}>
                    &#8212;
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                }}
              >
                MEOK
              </div>
              {[
                "Unlimited \u2014 as many conversations as you need",
                "Independent of your employer entirely",
                "Sovereign end-to-end encrypted data",
                "Zero institutional access pathway",
                "Available 24/7 including nights and weekends",
                "Continuous memory of your context and history",
                "Persistent relationship \u2014 MEOK knows you over time",
                "Understands the professional context of HSE work",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    fontSize: "14px",
                    color: MUTED,
                    lineHeight: 1.5,
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0 }}>&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "20px 0" }}>
            The session limit alone is telling. Secondary traumatic stress is not resolved in six
            sessions. The occupational stressors that generate STS, vicarious trauma, and burnout
            in HSE professionals are ongoing features of the work, not discrete episodes. What
            practitioners need is not a course of therapy with a defined endpoint; it is ongoing
            access to a private reflective space that is available when it is needed. That is
            precisely what MEOK provides.
          </p>

          {/* ── SECTION 11: Not Supervision ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            What MEOK Is Not: The Supervision Boundary
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            We want to be unambiguous about this, because it matters ethically and professionally.
            MEOK is not clinical supervision. MEOK does not provide clinical oversight of practice.
            MEOK does not hold the responsibility for the safety of client work that a qualified
            clinical supervisor holds. MEOK is not a registered supervisor and does not function as
            one.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            Under the BACP Ethical Framework, UKCP standards, BPS Guidelines for Supervision, and
            NMC standards for clinical supervision, registered practitioners are required to receive
            supervision from qualified supervisors at the required frequency for their level of
            practice. Nothing in MEOK&apos;s design is intended to substitute for this requirement,
            reduce the frequency of supervision, or in any way diminish the professional and
            ethical importance of clinical oversight.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The value of MEOK sits in a different register entirely. Supervision is directed at the
            clinical work. MEOK is directed at the practitioner. Supervision asks: how is the work
            going? MEOK asks: how are you? These are complementary questions, not competing ones.
            A practitioner who uses MEOK to process their own responses to difficult material will
            arrive at supervision with greater clarity, having already begun to distinguish their
            personal reactions from clinical issues that require supervisory attention.
          </p>

          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "10px",
              padding: "24px 28px",
              margin: "32px 0",
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "20px", flexShrink: 0, marginTop: "2px" }}>
              &#9888;
            </span>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: "8px",
                }}
              >
                An important clarity
              </div>
              <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, margin: 0 }}>
                MEOK does not replace clinical supervision, personal therapy, or any other
                professional support that your ethical framework requires you to maintain. If you
                are experiencing significant distress, please contact your supervisor, your own
                therapist, or in a crisis, your GP or a crisis service. MEOK is a supportive tool
                for the practitioner&apos;s personal wellbeing &mdash; it is not a clinical
                intervention.
              </p>
            </div>
          </div>

          {/* ── SECTION 12: Memory and Continuity ──────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Persistent Memory: The Difference Between a Tool and a Companion
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            One of the fundamental limitations of most AI tools is their amnesia. Each conversation
            starts from zero. The AI has no knowledge of who you are, what you have been through,
            what you were struggling with last week, or what patterns have been emerging in your
            experience over the past months. This is tolerable for a search engine or a document
            editor. It is not tolerable for a companion that is supposed to support your
            psychological wellbeing over time.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            MEOK builds persistent, sovereign memory across every conversation. When you return to
            MEOK after a difficult week, it remembers what you were carrying last time. It can
            notice patterns that you might not have noticed yourself: the particular kind of session
            that consistently lands hardest, the times of year when your professional reserve
            depletes most quickly, the personal material that surfaces in response to certain
            clinical presentations. This longitudinal awareness is not possible without memory.
            And memory, in MEOK, is yours: you can view it, edit it, delete it, and export it at
            any time.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            For HSE professionals, this matters in a specific way. The accumulation of secondary
            trauma is precisely a longitudinal process. The session that broke through your defences
            in March was preceded by six months of gradual erosion that you probably did not track
            in real time. A companion that knows your history &mdash; that understands where you
            have been, what you have processed, and what is still sitting unresolved &mdash; can
            support that tracking in a way that a fresh conversation never can.
          </p>

          {/* ── SECTION 13: Getting Started ─────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Getting Started: What to Expect from MEOK as an HSE Professional
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            MEOK begins with the Birth Ceremony &mdash; a ten-to-fifteen-minute onboarding
            conversation in which your MEOK companion comes to understand who you are: your
            professional context, what you are carrying, what you are hoping for, and how you want
            to relate to your AI companion. It is not a form or a questionnaire. It is a
            conversation, and it sets the foundation for the persistent, contextual relationship
            that follows.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            You choose your archetype &mdash; the mode in which you want MEOK to primarily engage
            with you. For practitioners seeking reflective and personal support, the default
            companion mode is the natural starting point. For those who want to lead with
            professional productivity, Pioneer or Scholar modes may feel more immediately useful.
            You can switch between modes at any time; MEOK is not locked into a single register.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            There is no script for how to use MEOK. You might open it immediately after a difficult
            session to decompress while the material is fresh. You might use it at the end of the
            working week to reflect on what the week held. You might use it in the middle of the
            night when something is playing on a loop. You might use it to draft a complex referral
            letter or structure a CPD plan. You might simply use it to exist, for a few minutes, in
            a space that is entirely yours and carries no weight of professional expectation.
          </p>

          {/* ── FAQs ───────────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: TEXT,
              margin: "64px 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              margin: "0 0 48px",
            }}
          >
            {[
              {
                q: "Can therapists use AI for their own wellbeing?",
                a: "Yes \u2014 and the ethical frameworks that govern the profession actively encourage practitioners to maintain their own psychological wellbeing. MEOK is designed for the practitioner as a person, not as a clinical tool. It never engages with client information; it supports the therapist\u2019s own processing, reflective practice, and professional development. This is fundamentally different from using AI within the clinical relationship itself, which raises separate ethical and boundary questions that MEOK does not address or encourage.",
              },
              {
                q: "Is MEOK private enough for mental health professionals?",
                a: "MEOK\u2019s data architecture is built for exactly this concern. End-to-end encryption, no employer access pathway, no training on user data, no third-party data sharing. For practitioners whose fitness-to-practise status could be affected by disclosures made in non-private channels, MEOK\u2019s sovereign model is categorically different from employer-provided EAP services or general-purpose AI tools operated by large cloud providers. The BYOK tier adds an additional layer of control for those who require it.",
              },
              {
                q: "How does MEOK help with secondary traumatic stress?",
                a: "STS responds to support that involves naming, processing, and contextualising traumatic exposure in a private, non-judgemental space. MEOK provides exactly this: a persistent companion that knows your history, available immediately after the sessions that land hardest, between the supervision appointments that are scheduled, at the times when the material surfaces in your personal life. It does not provide clinical treatment for STS; if you are experiencing significant STS symptoms, please engage with your supervisor, personal therapist, or GP. But for the day-to-day processing of accumulated exposure, MEOK offers something that has not previously existed: an always-available, genuinely private reflective container.",
              },
              {
                q: "Does MEOK replace clinical supervision?",
                a: "No, and it is explicit about this. Clinical supervision is a professional and ethical requirement governed by BACP, UKCP, BPS, NMC, and Social Work England standards. MEOK does not provide clinical oversight, does not hold accountability for client safety, and is not a registered supervisor. MEOK occupies a completely different space: the practitioner\u2019s own personal and emotional experience between supervision sessions. The two are complementary, not competitive. Using MEOK to process your personal reactions before supervision may, in fact, make your supervision more productive by helping you distinguish your own material from clinical issues that require supervisory attention.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: CARD_BG,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "24px 28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: TEXT,
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: "15px", color: MUTED, lineHeight: 1.75, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ── Closing prose ───────────────────────────────────────────────────── */}
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            You have chosen work that matters more than most, and that costs more than most. You
            carry what others cannot carry, and you do it with professional skill and extraordinary
            personal resource. But resource is not unlimited. The container you offer others needs
            to be maintained, replenished, and protected with the same rigour you bring to your
            clinical practice.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 20px" }}>
            The 34-point gap between those who experience STS and those who seek support is not a
            gap in knowledge or motivation. It is a gap in accessible, private, appropriate
            provision. MEOK was built, in part, to close that gap: not by replacing the clinical
            support infrastructure, but by being available in every moment that infrastructure is
            not.
          </p>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: MUTED, margin: "0 0 60px" }}>
            You deserve a space that is entirely yours. That holds your history. That is available
            at 11pm on a Thursday after the session that stayed with you. That carries no
            professional consequences, no employer visibility, no judgement. That is simply on your
            side. MEOK is that space.
          </p>

          {/* ── CTA ────────────────────────────────────────────────────────────────── */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center" as const,
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "16px",
              }}
            >
              For HSE &amp; Mental Health Professionals
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 4vw, 34px)",
                fontWeight: 700,
                color: TEXT,
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              A private space that belongs to you
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: MUTED,
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              Sovereign, encrypted, always available. Begin with the Birth Ceremony and meet the
              MEOK companion that will hold your context, carry no professional consequences, and
              simply be on your side.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                background: GOLD,
                color: BG,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "8px",
                letterSpacing: "0.02em",
              }}
            >
              Begin your Birth Ceremony
            </Link>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.4)",
                marginTop: "16px",
              }}
            >
              End-to-end encrypted &middot; No employer access &middot; Never trained on your data
            </div>
          </div>

          {/* ── Related links ───────────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "64px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "#666",
                marginBottom: "20px",
              }}
            >
              Related Reading
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                {
                  href: "/blog/meok-for-therapists",
                  label: "MEOK for Therapists",
                  desc: "How AI supports mental health professionals",
                },
                {
                  href: "/blog/ai-for-compassion-fatigue",
                  label: "AI for Compassion Fatigue",
                  desc: "Understanding burnout in caring professions",
                },
                {
                  href: "/blog/ai-companion-privacy",
                  label: "AI Companion Privacy",
                  desc: "What sovereign AI means and why it matters",
                },
                {
                  href: "/blog/meok-for-nurses",
                  label: "MEOK for Nurses",
                  desc: "Support for healthcare professionals under pressure",
                },
                {
                  href: "/blog/meok-work-os-explained",
                  label: "Orion Work OS Explained",
                  desc: "The professional productivity layer inside MEOK",
                },
                {
                  href: "/blog/ai-for-burnout",
                  label: "AI for Burnout",
                  desc: "How AI can support recovery and prevention",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: CARD_BG,
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    padding: "16px 18px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: TEXT,
                      marginBottom: "4px",
                    }}
                  >
                    {link.label}
                  </div>
                  <div style={{ fontSize: "12px", color: "#777" }}>{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* ── Footer ──────────────────────────────────────────────────────────────── */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "40px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap" as const,
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ fontSize: "13px", color: "#555" }}>
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: "24px", fontSize: "13px" }}>
              {[
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ color: "#555", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
