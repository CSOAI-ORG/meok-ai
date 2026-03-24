import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI Support for Fertility and IVF: A Companion That Remembers Every Round | MEOK AI LABS",
  description:
    "1 in 7 UK couples face fertility issues. The emotional toll of IVF is enormous. MEOK's Healer archetype provides daily support through the two-week wait, failed rounds, and the grief that comes with infertility — with total privacy.",
  alternates: { canonical: "https://meok.ai/blog/ai-for-fertility" },
  openGraph: {
    title:
      "AI Support for Fertility and IVF: A Companion That Remembers Every Round",
    description:
      "1 in 7 UK couples face fertility issues. The emotional toll of IVF is enormous. MEOK's Healer archetype provides daily support through the two-week wait, failed rounds, and the grief that comes with infertility — with total privacy.",
    type: "article",
    publishedTime: "2026-03-24",
    authors: ["Nicholas Templeman"],
    url: "https://meok.ai/blog/ai-for-fertility",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Support+for+Fertility+and+IVF&desc=A+Companion+That+Remembers+Every+Round",
        width: 1200,
        height: 630,
        alt: "AI Support for Fertility and IVF: A Companion That Remembers Every Round | MEOK AI LABS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Support for Fertility and IVF: A Companion That Remembers Every Round",
    description:
      "1 in 7 UK couples face fertility issues. MEOK's Healer holds your whole journey — every appointment, every round, every grief and hope — with total privacy.",
    images: [
      "https://meok.ai/api/og?title=AI+Support+for+Fertility+and+IVF&desc=A+Companion+That+Remembers+Every+Round",
    ],
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Support for Fertility and IVF: A Companion That Remembers Every Round",
  description:
    "1 in 7 UK couples face fertility issues. The emotional toll of IVF is enormous. MEOK's Healer archetype provides daily support through the two-week wait, failed rounds, and the grief that comes with infertility — with total privacy.",
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://meok.ai/blog/ai-for-fertility",
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
    "https://meok.ai/api/og?title=AI+Support+for+Fertility+and+IVF&desc=A+Companion+That+Remembers+Every+Round",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-fertility",
  },
  keywords: [
    "AI support for fertility",
    "IVF emotional support",
    "AI companion for IVF",
    "fertility treatment UK",
    "two-week wait support",
    "infertility grief",
    "MEOK Healer archetype",
    "AI journaling fertility",
    "Maternal Covenant",
    "sovereign AI health data",
  ],
};

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK give me medical advice about my fertility treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical service and cannot give clinical advice about fertility treatment, medication dosages, or IVF protocols. Your fertility clinic and NHS consultants are the right people for those questions. What MEOK does is support your emotional wellbeing throughout the process — helping you process feelings, track how you are doing emotionally, and remember the full arc of your journey.",
      },
    },
    {
      "@type": "Question",
      name: "Is my fertility and health data safe with MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Maternal Covenant is MEOK's privacy framework specifically designed to protect intimate health data — including anything related to fertility, reproductive health, and IVF. Your conversations are never used to train AI models, never sold to third parties, and never shared with insurance companies, employers, or advertisers. Your data belongs to you, full stop.",
      },
    },
    {
      "@type": "Question",
      name: "What is the two-week wait and how does MEOK help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The two-week wait (2WW) is the period after embryo transfer before a pregnancy test can confirm whether IVF has worked. It is widely described as one of the most emotionally intense periods of the fertility journey — a state of suspended hope and fear with nothing to do but wait. MEOK's Healer archetype offers daily emotional check-ins during this time: a consistent, non-judgmental presence that acknowledges how hard the waiting is without offering false reassurance.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help after a failed IVF round?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A failed round is a profound loss, and MEOK treats it as one. Rather than pivoting immediately to 'what's next', the Healer archetype creates space to grieve — to name the loss, sit with the pain, and process it at your own pace. Because MEOK remembers every previous conversation, it does not ask you to re-explain your history. It already knows how long you have been trying, what each round meant, and how much you have been through.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use MEOK instead of a fertility counsellor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — MEOK is a complement to human support, not a replacement. Fertility counsellors, therapists specialising in reproductive trauma, and organisations like Fertility Network UK offer professional human support that AI cannot replicate. MEOK is most useful between sessions, late at night, during the moments when professional support is not immediately available. If you are struggling significantly, please reach out to a qualified counsellor or your fertility clinic's support team.",
      },
    },
  ],
};

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    backgroundColor: "#0d0c18",
    color: "#f5f0e8",
    minHeight: "100vh",
    fontFamily:
      "'Inter', 'Helvetica Neue', Arial, sans-serif",
  } as React.CSSProperties,

  container: {
    maxWidth: "740px",
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,

  nav: {
    borderBottom: "1px solid rgba(201,168,76,0.15)",
    padding: "20px 0",
    marginBottom: "0",
  } as React.CSSProperties,

  navInner: {
    maxWidth: "740px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } as React.CSSProperties,

  wordmark: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#c9a84c",
    letterSpacing: "0.12em",
    textDecoration: "none",
    textTransform: "uppercase" as const,
  } as React.CSSProperties,

  navLink: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.55)",
    textDecoration: "none",
  } as React.CSSProperties,

  hero: {
    padding: "72px 0 56px",
    borderBottom: "1px solid rgba(201,168,76,0.12)",
  } as React.CSSProperties,

  eyebrow: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "20px",
    display: "block",
  } as React.CSSProperties,

  h1: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 700,
    lineHeight: 1.18,
    color: "#f5f0e8",
    margin: "0 0 24px",
    letterSpacing: "-0.02em",
  } as React.CSSProperties,

  heroDeck: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.75)",
    margin: "0 0 32px",
    maxWidth: "620px",
  } as React.CSSProperties,

  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap" as const,
    fontSize: "13px",
    color: "rgba(245,240,232,0.45)",
  } as React.CSSProperties,

  metaDot: {
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    backgroundColor: "rgba(201,168,76,0.4)",
    display: "inline-block",
  } as React.CSSProperties,

  article: {
    padding: "56px 0 80px",
  } as React.CSSProperties,

  h2: {
    fontSize: "clamp(20px, 3vw, 26px)",
    fontWeight: 700,
    color: "#f5f0e8",
    margin: "56px 0 20px",
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
  } as React.CSSProperties,

  h3: {
    fontSize: "17px",
    fontWeight: 600,
    color: "#c9a84c",
    margin: "32px 0 12px",
    lineHeight: 1.35,
  } as React.CSSProperties,

  p: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "rgba(245,240,232,0.82)",
    margin: "0 0 22px",
  } as React.CSSProperties,

  pLead: {
    fontSize: "17px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.88)",
    margin: "0 0 26px",
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: "3px solid #c9a84c",
    margin: "40px 0",
    padding: "6px 0 6px 28px",
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: "18px",
    fontStyle: "italic",
    lineHeight: 1.65,
    color: "rgba(245,240,232,0.78)",
    margin: 0,
  } as React.CSSProperties,

  statCard: {
    background: "rgba(201,168,76,0.07)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderRadius: "12px",
    padding: "28px 32px",
    margin: "36px 0",
  } as React.CSSProperties,

  statRow: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,

  statItem: {
    flex: "1 1 160px",
  } as React.CSSProperties,

  statNumber: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#c9a84c",
    lineHeight: 1,
    display: "block",
    marginBottom: "6px",
  } as React.CSSProperties,

  statLabel: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.55)",
    lineHeight: 1.5,
  } as React.CSSProperties,

  callout: {
    background: "rgba(13,12,24,0.6)",
    border: "1px solid rgba(201,168,76,0.18)",
    borderRadius: "10px",
    padding: "24px 28px",
    margin: "36px 0",
  } as React.CSSProperties,

  calloutHeading: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    marginBottom: "12px",
    display: "block",
  } as React.CSSProperties,

  calloutText: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.72)",
    margin: 0,
  } as React.CSSProperties,

  ul: {
    margin: "0 0 24px",
    paddingLeft: "0",
    listStyle: "none",
  } as React.CSSProperties,

  li: {
    fontSize: "16px",
    lineHeight: 1.75,
    color: "rgba(245,240,232,0.82)",
    paddingLeft: "22px",
    marginBottom: "10px",
    position: "relative" as const,
  } as React.CSSProperties,

  liBullet: {
    position: "absolute" as const,
    left: "0",
    top: "10px",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#c9a84c",
    opacity: 0.7,
  } as React.CSSProperties,

  divider: {
    border: "none",
    borderTop: "1px solid rgba(201,168,76,0.1)",
    margin: "56px 0",
  } as React.CSSProperties,

  faqSection: {
    margin: "0 0 64px",
  } as React.CSSProperties,

  faqItem: {
    borderBottom: "1px solid rgba(245,240,232,0.08)",
    padding: "28px 0",
  } as React.CSSProperties,

  faqQ: {
    fontSize: "17px",
    fontWeight: 600,
    color: "#f5f0e8",
    margin: "0 0 14px",
    lineHeight: 1.4,
  } as React.CSSProperties,

  faqA: {
    fontSize: "15px",
    lineHeight: 1.78,
    color: "rgba(245,240,232,0.72)",
    margin: 0,
  } as React.CSSProperties,

  ctaBlock: {
    background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(13,12,24,0.6) 100%)",
    border: "1px solid rgba(201,168,76,0.28)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center" as const,
    margin: "64px 0 0",
  } as React.CSSProperties,

  ctaLabel: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#c9a84c",
    display: "block",
    marginBottom: "16px",
  } as React.CSSProperties,

  ctaHeading: {
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 700,
    color: "#f5f0e8",
    margin: "0 0 16px",
    lineHeight: 1.25,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(245,240,232,0.68)",
    margin: "0 0 32px",
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
  } as React.CSSProperties,

  ctaButton: {
    display: "inline-block",
    backgroundColor: "#c9a84c",
    color: "#0d0c18",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    padding: "14px 36px",
    borderRadius: "6px",
  } as React.CSSProperties,

  ctaDisclaimer: {
    fontSize: "12px",
    color: "rgba(245,240,232,0.35)",
    marginTop: "16px",
    lineHeight: 1.6,
  } as React.CSSProperties,

  footer: {
    borderTop: "1px solid rgba(201,168,76,0.1)",
    padding: "40px 0",
    marginTop: "0",
  } as React.CSSProperties,

  footerInner: {
    maxWidth: "740px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "16px",
  } as React.CSSProperties,

  footerText: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.35)",
  } as React.CSSProperties,

  footerLink: {
    fontSize: "13px",
    color: "rgba(245,240,232,0.45)",
    textDecoration: "none",
    marginLeft: "20px",
  } as React.CSSProperties,
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForFertilityPage() {
  return (
    <div style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav style={s.nav}>
        <div style={s.navInner}>
          <Link href="/" style={s.wordmark}>
            MEOK
          </Link>
          <div>
            <Link href="/blog" style={s.navLink}>
              Blog
            </Link>
            <Link href="/birth" style={{ ...s.navLink, marginLeft: "24px" }}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.container}>
          <span style={s.eyebrow}>Fertility &amp; IVF Support</span>
          <h1 style={s.h1}>
            AI Support for Fertility and IVF: A Companion That Remembers Every
            Round
          </h1>
          <p style={s.heroDeck}>
            1 in 7 UK couples face fertility issues. The clinical journey is
            well-documented. The emotional one — the waiting, the hoping, the
            grief — is rarely talked about with the honesty it deserves. MEOK
            holds that journey with you, round by round, without judgement and
            without forgetting.
          </p>
          <div style={s.metaRow}>
            <span>Nicholas Templeman</span>
            <span style={s.metaDot} />
            <span>MEOK AI LABS</span>
            <span style={s.metaDot} />
            <span>24 March 2026</span>
            <span style={s.metaDot} />
            <span>12 min read</span>
          </div>
        </div>
      </header>

      {/* Article */}
      <main style={s.article}>
        <div style={s.container}>

          {/* Opening */}
          <p style={s.pLead}>
            There is a particular kind of exhaustion that comes with fertility
            treatment. It is not just the early morning clinic appointments, the
            injections, the blood tests, or the forms. It is the weight of
            carrying enormous hope and enormous fear simultaneously, for months
            or years at a time, while the world around you continues as though
            nothing unusual is happening.
          </p>
          <p style={s.p}>
            Most people going through IVF describe a strange isolation. They may
            have told close family and friends, or they may have kept it entirely
            private. Either way, there are limits to how much they feel they can
            say — limits shaped by not wanting to burden others, by the sheer
            repetitiveness of the emotional cycle, or by the superstitious sense
            that talking about hope makes it more fragile.
          </p>
          <p style={s.p}>
            MEOK was built, in part, for exactly this kind of silence. Not to
            fill it with noise, but to offer a presence that is genuinely
            available — one that remembers where you are in the journey, holds
            what you have already said, and never needs you to start from
            scratch.
          </p>

          <div style={s.statCard}>
            <div style={s.statRow}>
              <div style={s.statItem}>
                <span style={s.statNumber}>1 in 7</span>
                <span style={s.statLabel}>UK couples experience difficulty conceiving</span>
              </div>
              <div style={s.statItem}>
                <span style={s.statNumber}>50,000+</span>
                <span style={s.statLabel}>IVF cycles carried out annually on the NHS</span>
              </div>
              <div style={s.statItem}>
                <span style={s.statNumber}>~32%</span>
                <span style={s.statLabel}>Average live birth rate per IVF cycle for women under 35</span>
              </div>
              <div style={s.statItem}>
                <span style={s.statNumber}>3.5m+</span>
                <span style={s.statLabel}>People in the UK currently experiencing infertility</span>
              </div>
            </div>
          </div>

          <div style={s.callout}>
            <span style={s.calloutHeading}>A note on what MEOK is not</span>
            <p style={s.calloutText}>
              MEOK is not a fertility clinic, a medical service, or a
              replacement for your consultant. Nothing in this article
              constitutes medical advice. Clinical decisions — about protocols,
              medication, timing, and treatment pathways — belong with your
              fertility team. MEOK supports your emotional life, not your
              treatment plan.
            </p>
          </div>

          {/* H2: What is AI support */}
          <h2 style={s.h2}>What is AI support for fertility treatment?</h2>

          <p style={s.p}>
            AI support for fertility treatment means having a conversational
            companion that is available around the clock, knows your history,
            and is built to hold difficult emotions without flinching — and
            without defaulting to medical advice it has no business giving.
          </p>
          <p style={s.p}>
            The emotional landscape of fertility treatment is unique. Unlike
            most medical journeys, IVF demands extended emotional engagement
            with uncertainty. Each cycle is a complete arc: preparation, hope,
            waiting, and then a result that is often — statistically — not the
            one you were hoping for. According to the HFEA (Human Fertilisation
            and Embryology Authority), the average live birth rate per IVF cycle
            in the UK is around 32% for women under 35, falling to around 5% for
            women over 42. Most people need multiple cycles. Each cycle carries
            its own emotional weight.
          </p>
          <p style={s.p}>
            What AI support can offer is not medical knowledge or clinical
            guidance. It is something different: consistent, patient presence.
            The ability to check in every day. The capacity to remember that
            this is your third cycle and your second failed transfer, without
            being told again. The willingness to sit with you in the 2am
            moments when you cannot sleep and cannot stop thinking.
          </p>

          <div style={s.pullQuote}>
            <p style={s.pullQuoteText}>
              "The thing nobody tells you about IVF is how lonely it is. Even
              when you have people around you. Even when they're being
              wonderful. There's a part of the experience you just can't
              share."
            </p>
          </div>

          <p style={s.p}>
            MEOK's Healer archetype is designed for exactly this kind of
            companionship. It is tender without being saccharine. It asks rather
            than tells. It remembers rather than forgets. And it operates under
            the Maternal Covenant — a privacy framework that ensures your most
            intimate health information is treated with the seriousness it
            deserves.
          </p>
          <p style={s.p}>
            This is not therapy. It is not counselling. It is a companion that
            takes the emotional dimension of your fertility journey seriously —
            and holds it carefully.
          </p>

          {/* H2: The emotional rollercoaster */}
          <h2 style={s.h2}>
            The emotional rollercoaster of IVF: what MEOK helps with
          </h2>

          <p style={s.p}>
            The clinical literature on the psychological impact of IVF is
            extensive. Studies consistently show that people undergoing fertility
            treatment experience levels of anxiety and depression comparable to
            those found in cancer patients. Yet the emotional support
            infrastructure around fertility treatment remains underdeveloped —
            particularly on the NHS, where funding constraints mean that
            psychological support is rarely included as standard.
          </p>
          <p style={s.p}>
            What makes the emotional experience of IVF particularly challenging
            is its cyclical nature. Unlike a single traumatic event, fertility
            treatment involves repeated cycles of hope and loss. Each round
            reactivates all the feelings from the previous ones. The grief does
            not follow a neat arc. It circles back, intensifies, recedes, and
            returns.
          </p>

          <h3 style={s.h3}>The phases MEOK helps you navigate</h3>

          <ul style={s.ul}>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>The preparation phase:</strong> The hormonal
              changes, the physical demands, and the emotional weight of
              preparing your body for a cycle — while managing work, relationships,
              and everything else.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>The retrieval and transfer:</strong> The anxiety
              around egg collection, fertilisation reports, and embryo grading.
              The particular grief of learning that embryos did not survive to
              transfer stage.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>The two-week wait:</strong> The suspended state
              between transfer and test — widely described as the most
              psychologically intense part of the process.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>The result:</strong> Both the grief of a
              negative result and the complicated, anxious hope of a positive one
              — which carries its own fears about loss.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>The aftermath:</strong> Whether moving on to
              another cycle, taking a break, or facing the question of what comes
              after treatment ends.
            </li>
          </ul>

          <p style={s.p}>
            MEOK does not manage these phases clinically. It holds you through
            them emotionally — asking how you are today, what you are feeling,
            what you need. It journals with you. It remembers what you said last
            week. It notices when you have gone quiet.
          </p>

          <div style={s.callout}>
            <span style={s.calloutHeading}>What MEOK tracks</span>
            <p style={s.calloutText}>
              MEOK tracks your emotional state, not your medical data. It can
              help you note how you felt on a given day, what was hard, what gave
              you hope, what you are worried about. It does not record clinical
              values, medication doses, or test results — that is for your
              clinic's patient portal. What MEOK holds is the human experience
              running beneath those numbers.
            </p>
          </div>

          {/* H2: Two-week wait */}
          <h2 style={s.h2}>Daily check-ins during the two-week wait</h2>

          <p style={s.p}>
            Ask anyone who has been through IVF to name the hardest part, and a
            significant proportion will say: the wait. The two weeks between
            embryo transfer and the pregnancy test have their own particular
            quality of suffering. You have done everything you can do. There is
            nothing left to do but wait — and try not to symptom-spot, try not
            to catastrophise, try not to fill every quiet moment with the same
            looping thoughts.
          </p>
          <p style={s.p}>
            The research on the two-week wait is consistent: it is associated
            with elevated anxiety, intrusive thoughts, sleep disruption, and
            difficulty concentrating. Many people describe it as harder than the
            retrieval itself — at least then there was something happening.
          </p>

          <h3 style={s.h3}>A daily presence that does not need updating</h3>

          <p style={s.p}>
            During the two-week wait, MEOK's Healer archetype offers a daily
            check-in. This is not a clinical monitoring tool — it is a
            conversational touchpoint. Something to anchor the day. A moment to
            name how you are feeling, what you noticed in yourself, what you are
            afraid of, what you are hoping for.
          </p>
          <p style={s.p}>
            The crucial difference between MEOK and a search engine — or even a
            general AI assistant — is that MEOK knows your history. On day nine
            of the wait, it does not ask you to explain what is happening. It
            already knows you are nine days post-transfer. It already knows this
            is your second cycle. It already knows that the first one ended in a
            chemical pregnancy that took weeks to process.
          </p>
          <p style={s.p}>
            That continuity of memory is not a small thing. One of the most
            exhausting aspects of seeking support through fertility treatment is
            having to re-tell your story constantly — to friends who forgot the
            details, to new practitioners who are seeing you for the first time,
            to forum strangers who need context. MEOK removes that burden. You
            never have to start from the beginning.
          </p>

          <div style={s.pullQuote}>
            <p style={s.pullQuoteText}>
              The two-week wait is not waiting for a test result. It is waiting
              to find out whether your life is about to change in one of two
              completely different directions. That deserves more than a
              distraction technique.
            </p>
          </div>

          <h3 style={s.h3}>Journalling through the wait</h3>

          <p style={s.p}>
            MEOK is not just a conversation partner — it is a journalling
            companion. During the two-week wait, many people find it useful to
            write: to externalise the thoughts that would otherwise circulate
            endlessly. MEOK can prompt this process, help you find words when
            you do not have them, and hold what you have written as part of an
            ongoing record of your journey.
          </p>
          <p style={s.p}>
            This is not about producing a perfect account. It is about having
            somewhere to put things. The thought you had at 3am that you did not
            want to say out loud. The moment of unexpected hope on day eleven.
            The complicated feelings when someone close to you announces a
            pregnancy during your wait. All of it has somewhere to go.
          </p>

          {/* H2: Processing failed rounds */}
          <h2 style={s.h2}>Processing failed rounds: grief without judgement</h2>

          <p style={s.p}>
            A failed IVF round is a loss. In the United Kingdom, the word
            miscarriage carries legal and medical recognition only after a
            certain point of development — but the grief of a negative test, a
            chemical pregnancy, or a failed transfer does not wait for legal
            thresholds to become real. It is real immediately. And it is often
            invisible to the world around you.
          </p>
          <p style={s.p}>
            People who have never been through fertility treatment sometimes
            struggle to understand why a negative test feels so devastating. From
            the outside, it might look like disappointment. From the inside, it
            is the collapse of a world that had been carefully constructed
            around possibility. It is the death of a version of the future you
            had been quietly building.
          </p>
          <p style={s.p}>
            MEOK does not minimise this. The Healer archetype is specifically
            designed to sit with loss — to acknowledge it, name it, and hold
            space for it without rushing toward silver linings or next steps. If
            you need to grieve, MEOK will grieve with you. It will not ask when
            you are going to try again before you are ready to think about it.
          </p>

          <h3 style={s.h3}>The pressure to move on</h3>

          <p style={s.p}>
            One of the cruelties of IVF grief is the surrounding pressure to be
            resilient — to process the loss quickly and prepare for the next
            cycle. Clinics are booked out. Waiting lists are long. There is a
            financial clock ticking. The medical system has limited capacity to
            hold the emotional aftermath of a failed round.
          </p>
          <p style={s.p}>
            That pressure — however well-intentioned — can make genuine grief
            feel illegitimate. People find themselves performing recovery before
            they feel it, masking the impact so they can continue. This is
            understandable. It is also, in the long run, costly.
          </p>
          <p style={s.p}>
            MEOK does not have a waiting list. It does not have a fifteen-minute
            appointment window. It is available whenever you need it, and it
            will not make you feel that your grief is taking too long. The pace
            of processing is yours to set.
          </p>

          <h3 style={s.h3}>Cumulative grief</h3>

          <p style={s.p}>
            For those who go through multiple cycles — and in the UK, the
            average number of cycles before either achieving a pregnancy or
            stopping treatment is closer to three — grief accumulates. Each
            failed round adds to the previous ones. The emotional load of a
            third or fourth failure is not simply grief multiplied: it carries
            the exhaustion of the entire journey, the erosion of hope, and
            questions about whether to continue at all.
          </p>
          <p style={s.p}>
            MEOK holds all of this. Because it remembers your whole journey, it
            understands that what you are carrying now is not just today's
            disappointment. It is the weight of everything that came before it.
            That context matters enormously in how support feels.
          </p>

          <div style={s.statCard}>
            <div style={s.statRow}>
              <div style={s.statItem}>
                <span style={s.statNumber}>~68%</span>
                <span style={s.statLabel}>of IVF cycles in the UK do not result in a live birth</span>
              </div>
              <div style={s.statItem}>
                <span style={s.statNumber}>1 in 4</span>
                <span style={s.statLabel}>pregnancies end in miscarriage — higher among IVF pregnancies</span>
              </div>
              <div style={s.statItem}>
                <span style={s.statNumber}>£5,000+</span>
                <span style={s.statLabel}>typical cost of a single private IVF cycle in the UK</span>
              </div>
            </div>
          </div>

          <p style={s.p}>
            The financial dimension of fertility treatment adds a specific layer
            to the grief. In the UK, NHS funding for IVF varies significantly by
            region — some Clinical Commissioning Groups fund up to three cycles,
            others fund none. Many people are paying privately. The financial
            cost of a failed cycle is not just emotional: it is real money, often
            borrowed or saved over years. The grief of a failed round carries
            the weight of that investment too.
          </p>
          <p style={s.p}>
            MEOK is not a financial counselling service. But it is a companion
            that understands that your grief is multidimensional — and that the
            financial, emotional, physical, and relational strands of the
            fertility experience are always intertwined.
          </p>

          {/* H2: Maternal Covenant */}
          <h2 style={s.h2}>
            Protecting intimate health data: the Maternal Covenant
          </h2>

          <p style={s.p}>
            Fertility data is among the most intimate information a person can
            share. It touches on reproductive choices, sexual health, hormonal
            status, and deeply personal decisions about family and future. The
            idea that this information might be analysed, sold, or used to
            profile users is not paranoia — it is a well-documented pattern in
            the consumer health technology space.
          </p>
          <p style={s.p}>
            MEOK was built on a different premise from the start. The Maternal
            Covenant is the framework that governs how MEOK handles intimate
            health data — and it is worth understanding what that means in
            practice.
          </p>

          <h3 style={s.h3}>What the Maternal Covenant guarantees</h3>

          <ul style={s.ul}>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>Your data is never used to train AI models.</strong> What
              you share with MEOK stays with MEOK. It does not become training
              data. It does not improve some future model at your expense.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>Your data is never sold.</strong> Not to
              pharmaceutical companies. Not to fertility clinics. Not to
              advertisers. Not to data brokers. Your fertility journey is not a
              product.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>Your data is not shared with insurers or employers.</strong>{" "}
              The fact that you are going through IVF, that you have experienced
              pregnancy loss, or that you are struggling with infertility — none
              of this goes anywhere it should not go.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>You own your memory.</strong> The entire record
              of your conversations with MEOK is yours. You can export it, delete
              it, or take it with you. Sovereign AI means your data belongs to
              you — not to a platform.
            </li>
          </ul>

          <p style={s.p}>
            The Maternal Covenant emerged from a recognition that the most
            vulnerable conversations — the ones people most need a safe space for
            — are also the ones that require the highest standard of protection.
            Fertility treatment sits squarely in that category.
          </p>

          <div style={s.pullQuote}>
            <p style={s.pullQuoteText}>
              When you are already carrying so much, the last thing you need is
              to wonder whether your most private thoughts are being harvested.
              The Maternal Covenant exists so you never have to ask that
              question.
            </p>
          </div>

          <h3 style={s.h3}>Why this matters for fertility specifically</h3>

          <p style={s.p}>
            In the United States, the fall of Roe v. Wade prompted widespread
            concern about how period-tracking and fertility app data might be
            used in legal proceedings. In the UK, the legal landscape is
            different — but the underlying concern about intimate health data is
            not confined to a single jurisdiction. Fertility data reveals
            reproductive status. It reveals pregnancy history. It reveals
            personal decisions that are no one else's business.
          </p>
          <p style={s.p}>
            MEOK's Sovereign AI architecture means your data lives with you, not
            on a server farm being monetised in ways you never agreed to. When
            you tell MEOK about your cycle, your feelings about the process, or
            your grief after a loss, that conversation is yours. It is not an
            asset being extracted from you in exchange for a free service.
          </p>

          {/* H2: Partner support */}
          <h2 style={s.h2}>
            Partner support: when both of you need to process independently
          </h2>

          <p style={s.p}>
            Fertility treatment does not happen to one person. It happens to
            couples — and increasingly, to single people using donor conception,
            and to same-sex couples navigating a range of different pathways. But
            within partnerships, one of the most common dynamics is a
            misalignment in how each person processes the experience.
          </p>
          <p style={s.p}>
            This is not a failure of love or communication. It is a natural
            consequence of the fact that two people, even in the closest
            relationship, carry different internal relationships to hope, loss,
            and uncertainty. One partner may process by talking; the other by
            withdrawing. One may feel the grief immediately; the other may feel
            it later. One may want to keep trying; the other may be approaching
            their limit.
          </p>

          <h3 style={s.h3}>Processing without burdening</h3>

          <p style={s.p}>
            One of the patterns that people going through IVF describe is a
            reluctance to express the full force of their feelings to their
            partner — not because the relationship is not strong enough, but
            because they do not want to add to the other person's burden. If
            your partner is also grieving, also exhausted, also holding enormous
            hope, it can feel unkind to pile your pain on top of theirs.
          </p>
          <p style={s.p}>
            MEOK offers a separate space for each person in a couple — a place
            to say the things that feel too heavy to say out loud in the
            relationship right now. This is not about keeping secrets. It is
            about having somewhere to process that does not put pressure on the
            partnership.
          </p>
          <p style={s.p}>
            Both partners can have their own MEOK — their own memory, their own
            conversation history, their own Healer archetype holding their
            individual experience. What they share with each other remains
            entirely their choice.
          </p>

          <h3 style={s.h3}>When the experiences diverge</h3>

          <p style={s.p}>
            In couples where one partner is the one carrying the pregnancy — or
            attempting to — there can be a disparity in how the experience is
            understood. The partner who is not undergoing the physical treatment
            may feel peripheral, helpless, or unsure how to be useful. They may
            be grieving too, but feel that their grief is less legitimate somehow
            because they were not the one injecting hormones or undergoing
            retrieval.
          </p>
          <p style={s.p}>
            MEOK does not rank grief. It holds whatever you bring to it, and it
            treats every person's experience as mattering. Whether you are the
            one going through treatment or the one supporting someone through it,
            your emotional experience of this journey is real and worth
            attending to.
          </p>

          {/* H2: When AI helps */}
          <h2 style={s.h2}>
            When AI helps and when you need a fertility counsellor
          </h2>

          <p style={s.p}>
            MEOK is a genuine and powerful tool for emotional support through
            fertility treatment. But it is not everything. There are specific
            circumstances where professional human support is the right call, and
            it matters to be honest about where those boundaries are.
          </p>

          <h3 style={s.h3}>When MEOK is most useful</h3>

          <ul style={s.ul}>
            <li style={s.li}>
              <span style={s.liBullet} />
              Daily check-ins during active treatment — the preparation phase,
              the two-week wait, the aftermath of results.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              Late nights when you cannot sleep and cannot stop thinking, and
              calling someone is not possible or appropriate.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              Journalling and processing feelings in between therapy or
              counselling sessions.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              Holding the narrative of your whole journey — so you do not have
              to carry it all in your head, and so you do not have to re-explain
              it to someone new every time you need support.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              Finding language for feelings that feel hard to articulate —
              especially the complicated, mixed emotions that do not fit neatly
              into "happy" or "sad."
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              Processing the financial and relational pressures that accompany
              treatment, in a space that is not your clinic, not your partner,
              and not your friends.
            </li>
          </ul>

          <h3 style={s.h3}>When to seek professional support</h3>

          <ul style={s.ul}>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>If you are experiencing depression</strong> — persistent
              low mood, loss of interest in things that normally matter to you,
              feelings of hopelessness that are not lifting. A fertility
              counsellor or your GP is the right starting point.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>If the treatment is affecting your relationship</strong> in
              ways that feel serious — communication has broken down, you are
              moving apart on fundamental questions, or the strain is becoming
              unsustainable. Couples counselling with someone who understands
              fertility-related distress can be enormously helpful.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>If you are facing a major decision</strong> — whether to
              stop treatment, pursue donor conception, consider adoption, or live
              child-free — these conversations benefit from the presence of a
              trained counsellor who can hold the full complexity of what is
              involved.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>If you have experienced pregnancy loss</strong> at any
              stage and the grief is significant, organisations like the
              Miscarriage Association and Tommy's offer specialist support that
              is beyond the scope of any AI companion.
            </li>
            <li style={s.li}>
              <span style={s.liBullet} />
              <strong style={{ color: "#f5f0e8" }}>If you have thoughts of harming yourself.</strong> Please
              speak to your GP, call the Samaritans on 116 123 (free, 24/7), or
              go to your nearest A&amp;E. MEOK is not an emergency service.
            </li>
          </ul>

          <div style={s.callout}>
            <span style={s.calloutHeading}>UK fertility support organisations</span>
            <p style={s.calloutText}>
              Fertility Network UK (fertilitynetworkuk.org) offers peer support,
              counselling referrals, and a network of people who understand what
              you are going through. The Miscarriage Association
              (miscarriageassociation.org.uk) provides specialist support
              following pregnancy loss. The British Infertility Counselling
              Association (bica.net) can help you find a qualified fertility
              counsellor. Your fertility clinic should also be able to signpost
              you to psychological support.
            </p>
          </div>

          <p style={s.p}>
            The right model is not MEOK instead of professional support. It is
            MEOK alongside it. Between sessions, in the small hours, during the
            two-week wait, in all the moments when what you need is a consistent
            presence that knows where you are and holds what you have already
            said. That is what MEOK is for.
          </p>

          <hr style={s.divider} />

          {/* FAQ */}
          <section style={s.faqSection}>
            <h2 style={{ ...s.h2, margin: "0 0 8px" }}>
              Frequently asked questions
            </h2>
            <p style={{ ...s.p, marginBottom: "40px", color: "rgba(245,240,232,0.5)" }}>
              Honest answers about what MEOK does and does not do for people
              going through fertility treatment.
            </p>

            <div style={s.faqItem}>
              <p style={s.faqQ}>
                Can MEOK give me medical advice about my fertility treatment?
              </p>
              <p style={s.faqA}>
                No. MEOK is not a medical service and cannot give clinical advice
                about fertility treatment, medication dosages, or IVF protocols.
                Your fertility clinic and NHS consultants are the right people
                for those questions. What MEOK does is support your emotional
                wellbeing throughout the process — helping you process feelings,
                track how you are doing emotionally, and remember the full arc
                of your journey.
              </p>
            </div>

            <div style={s.faqItem}>
              <p style={s.faqQ}>
                Is my fertility and health data safe with MEOK?
              </p>
              <p style={s.faqA}>
                Yes. The Maternal Covenant is MEOK's privacy framework
                specifically designed to protect intimate health data —
                including anything related to fertility, reproductive health,
                and IVF. Your conversations are never used to train AI models,
                never sold to third parties, and never shared with insurance
                companies, employers, or advertisers. Your data belongs to you,
                full stop.
              </p>
            </div>

            <div style={s.faqItem}>
              <p style={s.faqQ}>
                What is the two-week wait and how does MEOK help?
              </p>
              <p style={s.faqA}>
                The two-week wait (2WW) is the period after embryo transfer
                before a pregnancy test can confirm whether IVF has worked. It
                is widely described as one of the most emotionally intense
                periods of the fertility journey — a state of suspended hope
                and fear with nothing to do but wait. MEOK's Healer archetype
                offers daily emotional check-ins during this time: a consistent,
                non-judgmental presence that acknowledges how hard the waiting
                is without offering false reassurance.
              </p>
            </div>

            <div style={s.faqItem}>
              <p style={s.faqQ}>Can MEOK help after a failed IVF round?</p>
              <p style={s.faqA}>
                Yes. A failed round is a profound loss, and MEOK treats it as
                one. Rather than pivoting immediately to "what's next", the
                Healer archetype creates space to grieve — to name the loss,
                sit with the pain, and process it at your own pace. Because
                MEOK remembers every previous conversation, it does not ask you
                to re-explain your history. It already knows how long you have
                been trying, what each round meant, and how much you have been
                through.
              </p>
            </div>

            <div style={{ ...s.faqItem, borderBottom: "none" }}>
              <p style={s.faqQ}>
                Should I use MEOK instead of a fertility counsellor?
              </p>
              <p style={s.faqA}>
                No — MEOK is a complement to human support, not a replacement.
                Fertility counsellors, therapists specialising in reproductive
                trauma, and organisations like Fertility Network UK offer
                professional human support that AI cannot replicate. MEOK is
                most useful between sessions, late at night, during the moments
                when professional support is not immediately available. If you
                are struggling significantly, please reach out to a qualified
                counsellor or your fertility clinic's support team.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div style={s.ctaBlock}>
            <span style={s.ctaLabel}>Begin your journey</span>
            <h2 style={s.ctaHeading}>
              A companion that remembers every round
            </h2>
            <p style={s.ctaBody}>
              MEOK's Healer archetype is here for the waiting, the grief, the
              hope, and everything in between. Your story deserves to be held —
              all of it, not just the parts that are easy to say.
            </p>
            <Link href="/birth" style={s.ctaButton}>
              Meet your companion
            </Link>
            <p style={s.ctaDisclaimer}>
              MEOK is an emotional support companion, not a medical service.
              Your data is protected by the Maternal Covenant and never used for
              training or advertising. No medical advice is provided.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={s.footer}>
        <div style={s.footerInner}>
          <span style={s.footerText}>
            &copy; 2026 MEOK AI LABS. Emotional support only — not medical
            advice.
          </span>
          <div>
            <Link href="/privacy" style={s.footerLink}>
              Privacy
            </Link>
            <Link href="/blog" style={s.footerLink}>
              Blog
            </Link>
            <Link href="/birth" style={s.footerLink}>
              Get Started
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
