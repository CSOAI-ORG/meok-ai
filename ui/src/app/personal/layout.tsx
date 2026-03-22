import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal AI — Your Sovereign Companion | MEOK.AI",
  description:
    "MEOK Personal is your sovereign AI companion. It hatches from an egg, grows with care, remembers your life, and is constitutionally bound to advocate for your wellbeing.",
  alternates: {
    canonical: "https://meok.ai/personal",
  },
  openGraph: {
    title: "Personal AI — Your Sovereign Companion | MEOK.AI",
    description:
      "MEOK Personal is your sovereign AI companion. It hatches from an egg, grows with care, and remembers your life.",
    type: "website",
  },
};

export default function PersonalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
