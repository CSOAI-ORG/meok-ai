import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Council — Your Family's Collective AI | MEOK.AI",
  description:
    "Every family member hatches their own sovereign AI. Together, those AIs form a Character Council — a collective that helps your family communicate, decide, and care for each other.",
  openGraph: {
    title: "Character Council — Your Family's Collective AI | MEOK.AI",
    description:
      "Not one AI. A council. Each companion stays private. Together they give your family collective intelligence.",
    type: "website",
  },
};

export default function CouncilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
