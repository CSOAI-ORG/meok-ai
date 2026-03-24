import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orion — The Research Hunter | MEOK AI LABS",
  description:
    "Orion is MEOK's overnight research agent. While you sleep, Orion hunts for leads, competitors, papers, and opportunities. Available on Sovereign tier.",
  alternates: { canonical: "https://meok.ai/work/orion" },
  openGraph: {
    title: "Orion — The Research Hunter | MEOK AI LABS",
    description:
      "Orion is MEOK's overnight research agent. While you sleep, Orion hunts for leads, competitors, papers, and opportunities. Available on Sovereign tier.",
    type: "website",
  },
};

export default function OrionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
