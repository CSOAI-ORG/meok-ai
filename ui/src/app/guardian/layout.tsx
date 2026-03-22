import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardian 24/7 — Safety for Elderly Parents & Children | MEOK.AI",
  description:
    "Guardian is MEOK's 24/7 care and safety system — protecting your elderly parents, your children, and your vulnerable loved ones with AI that cares about people, not surveillance metrics.",
  alternates: { canonical: "https://meok.ai/guardian" },
  openGraph: {
    title: "Guardian 24/7 — Safety for Elderly Parents & Children | MEOK.AI",
    description:
      "Always there. Never intrusive. Guardian monitors wellbeing patterns, detects breaks in routine, and escalates with care.",
    type: "website",
    url: "https://meok.ai/guardian",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=Guardian+24%2F7&desc=Always+there.+Never+intrusive.+AI+that+cares+about+people%2C+not+surveillance+metrics.", width: 1200, height: 630, alt: "Guardian 24/7 — Safety for Elderly Parents & Children" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian 24/7 — Safety for Elderly Parents & Children | MEOK.AI",
    description: "Always there. Never intrusive. Guardian monitors wellbeing patterns, detects breaks in routine, and escalates with care.",
    images: ["https://meok.ai/api/og?title=Guardian+24%2F7&desc=Always+there.+Never+intrusive.+AI+that+cares+about+people%2C+not+surveillance+metrics."],
  },
};

export default function GuardianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
