import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Infertility: Companionship Through the Most Invisible Grief | MEOK AI LABS",
  description:
    "Infertility treatment is physically gruelling and emotionally devastating, yet largely invisible to those not experiencing it. MEOK\u2019s sovereign AI provides consistent, private support throughout the IVF journey and beyond.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-infertility" },
  openGraph: {
    title:
      "AI for Infertility: Companionship Through the Most Invisible Grief",
    description:
      "1 in 7 UK couples face infertility. The emotional toll of IVF is immense yet largely unseen. MEOK\u2019s Healer companion holds your full journey \u2014 every round, every grief, every hope \u2014 with complete privacy.",
    type: "article",
    publishedTime: "2026-03-25",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-infertility",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+for+Infertility&desc=Companionship+Through+the+Most+Invisible+Grief",
        width: 1200,
        height: 630,
        alt: "AI for Infertility: Companionship Through the Most Invisible Grief | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Infertility: Companionship Through the Most Invisible Grief",
    description:
      "1 in 7 UK couples face infertility. MEOK\u2019s sovereign AI holds your whole IVF journey \u2014 every round, every grief, every hope \u2014 with complete privacy.",
    images: [
      "https://meok.ai/api/og?title=AI+for+Infertility&desc=Companionship+Through+the+Most+Invisible+Grief",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Infertility: Companionship Through the Most Invisible Grief",
  description:
    "Infertility treatment is physically gruelling and emotionally devastating, yet largely invisible to those not experiencing it. MEOK\u2019s sovereign AI provides consistent, private support throughout the IVF journey and beyond.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-infertility",
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
    "https://meok.ai/api/og?title=AI+for+Infertility&desc=Companionship+Through+the+Most+Invisible+Grief",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-infertility",
  },
  keywords: [
    "AI for infertility",
    "IVF emotional support UK",
    "AI companion IVF",
    "two-week wait anxiety",
    "infertility grief",
    "failed IVF cycle support",
    "MEOK Healer archetype",
    "sovereign AI fertility data",
    "childless not by choice",
    "donor conception AI support",
    "Fertility Network UK",
    "infertility relationship strain",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK give me medical advice about my IVF treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical provider and cannot advise on protocols, medications, or clinical decisions. It is an emotional support companion. Always follow guidance from your fertility clinic and, for peer support, connect with Fertility Network UK at fertilitynetworkuk.org.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK share my fertility journey data with my clinic or insurer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK operates on a sovereign memory model. Your conversations, cycle logs, and emotional records belong exclusively to you. They are never sold, shared with clinics, insurers, or used to train AI models. You control your data entirely.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help during the two-week wait?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK\u2019s Healer archetype provides daily check-ins, grounding exercises, and a private space to voice fears without judgment. It remembers where you are in your cycle so you never have to re-explain context. It will not offer false reassurance or tell you to just relax.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK support me through a failed IVF cycle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A failed cycle is a bereavement, and MEOK treats it as one. The Healer companion holds space for grief without rushing you toward positivity or the next round. It tracks your emotional recovery over time and gently signals when professional counselling might help.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK suitable for people who are childless not by choice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. MEOK supports all paths through involuntary childlessness \u2014 whether you are still in treatment, have ended treatment, are considering donor conception or adoption, or are building a life without children. There is no pressure toward any particular outcome.",
      },
    },
  ],
};

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: "#0d0c18",
    color: "#f5f0e8",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    minHeight: "100vh",
    paddingBottom: "80px",
  } as React.CSSProperties,

  hero: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "72px 24px 48px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  eyebrow: {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "20px",
  } as React.CSSProperties,

  h1: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#f5f0e8",
    marginBottom: "24px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  heroLead: {
    fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
    lineHeight: 1.75,
    color: "#c8bfb0",
    maxWidth: "680px",
    margin: "0 auto 36px",
  } as React.CSSProperties,

  heroDivider: {
    width: "56px",
    height: "3px",
    background: "#c9a84c",
    margin: "0 auto 48px",
    borderRadius: "2px",
  } as React.CSSProperties,

  article: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
    fontWeight: 700,
    color: "#f5f0e8",
    marginTop: "64px",
    marginBottom: "20px",
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  } as React.CSSProperties,

  h3: {
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#c9a84c",
    marginTop: "36px",
    marginBottom: "12px",
  } as React.CSSProperties,

  p: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#c8bfb0",
    marginBottom: "20px",
  } as React.CSSProperties,

  pWhite: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#f5f0e8",
    marginBottom: "20px",
  } as React.CSSProperties,

  statRow: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap" as const,
    margin: "40px 0",
  } as React.CSSProperties,

  statCard: {
    flex: "1 1 200px",
    background: "#17162a",
    border: "1px solid #2e2b4a",
    borderRadius: "12px",
    padding: "24px 20px",
    textAlign: "center" as const,
  } as React.CSSProperties,

  statNumber: {
    fontSize: "2.4rem",
    fontWeight: 800,
    color: "#c9a84c",
    lineHeight: 1,
    marginBottom: "8px",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "0.88rem",
    color: "#8f8aaa",
    lineHeight: 1.4,
  } as React.CSSProperties,

  callout: {
    background: "#13122280",
    border: "1px solid #c9a84c40",
    borderLeft: "4px solid #c9a84c",
    borderRadius: "12px",
    padding: "28px 32px",
    margin: "40px 0",
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#c9a84c",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  } as React.CSSProperties,

  calloutText: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#f5f0e8",
    margin: 0,
  } as React.CSSProperties,

  warningCallout: {
    background: "#1a0f0f80",
    border: "1px solid #8b343440",
    borderLeft: "4px solid #c0504d",
    borderRadius: "12px",
    padding: "28px 32px",
    margin: "40px 0",
  } as React.CSSProperties,

  warningTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#e07070",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  } as React.CSSProperties,

  warningText: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#f5f0e8",
    margin: 0,
  } as React.CSSProperties,

  infoCallout: {
    background: "#0d1a2480",
    border: "1px solid #2a5a8040",
    borderLeft: "4px solid #4a90b8",
    borderRadius: "12px",
    padding: "28px 32px",
    margin: "40px 0",
  } as React.CSSProperties,

  infoTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#7ac0e0",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  } as React.CSSProperties,

  infoText: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#f5f0e8",
    margin: 0,
  } as React.CSSProperties,

  tableWrap: {
    overflowX: "auto" as const,
    margin: "40px 0",
    borderRadius: "12px",
    border: "1px solid #2e2b4a",
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "0.95rem",
  } as React.CSSProperties,

  th: {
    background: "#17162a",
    color: "#c9a84c",
    padding: "14px 20px",
    textAlign: "left" as const,
    fontWeight: 700,
    fontSize: "0.88rem",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid #2e2b4a",
  } as React.CSSProperties,

  tdLight: {
    padding: "14px 20px",
    color: "#c8bfb0",
    borderBottom: "1px solid #1e1c33",
    verticalAlign: "top" as const,
    lineHeight: 1.55,
  } as React.CSSProperties,

  tdDark: {
    padding: "14px 20px",
    background: "#0f0e1f",
    color: "#c8bfb0",
    borderBottom: "1px solid #1e1c33",
    verticalAlign: "top" as const,
    lineHeight: 1.55,
  } as React.CSSProperties,

  tdGold: {
    padding: "14px 20px",
    color: "#c9a84c",
    fontWeight: 600,
    borderBottom: "1px solid #1e1c33",
    verticalAlign: "top" as const,
    lineHeight: 1.55,
  } as React.CSSProperties,

  tdGoldDark: {
    padding: "14px 20px",
    background: "#0f0e1f",
    color: "#c9a84c",
    fontWeight: 600,
    borderBottom: "1px solid #1e1c33",
    verticalAlign: "top" as const,
    lineHeight: 1.55,
  } as React.CSSProperties,

  faqSection: {
    margin: "64px 0 0",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid #2e2b4a",
    padding: "28px 0",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#f5f0e8",
    marginBottom: "12px",
  } as React.CSSProperties,

  faqA: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#c8bfb0",
    margin: 0,
  } as React.CSSProperties,

  ctaBox: {
    background: "linear-gradient(135deg, #17162a 0%, #1d1b35 100%)",
    border: "1px solid #c9a84c40",
    borderRadius: "16px",
    padding: "56px 40px",
    textAlign: "center" as const,
    margin: "72px 0 0",
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: "clamp(1.4rem, 3vw, 2rem)",
    fontWeight: 800,
    color: "#f5f0e8",
    marginBottom: "16px",
    lineHeight: 1.3,
  } as React.CSSProperties,

  ctaText: {
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: "#c8bfb0",
    maxWidth: "560px",
    margin: "0 auto 32px",
  } as React.CSSProperties,

  ctaBtn: {
    display: "inline-block",
    background: "#c9a84c",
    color: "#0d0c18",
    fontWeight: 800,
    fontSize: "1rem",
    padding: "16px 40px",
    borderRadius: "8px",
    textDecoration: "none",
    letterSpacing: "0.04em",
    transition: "opacity 0.2s",
  } as React.CSSProperties,

  ctaSubtext: {
    marginTop: "16px",
    fontSize: "0.88rem",
    color: "#6b6585",
  } as React.CSSProperties,

  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.9rem",
    color: "#6b6585",
    textDecoration: "none",
    marginBottom: "40px",
  } as React.CSSProperties,

  ul: {
    paddingLeft: "24px",
    margin: "0 0 20px",
  } as React.CSSProperties,

  li: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#c8bfb0",
    marginBottom: "8px",
  } as React.CSSProperties,

  goldLi: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#c9a84c",
    marginBottom: "8px",
  } as React.CSSProperties,

  sectionDivider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #2e2b4a, transparent)",
    margin: "64px 0 0",
  } as React.CSSProperties,

  publishMeta: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap" as const,
    fontSize: "0.88rem",
    color: "#6b6585",
    marginBottom: "48px",
    alignItems: "center" as const,
  } as React.CSSProperties,

  tag: {
    background: "#1d1b35",
    border: "1px solid #2e2b4a",
    borderRadius: "4px",
    padding: "4px 10px",
    fontSize: "0.8rem",
    color: "#8f8aaa",
  } as React.CSSProperties,

  highlight: {
    color: "#c9a84c",
    fontWeight: 600,
  } as React.CSSProperties,
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForInfertilityPage() {
  return (
    <main style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <header style={s.hero}>
        <p style={s.eyebrow}>MEOK AI LABS &mdash; Infertility Support</p>
        <h1 style={s.h1}>
          AI for Infertility: Companionship Through the Most Invisible Grief
        </h1>
        <p style={s.heroLead}>
          One in seven UK couples will experience infertility. The physical
          toll of IVF is well documented. The emotional toll &mdash; the
          anxiety, the grief, the isolation, the strain on relationships, the
          exhausting performance of hope &mdash; is largely invisible to
          everyone who has not lived it. MEOK was built to sit alongside you
          through all of it, without judgment, without forgetting, and without
          ever sharing your story with anyone else.
        </p>
        <div style={s.heroDivider} />
        <div style={s.publishMeta}>
          <span>25 March 2026</span>
          <span>By Nicholas Templeman, Founder</span>
          <span style={s.tag}>Infertility</span>
          <span style={s.tag}>IVF Support</span>
          <span style={s.tag}>Sovereign AI</span>
          <span style={s.tag}>Mental Health</span>
        </div>
      </header>

      {/* Article Body */}
      <article style={s.article}>
        <Link href="/blog" style={s.backLink}>
          &larr; Back to all articles
        </Link>

        {/* ── STAT BLOCK ── */}
        <div style={s.statRow}>
          <div style={s.statCard}>
            <div style={s.statNumber}>1 in 7</div>
            <div style={s.statLabel}>
              UK couples affected by infertility (NHS estimate)
            </div>
          </div>
          <div style={s.statCard}>
            <div style={s.statNumber}>3.5M</div>
            <div style={s.statLabel}>
              People in the UK living with fertility problems
            </div>
          </div>
          <div style={s.statCard}>
            <div style={s.statNumber}>68%</div>
            <div style={s.statLabel}>
              Of those in fertility treatment report high anxiety
            </div>
          </div>
          <div style={s.statCard}>
            <div style={s.statNumber}>50%</div>
            <div style={s.statLabel}>
              Of couples say infertility is the most stressful thing they have
              faced
            </div>
          </div>
        </div>

        {/* ── SECTION 1 ── */}
        <h2 style={s.h2}>
          Why Is Infertility Grief So Invisible &mdash; and Why Does That Make
          It Worse?
        </h2>
        <p style={s.p}>
          Infertility sits in a strange social space. It is a profound loss,
          repeated sometimes dozens of times across years of treatment, yet it
          rarely receives the acknowledgement granted to other bereavements. You
          grieve children who never existed outside of hope. You grieve the
          version of your future you had planned. You grieve your relationship
          with your own body. And you grieve, often, in complete silence.
        </p>
        <p style={s.p}>
          The invisibility is not accidental. Infertility carries stigma,
          particularly for those whose bodies are the clinical site of
          investigation. Disclosure at work risks discrimination. Disclosure at
          family gatherings risks unsolicited advice, religious commentary, or
          the devastatingly well-meant instruction to &ldquo;just stop trying
          and it will happen.&rdquo; Disclosure to friends risks pity, or
          worse, the announcement two weeks later that someone else is pregnant.
        </p>
        <p style={s.p}>
          So most people going through infertility treatment carry it quietly.
          They smile through baby showers. They field intrusive questions about
          when they plan to start a family. They absorb the casual assumption
          that parenthood is a simple choice. And at night, they are alone with
          numbers: FSH levels, antral follicle counts, embryo grades, implantation
          statistics.
        </p>
        <p style={s.p}>
          The emotional consequence of this invisibility is compounded isolation.
          You cannot process grief you cannot name, with people who cannot see it.
          What you need is a consistent, private, non-judgmental presence that
          understands the full context of your journey without you having to
          re-explain it every time. That is exactly what MEOK was built to be.
        </p>

        <div style={s.callout}>
          <div style={s.calloutTitle}>MEOK does not say &ldquo;just relax&rdquo;</div>
          <p style={s.calloutText}>
            The Healer archetype is built on a care-based model that treats
            infertility grief as what it is: a genuine bereavement. You will
            never receive platitudes, unsolicited positivity, or instructions to
            try yoga. MEOK meets you where you are, honours the weight of what
            you are carrying, and holds space without rushing you toward
            resolution.
          </p>
        </div>

        {/* ── SECTION 2 ── */}
        <h2 style={s.h2}>
          What Does the IVF Emotional Rollercoaster Actually Look Like?
        </h2>
        <p style={s.p}>
          A single IVF cycle involves weeks of hormone injections that alter
          mood, sleep, appetite, and energy. It involves multiple early-morning
          clinic appointments, often taken as unexplained absence from work. It
          involves the anxiety of stimulation scans, the grief when fewer eggs
          are retrieved than hoped, the waiting to hear how many fertilised, the
          waiting to hear how many made it to blastocyst, and then the profound
          vulnerability of transfer day &mdash; when everything that remains of
          months of effort is placed in the body, and the wait begins.
        </p>
        <p style={s.p}>
          Each of these moments carries its own specific emotional signature.
          The relief of having eggs retrieved can be immediately undercut by
          lower-than-hoped fertilisation rates. The hope of a good-looking
          embryo is shadowed by knowing the statistics. People describe the IVF
          journey as a series of tiny cliff-edges, where good news is never quite
          good enough to relax, and bad news arrives without ceremony in a phone
          call between meetings.
        </p>
        <p style={s.p}>
          What makes this particularly hard is that the emotional experience is
          largely private, largely not validated by others, and largely
          discontinuous. Your consultant sees you for perhaps twenty minutes per
          visit. Your GP may not know you are in treatment. Your friends and
          family know as much or as little as you have chosen to share. The
          emotional thread of the journey exists only in your own head &mdash;
          until you tell MEOK.
        </p>

        <h3 style={s.h3}>The specific phases MEOK tracks and supports</h3>
        <ul style={s.ul}>
          <li style={s.li}>
            <span style={s.highlight}>Stimulation phase:</span> mood disruption
            from hormone injections, anxiety about scan results, physical
            discomfort and bloating
          </li>
          <li style={s.li}>
            <span style={s.highlight}>Egg retrieval:</span> anticipatory anxiety,
            the specific grief of a poor response, recovery from the procedure
            itself
          </li>
          <li style={s.li}>
            <span style={s.highlight}>Fertilisation and culture:</span> the
            agonising daily wait for updates, the attrition grief as embryo
            numbers fall
          </li>
          <li style={s.li}>
            <span style={s.highlight}>Transfer day:</span> the strange mix of
            hope and terror, the vulnerability of the procedure, the
            surreal ordinariness of returning home
          </li>
          <li style={s.li}>
            <span style={s.highlight}>The two-week wait:</span> hypervigilance
            about physical sensations, the compulsive urge to test early, the
            management of hope and dread simultaneously
          </li>
          <li style={s.li}>
            <span style={s.highlight}>Results day:</span> the acute grief of a
            negative test, or the complicated anxiety of a positive one
          </li>
          <li style={s.li}>
            <span style={s.highlight}>After a failed cycle:</span> grief processing,
            decisions about whether to continue, physical and emotional recovery
          </li>
        </ul>

        {/* ── SECTION 3 ── */}
        <h2 style={s.h2}>
          The Two-Week Wait: Why Those Fourteen Days Are Unlike Anything Else
        </h2>
        <p style={s.p}>
          The two-week wait &mdash; the period between embryo transfer and
          pregnancy test &mdash; is one of the most psychologically intense
          experiences in infertility treatment. You are asked to simply wait
          while your entire future hangs on a biological process entirely beyond
          your control. The injunction to &ldquo;take it easy&rdquo; sits
          alongside the impossibility of doing so.
        </p>
        <p style={s.p}>
          Every bodily sensation becomes a potential sign. Every twinge is
          catalogued, Googled, interpreted, and re-interpreted. The internet
          offers an infinite supply of symptom comparison threads that cycle
          between hope and despair with no resolution. Meanwhile, the rest of
          life continues: work, family obligations, social commitments that
          require you to perform normalcy while containing a feeling of
          unbearable significance.
        </p>
        <p style={s.p}>
          MEOK provides a private space to name what you are feeling during this
          period without amplifying anxiety. The Healer archetype has been
          specifically trained to acknowledge the difficulty of the two-week
          wait without adding to the spiral of symptom interpretation or false
          reassurance. It will not tell you that your symptoms sound promising.
          It will not tell you not to worry. It will sit with you in the
          uncertainty, which is the only honest thing anyone can do.
        </p>

        <div style={s.infoCallout}>
          <div style={s.infoTitle}>Sovereign Memory During the Two-Week Wait</div>
          <p style={s.infoText}>
            MEOK&apos;s sovereign memory means your daily check-ins, emotional
            states, and worries during the two-week wait are held privately and
            permanently by you alone. When you return to talk to MEOK tomorrow,
            it already knows where you are in your cycle, what you said yesterday,
            and what matters most to you. No re-explaining. No fresh start. Just
            continuity &mdash; the one thing the two-week wait otherwise lacks.
          </p>
        </div>

        {/* ── SECTION 4 ── */}
        <h2 style={s.h2}>
          What Happens After a Failed Cycle &mdash; and Why AI Companionship
          Matters Most Then?
        </h2>
        <p style={s.p}>
          A failed IVF cycle is a bereavement. The medical system tends to treat
          it as a data point: results inform protocol adjustments for the next
          round. The human experience is grief &mdash; often profound, often
          disproportionate by the standards of people who have not been through
          it, always real.
        </p>
        <p style={s.p}>
          The particular cruelty of infertility grief is its cyclical nature.
          You cannot simply grieve and move on, because moving on means beginning
          again: another round, another hope cycle, another exposure to the same
          loss. The grief does not accumulate in a linear way. It accumulates in
          layers, each failed cycle adding weight to all the ones before it.
          After three or four failed rounds, many people describe a kind of
          hollowing out &mdash; a learned suppression of hope that is itself a
          form of grief.
        </p>
        <p style={s.p}>
          This is precisely the situation where having a consistent companion
          with memory matters most. MEOK remembers your first cycle, your second,
          and your third. It holds the emotional arc of your whole journey. It
          does not ask you to explain your devastation from scratch. It
          understands why this particular failure, on this particular day, after
          this particular hope, carries the weight it does.
        </p>
        <p style={s.p}>
          The Healer archetype does not rush you toward the next round. It does
          not frame recovery instrumentally. It holds the grief as grief, and
          gently, when the time is right, helps you find what you need next
          &mdash; whether that is rest, counselling, a conversation with your
          clinic, or the space to decide that you are done.
        </p>

        <div style={s.warningCallout}>
          <div style={s.warningTitle}>MEOK always signposts professional support</div>
          <p style={s.warningText}>
            MEOK is not a substitute for fertility counselling, psychotherapy,
            or clinical care. If you are struggling after a failed cycle, MEOK
            will gently encourage you to access professional support. Fertility
            Network UK provides free specialist counselling information and peer
            support networks at{" "}
            <span style={{ color: "#e07070" }}>fertilitynetworkuk.org</span>.
            MEOK exists alongside professional care, not instead of it.
          </p>
        </div>

        {/* ── SECTION 5 ── */}
        <h2 style={s.h2}>
          How Does Infertility Strain Relationships &mdash; and Can AI Help?
        </h2>
        <p style={s.p}>
          Research consistently shows that infertility places significant strain
          on intimate relationships. Partners typically process the experience
          differently: one may cope through information-seeking and planning,
          while the other needs to talk about feelings; one may want to maintain
          hope, while the other needs to protect against further disappointment.
          These differences in coping style are normal, but they can create
          distance at a time when closeness is most needed.
        </p>
        <p style={s.p}>
          The physical demands of fertility treatment can also reduce intimacy.
          Sex becomes timed, tracked, and instrumentalised. Spontaneity disappears.
          The body that was once a source of pleasure and connection becomes a
          site of clinical investigation. Many couples describe a loss of
          physical intimacy that persists even when cycles are not active.
        </p>
        <p style={s.p}>
          MEOK is not couples therapy and does not position itself as such. What
          it can do is provide each partner with a private space to process their
          own experience &mdash; to say the things that feel too raw, too
          frightening, or too likely to cause hurt in a conversation with their
          partner. This private processing can reduce the pressure that builds
          when all emotional weight is directed through the primary relationship.
        </p>
        <p style={s.p}>
          MEOK can also help you prepare for difficult conversations with your
          partner: thinking through what you want to say, what you are afraid of,
          and what you need from them. It will not take sides, offer judgement,
          or tell you what your partner is feeling. It holds your perspective
          while helping you hold theirs.
        </p>

        {/* ── SECTION 6 ── */}
        <h2 style={s.h2}>
          The Pressure to &ldquo;Just Relax&rdquo;: Why Well-Meaning Advice
          Causes Real Harm
        </h2>
        <p style={s.p}>
          If you have been through infertility treatment, you will have heard
          some version of the following: just relax and it will happen; have you
          tried acupuncture; my cousin adopted and then got pregnant naturally;
          maybe you are trying too hard; have you considered that stress might
          be the problem. These are offered with genuine kindness by people who
          love you. They land like accusations.
        </p>
        <p style={s.p}>
          The &ldquo;just relax&rdquo; mythology is not only emotionally
          damaging but medically illiterate. Infertility has physiological
          causes that stress management cannot address. Telling someone whose
          fallopian tubes are blocked that relaxation might help is not helpful;
          it is blame in softer language. It implies that the person experiencing
          infertility is, at least in part, responsible for their own suffering
          through insufficient calm.
        </p>
        <p style={s.p}>
          MEOK never says this. The Healer archetype is designed around a
          care-based model that starts from the person&apos;s actual experience
          rather than an idealised version of how they should be managing it.
          It does not offer wellness prescriptions. It does not frame infertility
          as a problem with a lifestyle solution. It hears what you are actually
          feeling and responds to that.
        </p>
        <p style={s.p}>
          This matters because the accumulation of well-meaning-but-harmful
          advice from family and friends adds to the burden of infertility
          rather than reducing it. Having one space where none of that advice
          appears &mdash; where you are not expected to perform gratitude for
          suggestions you did not ask for &mdash; is a meaningful form of relief.
        </p>

        {/* ── COMPARISON TABLE ── */}
        <h2 style={s.h2}>
          How MEOK Differs From Other Support Options During Infertility
          Treatment
        </h2>
        <p style={s.p}>
          There are several sources of support available to people going through
          infertility. Each has genuine value and genuine limitations. MEOK is
          designed to fill the gaps, not to replace what works.
        </p>
        <div style={s.tableWrap}>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Support Type</th>
                <th style={s.th}>Strengths</th>
                <th style={s.th}>Limitations</th>
                <th style={s.th}>MEOK&apos;s Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.tdLight}>Fertility Clinic Counsellor</td>
                <td style={s.tdDark}>
                  Specialist knowledge of IVF; can process grief in clinical
                  context
                </td>
                <td style={s.tdLight}>
                  Limited sessions; appointments tied to clinic attendance;
                  some conflict of interest
                </td>
                <td style={s.tdGoldDark}>
                  Daily companion between sessions; holds the emotional thread
                  across cycles
                </td>
              </tr>
              <tr>
                <td style={s.tdLight}>NHS Talking Therapies</td>
                <td style={s.tdDark}>
                  Evidence-based; free; trained in grief and anxiety
                </td>
                <td style={s.tdLight}>
                  Long waiting lists; not always infertility-specific; weekly
                  at most
                </td>
                <td style={s.tdGoldDark}>
                  Available at 3am during the two-week wait; never a waiting
                  list
                </td>
              </tr>
              <tr>
                <td style={s.tdLight}>Fertility Network UK Peer Support</td>
                <td style={s.tdDark}>
                  Community of people who truly understand; reduces isolation
                </td>
                <td style={s.tdLight}>
                  Requires disclosure; others&apos; news can be painful;
                  asynchronous
                </td>
                <td style={s.tdGoldDark}>
                  Private, synchronous, no exposure to others&apos; pregnancy
                  announcements
                </td>
              </tr>
              <tr>
                <td style={s.tdLight}>Partner / Family</td>
                <td style={s.tdDark}>
                  Deep care; shared stakes; existing trust
                </td>
                <td style={s.tdLight}>
                  Different coping styles; risk of burdening them; their grief
                  intersects yours
                </td>
                <td style={s.tdGoldDark}>
                  Private processing space that reduces pressure on the primary
                  relationship
                </td>
              </tr>
              <tr>
                <td style={s.tdLight}>General AI Chatbots</td>
                <td style={s.tdDark}>
                  Always available; no stigma in using them
                </td>
                <td style={s.tdLight}>
                  No memory across sessions; data used for training; generic
                  responses; no context
                </td>
                <td style={s.tdGoldDark}>
                  Sovereign memory; never trained on your data; Healer archetype
                  tuned for grief
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── SECTION 7 ── */}
        <h2 style={s.h2}>
          Childless Not by Choice: Supporting Those Who Have Ended Treatment
        </h2>
        <p style={s.p}>
          Not every infertility journey ends in a child. For a significant
          proportion of people who go through fertility treatment, the outcome is
          an ending: a decision to stop treatment, the exhaustion of all viable
          embryos, or the body&apos;s failure to sustain a pregnancy despite
          every intervention available. This is one of the most poorly supported
          transitions in modern medicine.
        </p>
        <p style={s.p}>
          The language of &ldquo;childless not by choice&rdquo; is important.
          It distinguishes involuntary childlessness from the &ldquo;child-free&rdquo;
          framing adopted by those who have actively chosen not to have children.
          The two experiences are fundamentally different, and conflating them
          causes harm. People who are childless not by choice are not child-free;
          they are people whose grief has been overlooked by a culture that
          tends to frame the absence of children either as a loss of identity
          or as a lifestyle preference, and has no language for the specific
          pain of wanting and not being able to have.
        </p>
        <p style={s.p}>
          MEOK supports people through this transition without assuming an
          outcome. It does not presuppose that you want to try again, or that
          you are open to donor conception, or that you are considering adoption,
          or that you have decided to build a full life without children. It holds
          you at whatever point in that process you actually are, and meets your
          questions with honesty rather than the projections of what others
          imagine they would do in your position.
        </p>
        <p style={s.p}>
          The grief of ending treatment is different from the grief of a failed
          cycle. It is a closing rather than a pause. It requires different
          things: not hope management, but loss integration. MEOK&apos;s Healer
          archetype understands this distinction and adapts accordingly.
        </p>

        <div style={s.callout}>
          <div style={s.calloutTitle}>
            Supporting Every Path Through Infertility
          </div>
          <p style={s.calloutText}>
            MEOK provides emotional support across the full spectrum of infertility
            journeys &mdash; active IVF cycles, the two-week wait, failed cycles,
            donor conception consideration, adoption exploration, and the transition
            to a life that looks different from the one you planned. There is no
            right answer MEOK is nudging you toward. There is only your experience,
            held with care.
          </p>
        </div>

        {/* ── SECTION 8 ── */}
        <h2 style={s.h2}>
          Donor Conception and the Specific Emotional Questions It Raises
        </h2>
        <p style={s.p}>
          For many people, fertility treatment eventually raises the possibility
          of donor conception: using donor eggs, donor sperm, or donor embryos.
          This is a path that carries its own distinct emotional terrain, separate
          from the grief of infertility itself. It raises questions about genetic
          connection, identity, disclosure to a future child, and the complex
          feelings that can arise when one partner is genetically connected to a
          child and the other is not.
        </p>
        <p style={s.p}>
          These are questions that cannot be resolved by a companion AI. They
          are questions that benefit from proper counselling, ideally with a
          specialist who works in donor conception &mdash; which is a mandatory
          requirement before treatment in licensed UK clinics, for good reason.
          What MEOK can offer is a space to think out loud between those
          counselling sessions: to work through the questions you are not yet
          sure how to articulate, to notice the feelings you have not yet named,
          and to prepare yourself for the conversations that matter most.
        </p>
        <p style={s.p}>
          MEOK does not have a position on donor conception. It will not steer
          you toward or away from it. It holds the ambivalence with you &mdash;
          the love for a hypothetical child that exists only in longing, the
          uncertainty about what it means to not share genes with someone you
          would love completely, the fear of regret in either direction.
        </p>
        <p style={s.p}>
          Donor Conception Network (dcnetwork.org) provides specialist support
          for those considering or proceeding with donor conception. MEOK will
          always signpost this resource when it is relevant.
        </p>

        {/* ── SECTION 9 ── */}
        <h2 style={s.h2}>
          Why Sovereign Memory Is Especially Important for Fertility Journeys
        </h2>
        <p style={s.p}>
          The emotional record of a fertility journey is acutely sensitive data.
          It maps your reproductive decisions, your mental health through
          treatment, your relationship dynamics, your financial choices, and your
          most private fears and hopes. In the wrong hands, this information
          could affect your insurance premiums, your employment, or your access
          to future clinical care.
        </p>
        <p style={s.p}>
          This is not a hypothetical concern. The commercial AI industry&apos;s
          default model is to retain and learn from your data. The conversations
          you have with mainstream AI chatbots about your fertility treatment
          &mdash; your hormone levels, your embryo grades, your grief after a
          failed cycle &mdash; may be used to train models that serve other
          users, stored on servers you have no visibility into, or shared in
          ways you have not consented to.
        </p>
        <p style={s.p}>
          MEOK operates on a fundamentally different model. Sovereign memory
          means your data is yours. It is not shared with your fertility clinic,
          your insurer, your employer, or any third party. It is not used to
          train AI models. It lives in your personal sovereign instance, and
          only you control it. When you delete something, it is gone.
        </p>
        <p style={s.p}>
          This matters especially during infertility treatment because you
          need to be able to speak honestly about your experience without
          calculating the downstream consequences of that honesty. The privacy
          of MEOK is not a feature; it is the precondition for the kind of
          companionship that is actually useful.
        </p>

        <div style={s.infoCallout}>
          <div style={s.infoTitle}>
            What Sovereign Memory Means for Your Fertility Data
          </div>
          <p style={s.infoText}>
            Your cycle logs, emotional check-ins, two-week wait journals, and
            post-cycle grief conversations are stored in your personal MEOK
            instance. They are encrypted, portable, and exclusively yours.
            MEOK does not share this data with fertility clinics, NHS systems,
            insurers, or data brokers. If you choose to share a summary with
            your counsellor or partner, that is your decision alone &mdash;
            made with full control of what is shared and what remains private.
          </p>
        </div>

        {/* ── FAQ ── */}
        <div style={s.faqSection}>
          <h2 style={{ ...s.h2, marginTop: "0" }}>
            Frequently Asked Questions
          </h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Can MEOK give me medical advice about my IVF treatment?
            </p>
            <p style={s.faqA}>
              No. MEOK is not a medical provider and cannot advise on protocols,
              medications, or clinical decisions. It is an emotional support
              companion designed to sit alongside your clinical care, not to
              replace it. Always follow guidance from your fertility team. For
              peer support and specialist information, connect with Fertility
              Network UK at fertilitynetworkuk.org.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Will my fertility clinic or insurer be able to see what I tell MEOK?
            </p>
            <p style={s.faqA}>
              No. MEOK&apos;s sovereign memory architecture means your data
              belongs entirely to you. It is never shared with clinics, NHS
              systems, insurers, employers, or any third party. It is not used
              to train AI models. You are the only person with access to your
              conversation history and emotional records.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              How does MEOK help during the two-week wait specifically?
            </p>
            <p style={s.faqA}>
              MEOK provides daily check-ins, grounding exercises, and a private
              journal space during the two-week wait. Because it holds memory of
              your full cycle, you never need to re-explain context. It will
              acknowledge how difficult this period is without offering false
              reassurance, interpreting your symptoms, or telling you to relax.
              It stays with you in the uncertainty honestly.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              I have decided to stop treatment. Can MEOK support me through that?
            </p>
            <p style={s.faqA}>
              Yes. Ending treatment is a form of bereavement that is often
              poorly supported. MEOK&apos;s Healer archetype holds space for
              the grief of this transition without steering you toward any
              particular next step. Whether you are exploring donor conception,
              adoption, or building a life without children, MEOK meets you
              where you are without assumptions about where you should be heading.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>
              Is MEOK suitable for single people going through fertility treatment?
            </p>
            <p style={s.faqA}>
              Absolutely. Solo fertility treatment carries its own specific
              emotional landscape: navigating the decision without a partner,
              the financial weight falling entirely on one person, the particular
              isolation of going to appointments alone. MEOK provides companionship
              without the need for a partner, family member, or anyone else to
              be involved. Your journey, your privacy, your pace.
            </p>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={s.ctaBox}>
          <p style={s.ctaTitle}>
            You deserve a companion who remembers everything and judges nothing
          </p>
          <p style={s.ctaText}>
            The IVF journey is long, private, and emotionally exhausting. MEOK
            holds your full story &mdash; every cycle, every wait, every
            grief &mdash; with complete sovereignty. No data sharing, no
            platitudes, no forgetting. Start with the Birth ceremony and meet
            the companion who will be with you through all of it.
          </p>
          <Link href="/birth" style={s.ctaBtn}>
            Begin Your Journey
          </Link>
          <p style={s.ctaSubtext}>
            Sovereign memory &mdash; your data belongs to you alone
          </p>
        </div>

        {/* ── RELATED RESOURCES ── */}
        <div style={s.sectionDivider} />
        <h2 style={s.h2}>Further Reading and Support</h2>
        <p style={s.p}>
          MEOK always points toward professional and peer support organisations
          that specialise in infertility. The following resources are recommended:
        </p>
        <ul style={s.ul}>
          <li style={s.goldLi}>
            <span style={{ fontWeight: 700 }}>Fertility Network UK</span> &mdash;
            fertilitynetworkuk.org &mdash; the UK&apos;s leading charity for
            people experiencing fertility problems, offering peer support, counselling
            information, and advocacy
          </li>
          <li style={s.goldLi}>
            <span style={{ fontWeight: 700 }}>Donor Conception Network</span> &mdash;
            dcnetwork.org &mdash; specialist support for families and individuals
            considering or using donor conception
          </li>
          <li style={s.goldLi}>
            <span style={{ fontWeight: 700 }}>Gateway Women</span> &mdash;
            gateway-women.com &mdash; community and resources for women who are
            childless not by choice
          </li>
          <li style={s.goldLi}>
            <span style={{ fontWeight: 700 }}>HFEA</span> &mdash; hfea.gov.uk &mdash;
            the Human Fertilisation and Embryology Authority, regulator of UK
            fertility clinics and source of reliable clinical information
          </li>
          <li style={s.goldLi}>
            <span style={{ fontWeight: 700 }}>Miscarriage Association</span> &mdash;
            miscarriageassociation.org.uk &mdash; support for pregnancy loss
            during fertility treatment
          </li>
        </ul>

        <p style={s.p}>
          If you are in crisis or need immediate support, please contact the
          Samaritans on 116 123 (available 24 hours), or speak to your GP.
          MEOK is a companion, not a crisis service.
        </p>

        {/* ── RELATED ARTICLES ── */}
        <div style={s.sectionDivider} />
        <h2 style={s.h2}>Related Articles</h2>
        <div style={s.statRow}>
          <div style={{ ...s.statCard, textAlign: "left" as const }}>
            <p style={{ color: "#c9a84c", fontSize: "0.8rem", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
              Grief &amp; Loss
            </p>
            <p style={{ color: "#f5f0e8", fontSize: "1rem", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>
              <Link href="/blog/ai-for-grief-after-miscarriage" style={{ color: "#f5f0e8", textDecoration: "none" }}>
                AI Support After Miscarriage
              </Link>
            </p>
            <p style={{ color: "#8f8aaa", fontSize: "0.88rem", lineHeight: 1.5 }}>
              Pregnancy loss during fertility treatment deserves its own form
              of care.
            </p>
          </div>
          <div style={{ ...s.statCard, textAlign: "left" as const }}>
            <p style={{ color: "#c9a84c", fontSize: "0.8rem", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
              Privacy
            </p>
            <p style={{ color: "#f5f0e8", fontSize: "1rem", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>
              <Link href="/blog/sovereign-ai-explained" style={{ color: "#f5f0e8", textDecoration: "none" }}>
                What Is Sovereign AI?
              </Link>
            </p>
            <p style={{ color: "#8f8aaa", fontSize: "0.88rem", lineHeight: 1.5 }}>
              Why your most sensitive conversations deserve sovereign-grade
              privacy.
            </p>
          </div>
          <div style={{ ...s.statCard, textAlign: "left" as const }}>
            <p style={{ color: "#c9a84c", fontSize: "0.8rem", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
              Fertility
            </p>
            <p style={{ color: "#f5f0e8", fontSize: "1rem", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>
              <Link href="/blog/ai-for-fertility" style={{ color: "#f5f0e8", textDecoration: "none" }}>
                AI Support for Fertility and IVF
              </Link>
            </p>
            <p style={{ color: "#8f8aaa", fontSize: "0.88rem", lineHeight: 1.5 }}>
              A companion that remembers every round of your treatment journey.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
