import type { Metadata } from "next";
import { WarmContentPage } from "@/components/warm-content-page";

export const metadata: Metadata = {
  title: "MEOK Gaming Hive · MEOK AI Labs",
  description:
    "The first COAI-certified gaming AI infrastructure. 3 MCP servers, 20 tools, INTELLIGENCE_ONLY gate.",
  openGraph: {
    title: "MEOK Gaming Hive · MEOK AI Labs",
    description:
      "The first COAI-certified gaming AI infrastructure. 3 MCP servers, 20 tools, INTELLIGENCE_ONLY gate.",
    type: "website",
  },
};

export default function GamingPage() {
  return (
    <WarmContentPage
      title="MEOK Gaming Hive"
      description="The first COAI-certified gaming AI infrastructure. 3 MCP servers, 20 tools, and an INTELLIGENCE_ONLY gate that never plays for you."
      eyebrow="For players"
      ctas={[
        { href: "https://wowmcp.ai", label: "Explore gaming", external: true, variant: "primary" },
        { href: "/pricing", label: "View pricing", variant: "secondary" },
        { href: "/apps", label: "Explore apps", variant: "soft" },
      ]}
    >
      <h2>6 gaming MMO surfaces</h2>
      <p>
        World of Warcraft, FFXIV, EVE Online, Old School RuneScape, Path of
        Exile, and Diablo IV. Each surface is a dedicated MCP server with
        game-specific tools, lore-aware context, and live event tracking.
      </p>

      <h2>The pokerhud sub-domain</h2>
      <p>
        <a href="https://pokerhud.ai">pokerhud.ai</a> is the COAI-certified poker
        HUD. 12 tools, five-tier pricing, and a strict intelligence-only policy —
        it coaches, it does not bot.
      </p>

      <h2>INTELLIGENCE_ONLY gate</h2>
      <p>
        MEOK Gaming Hive never plays for you, never bots, and never provides
        real-time assistance (RTA). It gives analysis, strategy, and post-game
        review so you improve on your own merits.
      </p>

      <h2>Post-game analytics</h2>
      <p>
        Upload logs or connect via API to get AI-generated breakdowns of
        decisions, trends, and improvement opportunities. All data stays in your
        sovereign vault unless you choose to share it.
      </p>
    </WarmContentPage>
  );
}
