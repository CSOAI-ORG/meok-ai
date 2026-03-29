import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian Elder Care — Dignity-First AI Safety for Seniors | MEOK.AI",
  description:
    "MEOK Guardian protects older adults from romance scams, investment fraud, and cognitive decline — with dignity-first monitoring, family alert routing, and NHS crisis pathway integration. Not surveillance. Companionship with a safety net.",
  alternates: {
    canonical: "https://meok.ai/guardian/seniors",
  },
  openGraph: {
    title: "Guardian Elder Care — Dignity-First AI Safety for Seniors | MEOK.AI",
    description:
      "Romance scam detection, cognitive pattern tracking, and family alert routing — for the people who raised you. Not surveillance. Companionship.",
    type: "website",
    url: "https://meok.ai/guardian/seniors",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Guardian+Elder+Care&desc=Dignity-first+monitoring+for+seniors.+Scam+detection%2C+cognitive+tracking%2C+NHS+crisis+pathway.",
        width: 1200,
        height: 630,
        alt: "Guardian Elder Care — Dignity-First AI Safety for Seniors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian Elder Care — Dignity-First AI Safety for Seniors | MEOK.AI",
    description: "Protecting older adults from scams and isolation — with dignity, not surveillance.",
    images: [
      "https://meok.ai/api/og?title=Guardian+Elder+Care&desc=Dignity-first+monitoring+for+seniors.+Scam+detection%2C+cognitive+tracking%2C+NHS+crisis+pathway.",
    ],
  },
};

export default function GuardianSeniorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
