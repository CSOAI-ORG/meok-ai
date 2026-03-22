import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming AI — Sovereign Companion for Gamers | MEOK.AI",
  description:
    "MEOK Gaming OS is your sovereign AI companion for competitive gaming. Live co-pilot, post-game analyst, strategy builder, multi-game memory, voice mode — anti-cheat compliant.",
  alternates: {
    canonical: "https://meok.ai/gaming",
  },
  openGraph: {
    title: "Gaming AI — Sovereign Companion for Gamers | MEOK.AI",
    description:
      "Sovereign AI for gamers. Real-time coaching, strategy partner, multi-game memory, and 120ms response time.",
    type: "website",
    url: "https://meok.ai/gaming",
    siteName: "MEOK.AI",
    images: [{ url: "https://meok.ai/api/og?title=Gaming+AI&desc=Real-time+coaching%2C+strategy+partner%2C+multi-game+memory%2C+and+120ms+response+time.", width: 1200, height: 630, alt: "MEOK Gaming AI — Sovereign Companion for Gamers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming AI — Sovereign Companion for Gamers | MEOK.AI",
    description: "Sovereign AI for gamers. Real-time coaching, strategy partner, multi-game memory, and 120ms response time.",
    images: ["https://meok.ai/api/og?title=Gaming+AI&desc=Real-time+coaching%2C+strategy+partner%2C+multi-game+memory%2C+and+120ms+response+time."],
  },
};

export default function GamingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
