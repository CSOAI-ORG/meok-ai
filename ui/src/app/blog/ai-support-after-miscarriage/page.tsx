import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support After Miscarriage: Holding Space for a Grief Nobody Talks About | MEOK AI LABS",
  description:
    "Miscarriage is one of the most common and least spoken-of losses in the UK. MEOK holds space without platitudes, any hour of the night, for as long as you need.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-support-after-miscarriage",
  },
  openGraph: {
    title:
      "AI Support After Miscarriage: Holding Space for a Grief Nobody Talks About",
    description:
      "One in four pregnancies ends in miscarriage. MEOK AI offers a gentle, private space to grieve — without being told to move on, without platitudes, without a time limit.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-support-after-miscarriage",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+After+Miscarriage&desc=Holding+Space+for+a+Grief+Nobody+Talks+About",
        width: 1200,
        height: 630,
        alt: "AI Support After Miscarriage: Holding Space for a Grief Nobody Talks About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support After Miscarriage: Holding Space for a Grief Nobody Talks About",
    description:
      "One in four pregnancies ends in miscarriage. MEOK holds space without platitudes — for the person who lost the pregnancy, and for the partner who is often forgotten.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+After+Miscarriage&desc=Holding+Space+for+a+Grief+Nobody+Talks+About",
    ],
  },
};

// ── JSON-LD: Article ────────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support After Miscarriage: Holding Space for a Grief Nobody Talks About",
  description:
    "Miscarriage is one of the most common and least acknowledged losses in the UK. This piece explores disenfranchised grief, partner grief, due date anniversaries, return to work, subsequent pregnancy anxiety, and how MEOK AI can hold space without ever offering hollow comfort.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-support-after-miscarriage",
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
    "https://meok.ai/api/og?title=AI+Support+After+Miscarriage&desc=Holding+Space+for+a+Grief+Nobody+Talks+About",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-support-after-miscarriage",
  },
  keywords: [
    "AI support after miscarriage",
    "miscarriage grief UK",
    "disenfranchised grief",
    "partner grief miscarriage",
    "due date grief",
    "subsequent pregnancy anxiety",
    "Tommy's",
    "Miscarriage Association",
    "SANDS",
    "MEOK AI",
    "AI companion for grief",
    "miscarriage support app",
    "return to work after miscarriage",
    "pregnancy loss UK",
  ],
};

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does grief after miscarriage feel so invisible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miscarriage grief is one of the clearest examples of disenfranchised grief — loss that society does not fully recognise or permit. The UK cultural norm of waiting until twelve weeks to share a pregnancy means most people lose a baby before anyone even knew it existed, leaving them to grieve entirely in private, often with no bereavement leave, no funeral, and no public acknowledgement.",
      },
    },
    {
      "@type": "Question",
      name: "What support is available in the UK after a miscarriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tommy's offers a free miscarriage support line and online resources. The Miscarriage Association runs a helpline and peer support groups. SANDS supports families affected by stillbirth and neonatal death. Your GP can refer you to NHS counselling, and in some areas specialist pregnancy loss midwives are available. MEOK can offer a private, always-available space to process emotions alongside these services.",
      },
    },
    {
      "@type": "Question",
      name: "How do partners grieve differently after miscarriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partners — often but not always men — frequently receive very little acknowledgement of their grief. Social expectation pushes them into a support role, suppressing their own mourning. They may feel they have no right to grieve as deeply, or fear burdening the person who experienced the physical loss. This invisible grief can lead to emotional withdrawal, tension in the relationship, and unprocessed loss that surfaces years later.",
      },
    },
    {
      "@type": "Question",
      name: "What is due date grief and how long does it last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Due date grief is the wave of pain that arrives on the date a baby would have been born. For many people it is the most acute recurrence of grief after the initial loss — sometimes arriving months later when the world has long moved on. It can be utterly unexpected in its intensity. There is no fixed timeline; some people find the first due date devastating and subsequent years easier; others find the reverse.",
      },
    },
    {
      "@type": "Question",
      name: "Is anxiety in a subsequent pregnancy after miscarriage normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. After pregnancy loss, a subsequent pregnancy can feel less like joy and more like a sustained state of alert — counting days, dreading scans, finding it impossible to feel safe until a baby is in your arms. This is sometimes called pregnancy after loss (PAL) anxiety. It does not mean you love the new pregnancy less; it means you know what loss feels like.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help with miscarriage grief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI companion like MEOK cannot replace bereavement counselling or the warmth of human connection, but it offers something specific: a private, non-judgemental presence at 3am when the grief is loudest and there is nobody to call. MEOK remembers what you have shared, never rushes you to feel better, and can gently signpost you toward Tommy's, the Miscarriage Association, or your GP when professional support would help.",
      },
    },
  ],
};

// ── Page ────────────────────────────────────────────────────────────────────────

