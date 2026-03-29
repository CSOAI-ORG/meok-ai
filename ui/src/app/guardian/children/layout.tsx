import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian for Children — Care-Governed AI, Not Control-Governed | MEOK.AI",
  description:
    "MEOK Guardian for children is care-governed, not control-governed. Age-appropriate modes for Under 10, 10–13, and 14–17. School-Safe Mode, hard blocks on adult content and gambling, grooming detection, and a parent dashboard that shows the signal — not the diary.",
  openGraph: {
    title: "Guardian for Children — Care-Governed AI, Not Control-Governed | MEOK.AI",
    description:
      "Your child's AI companion with hard blocks, age-appropriate modes, and a parent dashboard that respects trust. Care-governed, not control-governed.",
    type: "website",
    url: "https://meok.ai/guardian/children",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Guardian+for+Children&desc=Care-governed%2C+not+control-governed.+Age-appropriate+modes%2C+hard+blocks%2C+School-Safe+Mode.",
        width: 1200,
        height: 630,
        alt: "Guardian for Children — Care-Governed AI for Every Age",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian for Children — Care-Governed AI, Not Control-Governed | MEOK.AI",
    description: "Age-appropriate modes for Under 10, 10–13, and 14–17. Hard blocks, School-Safe Mode, parent dashboard.",
    images: [
      "https://meok.ai/api/og?title=Guardian+for+Children&desc=Care-governed%2C+not+control-governed.+Age-appropriate+modes%2C+hard+blocks%2C+School-Safe+Mode.",
    ],
  },
  alternates: {
    canonical: "https://meok.ai/guardian/children",
  },
};

export default function GuardianChildrenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
