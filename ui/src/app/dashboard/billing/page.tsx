"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  Download,
  CheckCircle,
  ChevronRight,
  X,
  Zap,
  Crown,
  Star,
  MessageSquare,
  Brain,
  Plug,
  ExternalLink,
  Loader2,
} from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ── Types ─────────────────────────────────────────────────────────────────────
type PlanId = "explorer" | "sovereign" | "sovereign_pro" | "byok" | "enterprise";

interface BillingStatus {
  plan: PlanId;
  plan_name: string;
  status: "active" | "pending" | "canceled" | "past_due";
  next_billing: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  upgrade_url: string | null;
}

interface PlanInfo {
  id: PlanId;
  name: string;
  price: number;
  annualPrice: number | null;
  icon: React.ReactNode;
  features: string[];
  limits: { messages: number; memory: number; api: number };
}

const PLANS: PlanInfo[] = [
  {
    id: "explorer",
    name: "Explorer",
    price: 0,
    annualPrice: null,
    icon: <Star className="w-5 h-5" />,
    features: ["100 messages/day", "1 AI companion", "Core features", "Community support"],
    limits: { messages: 100, memory: 500, api: 1000 },
  },
  {
    id: "sovereign",
    name: "Sovereign",
    price: 9,
    annualPrice: 90,
    icon: <Zap className="w-5 h-5" />,
    features: ["Unlimited messages", "3 companions", "All features", "Guardian 24/7 protection"],
    limits: { messages: 999999, memory: 5000, api: 50000 },
  },
  {
    id: "sovereign_pro",
    name: "Sovereign Pro",
    price: 19,
    annualPrice: 190,
    icon: <Crown className="w-5 h-5" />,
    features: ["Everything in Sovereign", "7 companions", "Ralph Mode", "Priority API", "Family Circle"],
    limits: { messages: 999999, memory: 999999, api: 999999 },
  },
  {
    id: "byok",
    name: "BYOK",
    price: 5,
    annualPrice: 50,
    icon: <Plug className="w-5 h-5" />,
    features: ["Use your own API keys", "Unlimited inference", "1 companion", "Full data sovereignty"],
    limits: { messages: 999999, memory: 5000, api: 999999 },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    annualPrice: null,
    icon: <Brain className="w-5 h-5" />,
    features: ["Custom pricing", "Dedicated support", "SLA", "Custom integrations"],
    limits: { messages: 999999, memory: 999999, api: 999999 },
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function pct(used: number, limit: number) {
  return Math.min(100, Math.round((used / limit) * 100));
}

function fmtNum(n: number) {
  return n >= 999999 ? "Unlimited" : n.toLocaleString();
}

function usageColor(p: number) {
  if (p >= 90) return "#ef4444";
  if (p >= 70) return GOLD;
  return "#22c55e";
}

function formatDate(iso: string | null) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// ── Sub-components ────────────────────────────────────────────────────────────
function UsageBar({ label, used, limit, icon }: { label: string; used: number; limit: number; icon: React.ReactNode }) {
  const p = pct(used, limit);
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span style={{ color: GOLD }}>{icon}</span>
          <span className="text-sm text-white/70">{label}</span>
        </div>
        <span className="text-xs text-white/40">
          {used.toLocaleString()} / {fmtNum(limit)}
        </span>
      </div>
      <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${p}%`, background: usageColor(p) }} />
      </div>
      <p className="text-xs mt-1" style={{ color: usageColor(p) }}>{p}% used</p>
    </div>
  );
}

function PlanCard({ plan, isCurrent, isSelected, onSelect }: { plan: PlanInfo; isCurrent: boolean; isSelected: boolean; onSelect: () => void }) {
  const active = isCurrent || isSelected;
  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-4 rounded-xl transition-all duration-200 hover:scale-[1.01]"
      style={{ background: active ? `${GOLD}12` : SURFACE, border: `1px solid ${active ? `${GOLD}50` : BORDER}`, outline: "none" }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ color: GOLD }}>{plan.icon}</span>
          <span className="font-semibold text-white">{plan.name}</span>
          {isCurrent && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${GOLD}20`, color: GOLD }}>
              Current
            </span>
          )}
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-white">
            {plan.id === "enterprise" ? "Custom" : plan.price === 0 ? "Free" : `£${plan.price}`}
          </span>
          {plan.price > 0 && plan.id !== "enterprise" && <span className="text-xs text-white/40">/mo</span>}
          {plan.annualPrice && <p className="text-[10px] text-white/30 mt-0.5">£{plan.annualPrice}/yr</p>}
        </div>
      </div>
      <ul className="space-y-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-white/50">
            <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: active ? GOLD : "rgba(255,255,255,0.2)" }} />
            {f}
          </li>
        ))}
      </ul>
    </button>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function BillingPage() {
  const [billing, setBilling] = useState<BillingStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal]       = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
  const [showConfirm, setShowConfirm]   = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  useEffect(() => {
    fetch("/api/billing/status")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load billing status");
        return res.json();
      })
      .then((data: BillingStatus) => {
        setBilling(data);
      })
      .catch((err) => setError(err instanceof Error ? err.message : String(err)))
      .finally(() => setLoading(false));
  }, []);

  const currentPlanId: PlanId = billing?.plan ?? "explorer";
  const currentPlan = PLANS.find((p) => p.id === currentPlanId) ?? PLANS[0];
  const targetPlan  = PLANS.find((p) => p.id === selectedPlan);

  function openModal() {
    setSelectedPlan(null);
    setShowConfirm(false);
    setShowModal(true);
  }

  function handleSelectPlan(id: PlanId) {
    if (id === currentPlanId) return;
    setSelectedPlan(id);
    setShowConfirm(false);
  }

  async function handleConfirmPlan() {
    if (!selectedPlan || selectedPlan === currentPlanId) return;

    // Enterprise goes to contact
    if (selectedPlan === "enterprise") {
      window.location.href = "/contact";
      return;
    }

    // Explorer is free — no checkout needed
    if (selectedPlan === "explorer") {
      setShowModal(false);
      return;
    }

    setCheckoutLoading(true);
    const planToCheckout: Record<Exclude<PlanId, "explorer" | "enterprise">, string> = {
      sovereign: "sovereign_monthly",
      sovereign_pro: "sovereign_pro_monthly",
      byok: "byok_monthly",
    };

    // For now we default to monthly; could add interval selector in modal later
    const checkoutPlan = planToCheckout[selectedPlan as Exclude<PlanId, "explorer" | "enterprise">];
    window.location.href = `/checkout?plan=${checkoutPlan}`;
  }

  function handleDone() {
    setShowModal(false);
    setSelectedPlan(null);
    setShowConfirm(false);
  }

  async function openPortal() {
    setPortalLoading(true);
    try {
      const res = await fetch("/api/billing/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Could not open billing portal");
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong");
      setPortalLoading(false);
    }
  }

  // Estimated usage until we have a dedicated usage endpoint
  const usage = {
    messages: { used: 0, limit: currentPlan.limits.messages },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: DEEP }}>
        <Loader2 className="w-8 h-8 text-[#c9a84c] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8" style={{ background: DEEP }}>
        <div className="max-w-xl mx-auto rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
          <p className="font-semibold mb-1">Unable to load billing</p>
          <p className="text-sm opacity-80">{error}</p>
          <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-sm">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${GOLD}18` }}>
          <CreditCard className="w-5 h-5" style={{ color: GOLD }} />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white">Billing</h1>
          <p className="text-sm text-white/40">Manage your plan, usage, and payments</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Left column: plan + usage ── */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current plan card */}
          <div className="p-6 rounded-xl" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Current Plan</p>
                <div className="flex items-center gap-2">
                  <span style={{ color: GOLD }}>{currentPlan.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{currentPlan.name}</h2>
                </div>
                <p className="text-sm text-white/40 mt-1">
                  Next billing date: <span className="text-white/70">{formatDate(billing?.next_billing ?? null)}</span>
                </p>
                {billing?.status && billing.status !== "active" && (
                  <p className="text-xs mt-1 capitalize" style={{ color: billing.status === "past_due" ? "#ef4444" : GOLD }}>
                    Status: {billing.status.replace("_", " ")}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={openModal}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
                >
                  Change plan
                  <ChevronRight className="w-4 h-4" />
                </button>
                {billing?.stripe_customer_id && (
                  <button
                    onClick={openPortal}
                    disabled={portalLoading}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all hover:bg-white/10 border border-white/10 text-white/80"
                  >
                    {portalLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <ExternalLink className="w-3 h-3" />}
                    Manage payments
                  </button>
                )}
              </div>
            </div>

            {/* Usage meters */}
            <div className="space-y-5">
              <p className="text-xs text-white/40 uppercase tracking-widest">Usage this cycle</p>
              <UsageBar
                label="Messages"
                used={usage.messages.used}
                limit={usage.messages.limit}
                icon={<MessageSquare className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* Plan comparison */}
          <div className="p-6 rounded-xl" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <h3 className="text-sm font-semibold text-white mb-4">Included in your plan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentPlan.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column: invoices + help ── */}
        <div className="space-y-6">
          {/* Invoices */}
          <div className="p-5 rounded-xl" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Invoices</h3>
              {billing?.stripe_customer_id ? (
                <button onClick={openPortal} className="text-xs font-medium hover:underline" style={{ color: GOLD }}>
                  View all
                </button>
              ) : (
                <span className="text-xs text-white/30">No invoices yet</span>
              )}
            </div>
            {billing?.stripe_customer_id ? (
              <div className="text-sm text-white/60">
                <p className="mb-3">Your invoices are available in the Stripe Customer Portal.</p>
                <button
                  onClick={openPortal}
                  disabled={portalLoading}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  Open portal
                </button>
              </div>
            ) : (
              <div className="text-sm text-white/40">You have no paid invoices yet.</div>
            )}
          </div>

          {/* Help */}
          <div className="p-5 rounded-xl" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <h3 className="text-sm font-semibold text-white mb-3">Need help?</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white transition">Billing FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition">Contact support</Link>
              </li>
              <li>
                <button onClick={openPortal} className="text-white/60 hover:text-white transition text-left">Update payment method</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Change plan modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl p-6" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Change plan</h3>
              <button onClick={handleDone} className="p-1 rounded-lg hover:bg-white/10 text-white/60">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!showConfirm ? (
              <>
                <div className="space-y-3 mb-5">
                  {PLANS.filter((p) => p.id !== "enterprise").map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      isCurrent={plan.id === currentPlanId}
                      isSelected={selectedPlan === plan.id}
                      onSelect={() => handleSelectPlan(plan.id)}
                    />
                  ))}
                </div>
                <div className="pt-4 border-t" style={{ borderColor: BORDER }}>
                  <p className="text-xs text-white/40 mb-3">
                    Need a custom solution? <Link href="/contact" className="underline hover:text-white">Contact sales</Link>
                  </p>
                  <button
                    onClick={handleConfirmPlan}
                    disabled={!selectedPlan || selectedPlan === currentPlanId || checkoutLoading}
                    className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
                  >
                    {checkoutLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Redirecting…
                      </span>
                    ) : selectedPlan === currentPlanId ? (
                      "Current plan"
                    ) : selectedPlan ? (
                      `Continue with ${PLANS.find((p) => p.id === selectedPlan)?.name}`
                    ) : (
                      "Select a plan"
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-white/80">
                  You are about to change to <strong className="text-white">{targetPlan?.name}</strong>.
                </p>
                <div className="p-4 rounded-xl" style={{ background: DEEP, border: `1px solid ${BORDER}` }}>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Cost today</p>
                  <p className="text-2xl font-bold text-white">
                    {targetPlan?.price === 0 ? "Free" : `£${proratedToday(targetPlan?.price ?? 0)}`}
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Prorated for the rest of this billing cycle. Full price starts next cycle.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/5 border border-white/10"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleConfirmPlan}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`, color: DEEP }}
                  >
                    Confirm change
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function proratedToday(price: number) {
  const daily = price / 30;
  return (daily * 15).toFixed(2);
}
