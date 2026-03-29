"use client";

import { useState } from "react";
import {
  CreditCard,
  Download,
  CheckCircle,
  Clock,
  ChevronRight,
  X,
  Zap,
  Crown,
  Star,
  MessageSquare,
  Brain,
  Plug,
} from "lucide-react";

// ── Brand tokens ─────────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ── Types ─────────────────────────────────────────────────────────────────────
type PlanId = "explorer" | "sovereign" | "sovereign_pro" | "enterprise";
type InvoiceStatus = "Paid" | "Pending";

interface Plan {
  id: PlanId;
  name: string;
  price: number;
  annualPrice: number | null; // annual total; null = free or custom
  icon: React.ReactNode;
  features: string[];
  limits: { messages: number; memory: number; api: number };
}

interface Invoice {
  id: string;
  date: string;
  amount: string;
  plan: string;
  status: InvoiceStatus;
}

// ── Demo data ─────────────────────────────────────────────────────────────────
const PLANS: Plan[] = [
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
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    annualPrice: null,
    icon: <Brain className="w-5 h-5" />,
    features: ["Custom pricing", "Dedicated support", "SLA", "Custom integrations"],
    limits: { messages: 999999, memory: 999999, api: 999999 },
  },
];

const CURRENT_PLAN_ID: PlanId = "explorer";

const USAGE = {
  messages: { used: 45,  limit: 100  },
  memory:   { used: 89,  limit: 500  },
  api:      { used: 320, limit: 1000 },
};

