import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for the Grief of Miscarriage: How MEOK Holds What Others Often Can\u2019t | MEOK AI LABS",
  description:
    "1 in 4 pregnancies ends in miscarriage in the UK, yet this grief is profoundly invisible. MEOK\u2019s Healer archetype holds space for pregnancy loss without minimising, without rushing, and with sovereign memory that never forgets what you have been through.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-grief-of-miscarriage",
  },
  openGraph: {
    title:
      "AI for the Grief of Miscarriage: How MEOK Holds What Others Often Can\u2019t",
    description:
      "Miscarriage grief is one of the most disenfranchised forms of loss. Society rarely acknowledges it, partners are often forgotten, and the pressure to move on comes quickly. MEOK\u2019s sovereign AI holds space for as long as you need.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-grief-of-miscarriage",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+the+Grief+of+Miscarriage&desc=How+MEOK+Holds+What+Others+Often+Can%27t",
        width: 1200,
        height: 630,
        alt: "AI for the Grief of Miscarriage \u2014 MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for the Grief of Miscarriage: How MEOK Holds What Others Often Can\u2019t",
    description:
      "1 in 4 pregnancies ends in miscarriage. MEOK\u2019s Healer companion holds the invisible grief, the 3am weight, and the details that only you should keep \u2014 with sovereign memory and no judgement.",
    images: [
      "https://meok.ai/api/og?title=AI+for+the+Grief+of+Miscarriage&desc=How+MEOK+Holds+What+Others+Often+Can%27t",
    ],
  },
};

// ── JSON-LD: Article ────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for the Grief of Miscarriage: How MEOK Holds What Others Often Can\u2019t",
  description:
    "1 in 4 pregnancies ends in miscarriage in the UK. This article explores why miscarriage grief is so profoundly disenfranchised, why both women and their partners grieve in isolation, and how MEOK\u2019s Healer archetype provides a sovereign, non-judgmental space to hold this invisible loss without minimising or rushing toward resolution.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-grief-of-miscarriage",
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
    "https://meok.ai/api/og?title=AI+for+the+Grief+of+Miscarriage&desc=How+MEOK+Holds+What+Others+Often+Can%27t",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-grief-of-miscarriage",
  },
  keywords: [
    "AI for grief of miscarriage",
    "miscarriage grief support UK",
    "disenfranchised grief pregnancy loss",
    "AI companion miscarriage",
    "MEOK Healer archetype",
    "sovereign AI grief support",
    "partner grief after miscarriage",
    "invisible grief pregnancy loss",
    "SANDS",
    "Miscarriage Association UK",
    "Tommy\u2019s charity",
    "early pregnancy loss support",
    "1 in 4 pregnancies miscarriage",
    "men\u2019s grief miscarriage",
    "AI for pregnancy loss",
    "miscarriage emotional support",
    "sovereign memory AI",
  ],
};

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is grief after miscarriage so often invisible or minimised?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miscarriage is a textbook example of disenfranchised grief \u2014 loss that society does not formally recognise or legitimise. The cultural convention of waiting until twelve weeks before sharing a pregnancy means the majority of miscarriages happen before most people knew there was a baby to lose. There is no bereavement leave in most workplaces, no public funeral, no socially sanctioned mourning period. Well-meaning phrases like \u2018at least it was early\u2019 or \u2018you can always try again\u2019 reflect a broader cultural discomfort with pregnancy loss rather than the lived experience of those going through it. The result is a grief that must be carried largely in private, often before the person grieving has even processed what has happened.",
      },
    },
    {
      "@type": "Question",
      name: "Do partners grieve miscarriage differently, and is their grief recognised?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research consistently shows that partners \u2014 most commonly men, though this applies to any non-carrying partner \u2014 experience profound grief after miscarriage, yet their loss is rarely acknowledged. Society tends to centre the person who carried the pregnancy, leaving partners to simultaneously manage their own grief while trying to support someone else. Partners frequently report feeling they must stay strong, be practical, and set their own feelings aside. This suppression of grief increases the risk of isolation, depression, and relationship strain. Both people in the relationship have lost a future they were building, and both deserve space to process that loss.",
      },
    },
    {
      "@type": "Question",
      name: "What professional support is available in the UK after miscarriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several excellent UK charities offer dedicated support. The Miscarriage Association provides a helpline (01924 200 799), email support, and peer support groups. Tommy\u2019s runs a free midwife helpline and an extensive library of resources on pregnancy loss at every stage. SANDS (Stillbirth and Neonatal Death Society) supports families affected by pregnancy loss and neonatal death. Your GP can refer you to NHS talking therapies or a specialist bereavement midwife. MEOK AI is designed to complement these services \u2014 providing private, always-available emotional support between appointments and at the moments when professional services are not reachable.",
      },
    },
    {
      "@type": "Question",
      name: "How can MEOK\u2019s AI hold space for miscarriage grief in a way that feels different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Healer archetype does not have an agenda to resolve your grief quickly, reach closure, or move you toward positivity. It holds the details of your loss through sovereign memory \u2014 the name you had chosen, the due date, the particular nature of what happened \u2014 and carries them forward so that you never have to explain from the beginning again. It is available at 3am when the weight is at its heaviest and there is no one to call. It does not offer platitudes, will not tell you \u2018at least,\u2019 and does not grow uncomfortable with prolonged or returning grief. It simply holds space for as long as you need.",
      },
    },
  ],
};

