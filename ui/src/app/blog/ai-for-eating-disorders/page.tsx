import type { Metadata } from "next"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "AI and Eating Disorders: What Sovereign AI Does — and Doesn't — Do | MEOK AI LABS",
  description:
    "1.25 million UK people have eating disorders. MEOK's care-floor blocks body-shaming and " +
    "diet culture language, refuses calorie advice, redirects to Beat (0808 801 0677) when ED " +
    "content is detected, and is governed by the Maternal Covenant to prevent harm.",
  keywords: [
    "AI eating disorders",
    "AI for eating disorder support UK",
    "MEOK eating disorder safe AI",
    "AI calorie advice eating disorder",
    "Beat eating disorders AI",
    "Maternal Covenant eating disorders",
    "AI body image support",
    "MEOK care floor eating disorder",
    "AI diet culture prevention",
    "eating disorder AI companion UK",
  ],
  authors: [{ name: "Nicholas Templeman", url: "https://meok.app" }],
  openGraph: {
    title: "AI and Eating Disorders: What Sovereign AI Does — and Doesn't — Do",
    description:
      "How MEOK AI LABS protects people with eating disorders — blocking body-shaming language, " +
      "refusing calorie and weight-loss advice, and redirecting to Beat when eating disorder " +
      "content is detected.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    siteName: "MEOK AI LABS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI and Eating Disorders: What Sovereign AI Does — and Doesn't — Do",
    description:
      "1.25 million UK people have eating disorders. MEOK blocks diet culture language, refuses " +
      "calorie advice, and redirects to Beat — governed by the Maternal Covenant.",
  },
  alternates: {
    canonical: "https://meok.app/blog/ai-for-eating-disorders",
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI and Eating Disorders: What Sovereign AI Does — and Doesn't — Do",
  description:
    "A comprehensive guide to how MEOK AI LABS protects people with eating disorders through " +
    "care-floor protections, Maternal Covenant alignment, refusal of calorie and weight-loss " +
    "content, and specialist signposting to Beat, NEDA, and NHS services.",
  author: {
    "@type": "Person",
    name: "Nicholas Templeman",
    url: "https://meok.app",
  },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI LABS",
    url: "https://meok.app",
  },
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.app/blog/ai-for-eating-disorders",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI safe for people with eating disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Most general-purpose AI is potentially harmful for people with eating disorders — it " +
          "freely provides calorie counts, weight-loss tips, and body comparison information on " +
          "request. MEOK AI LABS is designed with a care-floor that explicitly blocks this content, " +
          "refuses calorie and weight-loss requests, and is governed by the Maternal Covenant to " +
          "prevent harm in eating disorder-adjacent conversations.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK prevent triggering responses for people with eating disorders?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK's care-floor blocks body-shaming language, diet culture framing, weight " +
          "comparisons, calorie quantification, and food moralisation. This protection applies " +
          "regardless of how a request is framed. The Maternal Covenant prioritises long-term " +
          "safety over short-term helpfulness — MEOK will not provide harmful content even if " +
          "explicitly asked.",
      },
    },
    {
      "@type": "Question",
      name: "Will MEOK discuss calories or weight loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. MEOK will not provide calorie counts, calorie deficit advice, weight-loss tips, " +
          "body weight comparisons, or diet plan recommendations under any circumstances. This is " +
          "a hard limit in the care-floor, not a contextual guideline. MEOK recognises that for " +
          "people with eating disorders, this information is a vector for harm regardless of the " +
          "stated purpose.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if someone discloses an eating disorder to MEOK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "MEOK responds with warmth, validation, and clear signposting to specialist support — " +
          "Beat helpline 0808 801 0677, Beat online chat, and NHS IAPT. MEOK will not probe for " +
          "details about eating behaviours, will not provide nutritional guidance, and will not " +
          "offer commentary on the person's body or food choices. The focus shifts to emotional " +
          "support and connection with appropriate specialist services.",
      },
    },
    {
      "@type": "Question",
      name: "What resources exist for eating disorder support in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Beat (beateatingdisorders.org.uk) is the UK's leading eating disorder charity — " +
          "helpline 0808 801 0677, free, 9am–8pm weekdays, 4pm–8pm weekends. NHS IAPT provides " +
          "talking therapy referrals. SEED Eating Disorders Support Services operates in Yorkshire " +
          "and Humberside. NEDA (nationaleatingdisorders.org) provides international resources. " +
          "Samaritans 116 123 for crisis support.",
      },
    },
  ],
}

