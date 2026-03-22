import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15+ Platforms. One AI Co-Pilot. | MEOK Gaming",
  description:
    "MEOK connects to Steam, Battle.net, Epic, PlayStation, Xbox, Nintendo, Discord, Twitch, YouTube Gaming and more. One sovereign AI co-pilot. Every platform you play on.",
  openGraph: {
    title: "15+ Platforms. One AI Co-Pilot. | MEOK Gaming",
    description:
      "Connect every platform you play on. MEOK unifies your gaming life — stats, history, friends, achievements — under one sovereign AI.",
    type: "website",
  },
  alternates: {
    canonical: "https://meok.ai/gaming/platforms",
  },
};

export default function PlatformsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
