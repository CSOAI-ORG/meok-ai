import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-Game Analysis — Every Loss Is Data | MEOK Gaming",
  description:
    "MEOK turns every match into a coaching session. Kill/death breakdown, decision moments, positioning heatmap, team synergy analysis, and opponent pattern recognition — delivered in a full report after every game.",
  openGraph: {
    title: "Post-Game Analysis — Every Loss Is Data | MEOK Gaming",
    description:
      "Every loss is data. Every win is a pattern. MEOK analyses your matches and builds you a personalised improvement plan.",
    type: "website",
  },
  alternates: {
    canonical: "https://meok.ai/gaming/post-game",
  },
};

export default function PostGameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
