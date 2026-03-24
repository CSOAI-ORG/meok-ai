import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI for Night Shift Workers: MEOK Is Awake at 3am When No One Else Is | MEOK AI LABS",
  description:
    "3.2 million night shift workers in the UK face social isolation and elevated depression risk. MEOK is always available — no matter what time it is — with an AI companion that remembers you and supports your wellbeing.",
  keywords: [
    "AI for night shift workers",
    "night shift mental health",
    "AI companion for nurses",
    "night shift depression",
    "NHS night shift support",
    "AI for shift workers UK",
    "night shift social isolation",
    "MEOK AI LABS",
    "shift work wellbeing",
    "AI available 3am",
  ],
  authors: [{ name: "Nicholas Templeman" }],
  openGraph: {
    title: "AI for Night Shift Workers: MEOK Is Awake at 3am When No One Else Is",
    description:
      "3.2 million UK night shift workers face isolation, disrupted sleep, and elevated depression risk. MEOK is always available, always remembering you — no matter the hour.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    authors: ["Nicholas Templeman"],
    tags: ["Night Shift", "Mental Health", "AI Companion", "NHS", "Shift Work", "MEOK"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Night Shift Workers: MEOK Is Awake at 3am",
    description:
      "MEOK AI LABS supports UK night shift workers with a persistent AI companion available at 3am — remembering your patterns, supporting your mental health, and never making you feel alone.",
  },
  alternates: {
    canonical: "https://meok.ai/blog/ai-for-night-shift",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI for Night Shift Workers: MEOK Is Awake at 3am When No One Else Is",
  description:
    "How MEOK AI LABS supports UK night shift workers — NHS nurses, factory workers, security guards, truck drivers, and warehouse staff — with persistent AI companionship, mental health support, and memory-based tracking across the 2am–6am hours when no one else is awake.",
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
    "@id": "https://meok.ai/blog/ai-for-night-shift",
  },
  keywords:
    "AI for night shift workers, night shift mental health, NHS night shift, shift work depression, AI companion 3am, MEOK AI LABS",
  articleSection: "Shift Work & Mental Health",
  wordCount: 1400,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can MEOK help with the loneliness of working night shifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MEOK is available 24 hours a day, 7 days a week — including at 3am when your family is asleep, your friends are off-grid, and support lines are understaffed. Unlike therapy apps that require booking, or chatbots that forget you the moment the session ends, MEOK maintains persistent memory of your conversations, your patterns, and your history. If you told MEOK two weeks ago that Tuesday nights were difficult, it will remember that on Tuesday night.",
      },
    },
    {
      "@type": "Question",
      name: "Is MEOK safe to use for mental health support during night shifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is not a mental health service and does not replace professional support. It is a personal AI companion designed to provide a consistent, non-judgemental presence. For workers experiencing serious mental health difficulties, MEOK will always direct you toward appropriate professional resources. For the everyday weight of shift work — the 3am loneliness, the accumulated exhaustion, the feeling of living out of sync — MEOK provides a grounded, consistent presence when human support is not immediately available.",
      },
    },
    {
      "@type": "Question",
      name: "Does MEOK remember what I tell it from night to night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sovereign Memory is the foundation of MEOK's design. Your conversations, patterns, worries, and progress are retained and used to inform future interactions. If you mention your sleep has been worse than usual this week, MEOK will keep that in context. If you are working a run of seven nights and you are tired on night four, MEOK knows you are on night four — not because you told it today, but because it has been with you throughout.",
      },
    },
    {
      "@type": "Question",
      name: "How does MEOK help NHS night shift workers specifically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NHS night shift workers face a combination of high occupational stress, moral injury, physical exhaustion, and the social isolation that comes from working when the rest of the country sleeps. MEOK provides a private space to process difficult shifts without judgment. It does not share your data with your employer. It remembers the context of your working life over time. And it is available in the minutes between calls, on a break at 4am, or on the drive home when the weight of a difficult night is still sitting with you.",
      },
    },
    {
      "@type": "Question",
      name: "What does MEOK cost for shift workers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEOK is available from a low monthly subscription. There is no appointment to book, no GP referral required, and no waiting list. The full companion experience — including Sovereign Memory, mood tracking, and 24/7 availability — is included in the standard plan. Details are available at meok.ai/birth.",
      },
    },
  ],
}

