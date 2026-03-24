import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riri — The Builder Agent | MEOK AI LABS",
  description:
    "Riri is MEOK's overnight builder. She drafts content, writes code, builds assets, and delivers them to your inbox before you wake up.",
  alternates: { canonical: "https://meok.ai/work/riri" },
  openGraph: {
    title: "Riri — The Builder Agent | MEOK AI LABS",
    description:
      "Riri is MEOK's overnight builder. She drafts content, writes code, builds assets, and delivers them to your inbox before you wake up.",
    type: "website",
  },
};

export default function RiriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
