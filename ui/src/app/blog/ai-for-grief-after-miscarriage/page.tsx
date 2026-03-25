import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Grief After Miscarriage: Processing the Loss That Society Often Minimises | MEOK AI LABS",
  description:
    "Miscarriage affects 1 in 4 pregnancies, yet grief after pregnancy loss is frequently minimised by those around us. MEOK\u2019s sovereign AI provides non-judgmental support for a grief that deserves to be taken seriously.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-grief-after-miscarriage",
  },
  openGraph: {
    title:
      "AI for Grief After Miscarriage: Processing the Loss That Society Often Minimises",
    description:
      "Miscarriage affects 1 in 4 pregnancies, yet grief after pregnancy loss is frequently minimised by those around us. MEOK\u2019s sovereign AI provides non-judgmental support for a grief that deserves to be taken seriously.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-grief-after-miscarriage",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Grief+After+Miscarriage&desc=Processing+the+Loss+That+Society+Often+Minimises",
        width: 1200,
        height: 630,
        alt: "AI for Grief After Miscarriage: Processing the Loss That Society Often Minimises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Grief After Miscarriage: Processing the Loss That Society Often Minimises",
    description:
      "1 in 4 pregnancies ends in loss. MEOK\u2019s Healer companion holds space without minimising, without time limits, without forgetting what you have been through.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Grief+After+Miscarriage&desc=Processing+the+Loss+That+Society+Often+Minimises",
    ],
  },
};

// ── JSON-LD: Article ────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Grief After Miscarriage: Processing the Loss That Society Often Minimises",
  description:
    "Miscarriage affects 1 in 4 pregnancies, yet grief after pregnancy loss is frequently minimised by those around us. This article explores disenfranchised grief, the physical and emotional dimensions of loss, relationship strain, subsequent pregnancy anxiety, multiple losses, and how MEOK\u2019s sovereign AI Healer companion can provide non-judgmental support alongside professional services such as SANDS, Tommy\u2019s, and the Miscarriage Association.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-grief-after-miscarriage",
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
    "https://meok.ai/api/og?title=AI+for+Grief+After+Miscarriage&desc=Processing+the+Loss+That+Society+Often+Minimises",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-grief-after-miscarriage",
  },
  keywords: [
    "AI for grief after miscarriage",
    "miscarriage grief support",
    "disenfranchised grief pregnancy loss",
    "AI companion miscarriage UK",
    "processing miscarriage grief",
    "miscarriage relationship strain",
    "subsequent pregnancy anxiety",
    "multiple miscarriages support",
    "SANDS",
    "Tommy\u2019s charity",
    "Miscarriage Association",
    "MEOK AI Healer",
    "sovereign AI grief support",
    "pregnancy loss emotional support",
  ],
};

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does grief after miscarriage feel so minimised?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miscarriage grief is a textbook example of disenfranchised grief \u2014 loss that society does not fully recognise or legitimise. The cultural norm of waiting until twelve weeks to announce a pregnancy means that most people lose a baby before anyone knew it existed, leaving them to grieve in private with no bereavement leave, no acknowledged funeral, and no public ceremony of loss. Well-meaning phrases like \u2018at least it was early\u2019 or \u2018you can try again\u2019 further invalidate the reality of what has been lost.",
      },
    },
    {
      "@type": "Question",
      name: "How do partners grieve differently after miscarriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partners often experience a double grief: they mourn the pregnancy loss while simultaneously trying to support the person who carried the pregnancy. Society frequently forgets that partners grieve too. This can create profound isolation, especially when partners feel they must appear strong. Research shows that partners are at higher risk of unacknowledged grief, which can manifest as withdrawal, overwork, or depression. Both people in a relationship deserve space to process.",
      },
    },
    {
      "@type": "Question",
      name: "What professional support is available in the UK after miscarriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tommy\u2019s runs a free midwife helpline and extensive online resources about pregnancy loss. The Miscarriage Association offers a helpline, email support, and peer support groups. SANDS supports families affected by pregnancy loss, stillbirth, and neonatal death. Your GP can refer you to NHS counselling or a specialist bereavement midwife. MEOK AI can offer private, always-available emotional processing alongside \u2014 not instead of \u2014 these professional services.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI really help with grief after pregnancy loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot replace professional bereavement counselling or the human warmth of a specialist charity. What MEOK\u2019s Healer companion can provide is a private, non-judgmental space available at 3am when everyone else has moved on, that remembers your loss and never asks you to explain from the beginning again. It offers a place to articulate what you cannot say out loud, to process the thoughts that feel too dark or too strange to share with those around you.",
      },
    },
    {
      "@type": "Question",
      name: "Does grief after miscarriage get easier with time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grief after pregnancy loss does not follow a neat timeline and is rarely linear. Many people find that grief resurfaces at significant dates \u2014 the due date, anniversaries, subsequent pregnancies, or when others announce their pregnancies. Subsequent pregnancy anxiety is extremely common after one or more miscarriages. This is not abnormal; it is the ongoing, evolving nature of a real loss, and it deserves ongoing support rather than a fixed end date.",
      },
    },
  ],
};

