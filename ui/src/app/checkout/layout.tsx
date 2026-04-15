import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — MEOK AI LABS",
  description: "Secure checkout for your MEOK Sovereign AI subscription. Upgrade to unlimited messages, every LLM, and permanent encrypted memory.",
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
