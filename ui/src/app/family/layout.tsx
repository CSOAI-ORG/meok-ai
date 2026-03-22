import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family OS — Sovereign AI for Your Whole Family | MEOK.AI",
  description:
    "MEOK Family OS protects and connects every member of your family. Child-safe AI companions, parent dashboard, Guardian 24/7 protection, COPPA and GDPR compliant. Care, not surveillance.",
  alternates: { canonical: "https://meok.ai/family" },
  openGraph: {
    title: "Family OS — Sovereign AI for Your Whole Family | MEOK.AI",
    description:
      "MEOK Family OS protects and connects every member of your family. Child-safe AI companions, parent dashboard, Guardian 24/7 protection, COPPA and GDPR compliant.",
    type: "website",
    url: "https://meok.ai/family",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=Family+OS&desc=Child-safe+AI+companions%2C+parent+dashboard%2C+Guardian+24%2F7+protection.+Care%2C+not+surveillance.", width: 1200, height: 630, alt: "MEOK Family OS — Sovereign AI for Your Whole Family" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family OS — Sovereign AI for Your Whole Family | MEOK.AI",
    description: "Child-safe AI companions, parent dashboard, Guardian 24/7 protection. Care, not surveillance.",
    images: ["https://meok.ai/api/og?title=Family+OS&desc=Child-safe+AI+companions%2C+parent+dashboard%2C+Guardian+24%2F7+protection.+Care%2C+not+surveillance."],
  },
};

export default function FamilyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
