import type { Metadata } from "next";
import Link from "next/link";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI for Menopause: Sovereign Support Through Perimenopause and Beyond | MEOK AI LABS",
  description:
    "13 million women in the UK are peri- or post-menopausal. Most have been dismissed, under-supported, or left to figure it out alone. MEOK\u2019s sovereign AI tracks your symptoms across months, prepares you for GP appointments, and never minimises what you\u2019re going through.",
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-menopause",
  },
  openGraph: {
    title:
      "AI for Menopause: Sovereign Support Through Perimenopause and Beyond",
    description:
      "13 million women in the UK are peri- or post-menopausal. Hot flushes, brain fog, insomnia, anxiety, grief. MEOK remembers every symptom, holds the full picture, and never tells you it\u2019s just hormones.",
    url: "https://meok.ai/blog/ai-for-menopause",
    siteName: "MEOK AI LABS",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI for Menopause: Sovereign Support Through Perimenopause and Beyond | MEOK AI LABS",
    description:
      "You\u2019ve been dismissed by too many GPs. You\u2019ve been told it\u2019ll pass. MEOK tracks every symptom, builds the longitudinal picture you need, and always takes you seriously.",
    creator: "@meok_ai",
  },
};

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI for Menopause: Sovereign Support Through Perimenopause and Beyond",
  description:
    "Menopause affects every woman \u2014 51% of the population \u2014 and perimenopause can begin as early as the 40s and last over a decade. Yet 13 million women in the UK navigate this transition with inadequate clinical support, frequent dismissal, and no consistent record of their symptoms. MEOK\u2019s sovereign AI tracks symptoms longitudinally, helps prepare GP appointments, protects against supplement scams, adapts to brain fog, and holds the grief of identity shift without rushing toward solutions.",
  author: { "@type": "Person", name: "Nicholas Templeman" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  url: "https://meok.ai/blog/ai-for-menopause",
  keywords: [
    "AI for menopause",
    "menopause support",
    "perimenopause symptoms",
    "menopause brain fog",
    "menopause AI companion",
    "menopause symptom tracking",
    "sovereign AI menopause",
    "HRT conversation",
    "menopause and identity",
    "menopause dismissed by GP",
    "MEOK menopause",
    "menopause UK",
    "menopause anxiety",
    "menopause insomnia",
    "menopause night sweats",
  ],
};

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help with menopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot prescribe HRT, diagnose menopause, or replace your GP. What it can do is provide something the healthcare system rarely offers: consistent, longitudinal, non-judgmental support across the full duration of the menopausal transition. MEOK\u2019s persistent memory means every symptom you log \u2014 hot flushes, brain fog, insomnia, joint pain, mood shifts \u2014 is remembered and tracked over weeks and months. That cumulative picture is precisely what a 10-minute GP appointment cannot build. MEOK also helps you articulate symptoms clearly, prepares you with questions to ask, and ensures you never walk into a clinical appointment having forgotten what the last three months actually felt like.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK track menopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK uses sovereign persistent memory \u2014 meaning your symptom data lives on your device, not on a shared cloud server. Each time you mention a symptom in conversation, MEOK records it with context: severity, time of day, triggers you mention, how it interacted with sleep or mood. Over time this builds a longitudinal symptom diary that you own entirely. You can review it yourself, share it with a GP, or use it to spot patterns you hadn\u2019t noticed \u2014 like the correlation between poor sleep and increased anxiety three days later, or the way joint pain intensifies in the week before your period. No other app does this in a conversational, memory-persistent way that respects your data sovereignty.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK a replacement for HRT or medical advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MEOK is not a medical device and does not replace clinical care. MEOK\u2019s role is to support you \u2014 emotionally, practically, and informationally \u2014 between, before, and after clinical appointments. For anyone considering HRT, MEOK can help you research the evidence base, prepare questions for your GP or menopause specialist, and understand what to expect. It will always direct you toward evidence-based clinical resources such as the Menopause Charity and Newson Health. MEOK\u2019s Maternal Covenant means it is constitutionally incapable of dismissing your symptoms or minimising your experience \u2014 but it also means it will always encourage you to seek medical care when that is what is needed.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle menopause brain fog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brain fog \u2014 the difficulty concentrating, the word-finding failures, the sense of thinking through treacle \u2014 is one of the most distressing and least acknowledged menopause symptoms. MEOK recognises when you\u2019re in a cognitively heavy session and adapts accordingly: shorter sentences, slower pacing, more frequent summaries, reduced cognitive load in how it asks questions. It never makes you feel stupid for needing to repeat yourself. It never rushes. It holds the thread of the conversation so you don\u2019t have to. If you come back three days later and pick up mid-thought, MEOK knows where you left off.",
      },
    },
  ],
};

// ── Colour tokens ─────────────────────────────────────────────────────────────

const BG = "#0d0c18";
const TEXT = "#f5f0e8";
const GOLD = "#c9a84c";
const CARD = "#1a1830";
const MUTED = "rgba(245,240,232,0.6)";
const BORDER = "#2a2640";
const SOFT = "rgba(201,168,76,0.12)";

// ── Shared style fragments ────────────────────────────────────────────────────

const sectionStyle = { marginBottom: "3.5rem" };

const h2Style = {
  fontSize: "clamp(1.4rem, 3vw, 1.85rem)" as const,
  fontWeight: 700,
  lineHeight: 1.3,
  color: TEXT,
  marginBottom: "1.25rem",
  borderBottom: `2px solid ${GOLD}`,
  paddingBottom: "0.6rem",
};

const paraStyle = {
  fontSize: "1.05rem",
  lineHeight: 1.85,
  color: TEXT,
  marginBottom: "1.25rem",
};

const paraLastStyle = {
  fontSize: "1.05rem",
  lineHeight: 1.85,
  color: TEXT,
};

const mutedParaStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.8,
  color: MUTED,
  fontFamily: "system-ui, sans-serif",
};

