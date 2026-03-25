import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help & Support | MEOK AI",
  description:
    "Get help with your MEOK AI companion. Browse FAQs, troubleshoot issues, or contact our support team.",
};

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const faqSections: FaqSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I create my AI companion?",
        answer:
          "After signing up, you'll be guided through a short onboarding flow where you choose your companion's personality traits, communication style, and areas of focus. You can always adjust these later from your dashboard settings.",
      },
      {
        question: "Can I have more than one companion?",
        answer:
          "Yes. Depending on your plan, you can create multiple companions with different personalities and specialisations. Free accounts include one companion, while Pro and Family plans support additional companions.",
      },
      {
        question: "What can my companion help me with?",
        answer:
          "Your companion can help with daily planning, creative brainstorming, emotional check-ins, learning new topics, writing assistance, and much more. The more you interact, the better it understands your preferences and needs.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "MEOK AI is available as a progressive web app that works on any device. Native iOS and Android apps are on our roadmap. You can install the web app to your home screen for a native-like experience.",
      },
      {
        question: "How do I customise my companion's personality?",
        answer:
          "Navigate to Dashboard > Settings > Companion. From there you can adjust traits like warmth, directness, humour level, and communication style. Changes take effect immediately in your next conversation.",
      },
    ],
  },
  {
    title: "Billing & Plans",
    items: [
      {
        question: "What plans are available?",
        answer:
          "We offer Free, Pro, and Family plans. Free gives you basic companion access with limited messages. Pro unlocks unlimited messages, memory, and advanced features. Family extends Pro benefits to up to 6 household members.",
      },
      {
        question: "How do I upgrade or downgrade my plan?",
        answer:
          "Go to Dashboard > Settings > Billing. You can switch plans at any time. Upgrades take effect immediately and you'll be charged a prorated amount. Downgrades take effect at the end of your current billing cycle.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and PayPal. All payments are processed securely through Stripe.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact us at hello@meok.ai and we'll process your refund within 5 business days.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      {
        question: "Who can see my conversations?",
        answer:
          "Your conversations are private by default. No other users can see them. Our team only accesses conversation data when required for safety reviews or when you explicitly share a conversation for support purposes.",
      },
      {
        question: "How is my data stored?",
        answer:
          "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Conversations are stored in isolated, region-specific databases. We follow SOC 2 Type II compliance standards.",
      },
      {
        question: "Can I delete my data?",
        answer:
          "Yes. You can delete individual conversations, clear your companion's memory, or delete your entire account from Dashboard > Settings > Privacy. Account deletion permanently removes all data within 30 days.",
      },
      {
        question: "Do you use my data to train AI models?",
        answer:
          "No. We do not use your personal conversations to train foundation models. Your companion learns from your interactions to personalise your experience, but this data stays within your account and is never shared.",
      },
      {
        question: "Is MEOK AI compliant with GDPR?",
        answer:
          "Yes. We are fully GDPR compliant. You can exercise your rights to access, rectify, port, or erase your data at any time. Our Data Protection Officer can be reached at privacy@meok.ai.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        question: "My companion isn't responding. What should I do?",
        answer:
          "First, check your internet connection. Then try refreshing the page or clearing your browser cache. If the issue persists, check our status page at status.meok.ai. You can also try starting a new conversation from the dashboard.",
      },
      {
        question: "My companion forgot something I told it. Why?",
        answer:
          "Free plan companions have limited memory. Upgrading to Pro gives your companion long-term memory across sessions. If you're on Pro and this still happens, it may be a memory prioritisation issue \u2014 try explicitly asking your companion to remember important details.",
      },
      {
        question: "Messages are loading slowly. How can I fix this?",
        answer:
          "Slow responses can be caused by network issues, high traffic, or very long conversation threads. Try starting a fresh conversation, switching to a different network, or using the web app instead of a browser tab.",
      },
      {
        question: "I'm getting an error when trying to sign in.",
        answer:
          "Make sure you're using the correct email address and password. Try resetting your password via the login page. If you signed up with a social provider (Google, Apple), use that same method to sign in. Clear your cookies if the issue persists.",
      },
    ],
  },
];

function AccordionSection({ section }: { section: FaqSection }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: GOLD,
          marginBottom: 16,
          letterSpacing: "0.01em",
        }}
      >
        {section.title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: 12,
          overflow: "hidden",
          border: `1px solid ${BORDER}`,
        }}
      >
        {section.items.map((item, i) => (
          <details
            key={i}
            style={{
              backgroundColor: SURFACE,
              borderBottom:
                i < section.items.length - 1
                  ? `1px solid ${BORDER}`
                  : "none",
            }}
          >
            <summary
              style={{
                padding: "16px 20px",
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 500,
                color: "#e2e0ea",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                userSelect: "none",
              }}
            >
              {item.question}
              <span
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.3)",
                  marginLeft: 16,
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </summary>
            <div
              style={{
                padding: "0 20px 16px",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function HelpPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: DEEP,
        color: "#e2e0ea",
      }}
    >
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 24px 48px",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          How can we help?
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          Browse common questions below, or reach out to our team directly.
        </p>
      </section>

      {/* FAQ Sections */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px 48px",
        }}
      >
        {faqSections.map((section, i) => (
          <AccordionSection key={i} section={section} />
        ))}
      </section>

      {/* Contact Section */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px 48px",
        }}
      >
        <div
          style={{
            backgroundColor: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>
            Still need help?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Email us
              </p>
              <a
                href="mailto:hello@meok.ai"
                style={{
                  color: GOLD,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                hello@meok.ai
              </a>
            </div>
            <div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Send feedback
              </p>
              <Link
                href="/feedback"
                style={{
                  color: GOLD,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                Share your thoughts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ask Your Companion CTA */}
      <section
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <Link
          href="/dashboard/chat"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              backgroundColor: SURFACE,
              border: `1px solid ${GOLD}33`,
              borderRadius: 12,
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: GOLD,
                  marginBottom: 6,
                }}
              >
                Ask your companion
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}
              >
                Your companion can answer most questions too
              </p>
            </div>
            <span
              style={{
                fontSize: 24,
                color: GOLD,
              }}
            >
              &rarr;
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