const INVOICES: Invoice[] = [
  { id: "INV-2026-006", date: "1 Mar 2026",  amount: "£0.00",  plan: "Explorer",      status: "Paid"    },
  { id: "INV-2026-005", date: "1 Feb 2026",  amount: "£0.00",  plan: "Explorer",      status: "Paid"    },
  { id: "INV-2026-004", date: "1 Jan 2026",  amount: "£9.00",  plan: "Sovereign",     status: "Paid"    },
  { id: "INV-2025-012", date: "1 Dec 2025",  amount: "£9.00",  plan: "Sovereign",     status: "Paid"    },
  { id: "INV-2025-011", date: "1 Nov 2025",  amount: "£19.00", plan: "Sovereign Pro", status: "Paid"    },
  { id: "INV-2025-010", date: "1 Oct 2025",  amount: "£19.00", plan: "Sovereign Pro", status: "Pending" },
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
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${p}%`, background: usageColor(p) }}
        />
      </div>
      <p className="text-xs mt-1" style={{ color: usageColor(p) }}>{p}% used</p>
    </div>
  );
}

function PlanCard({
  plan,
  isCurrent,
  isSelected,
  onSelect,
}: {
  plan: Plan;
  isCurrent: boolean;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const active = isCurrent || isSelected;
  return (
    <button
      onClick={onSelect}
      className="w-full text-left p-4 rounded-xl transition-all duration-200 hover:scale-[1.01]"
      style={{
        background: active ? `${GOLD}12` : SURFACE,
        border: `1px solid ${active ? `${GOLD}50` : BORDER}`,
        outline: "none",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ color: GOLD }}>{plan.icon}</span>
          <span className="font-semibold text-white">{plan.name}</span>
          {isCurrent && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: `${GOLD}20`, color: GOLD }}
            >
              Current
            </span>
          )}
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-white">
            {plan.id === "enterprise" ? "Custom" : plan.price === 0 ? "Free" : `£${plan.price}`}
          </span>
          {plan.price > 0 && plan.id !== "enterprise" && (
            <span className="text-xs text-white/40">/mo</span>
          )}
          {plan.annualPrice && (
            <p className="text-[10px] text-white/30 mt-0.5">£{plan.annualPrice}/yr</p>
          )}
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
  const [showModal, setShowModal]       = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
  const [showConfirm, setShowConfirm]   = useState(false);

  const currentPlan = PLANS.find((p) => p.id === CURRENT_PLAN_ID)!;
  const targetPlan  = PLANS.find((p) => p.id === selectedPlan);

  function openModal() {
    setSelectedPlan(null);
    setShowConfirm(false);
    setShowModal(true);
  }

  function handleSelectPlan(id: PlanId) {
    if (id === CURRENT_PLAN_ID) return;
    setSelectedPlan(id);
    setShowConfirm(false);
  }

  function handleConfirmPlan() {
    setShowConfirm(true);
  }

  function handleDone() {
    setShowModal(false);
    setSelectedPlan(null);
    setShowConfirm(false);
  }

  // Prorated cost preview (demo: assume 15 days left in month)
  function proratedToday(price: number) {
    const daily = price / 30;
    return (daily * 15).toFixed(2);
  }

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>

      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${GOLD}18` }}
        >
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

          {/* 84.1 — Current plan card */}
          <div
            className="p-6 rounded-xl"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Current Plan</p>
                <div className="flex items-center gap-2">
                  <span style={{ color: GOLD }}>{currentPlan.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{currentPlan.name}</h2>
                </div>
                <p className="text-sm text-white/40 mt-1">
                  Next billing date: <span className="text-white/70">1 Apr 2026</span>
                </p>
              </div>
              <button
                onClick={openModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
                  color: DEEP,
                }}
              >
                Change plan
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Usage meters */}
            <div className="space-y-5">
              <p className="text-xs text-white/40 uppercase tracking-widest">Usage this cycle</p>
              <UsageBar
                label="Messages"
                used={USAGE.messages.used}
                limit={USAGE.messages.limit}
                icon={<MessageSquare className="w-4 h-4" />}
              />
              <UsageBar
                label="Memory entries"
                used={USAGE.memory.used}
                limit={USAGE.memory.limit}
                icon={<Brain className="w-4 h-4" />}
              />
              <UsageBar
                label="API calls"
                used={USAGE.api.used}
                limit={USAGE.api.limit}
                icon={<Plug className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* 84.4 — Invoice history */}
          <div
            className="p-6 rounded-xl"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <h3 className="text-base font-semibold text-white mb-4">Invoice History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="pb-3 text-xs text-white/30 font-medium uppercase tracking-wide">Date</th>
                    <th className="pb-3 text-xs text-white/30 font-medium uppercase tracking-wide">Invoice</th>
                    <th className="pb-3 text-xs text-white/30 font-medium uppercase tracking-wide">Plan</th>
                    <th className="pb-3 text-xs text-white/30 font-medium uppercase tracking-wide">Amount</th>
                    <th className="pb-3 text-xs text-white/30 font-medium uppercase tracking-wide">Status</th>
                    <th className="pb-3 text-xs text-white/30 font-medium uppercase tracking-wide"></th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: BORDER }}>
                  {INVOICES.map((inv) => (
                    <tr key={inv.id} className="group">
                      <td className="py-3 text-white/60">{inv.date}</td>
                      <td className="py-3 text-white/50 font-mono text-xs">{inv.id}</td>
                      <td className="py-3 text-white/70">{inv.plan}</td>
                      <td className="py-3 text-white font-medium">{inv.amount}</td>
                      <td className="py-3">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: inv.status === "Paid"
                              ? "rgba(34,197,94,0.1)"
                              : `${GOLD}15`,
                            color: inv.status === "Paid" ? "#22c55e" : GOLD,
                          }}
                        >
                          {inv.status === "Paid"
                            ? <CheckCircle className="w-3 h-3" />
                            : <Clock className="w-3 h-3" />}
                          {inv.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <button
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
                          style={{
                            background: `${GOLD}10`,
                            color: GOLD,
                            border: `1px solid ${GOLD}30`,
                          }}
                        >
                          <Download className="w-3 h-3" />
                          PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Right column: payment method ── */}
        <div className="space-y-4">

          {/* 84.3 — Payment method */}
          <div
            className="p-5 rounded-xl"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <h3 className="text-base font-semibold text-white mb-4">Payment Method</h3>
            <div
              className="p-4 rounded-lg mb-4"
              style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20` }}
            >
              {/* Card visual */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-7 rounded flex items-center justify-center text-xs font-bold"
                  style={{ background: "#1a1f71", color: "#fff" }}
                >
                  VISA
                </div>
                <div
                  className="w-8 h-5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.1)", border: `1px solid ${BORDER}` }}
                />
              </div>
              <p className="text-white font-mono tracking-widest text-sm mb-1">
                •••• •••• •••• 4242
              </p>
              <p className="text-xs text-white/40">Expires 09 / 27</p>
            </div>
            <button
              className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02]"
              style={{
                background: `${GOLD}15`,
                color: GOLD,
                border: `1px solid ${GOLD}30`,
              }}
            >
              Update card
            </button>
          </div>

          {/* Quick plan summary */}
          <div
            className="p-5 rounded-xl"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Plan summary</p>
            <div className="space-y-2">
              {[
                { label: "Plan", value: currentPlan.name },
                { label: "Billing", value: currentPlan.id === "enterprise" ? "Custom" : currentPlan.price === 0 ? "Free" : `£${currentPlan.price}/mo` },
                { label: "Renews", value: "1 Apr 2026" },
                { label: "Seats", value: "1" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-white/40">{label}</span>
                  <span className="text-white/80 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 84.2 — Change plan modal ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) handleDone(); }}
        >
          <div
            className="w-full max-w-2xl rounded-2xl p-6 relative"
            style={{ background: "#0f0e1c", border: `1px solid ${BORDER}` }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-white">Change Plan</h2>
                <p className="text-sm text-white/40">
                  Currently on <span style={{ color: GOLD }}>{currentPlan.name}</span>
                </p>
              </div>
              <button
                onClick={handleDone}
                className="p-2 rounded-lg text-white/40 hover:text-white/70 transition-colors"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!showConfirm ? (
              <>
                {/* Plan cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  {PLANS.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      isCurrent={plan.id === CURRENT_PLAN_ID}
                      isSelected={plan.id === selectedPlan}
                      onSelect={() => handleSelectPlan(plan.id)}
                    />
                  ))}
                </div>

                {/* Proceed button */}
                <button
                  onClick={handleConfirmPlan}
                  disabled={!selectedPlan}
                  className="w-full py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.01] disabled:opacity-30 disabled:hover:scale-100"
                  style={{
                    background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
                    color: DEEP,
                  }}
                >
                  {selectedPlan
                    ? `Continue with ${PLANS.find((p) => p.id === selectedPlan)?.name}`
                    : "Select a plan to continue"}
                </button>
              </>
            ) : (
              /* Confirm upgrade */
              <div className="space-y-5">
                <div
                  className="p-5 rounded-xl"
                  style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span style={{ color: GOLD }}>{targetPlan?.icon}</span>
                    <div>
                      <p className="font-semibold text-white">{targetPlan?.name} Plan</p>
                      <p className="text-sm text-white/50">
                        {targetPlan!.id === "enterprise"
                          ? "Custom pricing — contact us"
                          : targetPlan!.price === 0
                          ? "Free — no charge"
                          : `£${targetPlan?.price} / month`}
                      </p>
                    </div>
                  </div>

                  {targetPlan!.price > 0 && (
                    <div
                      className="p-3 rounded-lg space-y-2 text-sm"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <div className="flex justify-between text-white/60">
                        <span>Prorated charge today (15 days remaining)</span>
                        <span className="text-white font-medium">
                          £{proratedToday(targetPlan!.price)}
                        </span>
                      </div>
                      <div className="flex justify-between text-white/60">
                        <span>Then from 1 May 2026</span>
                        <span className="text-white font-medium">
                          £{targetPlan!.price}.00 / month
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-xs text-white/30 text-center">
                  You can cancel or change your plan at any time. No hidden fees.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white/80 transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}` }}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleDone}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-[1.01]"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
                      color: DEEP,
                    }}
                  >
                    Confirm {targetPlan!.price === 0 ? "downgrade" : "upgrade"}
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
