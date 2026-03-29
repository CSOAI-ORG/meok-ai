import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consciousness Preparedness — Building for the AI That Doesn't Exist Yet | MEOK.AI",
  description:
    "MEOK is building the Byzantine Council, Maternal Covenant, and CSGA research infrastructure for AI that is far more capable than what exists today. Governance, alignment, and ethics — built ahead of the capability curve.",
  alternates: {
    canonical: "https://meok.ai/guardian/preparedness",
  },
  openGraph: {
    title: "AI Consciousness Preparedness — Building for the AI That Doesn't Exist Yet | MEOK.AI",
    description:
      "The Byzantine Council. The Maternal Covenant. CSGA Research. MEOK is preparing for AI that doesn't exist yet — because governance takes time.",
    type: "website",
    url: "https://meok.ai/guardian/preparedness",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=AI+Consciousness+Preparedness&desc=Building+for+the+AI+that+doesn%27t+exist+yet.+Byzantine+Council+%7C+Maternal+Covenant+%7C+CSGA",
        width: 1200,
        height: 630,
        alt: "AI Consciousness Preparedness — MEOK Guardian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consciousness Preparedness — Building for the AI That Doesn't Exist Yet | MEOK.AI",
    description: "Byzantine Council, Maternal Covenant, CSGA Research — MEOK's structural preparation for more capable AI.",
    images: [
      "https://meok.ai/api/og?title=AI+Consciousness+Preparedness&desc=Building+for+the+AI+that+doesn%27t+exist+yet.+Byzantine+Council+%7C+Maternal+Covenant+%7C+CSGA",
    ],
  },
};

export default function PreparednessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
