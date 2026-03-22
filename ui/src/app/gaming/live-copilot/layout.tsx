import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Co-Pilot — Real-Time AI Coaching Mid-Game | MEOK Gaming",
  description:
    "MEOK Live Co-Pilot connects to your game, observes in real-time, and whispers tactical advice when you need it most. Callout detection, strategy suggestions, team comms analysis, and live performance stats.",
  openGraph: {
    title: "Live Co-Pilot — Real-Time AI Coaching Mid-Game | MEOK Gaming",
    description:
      "Real-time AI coaching. Mid-game. Right now. MEOK connects, observes, and whispers tactical advice at 120ms.",
    type: "website",
  },
  alternates: {
    canonical: "https://meok.ai/gaming/live-copilot",
  },
};

export default function LiveCopilotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
