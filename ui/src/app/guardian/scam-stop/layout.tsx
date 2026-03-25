import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scam Stop — AI Scam Protection | MEOK Guardian",
  description:
    "Paste any suspicious message and get an instant AI-powered scam verdict. Detects tech support, romance, investment, grandparent, phishing, and deepfake scams in real time.",
  alternates: { canonical: "https://meok.ai/guardian/scam-stop" },
  openGraph: {
    title: "Scam Stop — AI Scam Protection | MEOK Guardian",
    description:
      "Paste any suspicious message and get an instant AI-powered scam verdict. Real-time DistilBERT threat detection.",
    type: "website",
    url: "https://meok.ai/guardian/scam-stop",
    siteName: "MEOK.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scam Stop — AI Scam Protection | MEOK Guardian",
    description:
      "Paste any suspicious message and get an instant AI-powered scam verdict. Real-time DistilBERT threat detection.",
  },
};

export default function ScamStopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
