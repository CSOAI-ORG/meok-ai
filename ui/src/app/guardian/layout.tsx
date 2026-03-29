import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian 24/7 — AI That Protects the People You Love | MEOK.AI",
  description:
    "MEOK Guardian 24/7 is a real-time AI safety layer protecting families from scams, grooming, financial fraud, and coercive control. Scam Protection, Children's Safety, Elder Care, and Relationship Shield — always watching, never intrusive.",
  alternates: { canonical: "https://meok.ai/guardian" },
  openGraph: {
    title: "Guardian 24/7 — AI That Protects the People You Love | MEOK.AI",
    description:
      "47,000+ threats caught this week. Guardian protects your family from scams, grooming, elder fraud, and coercive control — always watching, never intrusive.",
    type: "website",
    url: "https://meok.ai/guardian",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=Guardian+24%2F7&desc=AI+that+protects+the+people+you+love.+Scam+Protection%2C+Children%27s+Safety%2C+Elder+Care%2C+Relationship+Shield.", width: 1200, height: 630, alt: "Guardian 24/7 — AI That Protects the People You Love" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian 24/7 — AI That Protects the People You Love | MEOK.AI",
    description: "Always watching, never intrusive. Real-time protection for your whole family — scams, grooming, elder fraud, and more.",
    images: ["https://meok.ai/api/og?title=Guardian+24%2F7&desc=AI+that+protects+the+people+you+love.+Scam+Protection%2C+Children%27s+Safety%2C+Elder+Care%2C+Relationship+Shield."],
  },
};

export default function GuardianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
