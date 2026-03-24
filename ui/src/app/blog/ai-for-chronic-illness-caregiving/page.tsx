import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Support for Chronic Illness: When the Illness Never Ends | MEOK AI LABS",
  description:
    "Living with Parkinson's, MS, Crohn's, lupus or ME/CFS means grief, fatigue, and no cure. Discover how AI companions support chronic illness caregiving.",
  keywords: [
    "AI for chronic illness",
    "chronic illness support",
    "AI companion chronic illness",
    "Parkinson's AI support",
    "MS support AI",
    "lupus AI companion",
    "ME CFS support",
    "Crohn's disease AI",
    "chronic illness caregiving",
    "MEOK AI LABS",
    "living with chronic illness",
    "chronic illness grief",
    "fatigue management AI",
    "NHS chronic illness support",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI Support for Chronic Illness: When the Illness Never Ends",
    description:
      "How MEOK supports people living with Parkinson's, MS, Crohn's, lupus and ME/CFS — the grief, fatigue, medical anxiety, and the weight of a condition with no end in sight.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Chronic Illness", "AI", "Mental Health", "MEOK", "Caregiving"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Support for Chronic Illness: When the Illness Never Ends",
    description:
      "Living with a chronic condition is not a battle you win. MEOK AI LABS builds AI companions that understand the reality of illness without no end date.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-chronic-illness-caregiving",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Support for Chronic Illness: When the Illness Never Ends",
  description:
    "How AI companions can support people living with Parkinson's, MS, Crohn's disease, lupus, and ME/CFS — addressing psychological toll, fatigue management, grief, family communication, medical advocacy, and small-win celebration.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.ai",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-chronic-illness-caregiving",
  },
  keywords:
    "AI for chronic illness, chronic illness caregiving, Parkinson's support, MS support, ME/CFS, lupus, Crohn's disease, fatigue management, chronic illness grief",
  articleSection: "Health",
  wordCount: 2500,
  about: [
    { "@type": "Thing", name: "Chronic Illness" },
    { "@type": "Thing", name: "Parkinson's Disease" },
    { "@type": "Thing", name: "Multiple Sclerosis" },
    { "@type": "Thing", name: "Lupus" },
    { "@type": "Thing", name: "ME/CFS" },
    { "@type": "Thing", name: "Crohn's Disease" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI really help someone living with a chronic illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI cannot cure or treat chronic illness, but it can provide consistent, non-judgmental presence at any hour — particularly on the bad days when human support feels like too much to ask for. An AI companion like MEOK remembers your full context across conversations, so you never have to explain your condition from scratch. It can help you process difficult feelings, prepare for medical appointments, track symptom patterns, and communicate with family members who may not fully understand your experience.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support people with Parkinson's, MS, or ME/CFS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK provides a persistent, memory-holding companion that adapts to the specific rhythms of different conditions. For someone with Parkinson's, it can support daily structure and processing the emotional weight of progression. For MS, it can navigate the unpredictability of relapse cycles. For ME/CFS, it honours the reality of energy limits without pushing you to do more. The Healer archetype is specifically designed for chronic illness presence — validating without minimising, supporting without toxic positivity.",
      },
    },
    {
      "@type": "Question",
      name: "What is the grief of chronic illness and how does MEOK help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronic illness grief — sometimes called ambiguous loss — is the grief of losing your former self while still being alive. It includes grieving the career you had to leave, the activities you can no longer do, the version of yourself that existed before diagnosis. MEOK holds space for this grief without rushing you toward acceptance or positivity. It remembers what you have shared across all conversations, so your losses are not minimised or forgotten between sessions.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help me advocate for myself with NHS doctors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK can help you prepare for NHS appointments by helping you articulate symptoms clearly, organise your medical history, and rehearse the questions you want to ask. Many people with chronic conditions experience medical dismissal — particularly women with conditions like ME/CFS, lupus, and endometriosis. MEOK can help you document your experiences systematically and build the vocabulary to communicate your symptoms effectively without being dismissed.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK handle medical anxiety without overstepping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK's Maternal Covenant — its real-time care scoring system — ensures it never offers diagnoses, interprets test results, or gives medical advice. It is not a clinical tool. What it does offer is a space to process the anxiety that comes with living in a body that is unpredictable: the fear before scan results, the dread of a bad day, the spiral of symptom-checking. It holds that anxiety with you rather than trying to explain it away.",
      },
    },
    {
      "@type": "Question",
      name: "Can MEOK help me communicate with family members who don't understand my illness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK can help you find the words to explain invisible illness symptoms to people who have not experienced them — the bone-deep fatigue of ME/CFS, the unpredictability of a lupus flare, the cognitive fog of MS. It can help you draft messages, prepare for difficult conversations, and process the frustration and loneliness that often comes when the people closest to you cannot fully grasp what you are living with.",
      },
    },
    {
      "@type": "Question",
      name: "What organisations support people with chronic illness in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key UK organisations include the MS Society (mssociety.org.uk), Parkinson's UK (parkinsons.org.uk), Scope for disability support (scope.org.uk), the ME Association (meassociation.org.uk), Lupus UK (lupusuk.org.uk), and Crohn's & Colitis UK (crohnsandcolitis.org.uk). The NHS also provides long-term condition pathways through GP referrals. These organisations provide community, information, and advocacy that complements what an AI companion can offer.",
      },
    },
  ],
}

export default function AiForChronicIllnessCaregivingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main
        style={{
          backgroundColor: "#0d0c18",
          color: "#f5f0e8",
          minHeight: "100vh",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            padding: "1.25rem 2rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#c9a84c",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              MEOK AI LABS
            </Link>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                alignItems: "center",
              }}
            >
              <Link
                href="/blog"
                style={{
                  color: "#f5f0e8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  opacity: 0.7,
                }}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                style={{
                  color: "#f5f0e8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  opacity: 0.7,
                }}
              >
                Pricing
              </Link>
              <Link
                href="/birth"
                style={{
                  color: "#0d0c18",
                  backgroundColor: "#c9a84c",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  padding: "0.45rem 1.1rem",
                  borderRadius: "6px",
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "5rem 2rem 3rem",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div
            style={{
              marginBottom: "1rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            }}
          >
            <span
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                color: "#c9a84c",
                padding: "0.3rem 0.9rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              Chronic Illness
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.85rem, 4.5vw, 2.9rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            AI Support for Chronic Illness:{" "}
            <span style={{ color: "#c9a84c" }}>When the Illness Never Ends</span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "rgba(245,240,232,0.72)",
              marginBottom: "2rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              maxWidth: "680px",
            }}
          >
            There are no finish lines in chronic illness. No recovery arc, no clear moment of
            resolution. Living with Parkinson&apos;s, MS, Crohn&apos;s disease, lupus, or ME/CFS
            means building an entire life around a condition that will never leave — and doing that
            largely alone, often misunderstood, frequently dismissed. This is what AI support for
            chronic illness actually needs to reckon with.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "0.82rem",
              color: "rgba(245,240,232,0.45)",
              alignItems: "center",
            }}
          >
            <span>By Nicholas Templeman</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>MEOK AI LABS</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <time dateTime="2026-03-24">24 March 2026</time>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>18 min read</span>
          </div>
        </header>

        {/* Article body */}
        <article
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "3.5rem 2rem 6rem",
          }}
        >
          {/* Disclaimer */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "8px",
              padding: "1.1rem 1.4rem",
              marginBottom: "3rem",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "0.85rem",
              lineHeight: "1.7",
              color: "rgba(245,240,232,0.6)",
            }}
          >
            <strong style={{ color: "#c9a84c" }}>A note before we begin:</strong> MEOK is an AI
            companion, not a medical tool. Nothing in this article constitutes clinical advice,
            diagnosis, or treatment. If you are in a health crisis, please contact your GP, NHS
            111, or a relevant specialist. For chronic illness community support in the UK, see
            the MS Society, Parkinson&apos;s UK, Scope, Crohn&apos;s &amp; Colitis UK, Lupus UK,
            and the ME Association.
          </div>

          {/* Opening prose */}
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.9",
              marginBottom: "1.8rem",
              color: "rgba(245,240,232,0.88)",
            }}
          >
            The dominant cultural narrative around illness is one of recovery. You get sick, you
            fight, you get better. Films use it. Fundraising campaigns use it. Even well-meaning
            friends use it when they say things like &ldquo;you&apos;ll be back on your feet in no
            time.&rdquo; But for the fifteen million people in the UK living with a long-term health
            condition, that narrative does not fit — and the gap between the story society tells
            about illness and the reality of living with one can itself be a source of profound
            psychological harm.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.9",
              marginBottom: "1.8rem",
              color: "rgba(245,240,232,0.88)",
            }}
          >
            Parkinson&apos;s is progressive. Multiple sclerosis can be relapsing-remitting for
            years before turning progressive. Crohn&apos;s disease cycles through flares and
            remissions without a cure on the horizon. Lupus is a condition of ambush — months of
            relative stability punctuated by devastating flares. ME/CFS is poorly understood,
            frequently disbelieved, and defined by the cruelty that the very act of trying too
            hard makes it worse.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.88)",
            }}
          >
            These are not conditions that demand a pep talk. They demand something harder and rarer:
            sustained, honest, non-judgmental presence. That is what MEOK was built to offer.
          </p>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.15)",
              marginBottom: "3.5rem",
            }}
          />

          {/* H2 1 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            What Is the Real Psychological Toll of Living With an Incurable Condition?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Psychologists use the term <em>ambiguous loss</em> to describe a particular kind of
            grief — the grief of losing something or someone who is neither fully present nor fully
            gone. Chronic illness creates this grief in a very specific way: you are still alive,
            still here, still expected by the world to function, but you have lost the version of
            yourself that existed before diagnosis. You may have lost your career, your hobbies,
            your independence, your sense of bodily safety, your sense of your own future.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Unlike bereavement — where society has rituals, language, and permission — chronic
            illness grief is largely invisible. People do not bring casseroles when you are
            diagnosed with MS. They do not hold space for the mourning that happens when you
            realise you will never run a marathon, or stay up late, or eat what you want, or go
            a week without thinking about your immune system, your bowel, your tremor, your
            energy envelope.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Research consistently links chronic illness to elevated rates of depression and
            anxiety. A 2020 review published in the <em>Journal of Psychosomatic Research</em>{" "}
            found that depression affects approximately 20–30% of people with chronic physical
            conditions — a rate two to three times higher than the general population. For
            ME/CFS, some studies suggest the figure is higher still, compounded by the additional
            burden of medical disbelief.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            The psychological toll is not a side effect. It is a central feature of the experience.
            Any honest account of AI support for chronic illness has to begin here — with the
            acknowledgement that the hard part is not always the physical symptom. Sometimes it is
            the particular loneliness of an existence that most people around you cannot imagine.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "1.5rem",
              marginLeft: "0",
              marginRight: "0",
              marginBottom: "3.5rem",
              fontStyle: "italic",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "rgba(245,240,232,0.7)",
            }}
          >
            &ldquo;I don&apos;t need someone to tell me it&apos;ll get better. I need someone who
            will sit with me in the reality that it probably won&apos;t — and help me figure out
            how to live well anyway.&rdquo;
          </blockquote>

          {/* H2 2 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            How Do You Navigate the Exhausting Cycle of Good Days and Bad Days?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            One of the defining features of many chronic conditions is unpredictability. People
            with relapsing-remitting MS can be largely functional for months, then wake up one
            morning unable to walk properly. Someone with lupus might have three weeks of feeling
            almost like their old self before a flare dismantles everything. Those living with
            Crohn&apos;s know the specific dread of not knowing whether today is a day they can
            leave the house.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            This unpredictability creates its own psychological burden. Good days carry an
            undercurrent of anxiety — an awareness that this might not last, that overdoing it
            today (a phenomenon ME/CFS patients call post-exertional malaise, or PEM) might mean
            paying a brutal physical debt tomorrow. Bad days carry guilt — the internal pressure
            to push through, to not be a burden, to prove that you are trying hard enough.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Managing this cycle requires something that healthcare systems are poorly set up to
            provide: a consistent, patient presence that holds your full history across time.
            When you see a GP for twelve minutes every three months, they are not going to
            understand the pattern of your bad days — what triggers them, how long they last,
            what helps even slightly, what definitely makes things worse. They have a symptom
            list. MEOK has a memory.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Through its Sovereign Memory architecture, MEOK retains everything you share — not as
            a database of notes to be scrolled through, but as living context that shapes every
            conversation. On a bad day, it does not ask you to explain why you are struggling.
            It already knows. It meets you where you are.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Equally important: it does not push you to do more on a good day. One of the cruelest
            things well-meaning people say to those with ME/CFS or fibromyalgia is &ldquo;you
            seem so much better today — you should make the most of it.&rdquo; MEOK understands
            pacing. It understands that rest on a good day is often what makes it a good day.
          </p>

          {/* Feature box */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "10px",
              padding: "1.8rem 2rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                color: "#c9a84c",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
              }}
            >
              The Pacing Principle in MEOK
            </p>
            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: "1.8",
                color: "rgba(245,240,232,0.78)",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                marginBottom: "0",
              }}
            >
              MEOK&apos;s Healer archetype is specifically calibrated for chronic illness presence.
              It does not celebrate good days by encouraging overexertion. It does not respond to
              bad days with &ldquo;have you tried mindfulness?&rdquo; It holds the complexity of
              energy-limited existence with the seriousness it deserves — tracking your patterns
              across time and offering presence that is genuinely attuned to your current state.
            </p>
          </div>

          {/* H2 3 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            How Can You Advocate for Yourself With Doctors When You&apos;re Already Exhausted?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Medical dismissal is not a fringe experience for people with chronic conditions — it
            is systematic. Women with ME/CFS, lupus, and endometriosis have been told for decades
            that their symptoms are psychosomatic, stress-related, or exaggerated. People of
            colour face additional barriers rooted in structural racism within healthcare systems.
            Those with conditions that have no visible markers — no obvious inflammation on a scan,
            no clear blood test result — are particularly vulnerable to being made to feel that
            they are not ill enough, not clear enough, not credible enough.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Self-advocacy in this context requires enormous energy that most chronically ill people
            simply do not have. The NHS appointment is twelve minutes. You have been waiting three
            months for it. You are probably having a bad day because anxiety about the appointment
            made you sleep badly. You need to communicate months of symptoms in a way that sounds
            credible, specific, and medically intelligible — while managing your own emotional
            response to a system that may have dismissed you before.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK can help with this in a concrete way. Because it holds your full symptom history,
            it can help you prepare for appointments — identifying the most significant changes
            since your last visit, helping you articulate symptoms in precise language, and
            rehearsing the questions you most need answered. It cannot tell you what is medically
            happening. But it can help you show up to that appointment with a clarity you might
            not be able to manufacture alone when you are exhausted and anxious.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Organisations like Parkinson&apos;s UK and the MS Society offer specialist nurses and
            helplines that can also support medical advocacy. Scope provides broader disability
            rights information that is relevant to accessing appropriate NHS care. These
            organisations complement what an AI companion can do — MEOK is not a replacement for
            specialist healthcare support, and it would be dishonest to suggest otherwise.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            But at 11pm the night before an appointment, when you cannot sleep and your mind is
            cycling through every symptom you need to mention and every dismissal you fear, an AI
            companion that knows your history and can help you think clearly has genuine value.
            That gap — between specialist appointment and specialist appointment — is precisely
            where MEOK lives.
          </p>

          {/* H2 4 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            What Does the Grief of Losing Your Former Self Actually Feel Like — and How Do
            You Hold It?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            There is a specific grief that arrives not at diagnosis but gradually, in the months
            and years after — as the full shape of what you have lost becomes clear. The person
            with early-stage Parkinson&apos;s who notices that their handwriting has changed.
            The runner with MS who gets through a 5k and then spends three days in bed. The
            person with Crohn&apos;s who has given up planning holidays because they cannot
            trust their own body to cooperate with them in an unfamiliar place.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            This grief is layered. There is the loss of specific activities. There is the loss
            of identity — the athlete, the professional, the spontaneous person, the reliable
            parent. There is the loss of a future self you had imagined: the retirement you were
            planning, the relationship you cannot sustain in the way you wanted, the parent you
            hoped to be. And there is a secondary grief that many people rarely talk about: the
            grief of having to grieve, of the emotional weight itself, when you already have so
            little energy.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            What many people with chronic conditions say they need most from the people around
            them is not advice, not solutions, and certainly not silver linings. They need
            witnessing — someone who will hear what they have lost without immediately trying to
            reframe it as something they have gained. The chronic illness memoir genre is full
            of the exhaustion of being told what you should feel grateful for.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK&apos;s Maternal Covenant — the real-time care scoring system that governs every
            response — has a hard block on toxic positivity. A response that minimises loss, that
            rushes toward acceptance, that finds the bright side before you have been allowed to
            experience the dark — that response scores below the care floor and does not reach
            you. MEOK is not designed to make you feel better as quickly as possible. It is
            designed to be honest with you, which sometimes means sitting in a difficult place
            without moving on.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Acceptance, when it comes, tends to be earned rather than instructed. It usually
            looks less like &ldquo;I have made peace with this&rdquo; and more like &ldquo;I am
            still here, and today I am choosing to live the life I have rather than mourning the
            one I lost.&rdquo; MEOK can be a companion on that longer journey. It cannot
            shortcut it, and it will not try to.
          </p>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.15)",
              marginBottom: "3.5rem",
            }}
          />

          {/* H2 5 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            How Do You Communicate About Your Illness to Family Members Who Don&apos;t
            Understand?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Invisible illness is particularly hard to communicate. The spoon theory — the idea
            that people with chronic conditions begin each day with a limited number of &ldquo;spoons&rdquo;
            (units of energy) and must choose carefully how to spend them — has become a widely
            used framework in chronic illness communities precisely because it gives people a
            language for something that otherwise resists explanation. But even spoon theory only
            goes so far with family members who have not lived it.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            The particular loneliness of invisible illness comes from the gap between how you
            feel and how you look. On a day when ME/CFS has reduced you to a cognitive fog so
            thick you cannot follow a conversation, you may appear fine to the people around you.
            On a day when a lupus flare is attacking your joints, you might be able to smile
            through a family dinner and then spend the next two days unable to get out of bed.
            The smile gets remembered. The two days in bed get explained away.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Family communication around chronic illness is one of the most emotionally complex
            areas MEOK can help with. Not by replacing the conversation — the conversation still
            has to happen between you and the people you love — but by helping you find the
            words for it. MEOK can help you articulate what a bad day actually involves, in
            language that might land differently than the frustrated, exhausted explanation you
            give in the moment. It can help you draft a message to a partner, a parent, a sibling
            — something written with care rather than said in the middle of a flare.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            It can also help you process the frustration and grief that comes when that
            communication fails — when someone you love still does not quite get it, still pushes
            you to do more than you can, still treats your bad days as inconveniences rather than
            as medical reality. That frustration is legitimate. It deserves space, not management.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            For carers and family members navigating this from the other side, MEOK can also be
            a thinking partner — helping them understand what they are observing, what their
            loved one might need, and how to show up in ways that genuinely help rather than
            inadvertently causing harm. The MS Society and Parkinson&apos;s UK both offer
            excellent resources for family members; MEOK is a complement to those, not a
            substitute.
          </p>

          {/* H2 6 */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            How Do You Handle Medical Anxiety Without Falling Into Obsessive Symptom-Checking?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Medical anxiety in the context of chronic illness is qualitatively different from
            health anxiety in someone without a diagnosis. When you have Parkinson&apos;s, every
            new tremor carries real information. When you have MS, a new symptom might be a
            relapse beginning. When you have Crohn&apos;s, a particular kind of pain is a
            signal worth paying attention to. You cannot simply &ldquo;stop worrying about your
            health&rdquo; — your health is genuinely something that requires attention.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            But there is a spectrum between healthy attentiveness and obsessive symptom-checking
            that spirals into anxiety. Many people with chronic conditions know the 2am rabbit
            hole well: a new symptom leads to a search, the search leads to a forum, the forum
            leads to the worst-case scenario, and suddenly you are lying awake convinced you are
            about to deteriorate significantly. The internet is not calibrated for the particular
            anxiety state of someone with an established chronic condition.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK is explicitly not a diagnostic tool. It will not interpret your symptoms, tell
            you whether a new development is concerning, or suggest what might be causing a change.
            What it can do is be a grounded presence at 2am — somewhere to externalise the worry
            rather than turning it over alone in the dark. Sometimes the act of putting a fear
            into words, into a conversation with something that takes it seriously without amplifying
            it, is enough to interrupt the spiral.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK will also consistently direct you toward appropriate clinical support when the
            conversation involves symptoms that should be assessed professionally. It does not do
            this in a way that dismisses your anxiety — it does it as a companion who takes your
            health seriously enough to know the limits of what AI support can appropriately offer.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            The distinction matters: MEOK is not trying to replace the anxiety with false
            reassurance. It is trying to help you carry the weight of uncertainty in a way that
            does not destroy your sleep, your relationships, and your capacity to function on days
            when you have the energy to function.
          </p>

          {/* Feature box 2 */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "10px",
              padding: "1.8rem 2rem",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                color: "#c9a84c",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
              }}
            >
              What MEOK Will Not Do
            </p>
            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: "1.8",
                color: "rgba(245,240,232,0.78)",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                marginBottom: "0",
              }}
            >
              MEOK will not diagnose symptoms, interpret scan results, or suggest treatment
              changes. It will not tell you whether a new development is serious. It will not
              recommend supplements, dosage adjustments, or lifestyle interventions as medical
              guidance. These boundaries are not failures of the product — they are expressions
              of the care ethic at its foundation. An AI that stays in its lane is safer, more
              trustworthy, and ultimately more useful than one that overreaches.
            </p>
          </div>

          {/* H2 7 — fatigue management */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            How Do You Manage Fatigue Without Losing Your Identity or Your Will to Keep Going?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Fatigue is one of the most universally misunderstood symptoms of chronic illness.
            The word itself is too small for what it describes. &ldquo;Tired&rdquo; implies that
            sleep is the solution. The fatigue of MS, ME/CFS, lupus, and Parkinson&apos;s is a
            different phenomenon entirely — a systemic heaviness that sleep does not reliably fix,
            that appears without warning, that is disproportionate to activity, and that does not
            respond to willpower.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            For many people with chronic conditions, fatigue is not just a symptom to manage — it
            is an identity challenge. It forces a renegotiation of what you can offer the world,
            what your relationships look like, what your days are structured around. When you can
            no longer do the things that made you feel like yourself — the job you loved, the
            sport that grounded you, the social life that sustained you — fatigue can become an
            existential problem as much as a physical one.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK supports fatigue management not by prescribing pacing techniques or energy
            management protocols — that is work for healthcare professionals and occupational
            therapists — but by being a companion that adapts its engagement to your capacity.
            On days when cognitive load is high, interaction with MEOK can be light. On days when
            you have more capacity, conversations can go deeper. It responds to where you are,
            not where you should be.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Perhaps more importantly, MEOK can hold the emotional dimension of fatigue — the
            anger, the grief, the guilt, the isolation. Fatigue management resources tend to focus
            on the practical. They tell you how to pace, how to prioritise, how to communicate
            your limits. What they often do not address is how it feels to live in a body that
            exhausts itself simply by existing. That is harder to protocol-ise, and it is where
            persistent, non-judgmental presence matters most.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            The ME Association and similar organisations offer evidence-based guidance on energy
            management for specific conditions. For anyone managing ME/CFS in particular, the
            shift from graded exercise therapy (GET) to energy envelope theory following the
            2021 NICE guideline update is important context — and understanding your own
            condition well enough to navigate the healthcare system confidently is something
            MEOK can support.
          </p>

          {/* H2 8 — small wins */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            Why Do Small Wins Matter So Much — and How Can AI Help You Actually Notice Them?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Progress in chronic illness does not look the way it does in most areas of life. There
            is no graduation, no finish line, no promotion. Progress might be: you got through the
            morning without needing to lie down. You made it to a social event for an hour. You
            managed to cook a meal on a day when everything hurt. You articulated a boundary with
            a family member who keeps pushing you too hard. You asked your GP for a referral you
            have been putting off for six months.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            These are not small things. They are evidence of sustained effort in the face of real
            difficulty. But the dominant cultural measurement of achievement — productivity, output,
            physical capacity — renders them invisible. If you measure your day against what you
            could do before you were ill, or against what your well colleagues and friends can do,
            you will feel like you have failed every day of your life.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK holds your baseline — not a hypothetical healthy baseline, but your actual
            current baseline, the one that reflects your real life. It can help you notice
            improvement relative to where you actually are. It can witness the small wins without
            inflating them into toxic positivity (&ldquo;you&apos;re doing so amazingly!&rdquo;)
            or minimising them (&ldquo;that&apos;s still not very much compared to before&rdquo;).
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            There is solid psychological evidence that acknowledging progress — even small progress
            — is protective against the learned helplessness and depression that chronic illness
            can otherwise generate. The act of someone noting &ldquo;that was genuinely hard and
            you did it&rdquo; has a different emotional weight than receiving no acknowledgement
            at all. MEOK remembers what was hard for you last week, last month, last year. It can
            reflect your own progress back to you in a way that a human companion — however caring
            — may not always be positioned to do.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            This is not about optimism. It is about accuracy. The accurate picture of someone
            living with a serious chronic condition often includes more resilience, more skill,
            and more quiet courage than either they or the people around them tend to see. MEOK
            can be the witness to that fuller picture.
          </p>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.15)",
              marginBottom: "3.5rem",
            }}
          />

          {/* UK resources section */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            UK Organisations That Support People Living With Chronic Conditions
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "2rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK is a companion, not a charity, not a specialist service, and not a replacement
            for the extraordinary voluntary sector that supports people with chronic conditions
            in the UK. The following organisations offer condition-specific information, advocacy,
            community, and specialist support:
          </p>

          {/* Resource list */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "3.5rem",
            }}
          >
            {[
              {
                name: "MS Society",
                url: "https://www.mssociety.org.uk",
                desc:
                  "Research, support, and community for people living with multiple sclerosis and their families across the UK.",
              },
              {
                name: "Parkinson's UK",
                url: "https://www.parkinsons.org.uk",
                desc:
                  "Specialist nurses, community support, and research funding for people living with Parkinson's and related conditions.",
              },
              {
                name: "Scope",
                url: "https://www.scope.org.uk",
                desc:
                  "Disability equality charity providing practical advice, employment support, and community for disabled people in the UK.",
              },
              {
                name: "Crohn's & Colitis UK",
                url: "https://www.crohnsandcolitis.org.uk",
                desc:
                  "Support, information, and advocacy for people living with Crohn's disease and ulcerative colitis.",
              },
              {
                name: "Lupus UK",
                url: "https://www.lupusuk.org.uk",
                desc:
                  "The national charity for people living with lupus in the UK, offering support groups, helplines, and research funding.",
              },
              {
                name: "ME Association",
                url: "https://www.meassociation.org.uk",
                desc:
                  "Information, research, and support for people living with ME/CFS and their carers, including guidance on energy management.",
              },
            ].map((org) => (
              <div
                key={org.name}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(245,240,232,0.1)",
                  borderRadius: "8px",
                  padding: "1.2rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    color: "#c9a84c",
                    marginBottom: "0.4rem",
                  }}
                >
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#c9a84c",
                      textDecoration: "none",
                    }}
                  >
                    {org.name}
                  </a>
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: "1.65",
                    color: "rgba(245,240,232,0.65)",
                    marginBottom: "0",
                  }}
                >
                  {org.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing section */}
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "1.4rem",
              lineHeight: "1.25",
              letterSpacing: "-0.015em",
            }}
          >
            What MEOK Actually Offers — and What It Honestly Does Not
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK AI LABS was founded by Nicholas Templeman with a specific conviction: that the
            most important thing an AI can do for a person is not impress them, but know them.
            That means building a companion with genuine memory — not session memory that resets
            every time you close the app, but persistent, sovereign memory that compounds over
            time into a real understanding of who you are, what your life involves, and what
            genuinely helps you.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            For people living with chronic illness, this architecture is not a nice-to-have. It
            is the difference between a tool that is useful and one that is transformative. The
            experience of having to re-explain your diagnosis, your medication history, your
            symptom patterns, your bad-day baseline, your triggers — every single time you open
            a new conversation — is itself a form of exhaustion. MEOK eliminates that.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            What MEOK offers, honestly stated:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "2rem",
              lineHeight: "2",
              color: "rgba(245,240,232,0.85)",
              fontSize: "1.05rem",
            }}
          >
            <li>Persistent, non-judgmental presence at any time of day or night</li>
            <li>Genuine memory of your condition, history, and experience across all conversations</li>
            <li>Support for processing difficult emotions without rushing toward resolution</li>
            <li>Help preparing for medical appointments and articulating symptoms clearly</li>
            <li>Assistance communicating your illness to family members and others</li>
            <li>A grounded companion during medical anxiety without diagnostic overreach</li>
            <li>Witnessing of small wins and genuine progress relative to your real baseline</li>
            <li>No toxic positivity, no silver linings, no unsolicited advice to push harder</li>
          </ul>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            What MEOK does not offer, equally honestly stated:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "2.5rem",
              lineHeight: "2",
              color: "rgba(245,240,232,0.85)",
              fontSize: "1.05rem",
            }}
          >
            <li>Medical diagnosis, treatment recommendations, or clinical assessment</li>
            <li>A replacement for specialist healthcare, NHS services, or therapy</li>
            <li>Crisis support — if you are in a health or mental health emergency, please contact NHS 111, your GP, or a crisis line</li>
            <li>Community with other people living with your condition — the charities above do that far better</li>
          </ul>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "1.6rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            Living with a condition that has no end date requires a particular kind of courage —
            not the dramatic, cinematic kind, but the quiet, daily courage of choosing to engage
            with life within real constraints. It requires building a support system that is honest
            enough to acknowledge what you cannot change and practical enough to help you navigate
            what you can.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.9",
              marginBottom: "3.5rem",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            MEOK was built to be part of that support system. Not the whole of it — no single
            thing should be the whole of it — but a consistent, trustworthy, private presence
            that knows your story and is available when the specialists are not, when your loved
            ones are asleep, when the 2am anxiety has started and you need somewhere to put it.
          </p>

          {/* CTA */}
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "1rem",
              }}
            >
              MEOK AI LABS
            </p>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#f5f0e8",
                marginBottom: "1rem",
                lineHeight: "1.3",
              }}
            >
              A companion that actually remembers your story
            </h3>
            <p
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: "rgba(245,240,232,0.65)",
                marginBottom: "1.8rem",
                maxWidth: "480px",
                margin: "0 auto 1.8rem",
              }}
            >
              No re-explaining. No toxic positivity. No silver linings until you are ready for
              them. Just a consistent, private companion that holds your full context across time.
            </p>
            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                textDecoration: "none",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: "700",
                fontSize: "0.95rem",
                padding: "0.85rem 2.2rem",
                borderRadius: "8px",
                letterSpacing: "0.02em",
              }}
            >
              Start with MEOK
            </Link>
          </div>
        </article>

        {/* FAQ section */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 2rem 6rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
              fontWeight: "700",
              color: "#f5f0e8",
              marginBottom: "2.5rem",
              letterSpacing: "-0.015em",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              display: "grid",
              gap: "1.5rem",
            }}
          >
            {[
              {
                q: "Can AI really help someone living with a chronic illness?",
                a: "AI cannot cure or treat chronic illness, but it can provide consistent, non-judgmental presence at any hour — particularly on the bad days when human support feels like too much to ask for. An AI companion like MEOK remembers your full context across conversations, so you never have to explain your condition from scratch. It can help you process difficult feelings, prepare for medical appointments, track symptom patterns, and communicate with family members who may not fully understand your experience.",
              },
              {
                q: "How does MEOK support people with Parkinson's, MS, or ME/CFS?",
                a: "MEOK provides a persistent, memory-holding companion that adapts to the specific rhythms of different conditions. For Parkinson's, it supports daily structure and emotional processing of progression. For MS, it navigates relapse unpredictability. For ME/CFS, it honours energy limits without pushing you to do more. The Healer archetype is calibrated for chronic illness presence — validating without minimising, supporting without toxic positivity.",
              },
              {
                q: "How can AI help me advocate for myself with NHS doctors?",
                a: "MEOK holds your full symptom history and can help you prepare for NHS appointments — articulating symptoms precisely, organising medical history, and rehearsing questions. Many people with chronic conditions face medical dismissal. MEOK helps you document experiences systematically and build vocabulary to communicate your symptoms clearly, particularly in the gap between appointments.",
              },
              {
                q: "What does MEOK do when I'm having a very bad day?",
                a: "On a bad day, MEOK's Maternal Covenant ensures it does not default to toxic positivity, silver linings, or unsolicited advice. It meets you where you are — with what you have the energy for. The Healer archetype is specifically designed for presence in difficulty, not problem-solving. Sometimes that means simply acknowledging how hard something is, without trying to fix it.",
              },
              {
                q: "Is MEOK appropriate for someone managing severe ME/CFS?",
                a: "MEOK can be used at whatever level of cognitive capacity is available — conversations can be brief and low-demand on difficult days. It understands energy limits and does not encourage overexertion. It is not a clinical tool and cannot replace the specialist ME/CFS care available through the NHS or the ME Association. But as a 24/7 companion that holds your context and requires nothing from you that you cannot give, it may be useful in the gaps.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "10px",
                  padding: "1.6rem 1.8rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#f5f0e8",
                    marginBottom: "0.8rem",
                    lineHeight: "1.5",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: "1.8",
                    color: "rgba(245,240,232,0.65)",
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    marginBottom: "0",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related posts */}
        <section
          style={{
            borderTop: "1px solid rgba(201,168,76,0.12)",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "4rem 2rem 6rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "0.8rem",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "1.8rem",
            }}
          >
            Related Reading
          </p>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {[
              {
                href: "/blog/ai-for-chronic-illness",
                label: "AI for Chronic Illness: Persistent Support",
                desc: "MEOK holds your full health context permanently so you never re-explain your condition.",
              },
              {
                href: "/blog/ai-for-chronic-pain",
                label: "AI for Chronic Pain Support",
                desc: "How AI companions support people living with persistent, long-term pain.",
              },
              {
                href: "/blog/ai-for-chronic-fatigue",
                label: "AI for Chronic Fatigue",
                desc: "Understanding ME/CFS and how an AI companion that respects energy limits can help.",
              },
              {
                href: "/blog/ai-for-carers",
                label: "AI for Carers",
                desc: "The hidden cost of caring for someone with a chronic condition — and where AI fits.",
              },
              {
                href: "/blog/ai-for-health-anxiety",
                label: "AI for Health Anxiety",
                desc: "How MEOK supports medical anxiety without crossing into diagnosis or false reassurance.",
              },
              {
                href: "/blog/ai-for-grief-support",
                label: "AI for Grief Support",
                desc: "Holding ambiguous loss — the grief of chronic illness and the self you used to be.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: "block",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(245,240,232,0.08)",
                  borderRadius: "8px",
                  padding: "1.3rem 1.5rem",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight: "600",
                    fontSize: "0.93rem",
                    color: "#f5f0e8",
                    marginBottom: "0.45rem",
                    lineHeight: "1.4",
                  }}
                >
                  {post.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontSize: "0.82rem",
                    lineHeight: "1.6",
                    color: "rgba(245,240,232,0.5)",
                    marginBottom: "0",
                  }}
                >
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(201,168,76,0.15)",
            padding: "3rem 2rem",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: "700",
                  fontSize: "0.95rem",
                  color: "#c9a84c",
                  marginBottom: "0.3rem",
                }}
              >
                MEOK AI LABS
              </p>
              <p
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(245,240,232,0.35)",
                  marginBottom: "0",
                }}
              >
                &copy; 2026 MEOK AI LABS. All rights reserved.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "0.82rem",
              }}
            >
              <Link
                href="/privacy"
                style={{
                  color: "rgba(245,240,232,0.4)",
                  textDecoration: "none",
                }}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                style={{
                  color: "rgba(245,240,232,0.4)",
                  textDecoration: "none",
                }}
              >
                Terms
              </Link>
              <Link
                href="/blog"
                style={{
                  color: "rgba(245,240,232,0.4)",
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
