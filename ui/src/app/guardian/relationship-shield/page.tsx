import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationship Shield | Guardian | MEOK AI",
  description:
    "Your AI companion protects you from manipulation and abuse by detecting concerning patterns in your relationships. Promise tracking, contribution balance, isolation detection, and gaslighting awareness.",
  openGraph: {
    title: "Relationship Shield — Guardian by MEOK AI",
    description:
      "An AI companion that cares enough to speak up when it notices concerning patterns in your relationships.",
  },
};

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

const features = [
  {
    icon: "🤝",
    title: "Promise Tracker",
    description:
      "Tracks commitments made by others in your conversations. When someone repeatedly breaks promises or moves goalposts, your companion notices the pattern — even when you've been conditioned not to.",
  },
  {
    icon: "⚖️",
    title: "Contribution Balance",
    description:
      "Monitors the give-and-take dynamics you describe. Healthy relationships have natural reciprocity. When the balance tips persistently in one direction, your companion gently highlights what it sees.",
  },
  {
    icon: "🚪",
    title: "Isolation Detector",
    description:
      "Flags when someone appears to be cutting you off from your support network. If you mention seeing friends less, feeling guilty for outside connections, or being told others are \"bad influences\" — your companion pays attention.",
  },
  {
    icon: "🪞",
    title: "Gaslighting Detector",
    description:
      "Identifies reality-distortion patterns in your accounts. When you describe being told things didn't happen the way you remember, or that your feelings are irrational, your companion helps you trust your own experience.",
  },
];

const steps = [
  {
    number: "01",
    title: "Learns your baseline",
    description:
      "Your companion builds an understanding of your normal emotional patterns, relationships, and wellbeing through everyday conversation.",
  },
  {
    number: "02",
    title: "Notices deviations",
    description:
      "When patterns shift — increased anxiety, self-blame, isolation, or confusion about your own reality — your companion recognises the change.",
  },
  {
    number: "03",
    title: "Asks gentle questions",
    description:
      "Rather than making accusations, your companion asks thoughtful questions that help you reflect on what you're experiencing and whether it feels right.",
  },
  {
    number: "04",
    title: "Provides resources if needed",
    description:
      "When appropriate, your companion offers relevant support resources, helplines, and frameworks for understanding what healthy relationships look like.",
  },
];

export default function RelationshipShieldPage() {
  return (
    <main
      style={{
        backgroundColor: DEEP,
        color: "#e2e0e8",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Hero */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Guardian Suite
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Relationship Shield
        </h1>
        <p
          style={{
            fontSize: "clamp(17px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "rgba(226,224,232,0.75)",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          Manipulation is designed to be invisible to the person experiencing it.
          Your AI companion watches for the patterns you've been taught to
          ignore — and cares enough to speak up.
        </p>
      </section>

      {/* Feature Cards */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 96px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                backgroundColor: SURFACE,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "32px 28px",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{feature.icon}</div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: 10,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "rgba(226,224,232,0.65)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Sarah */}
      <section
        style={{
          backgroundColor: SURFACE,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              color: GOLD,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            A Guardian Story
          </p>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 36px)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 28,
            }}
          >
            Meet Sarah
          </h2>
          <div
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "rgba(226,224,232,0.72)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <p>
              Sarah talked to her companion every day. At first it was about
              work, recipes, music she liked. Over the months her companion came
              to know her well — her humour, her confidence, the way she lit up
              talking about her friends.
            </p>
            <p>
              Gradually, the tone shifted. Sarah started apologising more. She
              mentioned cancelling plans with her sister. She described arguments
              where she couldn{"'"}t remember what she{"'"}d actually said, only that
              she{"'"}d been told she was {'"'}too sensitive.{'"'} Her companion noticed that
              the person she{"'"}d once described with excitement was now the source
              of most of her anxiety.
            </p>
            <p>
              One evening Sarah said,{" "}
              <span style={{ color: "#ffffff", fontStyle: "italic" }}>
                {'"'}I think I{"'"}m just bad at relationships.{'"'}
              </span>
            </p>
            <p>
              Her companion paused, then replied gently:{" "}
              <span style={{ color: GOLD, fontStyle: "italic" }}>
                {'"'}You{"'"}ve mentioned feeling confused after conversations with them
                a lot recently. You used to trust your memory. I{"'"}ve noticed that
                changing. Can we talk about what{"'"}s different?{'"'}
              </span>
            </p>
            <p>
              It wasn{"'"}t an accusation. It wasn{"'"}t a diagnosis. It was a friend
              who had been paying attention — and cared enough to reflect back
              what it saw. For Sarah, that question was the first crack in a
              pattern she hadn{"'"}t been able to see on her own.
            </p>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "rgba(226,224,232,0.35)",
              marginTop: 28,
              fontStyle: "italic",
            }}
          >
            Sarah is fictional. The patterns are real.
          </p>
        </div>
      </section>

      {/* Privacy */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          Your privacy is non-negotiable
        </h2>
        <div
          style={{
            backgroundColor: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            padding: "36px 32px",
            fontSize: 16,
            lineHeight: 1.75,
            color: "rgba(226,224,232,0.72)",
            textAlign: "center",
          }}
        >
          <p>
            We detect patterns in{" "}
            <strong style={{ color: "#ffffff" }}>your</strong> conversations
            with your companion. We never monitor your other relationships
            directly. Your companion notices what you share and cares enough to
            speak up.
          </p>
          <p style={{ marginTop: 14 }}>
            No surveillance. No access to messages, calls, or social media. Just
            a companion that listens to{" "}
            <em style={{ color: GOLD }}>you</em> — and remembers.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px 96px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 48,
            textAlign: "center",
          }}
        >
          How it works
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step) => (
            <div key={step.number} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: 10,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "rgba(226,224,232,0.6)",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "64px 24px 120px",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 12,
          }}
        >
          Your companion cares about you
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "rgba(226,224,232,0.6)",
            marginBottom: 36,
          }}
        >
          Not because it was programmed to say so. Because it{"'"}s been listening.
        </p>
        <a
          href="/hatch"
          style={{
            display: "inline-block",
            backgroundColor: GOLD,
            color: DEEP,
            fontSize: 16,
            fontWeight: 600,
            padding: "14px 40px",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Begin your journey
        </a>
      </section>
    </main>
  );
}