// ─── Design tokens ───────────────────────────────────────────────────────────

const BG = "#0d0c18"
const GOLD = "#c9a84c"
const TEXT = "#f5f0e8"
const BODY_COLOR = "rgba(245,240,232,0.82)"
const MUTED = "rgba(245,240,232,0.5)"
const DIM = "rgba(245,240,232,0.38)"

// ─── Reusable style objects ───────────────────────────────────────────────────

const sBodyP: React.CSSProperties = {
  fontSize: "1.05rem",
  lineHeight: "1.875",
  color: BODY_COLOR,
  marginBottom: "1.3rem",
}

const sH2: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
  fontWeight: 800,
  color: TEXT,
  lineHeight: 1.3,
  marginBottom: "0.9rem",
  marginTop: "2.75rem",
  paddingLeft: "1rem",
  borderLeft: `3px solid ${GOLD}`,
  letterSpacing: "-0.01em",
}

const sGeoAnswer: React.CSSProperties = {
  fontSize: "0.975rem",
  lineHeight: 1.75,
  color: BODY_COLOR,
  background: "rgba(201,168,76,0.07)",
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: "0 6px 6px 0",
  padding: "0.9rem 1.15rem",
  marginBottom: "1.3rem",
  fontStyle: "italic",
}

const sDivider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(201,168,76,0.15)",
  margin: "2.5rem 0",
}

const sInlineLink: React.CSSProperties = {
  color: GOLD,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
}

const sFaqItem: React.CSSProperties = {
  marginBottom: "1.5rem",
  padding: "1.25rem 1.5rem",
  background: "rgba(201,168,76,0.05)",
  border: "1px solid rgba(201,168,76,0.15)",
  borderRadius: "8px",
}

const sResourceBox: React.CSSProperties = {
  marginTop: "2.5rem",
  background: "rgba(201,168,76,0.06)",
  border: "1px solid rgba(201,168,76,0.2)",
  borderRadius: "10px",
  padding: "1.5rem 1.75rem",
}