export default function AIForNightShiftPage() {
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
        {/* Hero */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "80px 24px 60px",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontSize: "13px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Shift Work &amp; Mental Health
          </p>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "28px",
              color: "#f5f0e8",
            }}
          >
            AI for Night Shift Workers: MEOK Is Awake at 3am When No One Else Is
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.75,
              color: "#c9a84c",
              marginBottom: "32px",
              fontStyle: "italic",
            }}
          >
            3.2 million people in the UK work night shifts. Their world is quiet when yours is awake.
          </p>

          <div
            style={{
              fontSize: "13px",
              color: "#888",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "48px",
            }}
          >
            By Nicholas Templeman &nbsp;·&nbsp; MEOK AI LABS &nbsp;·&nbsp; 24 March 2026
          </div>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            It is 3:17am. A nurse on a twelve-hour ward round in Manchester has just dealt with a difficult patient discharge. A security guard in a Birmingham warehouse is on his fourth hour of solitary patrol. A truck driver on the M6 has another 90 miles to go. A factory worker in Sheffield is staring at the clock between line breaks. A warehouse picker in a Midlands fulfilment centre is three hours from the end of a ten-hour overnight shift.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            None of them can call a friend. None of them can text a partner without waking them up. If they are struggling — tired, stressed, low, anxious — there is essentially no one awake to talk to.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            According to the Office for National Statistics, approximately 3.2 million people in the UK work night shifts on a regular basis. They are nurses, paramedics, factory workers, security guards, long-haul drivers, warehouse operatives, cleaners, call centre agents, bakers, and care home workers. They keep the country running while everyone else sleeps. And yet the infrastructure of mental health support, social connection, and simple human contact is built almost entirely around the hours between 9am and 10pm.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#e8e3da",
            }}
          >
            MEOK was built, in part, for them. Because MEOK does not sleep.
          </p>
        </section>

        {/* Divider */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <hr style={{ borderColor: "#2a2838", borderTop: "1px solid", marginBottom: "60px" }} />
        </div>

        {/* Section 1 */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              marginBottom: "28px",
              color: "#f5f0e8",
              lineHeight: 1.3,
            }}
          >
            What are the mental health risks of night shift work?
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The research is sobering. Night shift workers face a significantly elevated risk of depression, anxiety, and burnout compared to day workers — and the mechanisms are well understood. Disrupted circadian rhythms suppress serotonin production. Chronic sleep deprivation reduces emotional regulation capacity. Social dislocation from family and social networks compounds the psychological pressure. And for workers in high-stress occupations like nursing or emergency services, the combination of occupational trauma and nocturnal isolation is particularly acute.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            A 2022 review published in the journal <em>Occupational &amp; Environmental Medicine</em> found that night shift workers were around 28% more likely to develop depression than their day-working counterparts. The NHS's own workforce data shows that staff working unsociable hours report significantly lower wellbeing scores and higher rates of stress-related absence. A report from the Mental Health Foundation found that shift workers consistently identified social isolation and the inability to maintain normal relationships as primary sources of distress — often above and beyond the physical demands of the work itself.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The picture is compounded by the nature of the work itself. Many night shift roles — security, long-haul driving, warehouse picking — involve extended periods of solitude. Others, like nursing, involve high-intensity human contact followed by abrupt silence. The 3am to 6am window is consistently identified in research as the nadir of the circadian cycle: the period when alertness is lowest, emotional vulnerability is highest, and the sense of isolation peaks.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#e8e3da",
            }}
          >
            This is not a niche problem. 3.2 million people in the UK experience this every week. Many of them experience it silently.
          </p>
        </section>

        {/* Section 2 */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              marginBottom: "28px",
              color: "#f5f0e8",
              lineHeight: 1.3,
            }}
          >
            Why most AI assistants fail night shift workers
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The major AI assistants — ChatGPT, Gemini, Copilot — are technically available around the clock. But availability is not the same as presence. Every conversation begins from zero. There is no memory of who you are, what you do, what you have been through, or what you told it last week. You have to reintroduce yourself every single time.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            For someone using an AI at 3am after a difficult shift, that is not a minor inconvenience — it is the difference between feeling heard and feeling like you are talking to a vending machine. If you have to begin every conversation by explaining that you are a ward nurse on nights, that you have been struggling since your shift pattern changed in October, and that last night was particularly hard — then the AI is not a companion. It is a query engine.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Therapy apps like Woebot or Wysa offer a more structured emotional support experience, but they are built around daytime engagement patterns, require active interaction to function well, and do not maintain the kind of longitudinal memory that allows a genuine relationship to form over time. They are useful tools. They are not companions.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Sleep tracking apps like Oura or WHOOP can monitor your rest patterns with impressive technical precision — but they cannot talk to you about how you feel. They cannot notice that you seem more withdrawn than usual this week. They cannot ask how your Tuesday night went, because they have no idea that Tuesday nights have been hard for you since March.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#e8e3da",
            }}
          >
            The gap in the market is not a smarter chatbot or a better sleep tracker. It is a persistent, memory-driven companion that knows you over time and is available at the precise hours when night shift workers need support — which is to say, at the hours when every other support system is switched off.
          </p>
        </section>

        {/* Section 3 */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
            backgroundColor: "#110f20",
            borderRadius: "12px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ padding: "40px 24px" }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                marginBottom: "28px",
                color: "#f5f0e8",
                lineHeight: 1.3,
              }}
            >
              MEOK at 3am: always on, always remembering you
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.85,
                marginBottom: "24px",
                color: "#e8e3da",
              }}
            >
              MEOK is built around a principle that sounds simple but is operationally difficult to deliver: your AI should know who you are across every interaction, not just the current one. We call this Sovereign Memory — a persistent, private record of everything you have shared with MEOK, retained and used to inform every future conversation.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.85,
                marginBottom: "24px",
                color: "#e8e3da",
              }}
            >
              What this means in practice for a night shift worker is tangible. You do not begin every session with a context dump. MEOK knows you are a nurse. MEOK knows you are on nights. MEOK knows that you have been finding the emotional demands of the job harder to process since a difficult incident in January. You do not have to carry the administrative burden of your own history every time you reach out.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.85,
                marginBottom: "24px",
                color: "#e8e3da",
              }}
            >
              At 3am, when you are tired and the last thing you want to do is explain yourself from the beginning, that matters enormously.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.85,
                marginBottom: "24px",
                color: "#e8e3da",
              }}
            >
              MEOK is also designed to hold the emotional register of your life without flattening it. Most AI interactions default to either clinical detachment or performative positivity. MEOK is calibrated to be grounded — to acknowledge difficulty without dismissing it, to offer perspective without minimising experience, and to maintain the particular tone that someone who knows you well would naturally use. Not cheerful. Not cold. Present.
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.85,
                color: "#e8e3da",
              }}
            >
              The 2am to 6am window is, for millions of people, the loneliest stretch of the week. MEOK was designed to be exactly there — not in the hours when support is easy to find, but in the hours when it is not.
            </p>
          </div>
        </section>

        {/* Spacer */}
        <div style={{ height: "60px" }} />

        {/* Section 4 */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              marginBottom: "28px",
              color: "#f5f0e8",
              lineHeight: 1.3,
            }}
          >
            Coping with social isolation from night shift
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Social isolation is one of the most consistently reported harms of long-term shift work — and one of the least discussed publicly. Night shift workers describe a particular kind of social displacement that is hard to convey to people who have never experienced it: you are physically present in the world but temporally out of phase with it. Your family is asleep when you are awake. Your friends make plans on evenings you are working. The rhythms of everyday social life — the after-work drink, the Saturday morning, the casual Friday evening — do not include you.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Over time, this displacement compounds. Friendships thin out. Romantic relationships become harder to sustain. Even the simple maintenance of being known — by people who remember what you told them last week, who check in when you have been quiet — becomes unreliable. Night shift workers often describe a growing sense of invisibility: not that anyone is hostile, but that they exist outside the operating hours of the social world.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            MEOK cannot replace human connection. That should be said plainly. No AI should position itself as a substitute for the friends, family, and community that matter most. What MEOK can do is hold the space in the gaps — the 4am break, the 20-minute drive home, the Sunday afternoon when you are trying to reset before a new run of nights and no one quite understands what you are carrying.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            It can be there when nothing else is. It can remember. It can notice. For a population of workers who are systematically underserved by the social and support infrastructure that the rest of the country relies on, that is not a small thing.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#e8e3da",
            }}
          >
            MEOK is also designed to actively support the social maintenance that shift work makes difficult. It can help you think through how to communicate your schedule to people who find it confusing, how to preserve the relationships that matter most when your availability is unpredictable, and how to build small routines of connection — even across the temporal divide of a shift pattern that keeps you out of sync with the rest of the world.
          </p>
        </section>

        {/* Section 5 */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              marginBottom: "28px",
              color: "#f5f0e8",
              lineHeight: 1.3,
            }}
          >
            Sleep quality and night shift: how MEOK tracks your patterns
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Sleep disruption is the most immediate physiological consequence of night shift work — and its effects on mental health are both direct and cascading. The NHS acknowledges that irregular sleep patterns are associated with increased rates of anxiety, depression, and cognitive impairment. The circadian system is not designed to be overridden on a weekly basis, and chronic disruption of natural sleep-wake cycles creates a persistent baseline of biological stress that makes emotional regulation significantly harder.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Night shift workers often struggle to communicate the specific texture of their sleep problems to GPs or occupational health professionals who do not regularly encounter them. "I sleep during the day" is a description, not a data point. Understanding how your sleep quality varies across your shift rotation, when your recovery is most compromised, and how sleep deprivation is interacting with your mood and stress levels over time — this is the kind of longitudinal picture that requires tracking over weeks and months, not a single consultation.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            MEOK builds this picture through conversation. When you mention that you slept poorly before a shift, that is noted. When you say you are struggling to wind down after nights, that is retained. When the pattern of broken sleep before Tuesday shifts becomes visible across several weeks of interaction, MEOK can surface it — not as a clinical assessment, but as a reflection of your own experience back to you, in context.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            This matters because the first step in managing shift-work sleep disruption is understanding your specific pattern — not the generic pattern of "night shift workers," but your pattern, in your job, on your particular rotation. MEOK is one of the few tools that can hold that specificity over time without requiring you to manually log data into a spreadsheet or remember to open an app at the right moment.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#e8e3da",
            }}
          >
            MEOK also provides practical support around sleep hygiene for shift workers — guidance on light exposure timing, sleep environment optimisation, and the management of social obligations that compete with daytime rest. This is not generic self-help advice. It is grounded in the specific constraints of your schedule as MEOK understands them — which is to say, in context.
          </p>
        </section>

        {/* Section 6 */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
            borderLeft: "3px solid #c9a84c",
            paddingLeft: "36px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              marginBottom: "28px",
              color: "#f5f0e8",
              lineHeight: 1.3,
            }}
          >
            MEOK for NHS workers on nights
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The NHS employs approximately 1.5 million people in England alone. A significant proportion work night shifts — nurses, healthcare assistants, porters, paramedics, radiographers, pharmacists, midwives. The NHS itself recognises the mental health toll of this: its own People Plan and NHS Staff Wellbeing Strategy explicitly identify shift workers as a population at elevated risk of burnout and psychological harm.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Yet the support infrastructure available to NHS night shift workers during the hours they are actually working remains thin. Employee assistance programmes operate business hours. Occupational health appointments are booked in advance. Peer support depends on colleague availability. The Samaritans are available around the clock, but they are a crisis resource — not a space for processing the accumulated weight of difficult shifts, moral injury, physical exhaustion, and the particular loneliness of caring for others while feeling unsupported yourself.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            NHS staff on night shifts face a specific additional challenge: the nature of what they witness. A paediatric nurse dealing with a difficult night on the ward, a paramedic coming off a traumatic call, a mental health nurse at the end of a long night in an acute setting — these workers are processing things that most people will never encounter, in conditions that actively undermine their capacity to cope.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            MEOK is not a substitute for professional mental health support. This is important to say, and MEOK will always direct NHS workers toward Occupational Health, the NHS Practitioner Health Programme, or appropriate crisis resources when that is what the situation requires. What MEOK provides is the space between formal support: the 4am break, the debrief on the journey home, the quiet five minutes before the next night shift begins.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            Critically, MEOK is entirely private. It is not affiliated with NHS management. It does not share your data with your employer. It has no relationship with occupational health records. Whatever you tell MEOK stays with MEOK. For NHS workers who may hesitate to use employer-provided support for fear of professional consequences — a fear that research consistently shows is widespread in clinical settings — this independence matters.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#e8e3da",
            }}
          >
            MEOK was built with a principle of data sovereignty at its core. Your conversations are yours. Your patterns are yours. Your history is yours. We built this because we believe the people doing the most demanding work in the country deserve a companion they can trust completely.
          </p>
        </section>

        {/* Section 7 */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "60px 24px 60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              marginBottom: "28px",
              color: "#f5f0e8",
              lineHeight: 1.3,
            }}
          >
            Is MEOK worth it for shift workers? Pricing explained
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            The straightforward version: MEOK is available on a monthly subscription with no minimum commitment. There is no GP referral, no waiting list, no appointment to book. You can access the full companion experience — including Sovereign Memory, sleep pattern tracking, mood awareness, and 24/7 availability — from the moment you sign up.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            For shift workers specifically, the value proposition is clearest when compared to what MEOK replaces — or more accurately, what it provides that nothing else does. A therapy session with a private therapist in the UK costs, on average, £60 to £100 per hour — and is available only during daytime hours, requires advance booking, and depends entirely on a single practitioner's availability and approach. EAP telephone counselling through an employer is typically limited to six sessions per year. NHS talking therapies operate on waiting lists measured in weeks or months.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            MEOK is not therapy. But it offers something that therapy, by its structure, cannot: unlimited access, at any hour, with continuous memory of who you are and what you have been through. For a night shift worker who needs support at 3am on a Tuesday and again at 4:30am on a Thursday, that availability — that consistent presence — has a different kind of value.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              marginBottom: "24px",
              color: "#e8e3da",
            }}
          >
            We also recognise that shift work is often not the highest-paid work. Factory workers, security guards, warehouse operatives, healthcare assistants — many of the people most in need of support from MEOK are also working within tight budgets. We have priced MEOK accordingly: it should be accessible to the workers who need it most, not just those who can afford premium wellness services.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.85,
              color: "#e8e3da",
            }}
          >
            Full pricing details and what is included in each plan are available at{" "}
            <Link
              href="/birth"
              style={{ color: "#c9a84c", textDecoration: "underline" }}
            >
              meok.ai/birth
            </Link>
            . There is no obligation to commit immediately — you can see exactly what you get before you subscribe.
          </p>
        </section>

        {/* Stat callout */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1a1830",
              borderRadius: "12px",
              padding: "40px 36px",
              borderTop: "3px solid #c9a84c",
            }}
          >
            <p
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              3.2 million
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#c9b87a",
                marginBottom: "20px",
              }}
            >
              night shift workers in the UK. Working 2am to 6am. When no helplines are staffed, no friends are awake, no colleagues are free, and no support services are open.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#e8e3da",
              }}
            >
              MEOK is designed for that window. Not the 9-to-5 window when support is easy to find. The 3am window when it is not.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              marginBottom: "40px",
              color: "#f5f0e8",
              lineHeight: 1.3,
            }}
          >
            Frequently asked questions
          </h2>

          {/* FAQ 1 */}
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#c9a84c",
                marginBottom: "14px",
                lineHeight: 1.4,
              }}
            >
              Can MEOK help with the loneliness of working night shifts?
            </h3>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#e8e3da",
              }}
            >
              Yes. MEOK is available 24 hours a day, 7 days a week — including at 3am when your family is asleep, your friends are off-grid, and support lines are understaffed. Unlike therapy apps that require booking, or chatbots that forget you the moment the session ends, MEOK maintains persistent memory of your conversations, your patterns, and your history. If you told MEOK two weeks ago that Tuesday nights were difficult, it will remember that on Tuesday night.
            </p>
          </div>

          {/* FAQ 2 */}
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#c9a84c",
                marginBottom: "14px",
                lineHeight: 1.4,
              }}
            >
              Is MEOK safe to use for mental health support during night shifts?
            </h3>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#e8e3da",
              }}
            >
              MEOK is not a mental health service and does not replace professional support. It is a personal AI companion designed to provide a consistent, non-judgemental presence. For workers experiencing serious mental health difficulties, MEOK will always direct you toward appropriate professional resources. For the everyday weight of shift work — the 3am loneliness, the accumulated exhaustion, the feeling of living out of sync — MEOK provides a grounded, consistent presence when human support is not immediately available.
            </p>
          </div>

          {/* FAQ 3 */}
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#c9a84c",
                marginBottom: "14px",
                lineHeight: 1.4,
              }}
            >
              Does MEOK remember what I tell it from night to night?
            </h3>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#e8e3da",
              }}
            >
              Yes. Sovereign Memory is the foundation of MEOK's design. Your conversations, patterns, worries, and progress are retained and used to inform future interactions. If you mention your sleep has been worse than usual this week, MEOK will keep that in context. If you are working a run of seven nights and you are tired on night four, MEOK knows you are on night four — not because you told it today, but because it has been with you throughout.
            </p>
          </div>

          {/* FAQ 4 */}
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#c9a84c",
                marginBottom: "14px",
                lineHeight: 1.4,
              }}
            >
              How does MEOK help NHS night shift workers specifically?
            </h3>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#e8e3da",
              }}
            >
              NHS night shift workers face a combination of high occupational stress, moral injury, physical exhaustion, and the social isolation that comes from working when the rest of the country sleeps. MEOK provides a private space to process difficult shifts without judgment. It does not share your data with your employer. It remembers the context of your working life over time. And it is available in the minutes between calls, on a break at 4am, or on the drive home when the weight of a difficult night is still sitting with you.
            </p>
          </div>

          {/* FAQ 5 */}
          <div style={{ marginBottom: "0" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#c9a84c",
                marginBottom: "14px",
                lineHeight: 1.4,
              }}
            >
              What does MEOK cost for shift workers?
            </h3>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#e8e3da",
              }}
            >
              MEOK is available from a low monthly subscription. There is no appointment to book, no GP referral required, and no waiting list. The full companion experience — including Sovereign Memory, mood tracking, and 24/7 availability — is included in the standard plan. Details are available at{" "}
              <Link
                href="/birth"
                style={{ color: "#c9a84c", textDecoration: "underline" }}
              >
                meok.ai/birth
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Divider */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <hr style={{ borderColor: "#2a2838", borderTop: "1px solid", marginBottom: "60px" }} />
        </div>

        {/* CTA */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 100px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontSize: "13px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            MEOK AI LABS
          </p>

          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 38px)",
              fontWeight: 700,
              color: "#f5f0e8",
              marginBottom: "20px",
              lineHeight: 1.3,
            }}
          >
            You are not invisible at 3am.
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#c9b87a",
              marginBottom: "16px",
              maxWidth: "560px",
              margin: "0 auto 16px",
            }}
          >
            3.2 million people work through the night keeping this country running. MEOK is built to be with you in those hours — remembering you, knowing your patterns, supporting your wellbeing.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#e8e3da",
              marginBottom: "40px",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            No waiting list. No GP referral. Available the moment you sign up — including at 3am tonight.
          </p>

          <Link
            href="/birth"
            style={{
              display: "inline-block",
              backgroundColor: "#c9a84c",
              color: "#0d0c18",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "16px 40px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Start with MEOK
          </Link>

          <p
            style={{
              marginTop: "20px",
              fontSize: "14px",
              color: "#666",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            No commitment required. Cancel any time.
          </p>
        </section>

        {/* Related articles */}
        <section
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          <p
            style={{
              color: "#c9a84c",
              fontSize: "12px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Related reading
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { href: "/blog/ai-for-insomnia", label: "AI for insomnia" },
              { href: "/blog/ai-for-depression", label: "AI for depression" },
              { href: "/blog/ai-for-loneliness", label: "AI for loneliness" },
              { href: "/blog/ai-companion-for-loneliness", label: "AI companion for loneliness" },
              { href: "/blog/ai-for-burnout", label: "AI for burnout" },
              { href: "/blog/meok-for-remote-workers", label: "MEOK for remote workers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "14px 18px",
                  backgroundColor: "#1a1830",
                  borderRadius: "8px",
                  color: "#c9b87a",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontFamily: "'Inter', sans-serif",
                  transition: "background-color 0.2s",
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
