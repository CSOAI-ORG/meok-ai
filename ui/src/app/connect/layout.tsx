import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Connects to Everything You Already Use | MEOK.AI",
  description:
    "MEOK plugs into Google, Notion, Obsidian, Gmail, Slack, Apple Health, Garmin, Steam, Discord, and 100+ more tools via official APIs and MCP. Your data stays encrypted and always yours.",
  alternates: {
    canonical: "https://meok.ai/connect",
  },
  openGraph: {
    title: "MEOK Connects to Everything You Already Use | MEOK.AI",
    description:
      "100+ integrations. Zero friction. Your AI companion gets full context — and keeps it all encrypted, owned by you.",
    type: "website",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
