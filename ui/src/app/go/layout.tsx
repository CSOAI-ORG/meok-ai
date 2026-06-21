import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK GO — Real-World Character Overlay",
  description:
    "MEOK GO layers sovereign AI characters, digital real estate, and live data nodes over the real world. Catch characters, scan environments, and claim plots.",
  alternates: { canonical: "https://meok.ai/go" },
  openGraph: {
    title: "MEOK GO — Real-World Character Overlay",
    description:
      "Pokemon GO for AI citizens. MEOK characters, data nodes, and digital real estate layered over your streets, gardens, and cities.",
    type: "website",
    url: "https://meok.ai/go",
  },
};

export default function GoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