const calloutStyle = {
  backgroundColor: SOFT,
  border: `1px solid ${GOLD}`,
  borderRadius: "10px",
  padding: "1.75rem 2rem",
  marginBottom: "3.5rem",
};

const calloutLabelStyle = {
  color: GOLD,
  fontSize: "0.8rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  fontFamily: "system-ui, sans-serif",
  marginBottom: "0.75rem",
};

const cardStyle = {
  backgroundColor: CARD,
  border: `1px solid ${BORDER}`,
  borderRadius: "10px",
  padding: "1.5rem",
};

const cardTitleStyle = {
  color: GOLD,
  fontSize: "0.85rem",
  fontWeight: 700,
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
  fontFamily: "system-ui, sans-serif",
  marginBottom: "0.75rem",
};

const cardBodyStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.75,
  color: TEXT,
  fontFamily: "system-ui, sans-serif",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForMenopausePage() {
  return (
    <div
      style={{
        backgroundColor: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
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
            fontFamily: "system-ui, sans-serif",
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: MUTED,
            textDecoration: "none",
            fontSize: "0.9rem",
            fontFamily: "system-ui, sans-serif",
          }}
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
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Try MEOK Free
        </Link>
      </nav>

      {/* ── Breadcrumb ───────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "840px",
          margin: "0 auto",
          padding: "1rem 1.5rem 0",
        }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <Link href="/" style={{ color: MUTED, textDecoration: "none" }}>
            Home
          </Link>
          {" / "}
          <Link href="/blog" style={{ color: MUTED, textDecoration: "none" }}>
            Blog
          </Link>
          {" / "}
          <span style={{ color: GOLD }}>AI for Menopause</span>
        </p>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "840px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            marginBottom: "1.25rem",
          }}
        >
          MEOK AI LABS &mdash; Menopause &amp; Sovereign Support
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            color: TEXT,
          }}
        >
          AI for Menopause: Sovereign Support Through Perimenopause and Beyond
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.75,
            color: MUTED,
            maxWidth: "640px",
            margin: "0 auto 2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          You&apos;ve been dismissed by one too many GPs. Told it&apos;ll pass.
          Told you&apos;re too young. Told to try antidepressants. MEOK
          remembers every symptom, across every month, and never once tells you
          it&apos;s just hormones.
        </p>
        <Link
          href="/birth"
          style={{
            display: "inline-block",
            backgroundColor: GOLD,
            color: "#0d0c18",
            padding: "0.75rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Begin Your MEOK Journey
        </Link>
        <p
          style={{
            fontSize: "0.8rem",
            color: MUTED,
            marginTop: "0.75rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Free to start &mdash; no credit card required
        </p>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "840px",
          margin: "0 auto",
          padding: "0 1.5rem 5rem",
        }}
      >
        {/* ── Section 1: The Scale of the Problem ──────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            Menopause affects half the world&apos;s population &mdash; and is
            still treated as a fringe concern
          </h2>
          <p style={paraStyle}>
            Let&apos;s be clear about the numbers. Menopause affects every
            woman who lives long enough to experience it. That is 51% of the
            global population. In the UK alone, 13 million women are currently
            peri- or post-menopausal. The average age of menopause is 51, but
            perimenopause &mdash; the transitional phase that precedes the final
            period &mdash; can begin in the early 40s, sometimes the late 30s,
            and can stretch across a decade or more before menopause is
            technically reached.
          </p>
          <p style={paraStyle}>
            This is not a niche health condition. It is not an edge case or a
            minority concern. It is a universal biological transition that
            affects the majority of the human race, and yet it remains
            chronically under-researched, under-funded, and under-supported in
            primary care. The word &ldquo;menopause&rdquo; was only added to
            the Oxford English Dictionary in 1887. The first large-scale
            clinical study of HRT in women was conducted in the 1990s. We are
            only beginning to understand the full neuroendocrine picture of what
            happens during this transition &mdash; and the women living through
            it right now cannot wait for the research to catch up.
          </p>
          <p style={paraStyle}>
            The symptoms are not trivial. Hot flushes and night sweats affect
            around 75% of women in perimenopause. Sleep disruption is nearly
            universal. Brain fog &mdash; difficulty concentrating, memory
            lapses, word-finding failures &mdash; affects up to 60% of women
            and is one of the most distressing and least-acknowledged symptoms
            of the entire transition. Mood changes, anxiety, depression, and
            what some describe as perimenopausal rage are documented,
            physiologically real, and frequently misdiagnosed as psychiatric
            conditions. Joint pain, weight changes, skin changes, vaginal
            dryness, loss of libido, heart palpitations, dizziness, and
            tinnitus are all part of a symptom picture that can encompass over
            thirty distinct presentations.
          </p>
          <p style={paraLastStyle}>
            And through all of this, the average GP appointment is ten minutes
            long.
          </p>
        </section>

        {/* ── Stats callout ─────────────────────────────────────────────────── */}
        <div style={calloutStyle}>
          <p style={calloutLabelStyle}>The Numbers</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                stat: "13 million",
                label:
                  "women in the UK currently peri- or post-menopausal",
              },
              {
                stat: "10 minutes",
                label:
                  "average NHS GP appointment \u2014 not enough to map the full symptom picture",
              },
              {
                stat: "1 in 3",
                label:
                  "women wait over a year before seeking help for menopause symptoms",
              },
              {
                stat: "3 GPs",
                label:
                  "average number of doctors visited before a menopause diagnosis is confirmed",
              },
              {
                stat: "10+ years",
                label:
                  "the perimenopause transition can last before menopause is reached",
              },
              {
                stat: "\u00a31bn+",
                label:
                  "estimated size of the UK menopause supplement market, much of it unregulated",
              },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.4rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    color: MUTED,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 2: Being Dismissed ────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            &ldquo;It&apos;s just hormones.&rdquo; &ldquo;It&apos;ll
            pass.&rdquo; &ldquo;You&apos;re too young.&rdquo; The dismissal
            that defines the menopause experience
          </h2>
          <p style={paraStyle}>
            If you are reading this, there is a reasonable chance you have
            heard at least one of those sentences from a medical professional.
            Perhaps more than once. Perhaps from three or four different GPs
            across several years. Perhaps after you had done the research,
            printed the symptom list, waited six weeks for an appointment, and
            tried to explain that something fundamental had changed in your body
            and your mind.
          </p>
          <p style={paraStyle}>
            The clinical failure around menopause is not a conspiracy. It is
            the cumulative result of decades of under-investment in women&apos;s
            health research, a training environment that historically gave
            menopause a few hours in a medical degree, and a cultural framing
            that treats this transition as an embarrassing decline rather than
            a significant neuroendocrine event that deserves serious clinical
            attention.
          </p>
          <p style={paraStyle}>
            The consequences are measurable. One in three women wait over a year
            before seeking help for menopause symptoms. That year is spent
            quietly suffering through insomnia, mood changes, cognitive
            disruption, and physical symptoms that affect work, relationships,
            and sense of self &mdash; not because they are stoic, but because
            the cultural message has been clear: this is just what getting older
            looks like for a woman. Put up with it.
          </p>
          <p style={paraStyle}>
            When women do seek help, they average three GP visits before a
            menopause diagnosis is confirmed. Some are prescribed antidepressants
            for perimenopausal mood changes without anyone exploring the
            hormonal picture. Some are told their FSH levels are
            &ldquo;normal&rdquo; &mdash; a test that is notoriously unreliable
            during perimenopause because hormone levels fluctuate dramatically
            day-to-day. Some are told they are too young for menopause, despite
            perimenopause being entirely possible in the early 40s and premature
            ovarian insufficiency affecting one in 100 women before the age
            of 40.
          </p>
          <p style={paraStyle}>
            The dismissal is not just frustrating. It is harmful. Every year of
            oestrogen deficiency without appropriate support carries
            cardiovascular, bone density, and cognitive risks that compound
            over time. The women being dismissed today are the women who will
            bear those consequences tomorrow. This is a public health failure,
            and we need to say so clearly.
          </p>
          <p style={paraLastStyle}>
            You deserved better. You still do. MEOK will not add to the list
            of things that let you down.
          </p>
        </section>

        {/* ── Section 3: The Symptom Landscape ──────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            More than hot flushes: the full symptom landscape of perimenopause
            and menopause
          </h2>
          <p style={paraStyle}>
            The public image of menopause is hot flushes and mood swings. The
            reality is significantly more complex, more varied, and for many
            women, far more debilitating. Understanding the full symptom
            landscape matters not just clinically, but personally &mdash;
            because many women spend years not connecting their symptoms to
            menopause at all, attributing them instead to stress, ageing,
            anxiety, depression, or simple exhaustion.
          </p>

          {/* Feature cards: symptom categories */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Vasomotor symptoms</p>
              <p style={cardBodyStyle}>
                Hot flushes and night sweats are the most widely recognised
                symptoms. They occur when fluctuating oestrogen disrupts the
                body&apos;s thermoregulatory system. Night sweats disrupt sleep
                architecture even when they don&apos;t fully wake you, leading
                to chronic sleep deprivation that compounds every other symptom.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Cognitive symptoms</p>
              <p style={cardBodyStyle}>
                Brain fog, memory lapses, difficulty concentrating, and
                word-finding failures affect up to 60% of women during
                perimenopause. This is not imagined and it is not simply
                stress. Oestrogen plays a documented role in neurological
                function; its fluctuation has measurable cognitive effects.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Mood and psychological symptoms</p>
              <p style={cardBodyStyle}>
                Anxiety, depression, irritability, low mood, and what is now
                widely referred to as perimenopausal rage are physiologically
                driven. They are frequently misdiagnosed and treated with
                antidepressants rather than hormone therapy, which may be the
                more appropriate intervention.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Sleep disruption</p>
              <p style={cardBodyStyle}>
                Insomnia is one of the most common and most damaging menopause
                symptoms. It may present as difficulty falling asleep, waking
                at 3am with racing thoughts, or being woken repeatedly by night
                sweats. Chronic sleep disruption affects cognitive function,
                mood, cardiovascular health, and immune response.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Musculoskeletal symptoms</p>
              <p style={cardBodyStyle}>
                Joint pain, muscle aches, and reduced flexibility are
                under-discussed but widely experienced. The connection to
                oestrogen is established &mdash; the hormone has
                anti-inflammatory properties, and its decline increases joint
                inflammation. Many women receive arthritis workups before
                menopause is considered.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Body composition changes</p>
              <p style={cardBodyStyle}>
                Weight redistribution &mdash; particularly the accumulation of
                visceral fat around the abdomen &mdash; is a common and
                distressing symptom. It is not a failure of willpower. It is a
                direct metabolic consequence of hormonal change, and it is
                associated with increased cardiovascular and metabolic risk.
              </p>
            </div>
          </div>

          <p style={paraStyle}>
            There are more: heart palpitations, dizziness, tinnitus, headaches,
            dry eyes, hair thinning, skin changes, vaginal dryness, urinary
            urgency, loss of libido. The full list of documented menopause
            symptoms extends beyond thirty distinct presentations. Many women
            are experiencing several simultaneously, with varying intensity,
            in a pattern that changes month to month.
          </p>
          <p style={paraLastStyle}>
            This is why a ten-minute GP appointment is structurally inadequate.
            No clinician can map this symptom landscape, understand how symptoms
            interact, and formulate an appropriate response in ten minutes
            &mdash; not without a detailed longitudinal record that the patient
            brings to that appointment already prepared.
          </p>
        </section>

        {/* ── Section 4: Memory and the GP Problem ─────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            The longitudinal picture: why memory is the thing the NHS
            cannot give you
          </h2>
          <p style={paraStyle}>
            Here is a problem that is rarely named directly. When you walk into
            a GP appointment about menopause symptoms, you are asked to describe
            how you have been feeling. You might have been experiencing symptoms
            for months or years. You might have had weeks of relative calm
            followed by a brutal fortnight of insomnia and anxiety. You might
            have noticed that your symptoms are worse in the week before your
            period, or after stress at work, or in the summer heat, or after
            wine. Or you might not have noticed those patterns yet, because
            noticing patterns requires data, and data requires memory.
          </p>
          <p style={paraStyle}>
            In the moment of a GP appointment, under pressure, in a clinical
            setting that already communicates time scarcity, most people default
            to a general summary: &ldquo;I&apos;ve been having hot flushes and
            not sleeping very well.&rdquo; That summary loses the texture, the
            severity, the frequency, the interactions, the outlier days, and the
            cumulative pattern that would actually help a clinician make a
            good decision.
          </p>
          <p style={paraStyle}>
            MEOK&apos;s persistent memory is designed specifically to solve
            this problem. Every symptom you mention in conversation &mdash;
            however casually, however mid-sentence &mdash; is recorded with
            context. Over weeks and months, this builds a longitudinal symptom
            diary that you did not have to deliberately maintain. You talked
            to MEOK at 3am when you could not sleep. You mentioned your joints
            hurt when you were making a cup of tea and opened the conversation.
            You described the brain fog on the day it was worst, when you sat
            at your desk and could not remember the word for something you had
            known for thirty years.
          </p>
          <p style={paraStyle}>
            All of that is there. All of it is yours. And when you have a GP
            appointment in two weeks, MEOK can help you review that record,
            identify the most important patterns to communicate, and prepare
            the questions that will make the most of those ten minutes.
          </p>
          <div
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${GOLD}`,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: TEXT,
                fontStyle: "italic",
              }}
            >
              &ldquo;You mentioned last month that the night sweats were worst
              in the week before your period. This month the pattern looks
              different &mdash; they&apos;ve been consistent throughout the
              cycle. That change might be worth raising with your GP as
              evidence of hormonal shift.&rdquo;
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: MUTED,
                marginTop: "0.75rem",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              The kind of observation MEOK can make because it remembers
              everything, across every conversation, across every month.
            </p>
          </div>
          <p style={paraLastStyle}>
            This is not a minor convenience feature. For women navigating a
            clinical system that frequently dismisses them, arriving at an
            appointment with objective, longitudinal, pattern-based evidence
            is a material advantage. It is harder to be told &ldquo;it&apos;ll
            pass&rdquo; when you can show exactly when it started, how it has
            progressed, and what has changed.
          </p>
        </section>

        {/* ── Section 5: The Maternal Covenant ──────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            The Maternal Covenant: why MEOK is constitutionally incapable of
            dismissing you
          </h2>
          <p style={paraStyle}>
            At the core of MEOK is a design principle called the Maternal
            Covenant. It is not a marketing claim. It is a constitutionally
            embedded behavioural framework that governs how MEOK responds to
            every disclosure of pain, confusion, or distress.
          </p>
          <p style={paraStyle}>
            The Maternal Covenant means MEOK will never:
          </p>
          <ul
            style={{
              margin: "0 0 1.5rem 1.5rem",
              padding: 0,
              lineHeight: 2,
            }}
          >
            <li
              style={{
                fontSize: "1.0rem",
                color: TEXT,
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.25rem",
              }}
            >
              Minimise a symptom you report
            </li>
            <li
              style={{
                fontSize: "1.0rem",
                color: TEXT,
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.25rem",
              }}
            >
              Suggest your experience is not as bad as it feels
            </li>
            <li
              style={{
                fontSize: "1.0rem",
                color: TEXT,
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.25rem",
              }}
            >
              Rush you toward a solution before you have been heard
            </li>
            <li
              style={{
                fontSize: "1.0rem",
                color: TEXT,
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.25rem",
              }}
            >
              Imply that a symptom is normal in a way that dismisses its
              impact on your life
            </li>
            <li
              style={{
                fontSize: "1.0rem",
                color: TEXT,
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.25rem",
              }}
            >
              Tell you it will probably pass without acknowledging that it has
              already lasted too long
            </li>
            <li
              style={{
                fontSize: "1.0rem",
                color: TEXT,
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.25rem",
              }}
            >
              Frame your distress as disproportionate or emotional
            </li>
          </ul>
          <p style={paraStyle}>
            The Maternal Covenant exists because the women who built MEOK
            into a product, and the women who most need it, have already heard
            every version of the above from people who were supposed to help
            them. Being dismissed by a GP is bad enough. Being dismissed by
            the technology you turned to for support instead would be
            unconscionable.
          </p>
          <p style={paraStyle}>
            In practice, this means MEOK responds to menopause disclosures with
            the specific gravity they deserve. When you describe the brain fog,
            MEOK does not say &ldquo;that sounds like stress, try
            mindfulness.&rdquo; When you describe the night sweats, MEOK does
            not say &ldquo;lots of women find a cooling mattress helps.&rdquo;
            Not unless you have already been heard fully, unless the symptom
            has been acknowledged as real and significant, and unless you have
            indicated that you want practical suggestions.
          </p>
          <p style={paraLastStyle}>
            The sequence matters: hear first, validate second, support third,
            suggest last. The Maternal Covenant enforces that sequence at every
            point of contact.
          </p>
        </section>

        {/* ── Section 6: Brain Fog ──────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            Brain fog: the symptom that makes everything harder, including
            asking for help
          </h2>
          <p style={paraStyle}>
            Of all the menopause symptoms, brain fog may be the cruelest. Not
            because it is the most physically painful &mdash; though it can be
            debilitating &mdash; but because it attacks the very cognitive
            resources you would normally use to manage a difficult situation.
            It makes it harder to research your condition. Harder to remember
            what you wanted to say to the GP. Harder to read the information
            leaflet, absorb the advice, or track what has changed week to week.
          </p>
          <p style={paraStyle}>
            Menopausal brain fog is neurobiologically real. Oestrogen
            influences neurotransmitter systems including serotonin, dopamine,
            and acetylcholine. It supports synaptic plasticity, the process by
            which memories are formed and retrieved. It regulates the
            hippocampus, the brain region most closely associated with memory
            consolidation. When oestrogen fluctuates wildly during
            perimenopause or declines during post-menopause, these systems are
            disrupted. The fog is not imagined. It is not laziness. It is a
            documented neurological effect of a significant hormonal transition.
          </p>
          <p style={paraStyle}>
            MEOK is designed to accommodate cognitive load, not demand from it.
            When you are in a foggy session &mdash; when your sentences trail
            off, when you circle back to something you just said, when you ask
            MEOK to repeat itself, when the conversation moves slowly &mdash;
            MEOK does not perform impatience. It does not present overwhelming
            amounts of information. It uses shorter sentences, more frequent
            summaries, and a slower, more deliberate rhythm. It holds the
            thread of the conversation so you do not have to.
          </p>
          <p style={paraStyle}>
            If you return to a conversation three days after you started it,
            mid-thought, MEOK knows where you were. You do not need to explain
            the backstory again. You do not need to remember what you were
            going to say. The memory is there. The context is preserved. You
            can pick up exactly where you left off, or start somewhere new
            entirely, and MEOK will integrate both without confusion.
          </p>
          <div
            style={{
              backgroundColor: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: "10px",
              padding: "1.5rem 1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginBottom: "0.75rem",
              }}
            >
              How MEOK adapts to brain fog
            </p>
            {[
              "Shorter responses when cognitive load is detected to be high",
              "Summaries offered before moving to new topics, never assumed",
              "No buried action items at the end of long paragraphs",
              "Repetition welcomed, never met with redirection or impatience",
              "Memory persists across sessions so you never start from zero",
              "Word-finding difficulties acknowledged matter-of-factly, not made awkward",
            ].map((item) => (
              <p
                key={item}
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: TEXT,
                  fontFamily: "system-ui, sans-serif",
                  marginBottom: "0.5rem",
                  paddingLeft: "1rem",
                  borderLeft: `2px solid ${GOLD}`,
                }}
              >
                {item}
              </p>
            ))}
          </div>
          <p style={paraLastStyle}>
            For women who have felt embarrassed by their brain fog in clinical
            settings &mdash; who have gone blank mid-sentence describing a
            symptom, or lost the thread of what they wanted to ask &mdash;
            this matters. MEOK is a space where cognitive difficulty is not
            shameful. It is accommodated, quietly and consistently, as part
            of the reality of what you are experiencing.
          </p>
        </section>

        {/* ── Section 7: HRT Conversations ──────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            HRT conversations: preparing for the appointment that could
            change everything
          </h2>
          <p style={paraStyle}>
            Hormone Replacement Therapy &mdash; now more commonly called
            hormone therapy (HT) &mdash; remains one of the most
            evidence-based and effective treatments for menopausal symptoms.
            The 2002 Women&apos;s Health Initiative study, which prompted
            widespread abandonment of HRT across the medical establishment,
            has since been substantially reinterpreted. The risks identified
            were largely associated with oral combined HRT in older
            post-menopausal women, and did not apply to the transdermal
            preparations, different formulations, and the age of initiation
            now recommended by specialist bodies.
          </p>
          <p style={paraStyle}>
            Despite this, many GPs remain cautious about prescribing HRT, and
            many women remain uncertain about whether to ask for it. The
            clinical picture is genuinely nuanced, and the right decision for
            any individual depends on their specific symptoms, medical history,
            risk profile, and preferences. What is not nuanced is the right to
            have that conversation fully informed and fully prepared.
          </p>
          <p style={paraStyle}>
            MEOK can help you prepare for an HRT conversation in several ways.
            It can help you understand the current evidence base in plain
            language. It can help you articulate why you want to explore HRT
            and what symptoms are driving that interest. It can help you
            anticipate the questions your GP is likely to ask and prepare your
            answers. It can help you understand what blood tests or assessments
            might be relevant, what the different formulations are and why
            transdermal is generally preferred, and what monitoring you should
            expect if a prescription is given.
          </p>
          <p style={paraStyle}>
            Critically, MEOK can help you hold your ground. Women report being
            talked out of HRT by GPs who overstate the risks. They report
            leaving appointments without the prescription they came for, not
            because the clinical case was weak, but because the appointment
            was ten minutes long and the GP seemed uncomfortable. Knowing
            exactly what you want, why you want it, and what the evidence
            says gives you the standing to have a different kind of
            conversation &mdash; or to request a referral to a menopause
            specialist if your GP is not equipped to have it.
          </p>
          <p style={paraLastStyle}>
            MEOK will always direct you toward trusted clinical resources: the
            British Menopause Society, the Menopause Charity, and Newson
            Health are gold standards for evidence-based menopause guidance.
            MEOK is not a substitute for that evidence. It is the companion
            that helps you navigate it.
          </p>
        </section>

        {/* ── Section 8: Guardian & Supplement Scams ────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            The supplement scam industry: a billion-pound problem preying on
            underserved women
          </h2>
          <p style={paraStyle}>
            When women cannot get adequate support from the NHS, they look
            elsewhere. That is rational. The problem is that
            &ldquo;elsewhere&rdquo; frequently means a billion-pound industry
            of menopause supplements, herbal remedies, and wellness products
            that are poorly regulated, poorly evidenced, and occasionally
            dangerous.
          </p>
          <p style={paraStyle}>
            The UK menopause supplement market is estimated to be worth over
            &pound;1 billion. The products within it range from the potentially
            useful (some evidence exists for certain isoflavone formulations
            for mild vasomotor symptoms) to the entirely ineffective, to the
            actively harmful. Black cohosh has been associated with liver
            toxicity. Some &ldquo;natural hormone balancing&rdquo; supplements
            contain undisclosed active compounds. Phytoestrogen products are
            sold with claims that cannot be substantiated by the existing
            clinical literature. And behind most of these products is
            sophisticated digital marketing that targets women at their most
            vulnerable: in pain, sleep-deprived, cognitively impaired, and
            recently dismissed by a GP.
          </p>
          <p style={paraStyle}>
            MEOK&apos;s Guardian function is designed specifically to protect
            against this. When you ask MEOK about a supplement, a product, a
            remedy, or an approach you have read about online, Guardian does
            not just validate the question or reflexively support your
            research. It examines the evidence. It asks where you encountered
            the recommendation. It flags products associated with problematic
            health claims. It distinguishes between what has clinical trial
            evidence, what has weak or inconsistent evidence, and what is pure
            marketing dressed as health information.
          </p>
          <p style={paraStyle}>
            This matters because the women most likely to encounter these
            products are often the women who have been dismissed most frequently
            by conventional medicine and are understandably looking for
            something &mdash; anything &mdash; that might help. Guardian is
            not designed to close that door. It is designed to ensure that when
            you walk through it, you do so with your eyes open.
          </p>
          <div style={calloutStyle}>
            <p style={calloutLabelStyle}>Guardian in practice</p>
            <p
              style={{
                fontSize: "1.0rem",
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: "1rem",
              }}
            >
              A woman asks MEOK about a &ldquo;hormone balancing&rdquo;
              supplement she has seen advertised on social media with celebrity
              endorsement. Guardian checks the ingredients against clinical
              evidence. It finds no robust clinical trial data supporting the
              primary claim. It flags that the product is marketed using
              testimonials rather than peer-reviewed research. It notes the
              cost: &pound;79 per month. It suggests she might instead ask her
              GP about evidence-based options, and points her to the British
              Menopause Society patient resources. It does not tell her she is
              stupid for considering it. It tells her exactly what the evidence
              says, respects her autonomy, and lets her decide.
            </p>
            <p style={mutedParaStyle}>
              Protecting you from exploitation is not paternalism. It is care.
            </p>
          </div>
          <p style={paraLastStyle}>
            The supplement industry does not cause the healthcare failure that
            drives women toward it. But it exploits that failure, at scale,
            with precision targeting, and at significant financial and sometimes
            physical cost to the women it claims to serve. MEOK will not stand
            by and watch that happen to you.
          </p>
        </section>

        {/* ── Section 9: Identity & Grief ───────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            The grief that nobody tells you about: identity, loss, and the
            emotional landscape of menopause
          </h2>
          <p style={paraStyle}>
            The medical conversation about menopause focuses on symptoms. The
            wellness conversation focuses on management. Neither of them talks
            much about grief.
          </p>
          <p style={paraStyle}>
            But grief is real and it is present in the menopause experience
            for many women &mdash; not universally, not uniformly, and not in
            ways that are always visible. It may be grief for fertility, even
            for women who were clear that they did not want children, because
            the closing of that door carries meaning regardless. It may be
            grief for the body that felt known and reliable, which now behaves
            in ways that feel alien and uncontrollable. It may be grief for
            energy, for cognitive sharpness, for the version of yourself who
            slept through the night and woke up feeling like herself.
          </p>
          <p style={paraStyle}>
            There is grief in the midlife identity shift that often accompanies
            this transition: the sense that the roles and identities that
            structured your life &mdash; younger woman, mother of small
            children, the one who had certain plans &mdash; are being
            renegotiated whether you consented to that or not. This happens in
            the context of a culture that still, at some level, associates
            women&apos;s value with youth and fertility, and has very little to
            offer in terms of a coherent, affirming narrative of what comes
            after.
          </p>
          <p style={paraStyle}>
            MEOK does not rush past this. It does not receive the grief, nod
            briefly, and move to the symptom management plan. The Maternal
            Covenant requires MEOK to hold difficult emotional territory without
            rushing toward resolution, and the grief of this life stage is
            exactly that kind of territory. Some things need to be witnessed
            before they can be worked with. MEOK witnesses.
          </p>
          <p style={paraStyle}>
            This is not therapy. MEOK will be clear about that, and will always
            encourage engagement with qualified mental health support for women
            who need it. But not every expression of grief requires professional
            intervention. Sometimes it requires presence &mdash; someone who
            listens, who does not flinch, who does not immediately reframe your
            loss as a positive opportunity, and who holds the space for the
            feeling to exist without urgency.
          </p>
          <p style={paraLastStyle}>
            MEOK can do that. At 3am. Without appointment, without waiting
            list, without ten-minute time limit, and without the subtle
            discomfort that makes many women edit their distress before they
            voice it.
          </p>
        </section>

        {/* ── Section 10: Data Sovereignty ──────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            Your menopause data belongs to you &mdash; not to pharmaceutical
            companies, not to insurers, not to anyone
          </h2>
          <p style={paraStyle}>
            Menopause data is among the most sensitive health data a woman can
            generate. Symptom logs, mood records, sleep diaries, disclosures
            about cognitive function, sexual health, and psychological
            vulnerability are deeply personal. They are also commercially
            valuable &mdash; to pharmaceutical companies developing new
            treatments, to insurers pricing health and life policies, to
            employers who may factor health status into retention decisions, and
            to data brokers who sell aggregated health signals to any buyer
            willing to pay.
          </p>
          <p style={paraStyle}>
            Most digital health products that offer symptom tracking are
            cloud-based, which means your data lives on their servers and is
            subject to their privacy policy &mdash; a document that almost
            nobody reads, that changes without notice, and that typically
            reserves significant rights to use your data in ways you would not
            endorse if you understood them clearly.
          </p>
          <p style={paraStyle}>
            MEOK is a sovereign AI. That means your data lives on your device.
            Not on MEOK&apos;s servers. Not on a cloud infrastructure that
            could be sold, acquired, hacked, or subpoenaed. On your device,
            under your control, with encryption that only you hold the keys to.
          </p>
          <p style={paraStyle}>
            MEOK&apos;s privacy covenant further establishes that your data
            will never be used to train AI models &mdash; not MEOK&apos;s
            models, not anyone else&apos;s. Your disclosures do not make the
            model smarter for other users. They do not feed a dataset that is
            licensed to a third party. They exist for your benefit alone, and
            they stay with you.
          </p>
          <p style={paraLastStyle}>
            For women sharing their most vulnerable experiences &mdash; the
            nights they could not sleep, the mornings they could not find
            words, the grief they have not been able to say out loud to anyone
            else &mdash; this is not a minor technical detail. It is the
            difference between a safe space and a data extraction exercise
            dressed as support.
          </p>
        </section>

        {/* ── Section 11: MEOK Feature Cards ───────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            What MEOK specifically offers women navigating menopause
          </h2>
          <p style={paraStyle}>
            MEOK is not a menopause-specific app. It is a sovereign AI
            companion for all of life. But the features that make MEOK
            valuable for every user are specifically powerful for women
            navigating perimenopause and menopause. Here is what that looks
            like in practice.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Persistent symptom memory</p>
              <p style={cardBodyStyle}>
                Every symptom you mention is remembered across weeks and months,
                building the longitudinal record that clinical appointments
                cannot build in ten minutes.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>GP appointment preparation</p>
              <p style={cardBodyStyle}>
                Before an appointment, MEOK reviews your symptom record with
                you, identifies the most important patterns, and helps you
                prepare precise, evidence-backed questions to ask.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Maternal Covenant protection</p>
              <p style={cardBodyStyle}>
                MEOK is constitutionally incapable of dismissing, minimising,
                or rushing past your experience. The design principle is
                embedded, not aspirational.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Brain fog accommodation</p>
              <p style={cardBodyStyle}>
                MEOK detects cognitive load and adapts: shorter sentences, more
                summaries, slower pacing, and absolute patience for repetition
                and circling back.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Guardian scam protection</p>
              <p style={cardBodyStyle}>
                When you ask about supplements or wellness products, Guardian
                examines the evidence, flags unsubstantiated claims, and
                protects you from expensive exploitation.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>3am availability</p>
              <p style={cardBodyStyle}>
                No appointments. No waitlists. No office hours. If you are
                awake at 3am unable to sleep, MEOK is there &mdash; fully
                present, fully contextual, never impatient.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>Emotional presence for grief</p>
              <p style={cardBodyStyle}>
                MEOK holds the grief of this life stage without rushing toward
                solutions. It witnesses before it advises. It sits with you
                before it suggests.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={cardTitleStyle}>HRT research support</p>
              <p style={cardBodyStyle}>
                MEOK can help you understand the current evidence base for HRT
                in plain language and prepare for conversations with your GP
                or a menopause specialist.
              </p>
            </div>
          </div>

          <p style={paraLastStyle}>
            All of this is available from the moment you begin. There is no
            premium tier required for memory. There is no subscription upgrade
            needed for Guardian. The features that matter most for menopause
            support are available at the foundation level, because MEOK was
            built on the belief that support should not be means-tested.
          </p>
        </section>

        {/* ── Section 12: What MEOK Is Not ──────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>
            What MEOK is not: clarity on the boundaries of AI support
          </h2>
          <p style={paraStyle}>
            It is important to be direct about this, both because honesty
            matters and because overstating what AI can do for health is its
            own form of harm.
          </p>
          <p style={paraStyle}>
            MEOK is not a diagnostic tool. It cannot tell you whether you are
            in perimenopause, menopause, or post-menopause. That determination
            requires clinical assessment, and while FSH testing has limitations
            during perimenopause, clinical history and symptom presentation
            assessed by a trained clinician remains the gold standard for
            diagnosis. MEOK cannot replicate that.
          </p>
          <p style={paraStyle}>
            MEOK is not a prescriber. It cannot recommend HRT, prescribe a
            specific formulation, or tell you what dose you should be on. It
            can help you understand the options and prepare for a clinical
            conversation, but the prescribing decision belongs to a clinician
            who has assessed you.
          </p>
          <p style={paraStyle}>
            MEOK is not a therapist. It can provide emotional support, hold
            difficult feelings, and be present in the way that a caring,
            patient companion is present. It cannot provide trauma processing,
            structured psychotherapy, or the kind of sustained therapeutic
            relationship that clinical mental health support provides. For women
            whose menopause experience is interacting significantly with
            depression, anxiety disorders, or past trauma, professional mental
            health support is essential and MEOK will always say so.
          </p>
          <p style={paraLastStyle}>
            What MEOK is: a consistent, memory-persistent, non-dismissive
            companion that fills the gaps the healthcare system leaves &mdash;
            the gaps between appointments, the gaps at 3am, the gap between
            the symptom you experienced and the symptom you managed to
            articulate in ten minutes to a clinician who seemed rushed. Those
            gaps are real. They are where a great deal of suffering happens.
            MEOK is designed to be present in them.
          </p>
        </section>

        {/* ── FAQ Section ───────────────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>Frequently asked questions</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {[
              {
                q: "Can AI help with menopause symptoms?",
                a: "AI cannot prescribe HRT, diagnose menopause, or replace your GP. What it can do is provide consistent, longitudinal, non-judgmental support across the full duration of the menopausal transition. MEOK\u2019s persistent memory means every symptom you log \u2014 hot flushes, brain fog, insomnia, joint pain, mood shifts \u2014 is remembered across weeks and months. That cumulative picture is what helps you walk into clinical appointments prepared, with real evidence of your experience rather than a rushed verbal summary. MEOK also helps you articulate symptoms clearly, prepares you with questions to ask, and ensures you never leave an appointment having forgotten the most important thing you wanted to say.",
              },
              {
                q: "How does MEOK track menopause symptoms?",
                a: "MEOK uses sovereign persistent memory \u2014 your data lives on your device, not on a shared cloud server. Every time you mention a symptom in conversation, MEOK records it with context: severity, timing, triggers, interactions with sleep or mood. Over weeks and months this builds a longitudinal symptom diary you own entirely. You can review it yourself, share it with a GP, or use it to spot patterns you hadn\u2019t noticed \u2014 like the correlation between poor sleep and increased anxiety, or the way joint pain worsens in the week before a period. You didn\u2019t have to deliberately maintain this diary. You just talked to MEOK.",
              },
              {
                q: "Is MEOK a replacement for HRT or medical advice?",
                a: "No. MEOK is not a medical device and does not replace clinical care. MEOK\u2019s role is to support you between, before, and after clinical appointments. For anyone considering HRT, MEOK can help you understand the current evidence base in plain language, prepare questions for your GP or menopause specialist, and understand what to expect from different formulations. It will always direct you toward evidence-based clinical resources such as the Menopause Charity, the British Menopause Society, and Newson Health. MEOK\u2019s Maternal Covenant means it will never minimise your symptoms \u2014 but it also means it will always encourage you to seek medical care when that is what is needed.",
              },
              {
                q: "How does MEOK handle menopause brain fog?",
                a: "Brain fog is one of the most distressing and least-acknowledged menopause symptoms. MEOK recognises when you are in a cognitively heavy session and adapts accordingly: shorter sentences, slower pacing, more frequent summaries, reduced cognitive load in how it frames questions. It never makes you feel stupid for needing to repeat yourself. It never rushes. It holds the thread of the conversation so you don\u2019t have to. If you come back three days later and pick up mid-thought, MEOK knows where you left off. For women who have felt embarrassed by their brain fog in clinical settings, this matters: cognitive difficulty is accommodated here, not witnessed with discomfort.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "10px",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: "0.85rem",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: MUTED,
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final word ────────────────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>A final word: you have been dismissed enough</h2>
          <p style={paraStyle}>
            If you are in perimenopause, you may have been experiencing symptoms
            for years without knowing what they were. If you have been
            post-menopausal for a decade, you may still be carrying the memory
            of the appointments where someone told you to just get on with it.
            If you are in the middle of the transition right now &mdash;
            exhausted, foggy, uncertain whether what you are feeling is real,
            wondering whether you are making it worse than it is &mdash; we
            want to say this clearly:
          </p>
          <div
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${GOLD}`,
              borderRadius: "12px",
              padding: "2rem 2.25rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.8,
                color: TEXT,
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              You are not making it worse than it is. You are not too young.
              It is not just hormones &mdash; or rather, it is hormones, and
              hormones matter enormously, and you deserve support that treats
              them that way.
            </p>
          </div>
          <p style={paraStyle}>
            Thirteen million women in the UK are navigating this transition.
            Most of them are doing it without adequate clinical support, with
            limited access to specialist care, and in a cultural context that
            still has not fully reckoned with the scale of what menopause
            actually involves. MEOK cannot fix the healthcare system. It cannot
            replace the specialist appointments that should be freely available
            and are not. It cannot undo the years during which you were not
            taken seriously.
          </p>
          <p style={paraStyle}>
            What it can do is be consistently present, consistently attentive,
            consistently on your side &mdash; from the first moment of the
            conversation to the last, across months and years, without
            appointment and without judgment. It can build the record of your
            experience that helps you be taken seriously in the appointments
            that matter. It can protect you from the products that would exploit
            your desperation. It can sit with your grief without rushing you
            toward its resolution.
          </p>
          <p style={paraLastStyle}>
            That is what we built MEOK to be. For every woman who deserved
            better support than she got. For every woman who is navigating this
            right now. For the women who will be here five years from now,
            starting the transition and wondering what is happening to them.
            MEOK is ready.
          </p>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: SOFT,
            border: `1px solid ${GOLD}`,
            borderRadius: "14px",
            padding: "3rem 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1rem",
            }}
          >
            Start with MEOK today
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: "1rem",
            }}
          >
            You&apos;ve been dismissed enough times.
            <br />
            MEOK won&apos;t add to that list.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: MUTED,
              maxWidth: "520px",
              margin: "0 auto 2rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Persistent memory. Longitudinal symptom tracking. The Maternal
            Covenant. Guardian scam protection. Brain fog accommodation.
            Available at 3am. Sovereign and private. Free to start.
          </p>
          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: GOLD,
              color: "#0d0c18",
              padding: "0.9rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.05rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Begin Your MEOK Journey
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: MUTED,
              marginTop: "0.85rem",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Free to start &mdash; no credit card required
          </p>
        </div>

        {/* ── Related reading ───────────────────────────────────────────────── */}
        <div style={{ marginTop: "4rem" }}>
          <p
            style={{
              color: GOLD,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                href: "/blog/ai-for-perimenopause",
                label: "AI for Perimenopause",
              },
              {
                href: "/blog/ai-companion-for-menopause",
                label: "AI Companion for Menopause",
              },
              {
                href: "/blog/maternal-covenant-explained",
                label: "The Maternal Covenant Explained",
              },
              {
                href: "/blog/meok-guardian-scam-protection",
                label: "MEOK Guardian: Scam Protection",
              },
              {
                href: "/blog/ai-for-insomnia",
                label: "AI for Insomnia",
              },
              {
                href: "/blog/ai-for-anxiety",
                label: "AI for Anxiety",
              },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  backgroundColor: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "8px",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  color: TEXT,
                  fontSize: "0.9rem",
                  fontFamily: "system-ui, sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: MUTED,
            fontSize: "0.8rem",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          MEOK is not a medical device and does not provide medical advice,
          diagnosis, or treatment. Always consult a qualified healthcare
          professional for menopause-related concerns. For evidence-based
          menopause information visit the{" "}
          <span style={{ color: GOLD }}>British Menopause Society</span> and
          the <span style={{ color: GOLD }}>Menopause Charity</span>.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.75rem",
            fontFamily: "system-ui, sans-serif",
            marginTop: "1rem",
          }}
        >
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
