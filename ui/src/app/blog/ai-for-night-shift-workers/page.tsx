import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI for Night Shift Workers: Sovereign Support When Everyone Else Is Asleep | MEOK AI LABS",
  description:
    "3.5 million UK workers on nights face depression, social isolation, and a mental health system that closes at 5pm. MEOK is available at exactly 3am \u2014 no appointment, no waiting list, no judgement.",
  keywords: [
    "AI for night shift workers",
    "night shift mental health UK",
    "AI companion for NHS nurses",
    "night shift depression anxiety",
    "shift work mental health support",
    "AI available 3am",
    "night shift social isolation",
    "MEOK AI LABS",
    "shift worker wellbeing",
    "AI for paramedics police prison officers",
    "sovereign AI night shift",
    "mental health support night shift",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Night Shift Workers: Sovereign Support When Everyone Else Is Asleep",
    description:
      "Night shift workers are 33% more likely to experience depression. MEOK is the AI companion that meets you at 3am \u2014 persistent memory, no scheduling, no waiting list.",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Night Shift", "Mental Health", "AI Companion", "NHS", "Shift Work", "MEOK", "Sovereign AI"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Night Shift Workers: Sovereign Support When Everyone Else Is Asleep",
    description:
      "MEOK is available at 3am on a Wednesday. No appointment. No waiting list. Just a persistent AI companion that knows your shift pattern and holds space for the weight you carry.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-night-shift-workers",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Night Shift Workers: Sovereign Support When Everyone Else Is Asleep",
  description:
    "How MEOK AI LABS supports the 3.5 million UK workers on night shifts \u2014 NHS nurses, paramedics, police, prison officers, factory workers, security, and hospitality staff \u2014 with persistent AI companionship available at 3am when the rest of the world is asleep.",
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
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://meok.ai/blog/ai-for-night-shift-workers",
  },
  keywords:
    "AI for night shift workers, night shift mental health, NHS night shift support, shift work depression, AI companion 3am, MEOK AI LABS, sovereign AI, paramedics police prison officers",
  articleSection: "Night Shift & Mental Health",
  wordCount: 1800,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can AI help night shift workers with mental health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI companions like MEOK are particularly suited to night shift workers because they are available around the clock with no scheduling required. Traditional mental health support \u2014 GPs, therapists, crisis lines \u2014 operates predominantly during daytime hours, creating a significant gap for the 3.5 million UK workers whose hours invert the normal day. MEOK provides a consistent, non-judgemental presence at 3am, remembers your history across sessions, and adapts to your wake pattern rather than expecting you to operate on a 9am schedule. It does not replace professional support, but it fills the gap when professional support is unavailable.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK available at 3am?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is available 24 hours a day, 7 days a week, 365 days a year \u2014 including at 3am on a Wednesday, at 4:30am on Christmas morning, at 2am on a bank holiday Sunday. There is no scheduling system, no appointment to book, no support line that rings out. MEOK is simply there when you open the app. For night shift workers, this is one of the most practically significant things about MEOK: the help is available at the precise moment you need it, not during a window that requires you to be awake at the wrong time.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK support NHS nurses and healthcare workers on nights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHS nurses and healthcare workers on night shifts carry a particular kind of weight. Patient deaths, acute crises, moral injury, physical exhaustion, and the knowledge that the support systems available to daytime colleagues are not accessible at 3am. MEOK provides a private, secure space to decompress after a difficult shift \u2014 not as a clinical tool, but as a consistent companion that remembers your context over time. MEOK knows the names of your colleagues if you have shared them, recalls the difficult patient you mentioned two weeks ago, and holds the accumulated narrative of your working life. It does not share your data with your employer. It does not require a referral. It is available in the break room, on the way home, or in the quiet after you finally get to sleep.",
      },
    },
    {
      "@type": "Question",
      name: "Does night shift work cause mental health problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research consistently links night shift work to elevated rates of depression and anxiety. Studies indicate night shift workers are approximately 33% more likely to experience depression and 28% more likely to develop anxiety compared to daytime workers. The mechanisms are multiple: circadian rhythm disruption affects the regulation of mood-related hormones including cortisol and serotonin; social isolation compounds over time as workers exist on a schedule incompatible with family, friends, and social infrastructure; reduced access to natural light contributes to seasonal-pattern mood disturbance; and the occupational stress of high-intensity night roles \u2014 in healthcare, emergency services, or security \u2014 adds a further layer of pressure. Night shift work does not inevitably cause mental health problems, but it creates conditions of elevated risk that are not adequately served by a mental health system that largely closes at 5pm.",
      },
    },
  ],
}

