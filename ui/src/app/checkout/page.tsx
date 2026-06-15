"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Loader2, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const { isSignedIn, isLoaded } = useUser();
  const [status, setStatus] = useState<"loading" | "error" | "redirecting">("loading");
  const [message, setMessage] = useState("Preparing checkout…");

  const rawPlan = searchParams.get("plan") ?? "";

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      setStatus("error");
      setMessage("Please sign in to continue.");
      return;
    }

    const planParam = rawPlan.toLowerCase().trim();

    // Map marketing plan names to API tier + interval
    const planMap: Record<string, { tier: string; interval: "month" | "year" }> = {
      sovereign_monthly: { tier: "sovereign", interval: "month" },
      sovereign_annual: { tier: "sovereign", interval: "year" },
      sovereign_pro_monthly: { tier: "family", interval: "month" },
      sovereign_pro_annual: { tier: "family", interval: "year" },
      byok_monthly: { tier: "byok", interval: "month" },
      byok: { tier: "byok", interval: "month" },
      family_monthly: { tier: "family", interval: "month" },
      family_annual: { tier: "family", interval: "year" },
      // Governance / Labs MCP tiers (monthly only)
      "governance-smb": { tier: "governance-smb", interval: "month" },
      "governance-professional": { tier: "governance-professional", interval: "month" },
      "governance-defence": { tier: "governance-defence", interval: "month" },
      "governance-enterprise": { tier: "governance-enterprise", interval: "month" },
    };

    const mapped = planMap[planParam];
    if (!mapped) {
      setStatus("error");
      setMessage(`Invalid plan: "${rawPlan}". Please return to pricing and try again.`);
      return;
    }

    setStatus("redirecting");
    setMessage("Creating secure checkout session…");

    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tier: mapped.tier, interval: mapped.interval }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `Request failed (${res.status})`);
        }
        return res.json();
      })
      .then((data: { url: string }) => {
        if (data.url) {
          window.location.href = data.url;
        } else {
          throw new Error("No checkout URL returned");
        }
      })
      .catch((err) => {
        setStatus("error");
        setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      });
  }, [isLoaded, isSignedIn, rawPlan]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0d0c18]">
      <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#13121f] p-8 shadow-2xl">
        {status === "error" ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <h1 className="text-xl font-semibold text-white">Checkout unavailable</h1>
            <p className="text-sm text-white/60">{message}</p>
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="/pricing"
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:bg-white/15 transition"
              >
                Back to pricing
              </Link>
              {!isSignedIn && (
                <Link
                  href={"/login?redirect=/checkout?plan=" + encodeURIComponent(rawPlan)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-[#c9a84c] text-[#0d0c18] hover:bg-[#b59643] transition"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
              {status === "redirecting" ? (
                <Loader2 className="w-6 h-6 text-[#c9a84c] animate-spin" />
              ) : (
                <CheckCircle className="w-6 h-6 text-[#c9a84c]" />
              )}
            </div>
            <h1 className="text-xl font-semibold text-white">Secure checkout</h1>
            <p className="text-sm text-white/60">{message}</p>
            <p className="text-xs text-white/40">
              You will be redirected to Stripe to complete your subscription securely.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
    { "@type": "ListItem", position: 2, name: "Checkout", item: "https://meok.ai/checkout" },
  ],
};

export default function CheckoutPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0d0c18]">
        <Loader2 className="w-8 h-8 text-[#c9a84c] animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
    </>
  );
}
