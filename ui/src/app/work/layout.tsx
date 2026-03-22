import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work OS — Sovereign AI Workspace | MEOK",
  description:
    "MEOK Work is the sovereign AI professional workspace. AI document editor, email, research, code assistant, meeting AI, and task management — all care-aligned, local-first, multi-LLM.",
  alternates: {
    canonical: "https://meok.ai/work",
  },
  openGraph: {
    title: "Work OS — Sovereign AI Workspace | MEOK",
    description:
      "MEOK Work is the sovereign AI professional workspace. AI document editor, email, research, code assistant, meeting AI, and task management — all care-aligned, local-first, multi-LLM.",
    type: "website",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
