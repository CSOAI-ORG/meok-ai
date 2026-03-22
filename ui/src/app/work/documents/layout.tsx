import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents — Never Lose a Document. Never Forget a Detail. | MEOK Work OS",
  description:
    "Smart filing, AI summarisation, cross-reference search, and version tracking. Search your entire document history in plain English. Sovereign. Local-first.",
  alternates: { canonical: "https://meok.ai/work/documents" },
  openGraph: {
    title: "Documents — Never Lose a Document. Never Forget a Detail. | MEOK Work OS",
    description:
      "AI-powered document management with semantic search, smart filing, cross-reference, and version tracking. Your documents, remembered.",
    type: "website",
  },
};

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