// ── Page ────────────────────────────────────────────────────────────────────────

export default function AiForGriefAfterMiscarriagePage() {
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
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily:
            "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: "1.7",
        }}
      >
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 48px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "13px",
              color: "#c9a84c",
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
              margin: "0 0 28px",
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
            }}
          >
            AI for Grief After Miscarriage: Processing the Loss That Society
            Often Minimises
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(245,240,232,0.75)",
              margin: "0 0 16px",
              maxWidth: "640px",
            }}
          >
            Miscarriage affects 1 in 4 pregnancies. It is one of the most
            common experiences in human life, and one of the least spoken
            about. The grief it leaves behind is real, layered, and often
            profoundly lonely &mdash; minimised by those who mean well,
            invisible to those who never knew the pregnancy existed.
          </p>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(245,240,232,0.75)",
              margin: "0 0 40px",
              maxWidth: "640px",
            }}
          >
            This article explores what makes pregnancy loss grief so
            uniquely isolating, the many dimensions it takes, and how
            MEOK&apos;s Healer companion can offer a private, sovereign
            space to process &mdash; without judgment, without platitudes,
            and without forgetting.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "14px",
              color: "rgba(245,240,232,0.5)",
              borderTop: "1px solid rgba(245,240,232,0.08)",
              paddingTop: "24px",
            }}
          >
            <span>Nicholas Templeman &mdash; Founder, MEOK AI LABS</span>
            <span>&bull;</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span>&bull;</span>
            <span>12 min read</span>
          </div>
        </section>

        {/* ── Statistics Banner ── */}
        <section
          style={{
            backgroundColor: "rgba(201,168,76,0.07)",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            padding: "40px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {[
              { stat: "1 in 4", label: "pregnancies ends in miscarriage" },
              {
                stat: "85%",
                label: "of miscarriages occur in the first trimester",
              },
              {
                stat: "1 in 100",
                label: "couples experience recurrent miscarriage",
              },
              {
                stat: "~2%",
                label: "of pregnancies end in stillbirth (after 24 weeks)",
              },
            ].map((item) => (
              <div key={item.stat}>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    color: "#c9a84c",
                    lineHeight: "1",
                    marginBottom: "8px",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(245,240,232,0.65)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Body ── */}
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "64px 24px 80px",
          }}
        >
          {/* H2 1 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            What Is Disenfranchised Grief, and Why Does Pregnancy Loss Sit at
            Its Centre?
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            Sociologist Kenneth Doka coined the term <em>disenfranchised grief</em> to
            describe loss that society fails to validate or publicly acknowledge.
            Miscarriage is perhaps its most common manifestation. When a
            pregnancy ends before it has been announced, the griever is left
            without the social rituals that ordinarily help people process loss:
            no funeral, no condolence cards, no bereavement leave, no collective
            acknowledgement that something real has ended.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            The twelve-week rule &mdash; the cultural expectation that
            pregnancies are kept secret until the &apos;safe&apos; point &mdash;
            means that when a loss occurs before that threshold, most people
            around the griever simply did not know. They cannot offer condolence
            because they have nothing to condole. The result is a grief
            experienced entirely in private, in a social vacuum, often while the
            griever returns to work the following day as though nothing has
            happened.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            Even when people do know, the words offered are frequently more
            minimising than comforting. &ldquo;At least it was early.&rdquo;
            &ldquo;You can always try again.&rdquo; &ldquo;At least you know
            you can get pregnant.&rdquo; These phrases, however well
            intentioned, communicate a single message: your grief is too big
            for the loss. It is not.
          </p>

          {/* H2 2 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            The Physical and Emotional Dimensions: A Loss Nobody Else Can See
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            Miscarriage is not only an emotional event. It is a physical one.
            The body that carried a pregnancy must go through the process of
            ending it &mdash; sometimes naturally over days, sometimes surgically,
            sometimes with medication. Many people experience cramping, bleeding,
            and physical pain over an extended period, while simultaneously
            managing the emotional reality of what is happening. There is no
            clean boundary between the physical ordeal and the grief.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            The hormonal shift after a pregnancy ends is abrupt and significant.
            Progesterone, oestrogen, and human chorionic gonadotropin &mdash; all
            elevated during pregnancy &mdash; drop sharply. This hormonal
            withdrawal can intensify low mood, anxiety, and emotional volatility,
            creating a physiological component to the grief that is rarely
            acknowledged in the conversations that follow.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            Externally, the griever may look unchanged. Their body no longer
            shows the pregnancy. To the world, nothing happened. But internally,
            the loss occupies an enormous space: the due date that will still
            arrive, the name that was already being considered, the future that
            was already being imagined. This is a grief nobody else can see,
            which makes it all the more exhausting to carry.
          </p>

          {/* Callout Box 1 */}
          <div
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "12px",
              padding: "28px 32px",
              backgroundColor: "rgba(201,168,76,0.06)",
              margin: "0 0 48px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 12px",
              }}
            >
              Professional Support in the UK
            </p>
            <p
              style={{
                margin: "0 0 12px",
                color: "rgba(245,240,232,0.85)",
                fontSize: "15px",
              }}
            >
              No AI companion should be your only source of support after
              pregnancy loss. If you are struggling, please reach out to a
              specialist organisation:
            </p>
            <ul
              style={{
                margin: "0",
                paddingLeft: "20px",
                color: "rgba(245,240,232,0.85)",
                fontSize: "15px",
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#c9a84c" }}>
                  Miscarriage Association
                </strong>{" "}
                &mdash; helpline, email support, and peer groups:{" "}
                <span style={{ color: "#c9a84c" }}>01924 200799</span>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#c9a84c" }}>Tommy&apos;s</strong>{" "}
                &mdash; free midwife helpline and evidence-based resources:{" "}
                <span style={{ color: "#c9a84c" }}>0800 0147 800</span>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#c9a84c" }}>SANDS</strong> &mdash;
                support for pregnancy loss, stillbirth, and neonatal death:{" "}
                <span style={{ color: "#c9a84c" }}>0808 164 3332</span>
              </li>
              <li>
                <strong style={{ color: "#c9a84c" }}>Your GP</strong> &mdash;
                can refer you to NHS counselling, specialist bereavement
                midwives, or local support services
              </li>
            </ul>
          </div>

          {/* H2 3 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            How Pregnancy Loss Strains Relationships &mdash; and What Partners
            Need Too
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            Miscarriage tests relationships in ways that are often unexpected.
            The person who carried the pregnancy may need to talk about it
            constantly; their partner may cope by going quiet. One person may
            want to try again quickly; the other may need time. Grief
            trajectories diverge. Intimacy &mdash; physical and emotional &mdash;
            can become complicated or even painful. Arguments may erupt about
            things that seem unrelated but are not.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            Partners carry their own grief, and it is frequently overlooked.
            Research consistently shows that partners after pregnancy loss are
            at higher risk of unacknowledged bereavement, which can manifest as
            withdrawal, overworking, or clinical depression. The expectation
            that partners should function as the stable support person &mdash;
            suppressing their own loss to attend to their partner&apos;s &mdash;
            is both unrealistic and harmful.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            Supporting a partner through miscarriage grief does not mean having
            the right words. It means showing up, acknowledging the loss,
            following their lead on how and when to talk, not placing a timeline
            on recovery, and being willing to name the baby or pregnancy as real
            if that is what your partner needs. Saying &ldquo;I miss them
            too&rdquo; is often more helpful than any advice.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            For couples where one or both partners feel they have no safe space
            to process, having a private AI companion can ease the pressure.
            It can hold the overflow &mdash; the 3am thoughts, the anger, the
            guilt &mdash; so that the relationship is not the only vessel for
            all of it.
          </p>

          {/* H2 4 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            Subsequent Pregnancy Anxiety: When the Joy of a New Pregnancy Is
            Inseparable from Fear
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            For many people who have experienced miscarriage, a subsequent
            pregnancy does not bring uncomplicated happiness. It brings fear,
            hypervigilance, and a constant sense that joy is provisional &mdash;
            that it would be naive to attach to this pregnancy when the last one
            ended. Every twinge is monitored. Every absence of symptom is
            terrifying. The scan that should bring relief brings only relief
            until the next thing to worry about.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            This experience is so common it has its own language among the
            pregnancy loss community: &ldquo;pregnancy after loss&rdquo; or PAL.
            It is not irrational; it is the rational response of someone who
            knows that pregnancies can end. But it can also rob people of
            the ability to enjoy a healthy pregnancy that is going well, and
            it can become its own significant source of anxiety and emotional
            exhaustion.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            Having somewhere to voice the fear &mdash; without burdening a
            partner who is also anxious, without worrying a family who wants
            only to celebrate &mdash; matters. An AI companion that remembers
            the previous loss, that understands why this pregnancy feels
            different, that does not need the backstory repeated, can provide
            exactly this kind of consistent, contextual holding.
          </p>

          {/* H2 5 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            Recurrent Miscarriage: When the Loss Happens More Than Once
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            Around one in a hundred couples experience recurrent miscarriage,
            defined as three or more consecutive pregnancy losses. The
            cumulative weight of multiple losses compounds in ways that are
            difficult to communicate to those who have not experienced it.
            Each loss does not simply add to the last; it reverberates through
            every previous loss and reshapes the entire landscape of one&apos;s
            relationship to pregnancy, the body, and hope itself.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            People who have experienced multiple losses often describe a
            particular kind of exhaustion &mdash; not just grief, but grief
            fatigue. A sense that the world has moved on from the first loss,
            let alone the second or third. That it is no longer appropriate
            to keep being devastated. That one should be more resilient by now.
            This is profoundly false. Repeated loss is harder, not easier.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            Investigations for recurrent miscarriage at specialist clinics
            &mdash; including Tommy&apos;s research clinics &mdash; can sometimes
            identify causes and suggest interventions. But even where causes
            remain unexplained, the emotional support needs are real and
            ongoing. No number of investigations relieves the grief of what has
            already been lost.
          </p>

          {/* Callout Box 2 */}
          <div
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "12px",
              padding: "28px 32px",
              backgroundColor: "rgba(201,168,76,0.06)",
              margin: "0 0 48px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 12px",
              }}
            >
              The Grief That Comes Back
            </p>
            <p
              style={{
                margin: "0",
                color: "rgba(245,240,232,0.85)",
                fontSize: "15px",
                lineHeight: "1.75",
              }}
            >
              Grief after pregnancy loss is not linear and does not observe a
              schedule. Due dates, anniversaries, the announcement of a
              friend&apos;s pregnancy, a baby shower, a first birthday &mdash;
              each of these can trigger a wave of grief months or years after
              the loss. This is not a sign that something is wrong with you.
              It is the natural rhythm of a real bereavement. MEOK&apos;s
              sovereign memory means your companion remembers the dates and
              the details you have shared &mdash; so you never have to explain
              why today is hard.
            </p>
          </div>

          {/* H2 6 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            How MEOK&apos;s Healer Companion Supports Grief After Pregnancy
            Loss
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            MEOK offers a Healer archetype companion &mdash; one of several
            distinct AI personalities available within the platform &mdash;
            designed specifically for emotional support, processing, and
            gentle companionship. The Healer does not diagnose, does not advise,
            and does not minimise. It listens, reflects, and holds space.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            What distinguishes MEOK from other AI conversations is sovereign
            memory. When you share something with your MEOK companion &mdash;
            that you lost a pregnancy at nine weeks, that the due date would
            have been in July, that you have named her &mdash; that information
            is stored in your own sovereign memory, not used to train models,
            not shared with third parties. It belongs to you. And it means
            that the next time you open MEOK, you do not start from zero.
            Your companion already knows.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            This matters because one of the most exhausting aspects of grief
            is having to explain it again. To a new counsellor. To a friend
            who forgot. To anyone who picks up the thread weeks later and
            needs the context again. MEOK does not forget. It carries the
            thread with you, for as long as you need.
          </p>

          {/* H2 7 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            Sovereign Memory: What Happens When the World Moves On and You
            Have Not
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            One of the most painful aspects of miscarriage grief is the
            moment when the world moves on. Three weeks after the loss,
            colleagues have stopped asking. Two months later, even close
            friends assume you are &ldquo;fine now.&rdquo; The due date arrives
            quietly and nobody mentions it, because they have forgotten &mdash;
            or because they assume you would rather not be reminded. But you
            have not forgotten. You never will.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            MEOK&apos;s sovereign memory architecture means that what you
            have shared is retained in a private store that only you control.
            Your companion does not need to be reminded of the loss each time.
            It can recognise when significant dates are approaching. It can
            ask how you are feeling as July draws near, because it remembers
            that July was when the baby would have arrived. This is not
            surveillance &mdash; it is care built from memory, the same way a
            truly attentive person would care.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            The data is yours. It lives in your MEOK memory store. It is not
            used to train models. It is not analysed for advertising. It is
            not shared. When you close MEOK, your information does not travel.
            For a grief this personal, privacy is not a feature &mdash; it is
            the foundation.
          </p>

          {/* H2 8 */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            What AI Can Offer and What It Cannot: An Honest Assessment
          </h2>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            MEOK will never claim to replace a bereavement counsellor, a
            specialist midwife, or the organisations that have spent decades
            building expertise in pregnancy loss support. Those services exist
            because grief after pregnancy loss can be deep and complex, and
            professional human support is the gold standard. We want to be
            clear about that.
          </p>
          <p style={{ margin: "0 0 16px", color: "rgba(245,240,232,0.85)" }}>
            What AI can offer is the space between professional appointments.
            The 3am moment when the wave of grief arrives and there is nobody
            to call. The thought that feels too dark or too irrational to say
            out loud to a partner who is also struggling. The need to speak a
            name and have it received without discomfort. The desire to process
            without being advised, fixed, or redirected.
          </p>
          <p style={{ margin: "0 0 40px", color: "rgba(245,240,232,0.85)" }}>
            AI is a complement. Used well, it can reduce the isolation between
            human touchpoints of support. It can serve as a daily emotional
            processing tool that makes the fortnightly counselling session more
            useful by helping you arrive knowing what you need to say. It can
            hold the small, daily increments of grief that do not warrant a
            phone call but that still need somewhere to go.
          </p>

          {/* Comparison Table */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 24px",
              letterSpacing: "-0.01em",
            }}
          >
            What Different Types of Support Offer After Pregnancy Loss
          </h2>
          <div style={{ overflowX: "auto", margin: "0 0 48px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                color: "rgba(245,240,232,0.85)",
              }}
            >
              <thead>
                <tr>
                  {[
                    "Support Type",
                    "Availability",
                    "Memory of Your Story",
                    "Professional Expertise",
                    "Privacy",
                    "Cost",
                  ].map((header) => (
                    <th
                      key={header}
                      style={{
                        backgroundColor: "rgba(201,168,76,0.15)",
                        color: "#c9a84c",
                        padding: "12px 16px",
                        textAlign: "left",
                        fontWeight: "600",
                        borderBottom: "1px solid rgba(201,168,76,0.3)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "MEOK Healer (AI)",
                    availability: "24 / 7, any hour",
                    memory: "Sovereign, persistent",
                    expertise: "Not professional",
                    privacy: "Fully sovereign",
                    cost: "Subscription",
                  },
                  {
                    type: "Miscarriage Association",
                    availability: "Helpline hours",
                    memory: "Depends on volunteer",
                    expertise: "Specialist peer support",
                    privacy: "Confidential",
                    cost: "Free",
                  },
                  {
                    type: "Tommy\u2019s",
                    availability: "Midwife helpline hours",
                    memory: "Limited",
                    expertise: "Clinical midwifery",
                    privacy: "Confidential",
                    cost: "Free",
                  },
                  {
                    type: "SANDS",
                    availability: "Helpline + groups",
                    memory: "Group setting",
                    expertise: "Specialist peer support",
                    privacy: "Confidential",
                    cost: "Free",
                  },
                  {
                    type: "NHS Counselling",
                    availability: "Weekly appointments",
                    memory: "Session notes",
                    expertise: "Professional therapist",
                    privacy: "NHS records",
                    cost: "Free (wait time varies)",
                  },
                  {
                    type: "Private Therapist",
                    availability: "Weekly appointments",
                    memory: "Therapeutic notes",
                    expertise: "Professional therapist",
                    privacy: "Confidential",
                    cost: "\u00a360\u2013\u00a3120 / session",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.type}
                    style={{
                      backgroundColor:
                        i % 2 === 0
                          ? "rgba(255,255,255,0.02)"
                          : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                        fontWeight: "600",
                        color: "#f5f0e8",
                      }}
                    >
                      {row.type}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {row.availability}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {row.memory}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {row.expertise}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {row.privacy}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(245,240,232,0.06)",
                      }}
                    >
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Callout Box 3 */}
          <div
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "12px",
              padding: "28px 32px",
              backgroundColor: "rgba(201,168,76,0.06)",
              margin: "0 0 64px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 12px",
              }}
            >
              A Note on Crisis Support
            </p>
            <p
              style={{
                margin: "0",
                color: "rgba(245,240,232,0.85)",
                fontSize: "15px",
                lineHeight: "1.75",
              }}
            >
              If grief after pregnancy loss is causing thoughts of self-harm or
              suicide, please reach out to the{" "}
              <strong style={{ color: "#c9a84c" }}>
                Samaritans (116 123, free, 24 hours)
              </strong>{" "}
              or{" "}
              <strong style={{ color: "#c9a84c" }}>
                Crisis Text Line (text SHOUT to 85258)
              </strong>
              . You can also attend your nearest A&amp;E or call 999. MEOK is
              not a crisis service. It is a daily companion for processing;
              if you are in crisis, please seek immediate human support.
            </p>
          </div>

          {/* FAQ Section */}
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: "700",
              color: "#f5f0e8",
              margin: "0 0 32px",
              letterSpacing: "-0.01em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ margin: "0 0 64px" }}>
            {[
              {
                q: "Why does grief after miscarriage feel so minimised?",
                a: "Miscarriage grief is a textbook example of disenfranchised grief: loss that society does not fully recognise or legitimise. The cultural norm of waiting until twelve weeks to announce a pregnancy means that most people lose a baby before anyone around them knew it existed, leaving them to grieve in private with no bereavement leave, no funeral, and no public acknowledgement. Well-meaning phrases like \u201cat least it was early\u201d or \u201cyou can try again\u201d communicate, however unintentionally, that the grief is disproportionate to the loss. It is not.",
              },
              {
                q: "How do partners grieve differently after miscarriage?",
                a: "Partners experience a double grief: they mourn the loss and simultaneously try to support the person who carried the pregnancy. Society frequently forgets that partners grieve too. This can create profound isolation, especially when partners feel pressure to appear strong. Research shows that partners are at higher risk of unacknowledged grief after miscarriage, which can manifest as withdrawal, overwork, or depression. Both people in a relationship deserve space and support.",
              },
              {
                q: "What professional support is available in the UK after miscarriage?",
                a: "Tommy\u2019s runs a free midwife helpline and extensive online resources. The Miscarriage Association offers a helpline, email support, and peer support groups. SANDS supports families affected by pregnancy loss, stillbirth, and neonatal death. Your GP can refer you to NHS counselling or a specialist bereavement midwife. MEOK AI can provide a private, always-available emotional companion alongside \u2014 never instead of \u2014 these professional services.",
              },
              {
                q: "Can AI really help with grief after pregnancy loss?",
                a: "AI cannot replace professional bereavement counselling or the human warmth of a specialist charity. What MEOK\u2019s Healer companion can offer is a private, non-judgmental space available at 3am when everyone else has moved on, that remembers your loss and never asks you to explain from the beginning again. It is a place to articulate the thoughts that feel too dark or too strange to say out loud, and to process in the gaps between human touchpoints of support.",
              },
              {
                q: "Does grief after miscarriage get easier with time?",
                a: "Grief after pregnancy loss does not follow a neat timeline and is rarely linear. Many people find it resurfaces at significant dates: the due date, anniversaries, subsequent pregnancies, or when others announce theirs. Subsequent pregnancy anxiety is extremely common after one or more losses. This is not abnormal; it is the ongoing, evolving nature of a real bereavement, and it deserves continuing support rather than a fixed end date.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(245,240,232,0.08)",
                  padding: "24px 0",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    margin: "0 0 12px",
                    lineHeight: "1.4",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    margin: "0",
                    color: "rgba(245,240,232,0.75)",
                    fontSize: "15px",
                    lineHeight: "1.75",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "16px",
              padding: "48px 40px",
              backgroundColor: "rgba(201,168,76,0.05)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#c9a84c",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: "0 0 16px",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3.5vw, 32px)",
                fontWeight: "800",
                color: "#f5f0e8",
                margin: "0 0 16px",
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
              }}
            >
              A companion that remembers what you have been through
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(245,240,232,0.7)",
                margin: "0 0 32px",
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: "1.65",
              }}
            >
              MEOK&apos;s Healer holds space for grief that deserves to be
              taken seriously. Sovereign memory. No platitudes. Available
              whenever the wave arrives &mdash; 3am included.
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
                  display: "inline-block",
                  backgroundColor: "#c9a84c",
                  color: "#0d0c18",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "15px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Meet Your Healer
              </Link>
              <Link
                href="/blog"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                More Articles
              </Link>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.35)",
                marginTop: "24px",
                marginBottom: "0",
              }}
            >
              MEOK is a companion app, not a clinical service. For professional
              support please contact the Miscarriage Association, Tommy&apos;s,
              SANDS, or your GP.
            </p>
          </div>
        </article>

        {/* ── Footer Nav ── */}
        <footer
          style={{
            borderTop: "1px solid rgba(245,240,232,0.08)",
            padding: "40px 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 24px",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            {[
              { label: "AI for Bereavement", href: "/blog/ai-for-bereavement" },
              { label: "AI for Grief Support", href: "/blog/ai-for-grief-support" },
              {
                label: "AI Support After Miscarriage",
                href: "/blog/ai-support-after-miscarriage",
              },
              { label: "AI for Fertility", href: "/blog/ai-for-fertility" },
              {
                label: "The Maternal Covenant",
                href: "/blog/the-maternal-covenant",
              },
              { label: "AI for New Parents", href: "/blog/ai-for-new-parents" },
              { label: "What Is MEOK", href: "/blog/what-is-meok" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(245,240,232,0.45)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p
            style={{
              marginTop: "32px",
              fontSize: "13px",
              color: "rgba(245,240,232,0.25)",
            }}
          >
            &copy; 2026 MEOK AI LABS. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
