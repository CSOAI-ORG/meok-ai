import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your AI. Any Model. Your Choice. — Multi-LLM Routing | MEOK.AI",
  description:
    "MEOK routes intelligently across Claude, GPT-4o, Gemini, Llama 3, Mistral, DeepSeek, and Ollama. Switch models freely. Never lose your memory. Never get locked in.",
  alternates: { canonical: "https://meok.ai/os/any-llm" },
  openGraph: {
    title: "Your AI. Any Model. Your Choice. | MEOK.AI",
    description:
      "MEOK is not an LLM — it's the OS layer on top. Route any task to the best model. Switch models without losing your memory.",
    type: "website",
    url: "https://meok.ai/os/any-llm",
  },
};

export default function AnyLlmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
