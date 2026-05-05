import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sub-processors · MEOK AI Labs",
  description: "Full list of MEOK AI Labs sub-processors. See /trust for the live, dated table.",
  alternates: { canonical: "https://meok.ai/trust" },
};

export default function SubProcessorsPage() {
  redirect("/trust");
}