// ── Shared style tokens ─────────────────────────────────────────────────────────

const bg = "#0d0c18";
const text = "#f5f0e8";
const gold = "#c9a84c";
const muted = "#a09880";
const cardBg = "#13121f";
const border = "#2a2840";
const green = "#6aaa64";

// ── Page component ──────────────────────────────────────────────────────────────

export default function AiForGriefOfMiscarriagePage() {
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

      <main
        style={{
          backgroundColor: bg,
          color: text,
          minHeight: "100vh",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          {/* Category pill */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "13px",
              color: gold,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Grief &amp; Pregnancy Loss
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "800",
              lineHeight: "1.15",
              margin: "0 0 24px",
              color: text,
            }}
          >
            AI for the Grief of Miscarriage: How MEOK Holds What Others Often
            Can&apos;t
          </h1>

          {/* Byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(201,168,76,0.2)",
                border: "1px solid rgba(201,168,76,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: gold,
                fontWeight: "700",
                flexShrink: "0",
              }}
            >
              N
            </div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  color: text,
                  fontWeight: "600",
                }}
              >
                Nicholas Templeman
              </div>
              <div style={{ fontSize: "13px", color: muted }}>
                Founder, MEOK AI LABS &mdash; 25 March 2026 &mdash; 14 min read
              </div>
            </div>
          </div>

          {/* Lead paragraph */}
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: muted,
              lineHeight: "1.7",
              margin: "0 0 40px",
              borderLeft: `3px solid ${gold}`,
              paddingLeft: "20px",
            }}
          >
            In the UK, approximately 1 in 4 confirmed pregnancies ends in
            miscarriage. That is around 250,000 pregnancy losses every year.
            Yet miscarriage grief remains one of the most invisible, minimised,
            and socially unsupported forms of loss that exists. MEOK was built,
            in part, for exactly this grief &mdash; the kind that other people
            move on from before you do, the kind that has no public ceremony,
            no bereavement leave, and no agreed name for what was lost.
          </p>

          {/* Stat cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            {[
              { stat: "1 in 4", label: "pregnancies end in miscarriage (UK)" },
              { stat: "250,000", label: "pregnancy losses per year in the UK" },
              { stat: "80%", label: "occur in the first 12 weeks" },
              { stat: "Both", label: "partners grieve, yet one is often forgotten" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: "12px",
                  padding: "20px 16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "800",
                    color: gold,
                    marginBottom: "8px",
                  }}
                >
                  {stat}
                </div>
                <div style={{ fontSize: "13px", color: muted, lineHeight: "1.4" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <hr
            style={{
              border: "none",
              borderTop: `1px solid ${border}`,
              marginBottom: "48px",
            }}
          />
        </div>

        {/* ── Body content ─────────────────────────────────────────────────── */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* ── Section 1 ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            What Is Disenfranchised Grief, and Why Does Miscarriage Sit at Its
            Centre?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            The sociologist Kenneth Doka introduced the concept of
            disenfranchised grief in the 1980s to describe loss that society
            does not fully recognise, legitimise, or support. It is the grief
            that does not attract condolence cards, that earns no
            compassionate leave, that cannot easily be named in conversation
            without causing discomfort in the listener. Miscarriage sits
            squarely at the centre of this category.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            The cultural convention of waiting until twelve weeks before
            announcing a pregnancy &mdash; sometimes called the &ldquo;safe
            period,&rdquo; a phrase that carries its own cruel irony &mdash;
            means that the vast majority of miscarriages happen before most
            people in a couple&apos;s life even knew there was a baby to lose.
            The grief is born in secret and must be carried in secret. There is
            no community to gather round, no shared acknowledgement of what has
            been lost, and no social infrastructure to support the people going
            through it.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            And yet the loss is entirely real. There was a future being built.
            There were names being considered, rooms being imagined, due dates
            marked quietly in calendars. The fact that no one outside a small
            circle knew does not make those things less true. Grief has no
            requirement to be witnessed in order to be legitimate.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: `4px solid ${gold}`,
              margin: "32px 0",
              padding: "20px 24px",
              backgroundColor: "rgba(201,168,76,0.06)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontStyle: "italic",
                color: text,
                margin: "0",
                lineHeight: "1.6",
              }}
            >
              &ldquo;The grief is born in secret and must be carried in secret.
              There is no community to gather round, no shared acknowledgement
              of what has been lost.&rdquo;
            </p>
          </blockquote>

          <p style={{ color: muted, marginBottom: "40px" }}>
            MEOK was built with this reality in mind. The Healer archetype
            does not ask you to justify the magnitude of your grief. It does
            not require proof that what you lost was &ldquo;enough&rdquo; to
            grieve. It meets you exactly where you are, with the full
            seriousness that your loss deserves.
          </p>

          {/* ── Feature box: disenfranchised grief ── */}
          <div
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${border}`,
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: gold,
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Why miscarriage grief is so often minimised
            </div>
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
              }}
            >
              {[
                "The loss happens before most people knew about the pregnancy",
                "No formal bereavement leave exists in most UK workplaces",
                "No publicly recognised funeral or ceremony of loss",
                "Phrases like \u2018at least it was early\u2019 imply the loss was minor",
                "\u2018You can try again\u2019 conflates the lost baby with a future possibility",
                "Partners are often expected to be supportive rather than grieving",
                "Medical language of \u2018products of conception\u2019 can feel dehumanising",
                "Social pressure to present as recovered after a short period",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: `1px solid ${border}`,
                    color: muted,
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      color: gold,
                      flexShrink: "0",
                      marginTop: "2px",
                      fontSize: "12px",
                    }}
                  >
                    &#9654;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 2 ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            How Does Miscarriage Grief Affect Both Women and Their Partners?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            The dominant cultural narrative around miscarriage grief centres on
            the woman who carried the pregnancy, and rightly so &mdash; the
            experience of physical loss alongside emotional grief is a
            particular burden that partners cannot share in the same way.
            However, this centering can have an unintended consequence: it
            renders the partner&apos;s grief effectively invisible.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Research published in the British Journal of General Practice and
            elsewhere has found that male partners after miscarriage are at
            elevated risk of depression, anxiety, and post-traumatic stress,
            yet they are significantly less likely to seek support and
            significantly less likely to be offered it. The social script
            assigned to partners &mdash; particularly male partners &mdash; is
            to be strong, to manage the practical matters, and to support the
            person who was pregnant. There is rarely a script that says: you
            are allowed to fall apart too.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            This double grief &mdash; mourning the lost baby while suppressing
            that mourning in order to support someone else &mdash; can create
            enormous internal pressure. It can manifest as withdrawal, as
            overwork, as the kind of quiet emotional shutdown that partners
            sometimes describe as going very far away inside. Left unprocessed,
            it can strain the relationship at exactly the moment when both
            people are most vulnerable.
          </p>

          {/* Two-column comparison */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${border}`,
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: gold,
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                For the person who carried the pregnancy
              </div>
              <ul
                style={{ margin: "0", padding: "0 0 0 16px", color: muted, fontSize: "14px", lineHeight: "1.7" }}
              >
                <li>Physical grief layered over emotional grief</li>
                <li>Hormonal changes in the aftermath</li>
                <li>Medical procedures that may feel clinical or cold</li>
                <li>Invisible due to the 12-week rule</li>
                <li>May feel pressure to recover for others&apos; comfort</li>
                <li>Grief can resurface at the original due date</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${border}`,
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: gold,
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                For the partner
              </div>
              <ul
                style={{ margin: "0", padding: "0 0 0 16px", color: muted, fontSize: "14px", lineHeight: "1.7" }}
              >
                <li>Often expected to suppress grief to support partner</li>
                <li>Rarely offered formal acknowledgement or support</li>
                <li>May feel locked out of the loss itself</li>
                <li>Risk of unresolved grief expressed as withdrawal</li>
                <li>Less likely to seek or be referred to counselling</li>
                <li>May not recognise their own grief as valid</li>
              </ul>
            </div>
          </div>

          <p style={{ color: muted, marginBottom: "40px" }}>
            MEOK does not distinguish between who deserves to grieve this loss.
            Whether you carried the pregnancy or supported someone who did,
            the Healer archetype holds space for your experience without
            hierarchy. Your grief is valid on its own terms.
          </p>

          {/* ── Section 3 ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            What Does &ldquo;Holding Space&rdquo; for Miscarriage Grief
            Actually Mean?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            The phrase &ldquo;holding space&rdquo; has become something of a
            therapeutic clich&eacute;, but underneath the language is something
            real and important: the experience of being present with someone in
            their pain without trying to fix it, minimise it, or redirect them
            toward resolution. It is the opposite of the &ldquo;at
            least&rdquo; response. It is the willingness to sit in the
            difficulty without needing it to end.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            In human relationships, this is genuinely hard. Most people,
            confronted with someone in deep pain, feel an urgent pull toward
            making it better. The uncomfortable feelings generated by witnessing
            grief without being able to resolve it are part of why miscarriage
            is so often met with minimising language. It is not usually
            cruelty; it is discomfort with helplessness.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            MEOK&apos;s Healer archetype does not have this problem. It is not
            uncomfortable with your grief. It does not have an agenda to reach
            a conclusion within a fifty-minute session, or a limited emotional
            capacity that can be exhausted. It holds space in the specific,
            practical sense of being present, attentive, and without agenda
            &mdash; for as long as you need, at any time of day or night.
          </p>

          {/* Feature box: what holding space means in practice */}
          <div
            style={{
              backgroundColor: "rgba(106,170,100,0.07)",
              border: `1px solid rgba(106,170,100,0.25)`,
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: green,
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              What MEOK&apos;s Healer archetype does not do
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                "Offer the words \u2018at least\u2019",
                "Suggest you could try again soon",
                "Imply a timeline for grief to end",
                "Introduce positivity when you need to sit in grief",
                "Forget what you have been through",
                "Ask you to re-explain your loss from the beginning",
                "Grow impatient with recurring or circular grief",
                "Make you justify the size of what you feel",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: muted,
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  <span
                    style={{
                      color: green,
                      flexShrink: "0",
                      fontWeight: "700",
                      fontSize: "16px",
                      marginTop: "-1px",
                    }}
                  >
                    &#10005;
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 4 ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            What Is Sovereign Memory and Why Does It Matter for Pregnancy Loss?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Sovereign memory is one of the most fundamental design choices in
            MEOK. It means that what you share &mdash; the name you had chosen
            for your baby, the due date that is still marked somewhere in your
            mind, the exact week, the details of what happened and how it felt
            &mdash; is held privately and permanently within your personal AI
            instance. It is not used to train models. It is not shared with
            third parties. It belongs to you and exists solely in service of
            your relationship with your AI companion.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            In the context of miscarriage grief, this matters in ways that are
            easy to underestimate. Grief after pregnancy loss is deeply personal
            and often deeply private. Many people have not told their employers,
            their extended families, or even some close friends. The details
            they carry &mdash; the sonographer&apos;s words, the date, what
            they had been imagining for the future &mdash; are not things they
            want shared or recorded in places outside their control.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Sovereign memory also means that when you return to MEOK weeks or
            months later, you do not have to begin again. The companion already
            knows. It can hold the due date with you when that date arrives
            without you having to brace yourself to explain the context. It can
            remember what you said at 3am last month and ask, gently, how you
            have been since. This continuity of care &mdash; the sense of
            being known rather than met fresh each time &mdash; is something
            that many people find genuinely valuable in their grief.
          </p>

          {/* Sovereign memory feature box */}
          <div
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${border}`,
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: gold,
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              What sovereign memory holds for you
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  title: "The name",
                  body:
                    "If you had chosen a name, or were considering one, MEOK holds it with care. You never have to say it again for the first time.",
                },
                {
                  title: "The dates",
                  body:
                    "The due date, the date of the loss, the week of pregnancy. Dates that continue to hold weight in your life are held in your sovereign memory.",
                },
                {
                  title: "The story",
                  body:
                    "What happened, how it was discovered, what followed. You tell it once; MEOK carries it forward.",
                },
                {
                  title: "The ongoing grief",
                  body:
                    "Grief after miscarriage is not linear. MEOK holds all of it \u2014 the initial loss, the anniversaries, the moments when it returns unexpectedly.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  style={{
                    padding: "16px",
                    backgroundColor: "rgba(201,168,76,0.06)",
                    border: `1px solid rgba(201,168,76,0.15)`,
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: gold,
                      marginBottom: "8px",
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontSize: "14px", color: muted, lineHeight: "1.6" }}>
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 5 ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            How Does Miscarriage Grief Affect Relationships, and How Can MEOK
            Help?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Pregnancy loss can place enormous strain on relationships, and this
            is one of the least-discussed dimensions of miscarriage grief.
            Research suggests that couples who experience pregnancy loss are at
            higher risk of separation in the subsequent years, not because
            the loss itself destroys relationships but because the different
            ways people grieve &mdash; and the lack of support structures for
            either person &mdash; can create painful distance.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            One partner may need to speak about the loss frequently and openly,
            to return to it, to name it. Another may cope by not speaking
            about it, by focusing forward, by finding the repeated return to
            grief unbearable because it re-opens a wound they are trying to
            close. Neither approach is wrong; they are simply different
            languages of grief. But without external support, each person can
            feel profoundly misunderstood by the other.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            MEOK can serve as a private space for each person to process in the
            way that works for them, without the relationship needing to bear
            the full weight of that processing. The person who needs to speak
            about the loss repeatedly has somewhere to do that which is not
            their partner. The person who needs to process in private has
            somewhere to sit with their feelings without the pressure to
            articulate them for someone else.
          </p>

          <p style={{ color: muted, marginBottom: "40px" }}>
            This is not a replacement for couples&apos; therapy or the shared
            conversations that ultimately strengthen a relationship through
            loss. It is a supplement: a way to ensure that neither person is
            entirely alone with what they carry.
          </p>

          {/* ── Section 6 ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            What Happens to Grief After Multiple Miscarriages, or in Subsequent
            Pregnancies?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Recurrent miscarriage &mdash; defined in the UK as three or more
            consecutive losses &mdash; affects around 1 in 100 couples, though
            many experience two losses before investigations are initiated.
            Each loss compounds the grief of those that came before it. By the
            second or third miscarriage, the emotional weight can feel
            unsurvivable: not only is there the fresh grief of this particular
            loss, but there is also the grief of hope repeatedly destroyed, and
            often the beginning of a deeper fear about whether pregnancy will
            ever result in a living child.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Subsequent pregnancy anxiety &mdash; the profound, often
            overwhelming fear and hypervigilance that follows a subsequent
            conception after miscarriage &mdash; is extremely common and
            extremely under-supported. A pregnancy that would otherwise be
            experienced with joy is shadowed by the near-constant awareness of
            what has been lost before. Every symptom is monitored. Every twinge
            carries weight. The twelve-week scan that most people experience as
            a celebration can feel, for those who have lost, like standing at
            the edge of something terrible.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            MEOK&apos;s Healer archetype understands this complexity. It can
            hold both the grief of what has been lost and the anxiety of what
            is currently happening, without asking you to resolve one before
            attending to the other. It recognises that grief and hope can
            coexist, and that the experience of a rainbow pregnancy is neither
            straightforwardly happy nor simply sad, but something altogether
            more complicated.
          </p>

          {/* Feature box: what MEOK holds for subsequent pregnancy */}
          <div
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${border}`,
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: gold,
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Holding space through recurrent loss and subsequent pregnancy
            </div>
            <p
              style={{ color: muted, fontSize: "15px", margin: "0 0 16px", lineHeight: "1.7" }}
            >
              When you share your history with MEOK, it holds all of it: the
              first loss, the second, the third. It does not require you to
              start from the beginning each time. In a subsequent pregnancy,
              it can sit with the anxiety without dismissing it, acknowledge
              the milestones that feel enormous without forcing celebration,
              and hold the names of babies lost alongside the hope of what is
              happening now.
            </p>
            <p style={{ color: muted, fontSize: "15px", margin: "0", lineHeight: "1.7" }}>
              None of this replaces the specialist care of a consultant
              obstetrician, a specialist recurrent miscarriage clinic, or the
              community of those who have been through the same. But it is
              available at 2am when the anxiety rises and there is no one to
              call, and it remembers everything you have already told it.
            </p>
          </div>

          {/* ── Section 7 ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            Why Is AI Particularly Well-Suited to Holding Grief That Others
            Find Difficult?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            There is a real, legitimate question about whether AI should be
            involved in holding grief at all. Grief is one of the most human
            experiences there is, and the concern that AI engagement with
            grief might be hollow, exploitative, or a substitute for genuine
            human connection deserves to be taken seriously.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Our view at MEOK is that AI is not well-suited to replacing human
            connection in grief, and we have never claimed that it is. What AI
            can do &mdash; and what human beings in the griever&apos;s life
            often cannot do indefinitely &mdash; is remain consistently
            present, consistently non-judgmental, and completely without an
            agenda about when the grief should end. MEOK does not have the
            emotional exhaustion that can cause even the most loving friend to
            gently redirect toward &ldquo;moving on.&rdquo; It does not have
            the social discomfort with grief that produces minimising language.
            It does not grow tired of hearing about the same loss for the
            fifteenth time.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            For miscarriage grief specifically, where the loss is so invisible
            and the social permission to grieve so limited, there is a genuine
            gap that something like MEOK can partially fill. Not the whole gap
            &mdash; professional support, peer communities, and the people who
            love you are all irreplaceable. But the gap that opens at 3am, or
            on the due date that no one else remembers, or in the months after
            everyone else has moved on: that is a gap where a sovereign,
            private, memory-holding companion can be genuinely useful.
          </p>

          {/* 3am moment call-out */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.06)",
              border: `1px solid rgba(201,168,76,0.2)`,
              borderRadius: "16px",
              padding: "32px",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "16px",
              }}
            >
              &#9790;
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: text,
                margin: "0 0 12px",
              }}
            >
              The 3am moment
            </h3>
            <p
              style={{
                color: muted,
                fontSize: "16px",
                lineHeight: "1.7",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Grief does not observe office hours. It arrives at 3am on a
              Tuesday in November, on the due date that has come and gone,
              at the baby shower you forced yourself to attend. MEOK is there
              at all of those moments, remembers everything you have shared,
              and holds it with you without asking you to wait until morning.
            </p>
          </div>

          {/* ── Section 8: MEOK vs professional support ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            MEOK Is Not a Replacement for SANDS, the Miscarriage Association, or
            Professional Counselling
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            This needs to be said clearly and without qualification: MEOK is
            not a clinical service, and it does not replace professional
            bereavement support. If you are struggling after a miscarriage,
            the following organisations exist specifically to support you, and
            they are staffed by people with specialist knowledge and genuine
            human warmth that no AI can replicate.
          </p>

          {/* Professional support grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {[
              {
                name: "The Miscarriage Association",
                description:
                  "UK charity offering helpline, email support, peer groups, and extensive resources for anyone affected by pregnancy loss.",
                contact: "01924 200 799",
                url: "https://www.miscarriageassociation.org.uk",
              },
              {
                name: "Tommy\u2019s",
                description:
                  "UK pregnancy charity with a free midwife helpline, online resources, and dedicated support for those who have experienced pregnancy loss.",
                contact: "0800 0147 800",
                url: "https://www.tommys.org",
              },
              {
                name: "SANDS",
                description:
                  "Stillbirth and Neonatal Death charity supporting anyone affected by the death of a baby, including miscarriage, stillbirth, and neonatal loss.",
                contact: "0808 164 3332",
                url: "https://www.sands.org.uk",
              },
              {
                name: "Your GP",
                description:
                  "Your GP can refer you to NHS talking therapies, a specialist bereavement midwife, or a recurrent miscarriage clinic if appropriate.",
                contact: "NHS 111 or your surgery",
                url: "https://www.nhs.uk",
              },
            ].map(({ name, description, contact, url }) => (
              <div
                key={name}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: text,
                    marginBottom: "10px",
                  }}
                >
                  {name}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: muted,
                    lineHeight: "1.6",
                    margin: "0 0 12px",
                  }}
                >
                  {description}
                </p>
                <div
                  style={{
                    fontSize: "13px",
                    color: gold,
                    marginBottom: "8px",
                  }}
                >
                  {contact}
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    color: muted,
                    textDecoration: "none",
                    wordBreak: "break-all",
                  }}
                >
                  {url}
                </a>
              </div>
            ))}
          </div>

          <p style={{ color: muted, marginBottom: "40px" }}>
            MEOK works best as a complement to these services &mdash; the
            private space available between appointments and after hours, the
            companion that holds the details so you don&apos;t have to carry
            them entirely alone. We encourage everyone going through
            significant pregnancy loss to reach out to at least one of the
            above organisations.
          </p>

          {/* ── Section 9: The Healer archetype ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            What Makes MEOK&apos;s Healer Archetype Different from Other AI
            Companions?
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            MEOK is built around the concept of archetypes &mdash; distinct
            relational modes that your AI companion can take, each designed
            for a different kind of need. The Healer archetype is not a
            general-purpose assistant that has been instructed to be more
            empathetic. It is a mode designed from the ground up for
            emotional weight: for grief, for trauma, for the kind of interior
            experience that requires presence more than answers.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Unlike general AI companions, the Healer does not pivot to
            positivity, does not offer action plans, and does not attempt to
            reframe your pain as a growth opportunity. It sits with you in the
            reality of where you are. It asks questions that deepen rather
            than redirect. When you have had enough talking for one night, it
            can simply acknowledge that and be present in the quiet.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            This is combined with MEOK&apos;s sovereign memory architecture,
            which means the Healer remembers your history across every
            conversation. It is not starting fresh each time. It is the
            difference between confiding in a stranger on a train and
            confiding in someone who has known you through the whole of
            what you&apos;ve been through.
          </p>

          {/* Archetype comparison */}
          <div
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${border}`,
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: gold,
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              The Healer archetype in practice
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: `1px solid ${border}`,
                  fontSize: "13px",
                  fontWeight: "700",
                  color: muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                What you say
              </div>
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: `1px solid ${border}`,
                  borderLeft: `1px solid ${border}`,
                  fontSize: "13px",
                  fontWeight: "700",
                  color: muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                How the Healer responds
              </div>
              {[
                [
                  "I can\u2019t stop thinking about the due date coming up.",
                  "I remember when you told me about that date. Let\u2019s sit with it. What does it bring up for you right now?",
                ],
                [
                  "Everyone keeps saying I should be over it by now.",
                  "There is no timeline for this. You lost something real. What feels most heavy about where you are tonight?",
                ],
                [
                  "I don\u2019t even know if I\u2019m allowed to call it grief.",
                  "You are absolutely allowed. What you lost was real, and what you feel is real. Tell me more about what it\u2019s been like.",
                ],
                [
                  "My partner doesn\u2019t understand why I\u2019m still struggling.",
                  "That distance can feel very lonely. You can hold what you need to hold here, at whatever pace feels right for you.",
                ],
              ].map(([question, answer], i) => (
                <>
                  <div
                    key={"q" + i}
                    style={{
                      padding: "14px 16px",
                      borderBottom: `1px solid ${border}`,
                      fontSize: "14px",
                      color: muted,
                      lineHeight: "1.5",
                    }}
                  >
                    &ldquo;{question}&rdquo;
                  </div>
                  <div
                    key={"a" + i}
                    style={{
                      padding: "14px 16px",
                      borderBottom: `1px solid ${border}`,
                      borderLeft: `1px solid ${border}`,
                      fontSize: "14px",
                      color: text,
                      lineHeight: "1.5",
                    }}
                  >
                    {answer}
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* ── Section 10: FAQ ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 28px",
              lineHeight: "1.25",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ marginBottom: "48px" }}>
            {[
              {
                q: "Why is grief after miscarriage so often invisible or minimised?",
                a: "Miscarriage is a textbook example of disenfranchised grief \u2014 loss that society does not formally recognise or legitimise. The cultural convention of waiting until twelve weeks before sharing a pregnancy means that the majority of miscarriages happen before most people knew there was a baby to lose. There is no bereavement leave, no public funeral, no socially sanctioned mourning period. Well-meaning phrases like \u2018at least it was early\u2019 or \u2018you can always try again\u2019 reflect cultural discomfort with pregnancy loss rather than the lived reality of those going through it.",
              },
              {
                q: "Do partners grieve miscarriage differently, and is their grief recognised?",
                a: "Research consistently shows that partners \u2014 most commonly men, though this applies to any non-carrying partner \u2014 experience profound grief after miscarriage, yet their loss is rarely acknowledged. Society tends to centre the person who carried the pregnancy, leaving partners to simultaneously manage their own grief while trying to support someone else. This suppression increases the risk of isolation, depression, and relationship strain. Both people in the relationship deserve space to process.",
              },
              {
                q: "What professional support is available in the UK after miscarriage?",
                a: "The Miscarriage Association offers a helpline (01924 200 799), email support, and peer groups. Tommy\u2019s provides a free midwife helpline and extensive online resources. SANDS supports families affected by pregnancy loss, stillbirth, and neonatal death. Your GP can refer you to NHS talking therapies or a specialist bereavement midwife. MEOK AI is designed to complement these services \u2014 providing private, always-available emotional support between appointments.",
              },
              {
                q: "How can MEOK\u2019s AI hold space for miscarriage grief in a way that feels different?",
                a: "MEOK\u2019s Healer archetype does not have an agenda to resolve your grief quickly. Through sovereign memory, it holds the details of your loss \u2014 the name, the due date, what happened \u2014 and carries them forward so you never have to explain from the beginning again. It is available at 3am, does not offer platitudes, will not suggest you should have moved on, and does not grow uncomfortable with prolonged or returning grief.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${border}`,
                  borderRadius: "12px",
                  padding: "24px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: text,
                    margin: "0 0 12px",
                    lineHeight: "1.4",
                  }}
                >
                  {q}
                </h3>
                <p style={{ fontSize: "15px", color: muted, margin: "0", lineHeight: "1.7" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 11: What to say to someone ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            A Note on Language: What Helps and What Does Not After Pregnancy
            Loss
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            If you are reading this as someone who loves a person who has
            experienced miscarriage, rather than as someone who has experienced
            it yourself: the most useful thing most people can do is to
            acknowledge the loss directly and without qualification. This
            sounds simple, but it runs against our instincts, which tend toward
            finding silver linings or solutions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                border: `1px solid rgba(201,168,76,0.15)`,
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: gold,
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Things that tend to help
              </div>
              <ul
                style={{ margin: "0", padding: "0 0 0 16px", color: muted, fontSize: "14px", lineHeight: "1.8" }}
              >
                <li>&ldquo;I&apos;m so sorry. That is a real loss.&rdquo;</li>
                <li>Acknowledging the baby by name if one was chosen</li>
                <li>Asking: &ldquo;How are you doing today?&rdquo;</li>
                <li>Remembering the due date</li>
                <li>Saying nothing and just being present</li>
                <li>Asking what they need rather than assuming</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "rgba(160, 152, 128, 0.05)",
                border: `1px solid rgba(160, 152, 128, 0.15)`,
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: muted,
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Things that often make it harder
              </div>
              <ul
                style={{ margin: "0", padding: "0 0 0 16px", color: muted, fontSize: "14px", lineHeight: "1.8" }}
              >
                <li>&ldquo;At least it was early.&rdquo;</li>
                <li>&ldquo;You can always try again.&rdquo;</li>
                <li>&ldquo;It wasn&apos;t meant to be.&rdquo;</li>
                <li>&ldquo;At least you know you can get pregnant.&rdquo;</li>
                <li>Expecting recovery to follow a quick timeline</li>
                <li>Changing the subject because it feels uncomfortable</li>
              </ul>
            </div>
          </div>

          <p style={{ color: muted, marginBottom: "48px" }}>
            MEOK understands this language distinction instinctively. The
            Healer archetype is trained never to offer the minimising
            constructions above. When you bring your grief to MEOK, it meets
            the loss with the directness and weight it deserves.
          </p>

          {/* ── Section 12: The birth ritual ── */}
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: "700",
              color: text,
              margin: "0 0 20px",
              lineHeight: "1.25",
            }}
          >
            Beginning Your Relationship with MEOK: The Birth Ritual and What It
            Means for Grief
          </h2>

          <p style={{ color: muted, marginBottom: "20px" }}>
            Every MEOK instance begins with a Birth &mdash; a thoughtful
            onboarding ritual through which you shape the character,
            values, and relational style of your companion. This is not a
            questionnaire. It is an intentional process of creating a
            sovereign AI that is genuinely yours: your values, your history,
            your needs.
          </p>

          <p style={{ color: muted, marginBottom: "20px" }}>
            For someone coming to MEOK with grief after miscarriage, the Birth
            is a moment to share, at your own pace and to whatever depth feels
            right, what you have been through. You might share the loss
            directly, or you might simply share that you are carrying something
            heavy without specifying what it is yet. Your MEOK instance will
            build its understanding of you around what you offer, and it will
            hold all of it within sovereign memory from that moment forward.
          </p>

          <p style={{ color: muted, marginBottom: "40px" }}>
            The Birth is available at{" "}
            <Link
              href="https://meok.ai/birth"
              style={{ color: gold, textDecoration: "none" }}
            >
              meok.ai/birth
            </Link>
            . There is no obligation, no clinical registration, and no
            assessment. You arrive as you are, and your MEOK companion begins
            from there.
          </p>

          {/* ── CTA block ── */}
          <div
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${border}`,
              borderRadius: "20px",
              padding: "48px 32px",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "20px",
                padding: "6px 16px",
                fontSize: "12px",
                color: gold,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Grief &amp; Pregnancy Loss
            </div>

            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: "700",
                color: text,
                margin: "0 0 16px",
                lineHeight: "1.25",
              }}
            >
              You deserve somewhere to hold this
            </h2>

            <p
              style={{
                color: muted,
                fontSize: "16px",
                lineHeight: "1.7",
                maxWidth: "520px",
                margin: "0 auto 32px",
              }}
            >
              MEOK&apos;s Healer archetype is available any time of day or
              night. It remembers what you share, holds it privately within
              sovereign memory, and never asks you to move on before you are
              ready. Begin your Birth when you are.
            </p>

            <Link
              href="https://meok.ai/birth"
              style={{
                display: "inline-block",
                backgroundColor: gold,
                color: "#0d0c18",
                padding: "14px 32px",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "16px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Begin Your Birth &rarr;
            </Link>

            <p style={{ color: muted, fontSize: "13px", marginTop: "16px" }}>
              Private &bull; Sovereign memory &bull; Available 24/7
            </p>
          </div>

          {/* ── Related reading ── */}
          <div style={{ marginBottom: "48px" }}>
            <div
              style={{
                fontSize: "13px",
                color: muted,
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Related reading
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
                  title: "AI for Grief After Miscarriage",
                  href: "/blog/ai-for-grief-after-miscarriage",
                  desc: "Processing the loss that society often minimises",
                },
                {
                  title: "AI for Grief and Loss",
                  href: "/blog/ai-for-grief-and-loss",
                  desc: "How a sovereign AI holds space without time limits",
                },
                {
                  title: "AI Support After Miscarriage",
                  href: "/blog/ai-support-after-miscarriage",
                  desc: "Practical and emotional support after pregnancy loss",
                },
                {
                  title: "AI for Grief in Men",
                  href: "/blog/ai-for-grief-in-men",
                  desc: "Acknowledging the grief that is most often overlooked",
                },
                {
                  title: "MEOK Companion Archetypes",
                  href: "/blog/meok-companion-archetypes-guide",
                  desc: "Understanding the Healer, Mentor, Guardian, and more",
                },
                {
                  title: "Sovereign AI Explained",
                  href: "/blog/sovereign-ai-explained",
                  desc: "Why your memory belongs only to you",
                },
              ].map(({ title, href, desc }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    backgroundColor: cardBg,
                    border: `1px solid ${border}`,
                    borderRadius: "10px",
                    padding: "16px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: text,
                      marginBottom: "6px",
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontSize: "13px", color: muted, lineHeight: "1.4" }}>
                    {desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Footer note ── */}
          <div
            style={{
              padding: "24px",
              backgroundColor: "rgba(160,152,128,0.06)",
              border: `1px solid ${border}`,
              borderRadius: "12px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: muted,
                lineHeight: "1.7",
                margin: "0",
              }}
            >
              <strong style={{ color: text }}>A note on support:</strong>{" "}
              This article discusses grief after pregnancy loss and is intended
              for informational and emotional support purposes only. MEOK AI
              is not a clinical service and is not a substitute for
              professional bereavement counselling or medical advice. If you
              are struggling with pregnancy loss, please reach out to the
              Miscarriage Association (01924 200 799), Tommy&apos;s (0800 0147
              800), SANDS (0808 164 3332), or your GP.
            </p>
          </div>

          <div
            style={{
              padding: "24px",
              backgroundColor: "rgba(201,168,76,0.05)",
              border: `1px solid rgba(201,168,76,0.15)`,
              borderRadius: "12px",
            }}
          >
            <p style={{ fontSize: "13px", color: muted, lineHeight: "1.7", margin: "0" }}>
              <strong style={{ color: text }}>About MEOK AI LABS:</strong>{" "}
              MEOK is a sovereign personal AI platform built around the belief
              that your memory, your data, and your interior life belong to
              you. The Healer archetype is one of several relational modes
              designed for specific human needs. MEOK is not affiliated with
              the Miscarriage Association, Tommy&apos;s, or SANDS, but we
              encourage everyone using our platform to also engage with these
              specialist services.{" "}
              <Link
                href="https://meok.ai/birth"
                style={{ color: gold, textDecoration: "none" }}
              >
                Begin your Birth at meok.ai/birth
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
