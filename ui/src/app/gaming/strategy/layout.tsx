import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Builder — AI That Learns Your Playstyle | MEOK Gaming",
  description:
    "Build strategies that actually work. MEOK researches the current meta, advises on draft and pick, maps map strategy, and identifies counter-picks — all adapted to your playstyle and rank.",
  openGraph: {
    title: "Strategy Builder — AI That Learns Your Playstyle | MEOK Gaming",
    description:
      "Build strategies that actually work. With AI that remembers your playstyle and adapts every strategy to you.",
    type: "website",
  },
  alternates: {
    canonical: "https://meok.ai/gaming/strategy",
  },
};

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