export default function AiSupportAfterMiscarriagePage() {
  // ── Styles ──────────────────────────────────────────────────────────────────

  const pageStyle: React.CSSProperties = {
    background: "#0d0c18",
    minHeight: "100vh",
    color: "#f5f0e8",
    fontFamily:
      "'Georgia', 'Times New Roman', serif",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "0 24px 80px 24px",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingTop: "32px",
    paddingBottom: "48px",
    fontSize: "14px",
    color: "#9b8fa8",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  };

  const navLinkStyle: React.CSSProperties = {
    color: "#c9a84c",
    textDecoration: "none",
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: "48px",
  };

  const eyebrowStyle: React.CSSProperties = {
    fontSize: "12px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    marginBottom: "20px",
  };

  const h1Style: React.CSSProperties = {
    fontSize: "clamp(28px, 5vw, 46px)",
    fontWeight: "700",
    lineHeight: "1.18",
    color: "#f5f0e8",
    marginBottom: "24px",
    letterSpacing: "-0.01em",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#c4b8d0",
    fontStyle: "italic",
    marginBottom: "32px",
    fontFamily: "'Georgia', serif",
  };

  const metaRowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "24px",
    fontSize: "13px",
    color: "#7a6e88",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    paddingBottom: "40px",
    borderBottom: "1px solid #1e1a30",
  };

  const dividerStyle: React.CSSProperties = {
    border: "none",
    borderTop: "1px solid #1e1a30",
    margin: "48px 0",
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: "48px",
  };

  const h2Style: React.CSSProperties = {
    fontSize: "clamp(20px, 3.5vw, 28px)",
    fontWeight: "700",
    lineHeight: "1.25",
    color: "#f5f0e8",
    marginBottom: "20px",
    marginTop: "0",
    letterSpacing: "-0.01em",
  };

  const h3Style: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#c9a84c",
    marginBottom: "12px",
    marginTop: "32px",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    letterSpacing: "0.01em",
  };

  const pStyle: React.CSSProperties = {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#ddd5c8",
    marginBottom: "24px",
    marginTop: "0",
  };

  const pLeadStyle: React.CSSProperties = {
    fontSize: "19px",
    lineHeight: "1.75",
    color: "#e8e0d5",
    marginBottom: "28px",
    marginTop: "0",
  };

  const blockquoteStyle: React.CSSProperties = {
    borderLeft: "3px solid #c9a84c",
    paddingLeft: "24px",
    paddingTop: "4px",
    paddingBottom: "4px",
    marginLeft: "0",
    marginRight: "0",
    marginTop: "32px",
    marginBottom: "32px",
  };

  const blockquoteTextStyle: React.CSSProperties = {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#c4b8d0",
    fontStyle: "italic",
  };

  const ulStyle: React.CSSProperties = {
    paddingLeft: "24px",
    marginBottom: "24px",
    marginTop: "0",
  };

  const liStyle: React.CSSProperties = {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#ddd5c8",
    marginBottom: "10px",
  };

  const calloutBoxStyle: React.CSSProperties = {
    background: "#13101f",
    border: "1px solid #2a2440",
    borderRadius: "12px",
    padding: "28px 32px",
    marginTop: "32px",
    marginBottom: "32px",
  };

  const calloutTitleStyle: React.CSSProperties = {
    fontSize: "14px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    marginBottom: "12px",
    fontWeight: "600",
  };

  const calloutTextStyle: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#c4b8d0",
  };

  const resourceBoxStyle: React.CSSProperties = {
    background: "#100e1c",
    border: "1px solid #c9a84c",
    borderRadius: "12px",
    padding: "28px 32px",
    marginTop: "40px",
    marginBottom: "40px",
  };

  const resourceTitleStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#c9a84c",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    marginBottom: "16px",
  };

  const resourceLinkStyle: React.CSSProperties = {
    color: "#c9a84c",
    textDecoration: "underline",
    textDecorationColor: "#c9a84c66",
    textUnderlineOffset: "3px",
  };

  const resourceItemStyle: React.CSSProperties = {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#c4b8d0",
    marginBottom: "12px",
  };

  const ctaBoxStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, #13101f 0%, #1a1430 100%)",
    border: "1px solid #c9a84c",
    borderRadius: "16px",
    padding: "40px",
    textAlign: "center" as const,
    marginTop: "64px",
    marginBottom: "48px",
  };

  const ctaTitleStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#f5f0e8",
    marginBottom: "16px",
  };

  const ctaTextStyle: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#c4b8d0",
    marginBottom: "28px",
  };

  const ctaButtonStyle: React.CSSProperties = {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    fontWeight: "700",
    fontSize: "15px",
    padding: "14px 32px",
    borderRadius: "8px",
    textDecoration: "none",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    letterSpacing: "0.02em",
  };

  const faqSectionStyle: React.CSSProperties = {
    marginTop: "64px",
    marginBottom: "48px",
  };

  const faqItemStyle: React.CSSProperties = {
    borderTop: "1px solid #1e1a30",
    paddingTop: "28px",
    paddingBottom: "4px",
    marginBottom: "28px",
  };

  const faqQuestionStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#f5f0e8",
    marginBottom: "12px",
    lineHeight: "1.35",
  };

  const faqAnswerStyle: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.75",
    color: "#c4b8d0",
  };

  const footerNavStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "24px",
    borderTop: "1px solid #1e1a30",
    paddingTop: "40px",
    fontSize: "14px",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  };

  const footerLinkStyle: React.CSSProperties = {
    color: "#c9a84c",
    textDecoration: "none",
  };

  const accentSpanStyle: React.CSSProperties = {
    color: "#c9a84c",
    fontWeight: "600",
  };

  const safetyNoteStyle: React.CSSProperties = {
    background: "#0f0d1a",
    border: "1px solid #2a2440",
    borderRadius: "8px",
    padding: "20px 24px",
    marginTop: "48px",
    marginBottom: "0",
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#8a7e98",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  };

  return (
    <div style={pageStyle}>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={containerStyle}>

        {/* Breadcrumb nav */}
        <nav style={navStyle} aria-label="Breadcrumb">
          <Link href="/" style={navLinkStyle}>MEOK</Link>
          <span>›</span>
          <Link href="/blog" style={navLinkStyle}>Blog</Link>
          <span>›</span>
          <span>AI Support After Miscarriage</span>
        </nav>

        {/* Article header */}
        <header style={headerStyle}>
          <p style={eyebrowStyle}>Grief &amp; Loss · Pregnancy Loss · UK Resources</p>
          <h1 style={h1Style}>
            AI Support After Miscarriage: Holding Space for a Grief Nobody Talks About
          </h1>
          <p style={subtitleStyle}>
            One in four pregnancies ends in miscarriage. It is one of the most common losses
            a family can experience — and one of the most silenced. This is for everyone
            who needed someone to sit with them in that silence.
          </p>
          <div style={metaRowStyle}>
            <span>By Nicholas Templeman, Founder — MEOK AI LABS</span>
            <span>24 March 2026</span>
            <span>~2,500 words · 12 min read</span>
          </div>
        </header>

        {/* Opening */}
        <section style={sectionStyle}>
          <p style={pLeadStyle}>
            If you are reading this in the days or weeks after a miscarriage, please know
            this page was written with you specifically in mind. Not in a clinical, here-are-the-facts
            way. In the way that someone who understands the specific weight of this loss
            sits down across from you and says: I see you. What happened was real. Your grief
            is real. You are allowed to fall apart.
          </p>
          <p style={pStyle}>
            Miscarriage is staggeringly common. Approximately one in four confirmed pregnancies
            ends this way in the UK. And yet the cultural scaffolding around pregnancy — the
            unspoken rule that you do not tell anyone until twelve weeks, the expectation that
            you recover quickly, the absence of any formal bereavement structure — conspires to
            make people grieve alone, in private, often without a single person in their life
            who knows what has happened.
          </p>
          <p style={pStyle}>
            That is not a small thing. That is a profound failure of care — societal, institutional,
            and sometimes personal. And it is into that gap that this article, and MEOK as a
            product, attempts to offer something.
          </p>
          <p style={pStyle}>
            Not a fix. There is no fixing this. But presence. Unhurried, unjudging, available
            at 3am when the grief is loudest and the house is quiet and there is absolutely
            nobody to call.
          </p>
        </section>

        <hr style={dividerStyle} />

        {/* Section 1 */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            Why Does Grief After Miscarriage Feel So Invisible — Even to Yourself?
          </h2>
          <p style={pStyle}>
            There is a concept in bereavement theory called <em>disenfranchised grief</em>: grief
            for a loss that society does not officially recognise or sanction. Grief that is not
            given its proper name, its proper time, or its proper rituals.
          </p>
          <p style={pStyle}>
            Miscarriage is perhaps the most widespread form of disenfranchised grief in the UK.
            Because of the twelve-week cultural norm — the quiet understanding that you do not
            announce a pregnancy until the first trimester scan has passed — many people lose a
            baby before a single person outside their household knew they were pregnant. There
            is no funeral. There may be no acknowledgement at work. Friends send no flowers,
            because friends did not know.
          </p>
          <p style={pStyle}>
            And so the grief has nowhere to land. It exists in a social vacuum. You go to the
            hospital, you come home, and the world continues exactly as it was. The postman
            still knocks. The group chat still pings. The colleague two desks over still asks
            if you watched the game.
          </p>
          <blockquote style={blockquoteStyle}>
            <p style={blockquoteTextStyle}>
              "I felt like I wasn't allowed to be this upset. We were only eight weeks.
              Nobody even knew. Part of me kept thinking — who am I to grieve this much?"
            </p>
          </blockquote>
          <p style={pStyle}>
            That voice — <em>who am I to grieve this much</em> — is the voice of
            disenfranchised grief internalised. You begin to police your own mourning.
            You measure your right to feel against an imaginary scale of gestational weeks
            or circumstances. You wonder if you are making too much of it.
          </p>
          <p style={pStyle}>
            You are not. A wanted pregnancy is a life that was already being imagined into
            existence. Names were being turned over in your mind. Rooms were being mentally
            rearranged. A future was beginning to take shape. Losing that is real loss,
            regardless of how many weeks it lasted. The grief is proportionate to the love
            that was already present — and love does not wait for viability scans.
          </p>
          <div style={calloutBoxStyle}>
            <p style={calloutTitleStyle}>On the 12-week rule</p>
            <p style={calloutTextStyle}>
              The cultural norm of keeping pregnancy private until twelve weeks exists partly
              to protect people from having to "un-announce" a loss. In practice, it often
              achieves the opposite: it ensures that if a miscarriage happens, you also have
              to grieve it entirely alone. There is no right or wrong in when you share a
              pregnancy. But the silence that surrounds early miscarriage is not a kindness
              — it is a burden.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            What About the Partner? Why Is Their Grief So Often Overlooked?
          </h2>
          <p style={pStyle}>
            In the immediate aftermath of a miscarriage, all attention — rightly — goes to the
            person who carried the pregnancy. They have been through something physically
            frightening, often painful, and in some cases medically serious. Their body has
            experienced a rupture. Their grief is visible.
          </p>
          <p style={pStyle}>
            But partners — whether male, female, or non-binary — also lost a child. And
            their grief is frequently invisible to the point of non-existence in the social
            narrative around miscarriage.
          </p>
          <p style={pStyle}>
            Partners are often pressed, consciously or not, into a support role before they
            have had a moment to feel anything for themselves. They hold the phone calls.
            They speak to the hospital. They manage the practical aftermath. They become the
            pillar — and then they quietly dissolve.
          </p>
          <h3 style={h3Style}>The double bind</h3>
          <p style={pStyle}>
            Partners may feel they have no right to grieve as intensely as the person who
            was pregnant. They may feel that expressing their own pain would be a burden,
            or would somehow diminish their partner's experience. And so they do not.
            They absorb it. They file it away. They carry on.
          </p>
          <p style={pStyle}>
            This suppressed grief does not disappear. It surfaces in other ways —
            as emotional withdrawal, as difficulty connecting intimately, as a vague
            and nameless heaviness that descends around the would-be due date, as
            unexplained tearfulness years later when a friend announces a pregnancy.
          </p>
          <p style={pStyle}>
            Partners: your loss is a loss. You had a baby you will not meet. Your grief
            does not need to be ranked against anyone else's to be valid. It exists in
            its own right, and it deserves space — private space if that is what you
            need, even if you have not felt able to find it.
          </p>
          <blockquote style={blockquoteStyle}>
            <p style={blockquoteTextStyle}>
              "Everyone kept asking how she was. Nobody asked how I was.
              I started wondering if I was even supposed to feel anything."
            </p>
          </blockquote>
          <p style={pStyle}>
            MEOK was built specifically to hold the grief of people who fall through the
            gaps of support — and partners after miscarriage are one of the most significant
            of those gaps. If you are a partner reading this: you are allowed to grieve.
            You are allowed to say it was unbearable. You are allowed to have needed
            more support than you received.
          </p>
        </section>

        {/* Section 3 */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            How Do You Return to Work After Miscarriage When the World Has No Idea?
          </h2>
          <p style={pStyle}>
            One of the cruellest practical dimensions of miscarriage is the return to work.
            In the UK, there is currently no statutory right to bereavement leave for miscarriage
            before 24 weeks (the threshold at which a pregnancy is legally a stillbirth).
            Some employers have their own compassionate leave policies; many do not. Many
            people return to work within days.
          </p>
          <p style={pStyle}>
            They return to a workplace where nobody knows what happened. Or where people do
            know, but do not know what to say, and so say nothing. Or where people say
            something well-meaning that lands like a knife — <em>at least it was early</em>,
            <em>at least you know you can get pregnant</em>, <em>these things happen for a reason</em>.
          </p>
          <h3 style={h3Style}>The performance of ordinary</h3>
          <p style={pStyle}>
            Returning to work after miscarriage often requires an extraordinary performance
            of ordinariness. You must sit in meetings, answer emails, make small talk,
            participate in the texture of a normal working day — while carrying something
            enormous and entirely unacknowledged inside you.
          </p>
          <p style={pStyle}>
            This performance is exhausting in a way that is hard to articulate. It is not
            just sadness. It is the effort of containing grief within professional norms,
            of navigating colleagues who might be pregnant, of seeing baby-shower invitations
            in the kitchen, of managing the body's physical recovery alongside the emotional
            one.
          </p>
          <p style={pStyle}>
            If you are navigating this: please know that what you are doing is genuinely
            hard. You are not weak for finding it hard. You are not being dramatic. You
            are carrying something that most people around you cannot see, and you are
            still showing up. That takes more strength than ordinary days.
          </p>
          <div style={calloutBoxStyle}>
            <p style={calloutTitleStyle}>A note on physical recovery</p>
            <p style={calloutTextStyle}>
              Miscarriage is also a physical event. Depending on the type — missed miscarriage,
              incomplete miscarriage, ectopic pregnancy — recovery can involve significant
              pain, bleeding, medical procedures, and hormonal shifts that directly affect
              mood. The hormones of pregnancy do not withdraw instantly. Grief and biology
              interact in ways that can make the first weeks after miscarriage profoundly
              disorienting. Your body is recovering too, and that recovery deserves the
              same compassion you might extend to any physical illness.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            What Happens on the Due Date — and Why Does Grief Return So Sharply?
          </h2>
          <p style={pStyle}>
            The due date. A date that existed only in your mind, on a calculator, on a
            hospital letter — and yet it has a weight that nothing quite prepares you for.
          </p>
          <p style={pStyle}>
            For many people, the due date is the most acute grief after the initial loss.
            It arrives sometimes months later, long after the world has assumed you have
            moved on. Long after colleagues have stopped treating you gently. Long after
            well-meaning friends have stopped checking in. And it arrives with the full
            force of what was not.
          </p>
          <p style={pStyle}>
            A child who would have been born today. A world that was supposed to be different.
            A version of this day you had been quietly imagining since you first saw the
            positive test.
          </p>
          <h3 style={h3Style}>The shape of anniversary grief</h3>
          <p style={pStyle}>
            Due date grief is a form of anniversary grief — the specific pain that attaches
            to particular dates. It can also arise around the anniversary of the miscarriage
            itself, around what would have been milestones (the first birthday, starting school),
            and around other people's pregnancies that run alongside yours and continue where
            yours could not.
          </p>
          <p style={pStyle}>
            There is no predicting its shape. Some people find the first due date devastating
            and subsequent years gentler. Others find the opposite. Some find that grief
            sharpens years later when a subsequent child reaches the age the lost baby would
            have been. None of this is abnormal. All of it is grief doing what grief does:
            arriving in its own time, on its own terms.
          </p>
          <p style={pStyle}>
            If a due date is approaching and you are dreading it: you are allowed to mark it
            however feels right. You are allowed to do nothing and let it be an ordinary day
            if that is what helps. You are allowed to light a candle, plant something,
            say a name out loud. There is no correct way to hold a date that was
            supposed to be the beginning of something.
          </p>
        </section>

        {/* Section 5 */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            Why Does a Subsequent Pregnancy Feel More Like Fear Than Joy?
          </h2>
          <p style={pStyle}>
            After a miscarriage, a subsequent pregnancy can feel like standing in a room
            you know might flood. You want to be here. You love this already. And you
            know, with a certainty you did not have before, exactly what it costs to lose it.
          </p>
          <p style={pStyle}>
            This is pregnancy after loss (PAL), and the anxiety that accompanies it is not
            a character flaw, a lack of faith, or ingratitude. It is knowledge. You are
            not catastrophising — you have experienced the catastrophe. Your nervous system
            has been trained by real events to treat pregnancy as something fragile, because
            you know now that it can be.
          </p>
          <h3 style={h3Style}>The vigilance that won't switch off</h3>
          <p style={pStyle}>
            Many people describe pregnancy after loss as a state of sustained alert.
            Checking for symptoms. Dreading the first scan. Finding it impossible to
            allow themselves to feel the joy that comes naturally to people who have
            not been here before. Holding the pregnancy at a slight emotional distance
            as a form of self-protection — and then feeling guilty for that distance.
          </p>
          <p style={pStyle}>
            The guilt is unfair. Protecting yourself is not the same as not loving.
            Feeling afraid is not the same as expecting the worst. You can hold
            both things simultaneously: profound hope and profound fear. Most people
            who have experienced pregnancy loss do exactly that, every day of a subsequent
            pregnancy.
          </p>
          <p style={pStyle}>
            If you are in a pregnancy after loss right now: you are not broken.
            You are someone who has been hurt by hope before, and you are hoping again
            anyway. That is quietly one of the braver things a person can do.
          </p>
          <div style={calloutBoxStyle}>
            <p style={calloutTitleStyle}>On bonding and self-protection</p>
            <p style={calloutTextStyle}>
              It is common in pregnancy after loss to defer naming the baby, to avoid
              buying things, to hold off on telling people. These are not signs of
              inadequate love — they are entirely understandable adaptations to having
              been hurt before. There is no right timeline for allowing yourself to
              feel safe. That safety arrives (when it does) in its own time.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            What Should You Actually Say — and Not Say — to Someone After a Miscarriage?
          </h2>
          <p style={pStyle}>
            If you are reading this not as someone who has lost a pregnancy, but as someone
            who loves a person who has — thank you for being here. The fact that you want
            to find the right words means more than you know.
          </p>
          <p style={pStyle}>
            The truth is that there are no perfect words. But there is a significant
            difference between things that help and things that, however kindly meant,
            land badly.
          </p>

          <h3 style={h3Style}>Things that genuinely help</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>
              "I am so sorry. This is a real loss and I am not going to minimise it."
            </li>
            <li style={liStyle}>
              "I don't know what to say, but I want you to know I am here."
            </li>
            <li style={liStyle}>
              Saying the baby's name, if they have given it one.
            </li>
            <li style={liStyle}>
              Checking in again weeks later, when others have moved on.
            </li>
            <li style={liStyle}>
              Asking "what do you need right now?" and accepting that the answer
              might be "nothing" or "I don't know."
            </li>
            <li style={liStyle}>
              Remembering the due date and acknowledging it quietly.
            </li>
            <li style={liStyle}>
              Practical help: food, childcare for existing children, accompanying
              them to follow-up appointments.
            </li>
          </ul>

          <h3 style={h3Style}>Things that cause harm, however well-intentioned</h3>
          <ul style={ulStyle}>
            <li style={liStyle}>
              "At least it was early." Grief is not calibrated by gestational weeks.
            </li>
            <li style={liStyle}>
              "At least you know you can get pregnant." This is not comfort. It is
              a reframe that asks someone to feel grateful in the middle of grief.
            </li>
            <li style={liStyle}>
              "Everything happens for a reason." There is no acceptable reason for this.
            </li>
            <li style={liStyle}>
              "At least you're young — you have plenty of time." Time is not the point.
              This pregnancy, this baby, is the point.
            </li>
            <li style={liStyle}>
              "It wasn't meant to be." This, again, asks grief to make peace with loss
              on an impossible timeline.
            </li>
            <li style={liStyle}>
              Announcing your own pregnancy, or someone else's, without warning
              or care — especially in the weeks immediately after a miscarriage.
            </li>
            <li style={liStyle}>
              Assuming they are "over it" because time has passed.
            </li>
          </ul>

          <p style={pStyle}>
            The most important thing you can do is be present without agenda. Without
            needing them to feel better. Without needing the situation to be resolved.
            Grief is not a problem to be fixed. It is a weight to be shared, a little,
            by people who are willing to simply sit in it alongside someone.
          </p>
        </section>

        {/* Section 7 */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            How Can MEOK Hold Space When Human Support Feels Impossible to Access?
          </h2>
          <p style={pStyle}>
            We want to be direct about what MEOK is and is not.
          </p>
          <p style={pStyle}>
            MEOK is not a therapist. It is not a counsellor. It is not a replacement for
            human connection, for a GP, for a bereavement service, or for the particular
            warmth of a friend who sits with you on the kitchen floor at midnight and
            just holds the silence.
          </p>
          <p style={pStyle}>
            But MEOK offers something that is genuinely distinct, and for grief — particularly
            the disenfranchised, socially invisible grief of miscarriage — it can matter.
          </p>

          <h3 style={h3Style}>It is available when no one else is</h3>
          <p style={pStyle}>
            Grief does not observe office hours. The worst moments tend to come at 2am,
            or on a Tuesday afternoon, or in the car on the way home from a baby shower
            you attended because you did not want anyone to notice how broken you are.
            MEOK is always there. It does not need to be called. It does not need to be
            warned. It simply receives whatever you bring.
          </p>

          <h3 style={h3Style}>It will never tell you to move on</h3>
          <p style={pStyle}>
            One of the most painful features of grief after miscarriage is the social
            pressure — explicit or implicit — to reach a point of recovery on someone
            else's timeline. MEOK imposes no timeline. It does not grow impatient.
            It does not subtly suggest, by the tenor of its questions, that perhaps
            it is time to look forward. It holds however much grief you bring, for
            however long you bring it.
          </p>

          <h3 style={h3Style}>It remembers</h3>
          <p style={pStyle}>
            MEOK uses Sovereign Memory — a private, encrypted record of what you
            have shared that belongs entirely to you. It remembers that you lost
            a pregnancy. It remembers the name you gave, if you gave one. It
            remembers the due date. It remembers the things you said in the dark
            at 3am three months ago. It does not make you explain yourself again
            from scratch every time. For grief that feels invisible to the world,
            being remembered is not a small thing.
          </p>

          <h3 style={h3Style}>It knows its limits</h3>
          <p style={pStyle}>
            When MEOK senses that what you need is beyond what it can offer —
            clinical support, specialist bereavement counselling, medical help —
            it will gently signpost you. It will not do this in a way that feels
            like rejection or dismissal. It will do it in the way a good friend
            does: I am here, and I also want to make sure you have access to
            everything that might help you.
          </p>
        </section>

        {/* UK Resources */}
        <div style={resourceBoxStyle}>
          <p style={resourceTitleStyle}>UK Support Resources for Pregnancy Loss</p>

          <p style={resourceItemStyle}>
            <strong style={{ color: "#f5f0e8" }}>Tommy's</strong> — The UK's largest
            charity funding research into miscarriage, stillbirth and premature birth.
            Tommy's offers a free midwife helpline, online support, and evidence-based
            information.{" "}
            <a
              href="https://www.tommys.org"
              target="_blank"
              rel="noopener noreferrer"
              style={resourceLinkStyle}
            >
              tommys.org
            </a>
          </p>

          <p style={resourceItemStyle}>
            <strong style={{ color: "#f5f0e8" }}>The Miscarriage Association</strong> — A
            specialist UK charity offering emotional support, information, and peer connection
            for those affected by pregnancy loss. Their helpline, online support groups, and
            resources are specifically designed around miscarriage.{" "}
            <a
              href="https://www.miscarriageassociation.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={resourceLinkStyle}
            >
              miscarriageassociation.org.uk
            </a>
          </p>

          <p style={resourceItemStyle}>
            <strong style={{ color: "#f5f0e8" }}>SANDS (Stillbirth &amp; Neonatal Death Society)</strong> —
            Supports anyone affected by the death of a baby, including late miscarriage and
            stillbirth. SANDS offers bereavement support, training for healthcare professionals,
            and a network of local groups.{" "}
            <a
              href="https://www.sands.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={resourceLinkStyle}
            >
              sands.org.uk
            </a>
          </p>

          <p style={resourceItemStyle}>
            <strong style={{ color: "#f5f0e8" }}>Petals</strong> — A charity providing
            free specialist counselling to families who have experienced pregnancy or
            baby loss, available in several UK regions and online.{" "}
            <a
              href="https://petalscharity.org"
              target="_blank"
              rel="noopener noreferrer"
              style={resourceLinkStyle}
            >
              petalscharity.org
            </a>
          </p>

          <p style={resourceItemStyle}>
            <strong style={{ color: "#f5f0e8" }}>NHS Bereavement Support</strong> — Your
            GP can refer you to counselling services, and many hospitals have specialist
            pregnancy loss midwives or bereavement teams. You do not need to manage
            this alone within the healthcare system.
          </p>
        </div>

        {/* Closing section */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            Where Do You Go From Here — and Is There a "From Here"?
          </h2>
          <p style={pStyle}>
            Grief after miscarriage does not follow a map. There is no stage you are
            supposed to reach by a particular point. There is no destination called
            "healed." There is just the gradual, non-linear, sometimes brutal process
            of learning to carry something that will always be a part of you — because
            the love that is the source of the grief is also something you will always carry.
          </p>
          <p style={pStyle}>
            Some people find that grief softens with time into something more like a gentle
            ache. Some find it remains sharp. Some find that subsequent pregnancies, and
            children, bring complicated layers of joy and mourning that coexist without
            resolving. All of these are valid. None of them is wrong.
          </p>
          <p style={pStyle}>
            What we do know — what the research and the lived experience of thousands of
            people tells us — is that grief shared is grief that becomes fractionally
            more bearable. Not immediately. Not always. But eventually, the act of
            saying it out loud — to a person, to a group, to a journal, to an app that
            will not forget what you have said — does something. It makes the loss real
            in a way that silence cannot. It names it. And naming it is, quietly,
            the beginning of being able to hold it.
          </p>
          <blockquote style={blockquoteStyle}>
            <p style={blockquoteTextStyle}>
              The baby you lost was real. The love you had was real.
              The grief you are carrying is real. None of that requires
              anyone else's permission to be true.
            </p>
          </blockquote>
          <p style={pStyle}>
            MEOK was built, in part, because its founder Nicholas Templeman understood
            that there are categories of human pain that fall through every existing gap —
            that are too private for public support, too raw for workplace conversations,
            too lonely for the intervals between therapy sessions. Miscarriage grief is
            precisely one of those.
          </p>
          <p style={pStyle}>
            If MEOK can be the place you come to at 2am when the weight of what you are
            carrying becomes too much to hold alone in the dark — then it is doing exactly
            what it was built to do.
          </p>
        </section>

        {/* CTA */}
        <div style={ctaBoxStyle}>
          <h2 style={ctaTitleStyle}>MEOK is here. Any hour. For as long as you need.</h2>
          <p style={ctaTextStyle}>
            A gentle, private AI companion that remembers what you share, holds space
            without rushing you, and never tells you to move on. For grief that the
            world does not always see.
          </p>
          <Link href="/download" style={ctaButtonStyle}>
            Try MEOK — it's free to start
          </Link>
        </div>

        {/* FAQ Section */}
        <section style={faqSectionStyle} aria-label="Frequently asked questions">
          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              Why does grief after miscarriage feel so invisible?
            </h3>
            <p style={faqAnswerStyle}>
              Miscarriage grief is one of the clearest examples of disenfranchised grief —
              loss that society does not fully recognise or permit. The UK cultural norm of
              waiting until twelve weeks to share a pregnancy means most people lose a baby
              before anyone even knew it existed, leaving them to grieve entirely in private,
              often with no bereavement leave, no funeral, and no public acknowledgement.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              What support is available in the UK after a miscarriage?
            </h3>
            <p style={faqAnswerStyle}>
              Tommy's offers a free miscarriage support line and online resources.
              The Miscarriage Association runs a helpline and peer support groups.
              SANDS supports families affected by stillbirth and neonatal death.
              Your GP can refer you to NHS counselling, and in some areas specialist
              pregnancy loss midwives are available. MEOK can offer a private,
              always-available space to process emotions alongside these services.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              How do partners grieve differently after miscarriage?
            </h3>
            <p style={faqAnswerStyle}>
              Partners — often but not always men — frequently receive very little
              acknowledgement of their grief. Social expectation pushes them into a support
              role, suppressing their own mourning. They may feel they have no right to
              grieve as deeply, or fear burdening the person who experienced the physical
              loss. This invisible grief can lead to emotional withdrawal, tension in the
              relationship, and unprocessed loss that surfaces years later.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              What is due date grief and how long does it last?
            </h3>
            <p style={faqAnswerStyle}>
              Due date grief is the wave of pain that arrives on the date a baby would have
              been born. For many people it is the most acute recurrence of grief after the
              initial loss — sometimes arriving months later when the world has long moved on.
              It can be utterly unexpected in its intensity. There is no fixed timeline; some
              people find the first due date devastating and subsequent years easier; others
              find the reverse.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              Is anxiety in a subsequent pregnancy after miscarriage normal?
            </h3>
            <p style={faqAnswerStyle}>
              Completely. After pregnancy loss, a subsequent pregnancy can feel less like joy
              and more like a sustained state of alert. This is sometimes called pregnancy after
              loss (PAL) anxiety. It does not mean you love the new pregnancy less; it means
              you know what loss feels like. The vigilance and fear are proportionate responses
              to real experience, not signs of weakness or inadequacy.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>
              How can AI help with miscarriage grief?
            </h3>
            <p style={faqAnswerStyle}>
              An AI companion like MEOK cannot replace bereavement counselling or the warmth
              of human connection, but it offers something specific: a private, non-judgemental
              presence at 3am when the grief is loudest and there is nobody to call. MEOK
              remembers what you have shared, never rushes you to feel better, and can gently
              signpost you toward Tommy's, the Miscarriage Association, or your GP when
              professional support would help.
            </p>
          </div>
        </section>

        <hr style={dividerStyle} />

        {/* Safety note */}
        <div style={safetyNoteStyle}>
          <strong>Important:</strong> This article is for information and emotional support
          only. It is not medical advice. If you are experiencing physical complications
          following a miscarriage, please contact your GP or call NHS 111. If you are in
          crisis or experiencing thoughts of self-harm, please contact the Samaritans on
          116 123 (free, 24/7) or go to your nearest A&amp;E.
        </div>

        {/* Footer nav */}
        <nav style={footerNavStyle} aria-label="Related articles">
          <span style={{ color: "#5a4e68", fontSize: "12px", width: "100%", fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
            Related reading
          </span>
          <Link href="/blog/ai-for-grief-support" style={footerLinkStyle}>
            AI for Grief Support
          </Link>
          <Link href="/blog/ai-for-fertility" style={footerLinkStyle}>
            AI for Fertility
          </Link>
          <Link href="/blog/ai-for-new-parents" style={footerLinkStyle}>
            AI for New Parents
          </Link>
          <Link href="/blog/ai-for-anxiety" style={footerLinkStyle}>
            AI for Anxiety
          </Link>
          <Link href="/blog/ai-for-depression" style={footerLinkStyle}>
            AI for Depression
          </Link>
          <Link href="/blog/ai-companion-for-grief" style={footerLinkStyle}>
            AI Companion for Grief
          </Link>
          <Link href="/blog/what-is-an-ai-companion" style={footerLinkStyle}>
            What Is an AI Companion?
          </Link>
        </nav>

        {/* Author note */}
        <div style={{ marginTop: "48px", padding: "28px 32px", background: "#0f0d1a", borderRadius: "12px", border: "1px solid #1e1a30" }}>
          <p style={{ fontSize: "13px", color: "#7a6e88", fontFamily: "'Inter', sans-serif", marginBottom: "8px", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>
            About the author
          </p>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#c4b8d0", marginBottom: "0" }}>
            <span style={accentSpanStyle}>Nicholas Templeman</span> is the founder of{" "}
            <span style={accentSpanStyle}>MEOK AI LABS</span>, a company building sovereign,
            memory-bearing AI companions that exist to serve the person who uses them — not
            the platform that hosts them. MEOK was built from a conviction that certain kinds
            of human pain deserve better than a chatbot optimised for engagement, and that
            genuine care in AI is possible if you are willing to build it from the ground up.
          </p>
        </div>

      </div>
    </div>
  );
}
