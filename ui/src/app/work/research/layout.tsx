import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Research Without the Rabbit Holes. | MEOK Work OS",
  description:
    "Web research with memory, citation tracking, knowledge synthesis, and topic mapping. Every finding cited. Every search remembered. Your private sovereign knowledge base.",
  alternates: { canonical: "https://meok.ai/work/research" },
  openGraph: {
    title: "Research Without the Rabbit Holes | MEOK Work OS",
    description:
      "Perplexity-style search plus synthesis that stays sovereign. Your research history builds a private knowledge base that grows smarter over time.",
    type: "website",
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
