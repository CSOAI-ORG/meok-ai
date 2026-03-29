import type { Metadata } from "next";
import GamingClient from "./gaming-client";

export const metadata: Metadata = {
  title: "AI Gaming Companion — Live Copilot & Strategy | MEOK",
  description: "Real-time AI gaming companion with live strategy advice, Steam library integration, and Twitch stream coaching. Your sovereign gaming partner.",
  alternates: { canonical: "https://meok.ai/gaming" },
  openGraph: {
    title: "AI Gaming Companion | MEOK",
    description: "Live copilot, strategy coach, and Steam/Twitch integration. A sovereign AI companion built for gamers.",
    type: "website",
    url: "https://meok.ai/gaming",
  },
};

export default function GamingPage() {
  return <GamingClient />;
}