export default function AIForNightShiftWorkersPage() {
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
          fontFamily: "'Georgia', serif",
        }}
      >
        {/* Breadcrumb */}
        <nav
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "24px 24px 0",
            fontSize: "13px",
            fontFamily: "'Inter', sans-serif",
            color: "rgba(245,240,232,0.5)",
          }}
        >
          <Link
            href="/"
            style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
          >
            MEOK
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link
            href="/blog"
            style={{ color: "rgba(245,240,232,0.5)", textDecoration: "none" }}
          >
            Blog
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#c9a84c" }}>AI for Night Shift Workers</span>
        </nav>

        {/* Hero */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "64px 24px 56px",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Night Shift &amp; Mental Health
          </p>

          <h1
            style={{
              fontSize: "clamp(28px, 4.5vw, 50px)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "28px",
              color: "#f5f0e8",
            }}
          >
            AI for Night Shift Workers: Sovereign Support When Everyone Else Is Asleep
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.75,
              color: "#c9a84c",
              marginBottom: "28px",
              fontStyle: "italic",
            }}
          >
            3.5 million UK workers keep the country running through the night. The mental health system thanks them by closing at 5pm.
          </p>

          <div
            style={{
              fontSize: "13px",
              color: "rgba(245,240,232,0.45)",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "48px",
            }}
          >
            By Nicholas Templeman &nbsp;&middot;&nbsp; MEOK AI LABS &nbsp;&middot;&nbsp; 25 March 2026
          </div>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            It is 3am on a Wednesday. The ward is quiet &mdash; or as quiet as a hospital ever gets. You finished a run of four nights last week and started another one on Monday. Your body doesn&apos;t know what day it is anymore. Your friends, your partner, your family &mdash; they&apos;re asleep. The group chat hasn&apos;t had a message since yesterday afternoon. The employee assistance line your HR department told you about operates Monday to Friday, nine to five.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            You are not in crisis. You are just tired, a little lonely, and carrying the weight of something that happened earlier in the shift that you haven&apos;t had time to process. You need somewhere to put it.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            This is the gap MEOK was built to fill. Not to replace therapy. Not to act as a clinical service. But to be the sovereign, persistent presence that is actually there &mdash; at 3am, on a Wednesday, when no one else is.
          </p>
        </section>

        {/* Stats callout */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 64px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "12px",
              padding: "40px",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontSize: "12px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              The Numbers Behind the Night
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "32px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  3.5m
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(245,240,232,0.7)",
                    lineHeight: 1.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  UK workers regularly on night shifts
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  33%
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(245,240,232,0.7)",
                    lineHeight: 1.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  more likely to experience depression vs daytime workers
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  28%
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(245,240,232,0.7)",
                    lineHeight: 1.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  more likely to develop anxiety
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "#c9a84c",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  0
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(245,240,232,0.7)",
                    lineHeight: 1.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  EAP lines or NHS talking therapies routinely available at 3am
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Who works nights */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            Who Works Nights in the UK
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Night shift workers are not a niche population. They are the invisible infrastructure of British society &mdash; the people who keep everything running between midnight and six in the morning, and who go largely unseen by a world that operates on a different clock.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            NHS nurses, midwives, and healthcare assistants rotate through nights as a standard part of their contracts. Paramedics and ambulance crews work nights across the country&apos;s 999 network. Police officers, prison officers, and border force staff maintain the safety systems that the public takes for granted while they sleep. Factory workers keep production lines moving. Security guards watch over commercial premises. Hospitality workers run the late-night restaurants, clubs, and hotels. Lorry drivers carry freight along motorways that are empty of cars. Bakers start at 3am so there is bread on the shelves by seven.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            What these roles have in common is not just the hours. It is the structural invisibility that comes with working a schedule that puts you out of phase with the world. Services, support systems, social life, and mental health provision are all built around daylight hours. Night shift workers exist at the edges of all of it.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            According to figures from the Office for National Statistics, approximately 3.5 million people in the UK regularly work night shifts. That is a significant portion of the working population living on an inverted schedule &mdash; and the mental health system has not caught up with what that means.
          </p>
        </section>

        {/* Section 2: What nights do to your mind */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            What Night Shift Does to Your Mental Health
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The effects of night shift work on mental health are well-documented, cumulative, and poorly acknowledged by most employers. The disruption begins at the biological level and compounds outward into every area of life.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Circadian rhythm disruption is the foundation. The human body is regulated by a biological clock that has evolved over millions of years around a light-dark cycle. When you work through the night and sleep through the day, you are fighting that clock. Cortisol, melatonin, serotonin, and dopamine all operate on circadian patterns. When those patterns are disrupted consistently over months and years, the regulatory systems underpinning mood, motivation, and emotional resilience begin to fray.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The research is clear on the outcomes. Night shift workers are 33% more likely to experience clinical depression than workers on standard daytime schedules. They are 28% more likely to develop anxiety. Rates of metabolic syndrome, cardiovascular disease, and immune dysfunction are all elevated in long-term shift workers. These are not marginal effects &mdash; they represent a meaningful difference in the probability of serious health consequences, driven by a schedule that workers often have little choice about.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Beyond the biology, there is the accumulation of social disconnection. Birthdays happen on days you&apos;re sleeping. Your partner has long since stopped expecting you at family dinners on Tuesday evenings. The five-a-side football your friends play on Thursday nights &mdash; the one you said you&apos;d join &mdash; happens during your working hours or your recovery window. Over months and years, the normal texture of social connection erodes, replaced by an isolation that is structural rather than personal. You are not anti-social. You are simply on a different clock to the world around you.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            And the mental health system, designed for people whose lives run on daylight hours, is largely unavailable to the people most affected. GP appointments are predominantly offered between 8am and 6pm. IAPT talking therapy services run during office hours. Employee assistance programmes advertise 24/7 lines, but the quality of support available at 3am on a Tuesday is not the same as the daytime service. The system was not built with night workers in mind, and they know it.
          </p>
        </section>

        {/* Section 3: The 3am problem */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            The 3am Problem
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            There is a particular quality to 3am that anyone who has worked nights understands. It is not just tiredness. It is a specific combination of physical depletion, circadian low point, and cognitive narrowing that makes difficult thoughts feel heavier, more permanent, and harder to put down.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            For the nurse who has just lost a patient. For the paramedic who has come off a road traffic collision and has two hours left on the shift. For the prison officer who has dealt with a violent incident and is eating a meal deal alone in the break room. For the factory worker on their sixth consecutive night, who is starting to feel like their entire life is the drive there, the hours on the line, and the drive back. For anyone experiencing the kind of low-grade but persistent loneliness that builds slowly and feels embarrassing to name.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The 3am problem is not always a crisis. It does not always reach the threshold of dialling 999 or going to A&amp;E. But it is real, it is heavy, and it is happening with no one available to help.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            You could call a friend. But it is 3am and they are asleep. You could text someone. But the chat will sit unread until morning, by which point the weight of it has either dissipated or calcified into something you&apos;ve decided not to mention after all. You could use an app &mdash; but most mental health apps expect you to engage in a programme, fill in a worksheet, complete a mood diary. At 3am, after a hard shift, the cognitive overhead of a structured programme is exactly what you do not have capacity for.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            What you need is somewhere to put it. Somewhere that is awake, that listens, that remembers what you told it last week, and that does not require you to explain yourself from scratch every time.
          </p>
        </section>

        {/* Quote block */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <blockquote
            style={{
              borderLeft: "3px solid #c9a84c",
              paddingLeft: "28px",
              margin: "0",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                lineHeight: 1.75,
                color: "#c9a84c",
                fontStyle: "italic",
                marginBottom: "16px",
              }}
            >
              &ldquo;MEOK is available at exactly 3am on a Wednesday. No appointment. No hold music. No explaining who you are and starting from the beginning.&rdquo;
            </p>
            <cite
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.5)",
                fontFamily: "'Inter', sans-serif",
                fontStyle: "normal",
              }}
            >
              Nicholas Templeman, Founder, MEOK AI LABS
            </cite>
          </blockquote>
        </section>

        {/* Section 4: What MEOK actually does */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            What MEOK Actually Does for Night Shift Workers
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            MEOK is a sovereign AI companion. Not a chatbot. Not a mental health app. Not a productivity tool. A persistent, private intelligence that works for you and only you &mdash; one that accumulates knowledge of your life over time and uses that knowledge to support you in the specific circumstances of your actual existence.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "32px",
              color: "#e8e3da",
            }}
          >
            For night shift workers, that means several things in practice.
          </p>

          {/* Feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Always On
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  margin: 0,
                }}
              >
                MEOK is available at 3am, at 4:30am, at 6am when you&apos;re driving home. No scheduling. No waiting list. No hold music. Simply open the app and it is there &mdash; the same MEOK that was there last Tuesday, and the Tuesday before that.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Persistent Memory
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  margin: 0,
                }}
              >
                MEOK knows your shift pattern because you told it. It knows the names of your colleagues, the difficult situations you&apos;ve been through, the pattern of your hard nights. You don&apos;t explain yourself from scratch every time. MEOK remembers.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Inverted Schedule Support
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  margin: 0,
                }}
              >
                MEOK&apos;s morning briefing adapts to your wake time, not a 9am default. If your morning is 7pm because you&apos;re on a run of nights, MEOK meets you at 7pm. Your schedule is the reference point &mdash; not society&apos;s.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Decompression Space
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  margin: 0,
                }}
              >
                Night shift workers carry intense experiences. MEOK holds space for decompression after difficult shifts &mdash; not as a clinical intervention, but as a consistent presence that listens, reflects, and doesn&apos;t carry the weight back to your employer or your family.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Guardian Protection
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  margin: 0,
                }}
              >
                Fatigue and isolation make night shift workers disproportionately vulnerable to financial scams. MEOK&apos;s Guardian layer monitors for patterns associated with scam exploitation and helps you think clearly about unusual requests at 4am when your defences are down.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Data Sovereignty
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(245,240,232,0.8)",
                  margin: 0,
                }}
              >
                Everything you tell MEOK belongs to you. It is not shared with your employer, your GP, or any third party. There is no data used to train models or sold to insurers. Your conversations are private &mdash; particularly important for workers in regulated professions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Specific roles */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            NHS Nurses, Paramedics, Police: Carrying What the Job Demands
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Some night shift roles carry a weight that goes beyond physical exhaustion and social dislocation. For healthcare workers, emergency services, and prison staff, the night shift can mean direct exposure to trauma, death, violence, and human suffering on a regular basis.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            An NHS nurse on a night shift might lose a patient at 2am and have three more hours on the ward before handover. There is no structured debrief. There is no on-site counsellor at that hour. There is the expectation &mdash; sometimes spoken, often not &mdash; that you carry on. The decompression, if it happens at all, happens alone, often on the drive home, often in the grey hour between getting back and finally managing to sleep.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            A paramedic coming off a road traffic collision or a paediatric resuscitation carries that in their body. The adrenaline dissipates slowly. The images do not. Peer support matters &mdash; many ambulance trusts have started investing in it &mdash; but peer support is not always available at 3am, and it requires the specific willingness to approach a colleague and say: that one hit me.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Police officers and prison officers working nights deal with violence, aggression, and exposure to the most chaotic edges of human behaviour. The occupational culture in both services historically discourages the expression of distress. Disclosure can feel professionally risky. The stoicism that the job demands can, over time, become indistinguishable from suppression.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            MEOK is not a substitute for professional psychological support. But it is a private, non-judgmental space that does not report back to your employer, does not require you to demonstrate sufficient need to access, and does not operate on a waiting list. For workers in professions where disclosure carries risk and vulnerability is culturally discouraged, that privacy matters as much as the availability.
          </p>
        </section>

        {/* Section 6: MEOK vs EAP comparison */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            MEOK vs Your Employee Assistance Programme
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "32px",
              color: "#e8e3da",
            }}
          >
            Most UK employers with any investment in staff wellbeing provide access to an Employee Assistance Programme. EAPs are valuable and genuinely helpful for many workers. But they were designed for daytime employees, and the gap between what an EAP offers and what a night shift worker actually needs at 3am is significant.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "rgba(245,240,232,0.5)",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Employee Assistance Line
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "Primarily scheduled, daytime-focused",
                  "Different counsellor every call",
                  "No memory of previous sessions",
                  "Disclosure may feel professionally risky",
                  "Structured programme or guided worksheets",
                  "Typically 6\u20138 sessions then discharged",
                  "Operated on employer\u2019s schedule",
                  "Data shared with provider",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "rgba(245,240,232,0.6)",
                      marginBottom: "12px",
                      paddingLeft: "20px",
                      position: "relative",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "rgba(245,240,232,0.3)",
                      }}
                    >
                      &mdash;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                MEOK
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "Available 24/7 including 3am",
                  "Same MEOK every time \u2014 sovereign memory",
                  "Remembers your history across all sessions",
                  "Private \u2014 not connected to your employer",
                  "Conversation-led, no structured programme",
                  "No session limit, no discharge",
                  "Adapts to your schedule and wake time",
                  "Your data belongs to you, never shared",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "rgba(245,240,232,0.85)",
                      marginBottom: "12px",
                      paddingLeft: "20px",
                      position: "relative",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#c9a84c",
                      }}
                    >
                      &rarr;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            The point is not that MEOK replaces an EAP. For many workers, an EAP is a valuable resource. The point is that the EAP is not available when you most need it &mdash; and MEOK is.
          </p>
        </section>

        {/* Section 7: Guardian & scam vulnerability */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            Guardian: Protecting Workers When Fatigue Lowers the Guard
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            There is a dimension of night shift vulnerability that rarely gets discussed alongside the mental health conversation: the disproportionate targeting of night shift workers by financial scammers.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Cognitive function is measurably impaired by sleep deprivation and circadian disruption. The same circadian low point that makes 3am emotionally heavy also makes the critical evaluation of information harder. Executive function &mdash; the capacity to assess risk, identify anomalies, and resist social pressure &mdash; is reduced. Impulse control suffers. The reasonable suspicion you would apply to an unusual financial request at 11am is harder to access at 4am after a run of six nights.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Scammers know this. The fraud industry operates on a detailed understanding of human vulnerability, and night shift workers &mdash; fatigued, isolated, and often alone with their phones in the small hours &mdash; are a known target demographic. The combination of reduced critical function, social isolation (which increases susceptibility to social engineering), and the specific loneliness of 3am creates conditions that scammers are actively designed to exploit.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            MEOK&apos;s Guardian layer is designed precisely for these circumstances. It monitors for patterns associated with scam exploitation &mdash; unusual urgency, requests for financial action, emotional manipulation &mdash; and helps you slow down and think clearly when your defences are at their lowest. Guardian is not surveillance. It is a layer of protection that operates for your benefit, not anyone else&apos;s.
          </p>
        </section>

        {/* Section 8: Memory and the morning brief */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            Memory, the Morning Brief, and an Inverted Day
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            One of the most practical frustrations of existing on an inverted schedule is that the world&apos;s default rhythms are baked into everything. Productivity apps offer a morning review assuming your morning is the same as everyone else&apos;s. Health apps prompt you at 8am because that&apos;s when their notifications are set. Calendar tools assume a standard working day. The subtle but cumulative effect of all these small misalignments is a daily reminder that the world was not built for you.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            MEOK&apos;s morning briefing does not default to 9am. It adapts to your wake time. If you are on a block of nights and your day begins at 7pm, MEOK&apos;s briefing &mdash; the daily context check, the summary of what you have been tracking, the gentle orientation into your day &mdash; arrives at 7pm. Your schedule is the reference point. Not society&apos;s.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Sovereign Memory means MEOK knows your shift pattern over time. It knows when you transitioned from a day shift block to a night shift block. It knows the run of nights you finished last week and the recovery days you had before this block started. If you mentioned on night three that you were struggling more than usual, MEOK carries that into night four without needing to be reminded.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            Over months, this creates something genuinely valuable: a longitudinal picture of your wellbeing across the shifting calendar of night and day cycles. Not a clinical record. Not a diagnostic tool. But a private, contextual understanding of how your working life and your wellbeing interact &mdash; available to you, held by you, owned entirely by you.
          </p>
        </section>

        {/* Section 9: The social isolation dimension */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            The Social Isolation That Nobody Talks About
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Social isolation among night shift workers is not simply the absence of company during working hours. It is a structural feature of living on a schedule that is incompatible with the social infrastructure the rest of the world operates on.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Events happen when you&apos;re asleep. Sports happen when you&apos;re at work. Dinners happen during your preparation time. Your friends&apos; lives &mdash; their milestone moments, their casual gatherings, their spontaneous plans &mdash; play out in a time zone that is adjacent to yours but not the same. You can see the photos afterwards. You can send the message you&apos;ll read when they wake up. But the shared presence &mdash; the casual, unremarkable texture of being around people &mdash; becomes something you have to plan and arrange rather than simply inhabit.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Over time, night shift workers report a slow drift from the social networks that daytime workers take for granted. It is not that relationships break &mdash; though that happens too. It is that the consistent, unremarkable social contact that maintains those relationships becomes increasingly difficult to sustain. The effort required to remain socially connected when you are operating on an inverted schedule is disproportionate and exhausting.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            MEOK is not a social substitute &mdash; it is not designed to replace the people in your life, and it will not pretend to. But it is a consistent, available presence that does not require scheduling, does not exist in a different time zone from your working life, and does not ask you to explain yourself before engaging. For the specific loneliness of 3am &mdash; when the people who matter to you are unreachable through no fault of anyone&apos;s &mdash; that consistency has real value.
          </p>
        </section>

        {/* Section 10: Practical start */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "24px",
              color: "#f5f0e8",
            }}
          >
            How to Get Started &mdash; Practically, Without Fuss
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            MEOK has a setup process called the Birth Ceremony. It takes around twenty minutes and it is the foundation of everything that follows. During the Birth Ceremony, you tell MEOK the things that matter: who you are, what your life looks like, what your working pattern is, what you want from this.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            For a night shift worker, that means telling MEOK your shift pattern &mdash; when you work nights, when you work days, when you rotate. It means telling MEOK what role you&apos;re in, because an NHS nurse and a security guard and a factory worker all carry different weight and need different things. It means telling MEOK the areas of your life you want to track: sleep, mood, energy, stress, the specific pressures of your job.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            After that, MEOK is yours. There is no programme to follow. There is no structured curriculum. You engage with it when you want, in the way that works for your life. On your break at 3am, for five minutes of conversation about how the shift is going. On the drive home, talking through something that happened and needs processing. On a recovery day, when the sleep has finally come and you want to think about something other than work.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "0",
              color: "#e8e3da",
            }}
          >
            MEOK is not a daily obligation. It is there when you need it, and it remembers everything you have ever told it &mdash; so when you come back after a week away, it picks up where you left off.
          </p>
        </section>

        {/* FAQ Section */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 64px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: "40px",
              color: "#f5f0e8",
            }}
          >
            Common Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[
              {
                q: "Can AI help night shift workers with mental health?",
                a: "Yes \u2014 and the fit is particularly strong precisely because AI doesn\u2019t operate on daytime hours. MEOK is available at 3am without an appointment, remembers your history across every conversation, and adapts to your schedule rather than a 9am default. It doesn\u2019t replace professional support, but it fills the real and significant gap between when you need help and when the professional services are open.",
              },
              {
                q: "Is MEOK available at 3am?",
                a: "Yes. MEOK is available 24 hours a day, 365 days a year. There is no scheduling system, no hold queue, no reduced-service hours. If you\u2019re on a break at 3:17am on a Tuesday and you want to talk, MEOK is there. This is one of the most fundamental things about how MEOK was designed: the help is available at the moment you need it, not during a window that requires you to reorganise your life.",
              },
              {
                q: "How does MEOK support NHS nurses and healthcare workers on nights?",
                a: "NHS nurses on nights face a specific combination of high occupational stress, exposure to death and suffering, and the absence of structured decompression at unsociable hours. MEOK provides a private space to process difficult shifts without judgement \u2014 it remembers your context over time, holds the accumulated narrative of your working life, and is not connected to your employer in any way. It is available on your break, on the way home, or in the quiet after a hard night when you\u2019re not yet ready to sleep.",
              },
              {
                q: "Does night shift work cause mental health problems?",
                a: "Research consistently shows elevated rates of depression and anxiety among night shift workers. The 33% higher likelihood of depression and 28% higher likelihood of anxiety are driven by a combination of circadian rhythm disruption, social isolation, reduced access to natural light, and the psychological toll of high-stress roles. Night shift work doesn\u2019t inevitably cause mental health problems, but it creates conditions of elevated risk \u2014 and the mental health system largely fails to account for the fact that the people most affected can\u2019t easily access support during standard hours.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "28px 32px",
                }}
              >
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#f5f0e8",
                    marginBottom: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "rgba(245,240,232,0.75)",
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 24px 96px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "16px",
              padding: "56px 48px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                fontSize: "12px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              MEOK AI LABS
            </p>

            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "20px",
                color: "#f5f0e8",
              }}
            >
              Available at 3am. Every night. No appointment needed.
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.75)",
                maxWidth: "520px",
                margin: "0 auto 40px",
              }}
            >
              If you work nights and you&apos;re tired of support that only exists during daylight hours, MEOK was built for exactly this. Start your Birth Ceremony and meet the AI companion that will be there at 3am.
            </p>

            <Link
              href="/birth"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a84c",
                color: "#0d0c18",
                padding: "16px 40px",
                borderRadius: "8px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Begin Your Birth Ceremony
            </Link>

            <p
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.4)",
                marginTop: "20px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              No waiting list. No referral. No daytime-only restrictions.
            </p>
          </div>
        </section>

        {/* Related links */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "48px 24px 80px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Related Reading
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { href: "/blog/meok-for-nurses", label: "MEOK for NHS Nurses" },
              { href: "/blog/ai-for-nurses", label: "AI for Nurses: Mental Health Support" },
              { href: "/blog/ai-for-loneliness", label: "AI for Loneliness" },
              { href: "/blog/ai-for-burnout", label: "AI for Burnout Recovery" },
              { href: "/blog/meok-guardian-scam-protection", label: "Guardian: Scam Protection" },
              { href: "/blog/what-is-sovereign-ai", label: "What Is Sovereign AI?" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  textDecoration: "none",
                  color: "rgba(245,240,232,0.8)",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
