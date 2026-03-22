import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Terminal — CLI for Your Sovereign AI | MEOK.AI",
  description:
    "The MEOK Terminal lets power users control their sovereign AI from the command line. meok remember, meok brief, meok search — your AI, your shell.",
  alternates: {
    canonical: "https://meok.ai/terminal",
  },
  openGraph: {
    title: "MEOK Terminal — CLI for Your Sovereign AI | MEOK.AI",
    description:
      "The MEOK Terminal lets power users control their sovereign AI from the command line. Install with npm install -g meok-cli.",
    type: "website",
  },
};

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