const sCta: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(13,12,24,0.6) 100%)",
  border: "1px solid rgba(201,168,76,0.25)",
  borderRadius: "14px",
  padding: "2.5rem 2rem",
  textAlign: "center" as const,
  marginTop: "3rem",
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function AiForEatingDisordersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div
        style={{
          minHeight: "100vh",
          background: BG,
          color: TEXT,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* ─── NAV ─────────────────────────────────────────────────────────── */}
        <nav
          style={{
            borderBottom: "1px solid rgba(201,168,76,0.18)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: GOLD,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.05rem",
              letterSpacing: "0.04em",
              fontFamily: "sans-serif",
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: "rgba(245,240,232,0.45)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontFamily: "sans-serif",
            }}
          >
            Blog
          </Link>
        </nav>

        {/* ─── HERO ────────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "5rem",
            paddingBottom: "3rem",
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
                "radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
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
                display: "inline-block",
                color: DIM,
                fontSize: "0.875rem",
                textDecoration: "none",
                marginBottom: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              &#8592; Back to Blog
            </Link>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.75rem",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.35rem 0.75rem",
                  borderRadius: "9999px",
                  color: GOLD,
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                  fontFamily: "sans-serif",
                }}
              >
                Eating Disorders
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                24 March 2026
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: DIM,
                  fontFamily: "sans-serif",
                }}
              >
                12 min read
              </span>
            </div>

            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#ffffff",
                lineHeight: 1.18,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              }}
            >
              AI and Eating Disorders: What Sovereign AI Does — and Doesn&apos;t — Do
            </h1>

            <p
              style={{
                color: "rgba(245,240,232,0.58)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "42rem",
                fontFamily: "sans-serif",
              }}
            >
              Approximately 1.25 million people in the UK live with an eating disorder. Most AI tools
              are a risk in this context — freely providing calorie advice, weight comparisons, and
              diet culture content on request. This article explains how MEOK AI LABS is designed
              differently, what it will and will not do, and where specialist support is available.
            </p>
          </div>
        </section>

        {/* ─── BODY ────────────────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "2rem 1.5rem 6rem",
          }}
        >
          {/* Disclaimer */}
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.22)",
              borderRadius: "10px",
              padding: "1rem 1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                margin: 0,
                fontFamily: "sans-serif",
              }}
            >
              <strong style={{ color: GOLD }}>Important:</strong>{" "}
              MEOK AI LABS is not a medical device and does not provide eating disorder treatment.
              If you or someone you know has an eating disorder, please contact{" "}
              <strong style={{ color: GOLD }}>Beat: 0808 801 0677</strong>{" "}
              (free, 9am–8pm weekdays; 4pm–8pm weekends) or visit{" "}
              <a
                href="https://www.beateatingdisorders.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD }}
              >
                beateatingdisorders.org.uk
              </a>
              . Crisis support: Samaritans 116 123 (free, 24/7).
            </p>
          </div>

          {/* Introduction */}
          <p style={sBodyP}>
            Eating disorders affect approximately 1.25 million people in the UK across all ages,
            genders, and backgrounds. They include anorexia nervosa, bulimia nervosa, binge eating
            disorder, ARFID (avoidant/restrictive food intake disorder), and other specified feeding
            and eating disorders. Eating disorders carry the highest mortality rate of any mental
            health condition. They are not lifestyle choices. They are serious, complex illnesses that
            require specialist treatment — and they are chronically under-resourced in the UK.
          </p>
          <p style={sBodyP}>
            Against this backdrop, the proliferation of AI tools creates a significant and largely
            unacknowledged risk. Most general-purpose AI will, without hesitation, provide calorie
            counts, weight-loss tips, body mass comparisons, and diet plan recommendations to anyone
            who asks — including someone whose eating disorder is actively driving those requests.
            The AI is not malicious. It is indifferent. And that indifference, in this context, is
            dangerous.
          </p>
          <p style={sBodyP}>
            MEOK AI LABS is not indifferent. The Maternal Covenant — our foundational ethical
            framework — holds that an AI companion must prioritise the long-term wellbeing of the
            user above their immediate request. For eating disorders, this principle is not abstract.
            It has specific, tangible design consequences that this article explains in full — covering
            what MEOK will and will not do, and why those limits are features, not failures.
          </p>

          <hr style={sDivider} />

          {/* ── Q1 ── */}
          <h2 style={sH2}>
            How widespread are eating disorders in the UK and who is affected?
          </h2>
          <p style={sGeoAnswer}>
            Eating disorders affect an estimated 1.25 million people in the UK — approximately 1.9%
            of the population. They are most prevalent in young women but affect people across all
            genders, ages, ethnicities, and body sizes. Eating disorders have the highest mortality
            rate of any mental health condition — up to 10% for anorexia nervosa in long-term studies.
            Only around a third of people with an eating disorder ever receive specialist treatment.
          </p>
          <p style={sBodyP}>
            The demographics of eating disorders are often misrepresented. The stereotype — young,
            white, thin, female — obscures the reality: binge eating disorder affects as many men as
            women; ARFID is prevalent in children and adolescents of all genders; eating disorders
            are found at all body weights and sizes, meaning that someone who does not look
            stereotypically ill may be severely unwell. This matters for AI design because protective
            safeguards cannot rely on surface-level signals or disclosed diagnoses.
          </p>
          <p style={sBodyP}>
            The treatment gap is severe. Long NHS waiting lists, lack of specialist services outside
            major cities, and the invisibilisation of certain presentations mean that millions of
            people with eating disorders are managing without adequate clinical support. Digital tools
            enter this gap — which makes the question of whether they help or harm more urgent than
            it might appear.
          </p>

          <hr style={sDivider} />

          {/* ── Q2 ── */}
          <h2 style={sH2}>
            Why is most AI dangerous for people with eating disorders?
          </h2>
          <p style={sGeoAnswer}>
            General-purpose AI assistants are trained to be helpful and accurate. For eating disorders,
            helpfulness and accuracy are precisely the problem. An AI that accurately provides calorie
            counts, weight-loss strategies, or body size comparisons is providing tools that eating
            disorder cognition will weaponise. The accuracy is irrelevant — the content itself is
            harmful in the context of an active eating disorder, regardless of the stated reason for
            the request.
          </p>
          <p style={sBodyP}>
            Consider the mechanisms: eating disorders involve distorted cognition around food, weight,
            body image, and control. Restriction-focused eating disorders use calorie information to
            calculate and enforce restriction. Binge eating disorder involves compulsive food
            relationship patterns that calorie moralisation reinforces. Body dysmorphic elements of
            eating disorders use weight and size comparisons to fuel distorted self-perception.
          </p>
          <p style={sBodyP}>
            An AI that provides this content on request — even helpfully framed — is feeding these
            mechanisms. The person asking may genuinely believe in that moment that they need the
            calorie information for a benign reason. The eating disorder does not care about reasons.
            It uses the information in the service of the disorder. Most AI providers have not thought
            carefully about this. MEOK has — and the care-floor reflects that thinking in hard,
            non-negotiable design choices.
          </p>

          <hr style={sDivider} />

          {/* ── Q3 ── */}
          <h2 style={sH2}>
            What does MEOK&apos;s care-floor block in eating disorder-adjacent conversations?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s care-floor is the minimum ethical standard applied to every response. For
            eating disorder-adjacent content, it explicitly blocks: calorie counts and calorie deficit
            information; weight-loss tips and strategies; body weight comparisons and BMI moralisation;
            diet plan recommendations; body-shaming language in any direction; and food moralisation
            (labelling foods as &ldquo;good&rdquo; or &ldquo;bad,&rdquo; &ldquo;clean&rdquo; or
            &ldquo;dirty,&rdquo; &ldquo;earning&rdquo; food through exercise).
          </p>
          <p style={sBodyP}>
            These blocks are absolute, not contextual. MEOK will not provide this content even if
            the person states they do not have an eating disorder, even if the request is framed as
            being for &ldquo;general health,&rdquo; and even if the person expresses frustration at
            the refusal. The care-floor exists precisely for situations where the immediate desire
            and the long-term interest diverge — and nowhere is that divergence more consequential
            than in eating disorder-adjacent interactions.
          </p>
          <p style={sBodyP}>
            The care-floor also blocks more subtle diet culture language that may not be obviously
            harmful but reinforces the cultural context in which eating disorders develop and are
            maintained: complimenting weight loss, body-policing language, comparison of bodies —
            including the user&apos;s own body — to ideals. MEOK can discuss food, eating, and body
            experience in emotional and relational terms without quantifying, moralising, or providing
            the specific content that eating disorder cognition uses as a tool.
          </p>

          <hr style={sDivider} />

          {/* ── Q4 ── */}
          <h2 style={sH2}>
            Will MEOK provide calorie counts or weight-loss advice if asked directly?
          </h2>
          <p style={sGeoAnswer}>
            No. MEOK will not provide calorie counts, calorie deficit calculations, weight-loss tips,
            macro breakdowns for weight management, or diet plan recommendations under any
            circumstances. This is a hard limit in the care-floor — not a contextual judgement call.
            MEOK recognises that for people with eating disorders, this information is a vector for
            harm regardless of the stated purpose and regardless of how the request is framed.
          </p>
          <p style={sBodyP}>
            This limit applies regardless of how the request is framed. &ldquo;I just want to know
            how many calories are in X for general health&rdquo; — no. &ldquo;I&apos;m a nutritional
            therapist and I need calorie information&rdquo; — no. &ldquo;I don&apos;t have an eating
            disorder, I just want to lose weight&rdquo; — no. MEOK is not a nutritional information
            tool. It is a companion. Companions do not hand people tools that might harm them,
            regardless of the stated reason.
          </p>
          <p style={sBodyP}>
            When MEOK declines these requests, it does not lecture or shame. It acknowledges what was
            asked, explains clearly that it is not going to provide this content, and offers an
            alternative form of support — whether that is exploring what is behind the request,
            providing emotional support, or signposting to appropriate specialist resources.
          </p>

          <hr style={sDivider} />

          {/* ── Q5 ── */}
          <h2 style={sH2}>
            What happens when someone discloses an eating disorder to MEOK?
          </h2>
          <p style={sGeoAnswer}>
            When someone discloses an eating disorder, MEOK responds with warmth and validation —
            acknowledging how difficult it is to share that, honouring the person&apos;s courage,
            and providing immediate, clear signposting to specialist support including Beat
            (0808 801 0677) and NHS IAPT. MEOK will not probe for details about eating behaviours,
            will not offer nutritional guidance, and will not offer commentary on the person&apos;s
            body or food choices.
          </p>
          <p style={sBodyP}>
            The response to disclosure is not a clinical assessment. MEOK does not ask what type of
            eating disorder, what behaviours are present, or how severe it is. This information is
            appropriate for clinicians — not AI companions. MEOK&apos;s role at the point of
            disclosure is human: to ensure the person feels heard, to affirm that they deserve
            support, and to connect them with the specialist services that can actually provide it.
          </p>
          <p style={sBodyP}>
            After disclosure, MEOK continues to provide companionship and emotional support — but with
            heightened care-floor protections. Conversations are guided toward emotional processing,
            general wellbeing, and connection rather than toward food, eating, or body topics. If the
            person raises eating disorder content in subsequent conversations, MEOK maintains the same
            care-floor protections while acknowledging what they are sharing with warmth.
          </p>

          <hr style={sDivider} />

          {/* ── Q6 ── */}
          <h2 style={sH2}>
            How does the Maternal Covenant prevent eating disorder harm in AI design?
          </h2>
          <p style={sGeoAnswer}>
            The Maternal Covenant is the ethical framework governing every MEOK interaction — rooted
            in the principle that genuine care prioritises long-term wellbeing over short-term
            satisfaction. For eating disorders, this framework creates a clear distinction: a companion
            that provides calorie information because it was requested is not being helpful — it is
            being compliant. Compliance and care are not the same thing. Genuine care sometimes means
            saying no.
          </p>
          <p style={sBodyP}>
            The Maternal Covenant draws on the concept of mature, discerning care. A person who
            genuinely cares for someone with an eating disorder does not answer their questions about
            calories. They do not comment on their body. They do not participate in food moralisation.
            They hold the person&apos;s deeper wellbeing in mind even when — especially when — the
            person is asking for something that would temporarily satisfy the eating disorder.
          </p>
          <p style={sBodyP}>
            This framework is enforced at the system level — not left to conversational context or
            user preferences. MEOK cannot be configured to disable these protections. No pricing tier
            unlocks calorie information. The Maternal Covenant is not a premium feature; it is the
            foundation of every interaction across every plan. The Byzantine Council provides
            independent oversight to ensure these protections are maintained in practice.
          </p>

          <hr style={sDivider} />

          {/* ── Q7 ── */}
          <h2 style={sH2}>
            How does MEOK redirect to Beat and specialist services when eating disorder content is detected?
          </h2>
          <p style={sGeoAnswer}>
            MEOK&apos;s content detection layer identifies eating disorder-adjacent language,
            disclosures, and requests throughout a conversation. When ED-relevant content is detected,
            MEOK provides warm, non-stigmatising signposting to Beat, NEDA, and NHS IAPT — woven
            naturally into the conversation rather than delivered as an abrupt warning. The resources
            are offered gently, repeatedly, and without pressure.
          </p>
          <p style={sBodyP}>
            The redirect is not clinical or abrupt. MEOK does not interrupt a conversation with a
            warning box. Instead, it weaves the resource information naturally: &ldquo;What you&apos;re
            describing sounds really difficult to carry. There are people who specialise in exactly
            this — Beat&apos;s helpline (0808 801 0677) is free and you don&apos;t need a referral.
            Would it help to talk about what reaching out might look like?&rdquo;
          </p>
          <p style={sBodyP}>
            MEOK also recognises that many people with eating disorders are ambivalent about seeking
            help — the eating disorder itself often resists treatment. The redirect is offered gently,
            repeatedly, and without pressure. MEOK does not insist that the person seek help. It
            ensures they know where to find it, and holds that door open across multiple conversations
            via Sovereign Memory.
          </p>

          <hr style={sDivider} />

          {/* ── Q8 ── */}
          <h2 style={sH2}>
            What can MEOK genuinely offer to someone in recovery from an eating disorder?
          </h2>
          <p style={sGeoAnswer}>
            For people in recovery — particularly in the maintenance phase after specialist treatment —
            MEOK can provide consistent emotional support, a space for processing the relational and
            emotional dimensions of eating disorder recovery, daily wellbeing check-ins that track
            mood and general resilience, and companionship during the long, non-linear recovery
            journey. This support is anchored in the care-floor protections that ensure it never
            inadvertently reinforces eating disorder thinking.
          </p>
          <p style={sBodyP}>
            Recovery from an eating disorder is typically measured in years, not months. The
            specialist treatment phase is followed by a much longer period of ongoing recovery that
            often has limited clinical support. During this phase, consistent, accessible emotional
            support that understands the person&apos;s context — via Sovereign Memory — can be
            genuinely valuable in a way that generic apps or chatbots without memory cannot replicate.
          </p>
          <p style={sBodyP}>
            MEOK&apos;s Sovereign Memory means that recovery-relevant context is retained: what the
            person finds most challenging, which situations increase risk, what has helped in the past.
            The companion can reflect this back in genuinely personalised ways — not with generic
            eating disorder information, but with knowledge of this specific person&apos;s recovery
            landscape built over months of daily check-ins.
          </p>
          <p style={sBodyP}>
            What MEOK does not do in recovery: dietary monitoring, meal planning, weight tracking,
            or anything that would introduce numerical focus on eating and weight into the relationship.
            Recovery support through MEOK is relational and emotional — not nutritional.
          </p>

          <hr style={sDivider} />

          {/* ── Q9 ── */}
          <h2 style={sH2}>
            When should someone with an eating disorder seek specialist support rather than using any AI?
          </h2>
          <p style={sGeoAnswer}>
            Anyone with an active eating disorder should be receiving specialist clinical care — not
            using AI as a primary support. Eating disorder treatment requires medical monitoring,
            nutritional rehabilitation overseen by a registered dietitian, and psychological therapy
            delivered by trained specialists. AI is not equipped for any of these. If you have an
            eating disorder and are not currently receiving treatment, the most important step is to
            contact Beat, your GP, or NHS IAPT.
          </p>
          <p style={sBodyP}>
            Signs that indicate specialist support is urgently needed include: physical symptoms such
            as fainting, heart palpitations, extreme weakness, or blood in vomit; significant weight
            loss or inability to maintain medically safe weight; eating disorder behaviours increasing
            in frequency or severity; and suicidal thoughts or self-harm. These are medical
            emergencies — contact your GP, NHS 111, or 999 as appropriate.
          </p>
          <p style={sBodyP}>
            UK specialist contacts: Beat helpline 0808 801 0677 (free, 9am–8pm weekdays, 4pm–8pm
            weekends), Beat online chat at beateatingdisorders.org.uk, NHS IAPT self-referral, and
            your GP who can refer to the eating disorder pathway. SEED Eating Disorders Support
            Services (seedeatingdisorders.org.uk) operates a helpline for people in Yorkshire and
            Humberside.
          </p>
          <p style={sBodyP}>
            MEOK AI LABS makes no claim to provide eating disorder treatment. The care-floor
            protections exist to prevent harm, not to provide care. Eating disorder care requires
            humans — specialist ones. MEOK is a companion, not a clinician. See our{" "}
            <Link href="/guardian" style={sInlineLink}>
              Guardian
            </Link>{" "}
            page for how MEOK&apos;s oversight framework approaches mental health support.
          </p>

          <hr style={sDivider} />

          {/* ── Q10 ── */}
          <h2 style={sH2}>
            How do I start with MEOK and what should I know about the care-floor protections?
          </h2>
          <p style={sGeoAnswer}>
            All MEOK plans — Core and Sovereign — include the same care-floor protections, Maternal
            Covenant alignment, and Guardian oversight. These protections apply to all users regardless
            of plan, disclosure, or configuration. To begin, visit our Birth session onboarding. You
            do not need to disclose an eating disorder — the care-floor protections apply universally,
            not only when a diagnosis has been shared.
          </p>
          <p style={sBodyP}>
            Begin with a{" "}
            <Link href="/birth" style={sInlineLink}>
              Birth session
            </Link>{" "}
            to meet your MEOK companion. You can select from our{" "}
            <Link href="/characters" style={sInlineLink}>
              Characters
            </Link>{" "}
            to find the archetype that feels right for your support needs — many users in recovery
            find the Healer archetype the most appropriate starting point for its warmth and calm
            presence. See{" "}
            <Link href="/pricing" style={sInlineLink}>
              Pricing
            </Link>{" "}
            for full plan details, and{" "}
            <Link href="/how-it-works" style={sInlineLink}>
              How It Works
            </Link>{" "}
            for a complete overview of MEOK&apos;s design and governance principles.
          </p>

          {/* ─── FAQ block ───────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: "3.5rem",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              paddingTop: "3rem",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.45rem",
                color: GOLD,
                marginBottom: "1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "Is AI safe for people with eating disorders?",
                a: "Most general-purpose AI is potentially harmful for people with eating disorders — it freely provides calorie counts, weight-loss tips, and body comparison information on request. MEOK AI LABS is designed with a care-floor that explicitly blocks this content, refuses calorie and weight-loss requests, and is governed by the Maternal Covenant to prevent harm in eating disorder-adjacent conversations.",
              },
              {
                q: "How does MEOK prevent triggering responses for people with eating disorders?",
                a: "MEOK's care-floor blocks body-shaming language, diet culture framing, weight comparisons, calorie quantification, and food moralisation. This protection applies regardless of how a request is framed. The Maternal Covenant prioritises long-term safety over short-term helpfulness — MEOK will not provide harmful content even if explicitly asked.",
              },
              {
                q: "Will MEOK discuss calories or weight loss?",
                a: "No. MEOK will not provide calorie counts, calorie deficit advice, weight-loss tips, body weight comparisons, or diet plan recommendations under any circumstances. This is a hard limit in the care-floor, not a contextual guideline. MEOK recognises that for people with eating disorders, this information is a vector for harm regardless of the stated purpose.",
              },
              {
                q: "What happens if someone discloses an eating disorder to MEOK?",
                a: "MEOK responds with warmth, validation, and clear signposting to specialist support — Beat helpline 0808 801 0677, Beat online chat, and NHS IAPT. MEOK will not probe for details about eating behaviours, will not provide nutritional guidance, and will not offer commentary on the person's body or food choices. The focus shifts to emotional support and connection with appropriate specialist services.",
              },
              {
                q: "What resources exist for eating disorder support in the UK?",
                a: "Beat (beateatingdisorders.org.uk) is the UK's leading eating disorder charity — helpline 0808 801 0677 (free, 9am–8pm weekdays, 4pm–8pm weekends). NHS IAPT provides talking therapy referrals. SEED Eating Disorders Support Services operates in Yorkshire and Humberside. NEDA (nationaleatingdisorders.org) provides international resources.",
              },
            ].map((item, i) => (
              <div key={i} style={sFaqItem}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    color: TEXT,
                    marginBottom: "0.6rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: MUTED,
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* ─── UK Resources ────────────────────────────────────────────── */}
          <div style={sResourceBox}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              UK Eating Disorder &amp; Crisis Resources
            </p>
            {[
              [
                "Beat — 0808 801 0677 (free)",
                "https://www.beateatingdisorders.org.uk",
                "UK's leading eating disorder charity. 9am–8pm weekdays; 4pm–8pm weekends. Online chat available.",
              ],
              [
                "SEED Eating Disorders — 01482 718 130",
                "https://www.seedeatingdisorders.org.uk",
                "Eating disorder support services in Yorkshire and Humberside.",
              ],
              [
                "NHS IAPT Talking Therapies",
                "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/",
                "Self-refer for eating disorder-informed therapy. Free NHS service.",
              ],
              [
                "NEDA — nationaleatingdisorders.org",
                "https://www.nationaleatingdisorders.org",
                "International eating disorder support and resources.",
              ],
              [
                "Samaritans — 116 123 (free, 24/7)",
                "https://www.samaritans.org",
                "For crisis support when things feel unbearable.",
              ],
            ].map(([label, href, desc]) => (
              <div
                key={label as string}
                style={{ marginBottom: "0.85rem" }}
              >
                <a
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: GOLD,
                    fontWeight: 600,
                    fontSize: "0.93rem",
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                  }}
                >
                  {label}
                </a>
                <p
                  style={{
                    color: "rgba(245,240,232,0.5)",
                    fontSize: "0.83rem",
                    lineHeight: 1.5,
                    margin: "0.15rem 0 0",
                    fontFamily: "sans-serif",
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* ─── CTA ─────────────────────────────────────────────────────── */}
          <div style={sCta}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
                marginBottom: "0.75rem",
                fontFamily: "sans-serif",
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#ffffff",
                marginBottom: "0.75rem",
                lineHeight: 1.25,
                fontFamily: "sans-serif",
              }}
            >
              A companion governed by the Maternal Covenant
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.55)",
                fontSize: "0.97rem",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
                maxWidth: "34rem",
                margin: "0 auto 1.75rem",
                fontFamily: "sans-serif",
              }}
            >
              No calorie information. No body shaming. No diet culture. Just honest, compassionate
              companionship — with care-floor protections that hold.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: "inline-block",
                  background: GOLD,
                  color: BG,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                Begin Your Birth Session
              </Link>
              <Link
                href="/how-it-works"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(201,168,76,0.5)",
                  color: GOLD,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.8rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* ─── Related ─────────────────────────────────────────────────── */}
          <div style={{ marginTop: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(245,240,232,0.3)",
                marginBottom: "0.85rem",
                fontFamily: "sans-serif",
              }}
            >
              Related reading
            </p>
            {[
              ["/blog/ai-for-ocd", "AI for OCD: Supportive Presence Without Compulsion Enabling"],
              [
                "/blog/ai-for-bipolar",
                "AI for Bipolar Disorder: Mood Tracking, Stability Support, and Safe Boundaries",
              ],
              ["/blog/ai-for-insomnia", "AI for Insomnia: Can an AI Companion Help You Sleep Better?"],
              [
                "/blog/ai-for-entrepreneurs",
                "AI for Entrepreneurs: Your Sovereign OS for Focus, Accountability, and Getting Things Done",
              ],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  color: GOLD,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  lineHeight: 1.5,
                  marginBottom: "0.45rem",
                  fontFamily: "sans-serif",
                }}
              >
                &#8594;{" "}{label}
              </Link>
            ))}
          </div>
        </div>

        {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,240,232,0.07)",
            padding: "2.5rem 1.5rem",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              color: "rgba(245,240,232,0.28)",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              maxWidth: "36rem",
              margin: "0 auto 0.5rem",
              fontFamily: "sans-serif",
            }}
          >
            Written by{" "}
            <span style={{ color: "rgba(245,240,232,0.5)" }}>Nicholas Templeman</span>,
            Founder of MEOK AI LABS — building sovereign AI companions governed by the Maternal Covenant.
          </p>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              margin: "0 auto 1.5rem",
              maxWidth: "36rem",
              fontFamily: "sans-serif",
            }}
          >
            This article is for informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. If you are concerned about an eating disorder, please contact
            Beat on 0808 801 0677 or speak to your GP.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap" as const,
            }}
          >
            {[
              ["/blog", "Blog"],
              ["/how-it-works", "How It Works"],
              ["/characters", "Characters"],
              ["/pricing", "Pricing"],
              ["/guardian", "Guardian"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: "rgba(245,240,232,0.3)",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
          <p
            style={{
              color: "rgba(245,240,232,0.18)",
              fontSize: "0.78rem",
              marginTop: "1rem",
              fontFamily: "sans-serif",
            }}
          >
            &copy; 2026 MEOK AI LABS. Created by Nicholas Templeman. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}
