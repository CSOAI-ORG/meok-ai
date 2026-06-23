"use client";

import { useState } from "react";
import {
  TrendingUp,
  Users,
  CreditCard,
  Crown,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Gift,
  ShoppingBag,
} from "lucide-react";

// Admin dashboard: render on-demand, skip static prerender
export const dynamic = "force-dynamic";

// Mock data - in production this would come from API
const REVENUE_DATA = {
  mrr: 45230,
  mrrGrowth: 12.5,
  arr: 542760,
  totalCustomers: 5234,
  paidCustomers: 892,
  conversionRate: 17.04,
  arpu: 50.71,
  ltv: 405,
  cac: 35,
  ltvCacRatio: 11.57,
  churnRate: 4.2,
  
  tierBreakdown: {
    explorer: 4342,
    sovereign: 623,
    family: 189,
    byok: 80,
  },
  
  revenueBySource: {
    subscriptions: 38500,
    marketplace: 4520,
    microtransactions: 2210,
  },
  
  monthlyTrend: [
    { month: "Jan", revenue: 32100 },
    { month: "Feb", revenue: 34500 },
    { month: "Mar", revenue: 38900 },
    { month: "Apr", revenue: 45230 },
  ],
};

export default function RevenueDashboard() {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d" | "1y">("30d");

  return (
    <div className="min-h-screen bg-[#0d0c18] text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Revenue Dashboard</h1>
        <p className="text-white/50 mt-1">
          Track monetization metrics and growth
        </p>
      </div>

      {/* Time Range Selector */}
      <div className="flex gap-2 mb-6">
        {(["7d", "30d", "90d", "1y"] as const).map((range) => (
          <button type="button"
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeRange === range
                ? "bg-[#c9a84c] text-[#0d0c18]"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {range === "7d" && "Last 7 days"}
            {range === "30d" && "Last 30 days"}
            {range === "90d" && "Last 90 days"}
            {range === "1y" && "Last year"}
          </button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Monthly Recurring Revenue"
          value={`£${REVENUE_DATA.mrr.toLocaleString()}`}
          change={REVENUE_DATA.mrrGrowth}
          icon={<TrendingUp className="w-5 h-5" />}
          subtitle="Annual: £542,760"
        />
        <KPICard
          title="Total Customers"
          value={REVENUE_DATA.totalCustomers.toLocaleString()}
          change={8.3}
          icon={<Users className="w-5 h-5" />}
          subtitle={`${REVENUE_DATA.paidCustomers} paid`}
        />
        <KPICard
          title="Conversion Rate"
          value={`${REVENUE_DATA.conversionRate.toFixed(2)}%`}
          change={2.1}
          icon={<Crown className="w-5 h-5" />}
          subtitle="Explorer → Paid"
        />
        <KPICard
          title="ARPU"
          value={`£${REVENUE_DATA.arpu.toFixed(2)}`}
          change={5.4}
          icon={<DollarSign className="w-5 h-5" />}
          subtitle="Average revenue per user"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Tier Breakdown */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#c9a84c]" />
            Tier Distribution
          </h3>
          <div className="space-y-4">
            <TierBar
              name="Explorer (Free)"
              count={REVENUE_DATA.tierBreakdown.explorer}
              total={REVENUE_DATA.totalCustomers}
              color="bg-white/20"
            />
            <TierBar
              name="Sovereign"
              count={REVENUE_DATA.tierBreakdown.sovereign}
              total={REVENUE_DATA.totalCustomers}
              color="bg-[#c9a84c]"
              revenue={REVENUE_DATA.tierBreakdown.sovereign * 9}
            />
            <TierBar
              name="Family"
              count={REVENUE_DATA.tierBreakdown.family}
              total={REVENUE_DATA.totalCustomers}
              color="bg-purple-500"
              revenue={REVENUE_DATA.tierBreakdown.family * 29}
            />
            <TierBar
              name="BYOK"
              count={REVENUE_DATA.tierBreakdown.byok}
              total={REVENUE_DATA.totalCustomers}
              color="bg-blue-500"
              revenue={REVENUE_DATA.tierBreakdown.byok * 5}
            />
          </div>
        </div>

        {/* Revenue by Source */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#c9a84c]" />
            Revenue Sources
          </h3>
          <div className="space-y-4">
            <SourceRow
              name="Subscriptions"
              amount={REVENUE_DATA.revenueBySource.subscriptions}
              total={REVENUE_DATA.mrr}
              icon={<Crown className="w-4 h-4" />}
            />
            <SourceRow
              name="Character Marketplace"
              amount={REVENUE_DATA.revenueBySource.marketplace}
              total={REVENUE_DATA.mrr}
              icon={<ShoppingBag className="w-4 h-4" />}
            />
            <SourceRow
              name="Microtransactions"
              amount={REVENUE_DATA.revenueBySource.microtransactions}
              total={REVENUE_DATA.mrr}
              icon={<Gift className="w-4 h-4" />}
            />
          </div>
        </div>

        {/* Unit Economics */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#c9a84c]" />
            Unit Economics
          </h3>
          <div className="space-y-3">
            <MetricRow label="Customer LTV" value={`£${REVENUE_DATA.ltv}`} />
            <MetricRow label="Customer CAC" value={`£${REVENUE_DATA.cac}`} />
            <MetricRow
              label="LTV:CAC Ratio"
              value={REVENUE_DATA.ltvCacRatio.toFixed(2)}
              highlight={REVENUE_DATA.ltvCacRatio > 3}
            />
            <MetricRow
              label="Monthly Churn"
              value={`${REVENUE_DATA.churnRate}%`}
              negative
            />
          </div>
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
        <h3 className="text-white font-semibold mb-6">Monthly Revenue Trend</h3>
        <div className="h-64 flex items-end gap-4">
          {REVENUE_DATA.monthlyTrend.map((month) => {
            const max = Math.max(...REVENUE_DATA.monthlyTrend.map((m) => m.revenue));
            const height = (month.revenue / max) * 100;
            
            return (
              <div key={month.month} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-[#c9a84c]/20 rounded-t-lg relative group cursor-pointer"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute inset-0 bg-[#c9a84c] rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/10 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    £{month.revenue.toLocaleString()}
                  </div>
                </div>
                <span className="text-xs text-white/50">{month.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Sub-components
function KPICard({
  title,
  value,
  change,
  icon,
  subtitle,
}: {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  subtitle: string;
}) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-white/50">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        <div className="p-2 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c]">
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowDownRight className="w-4 h-4" />
          )}
          {Math.abs(change)}%
        </span>
        <span className="text-sm text-white/40">vs last period</span>
      </div>
      <p className="text-xs text-white/30 mt-2">{subtitle}</p>
    </div>
  );
}

function TierBar({
  name,
  count,
  total,
  color,
  revenue,
}: {
  name: string;
  count: number;
  total: number;
  color: string;
  revenue?: number;
}) {
  const percentage = (count / total) * 100;

  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1">
        <span className="text-white/70">{name}</span>
        <span className="text-white">
          {count.toLocaleString()}
          {revenue && (
            <span className="text-white/50 ml-2">£{revenue.toLocaleString()}/mo</span>
          )}
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function SourceRow({
  name,
  amount,
  total,
  icon,
}: {
  name: string;
  amount: number;
  total: number;
  icon: React.ReactNode;
}) {
  const percentage = (amount / total) * 100;

  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-white/5 text-white/60">{icon}</div>
        <div>
          <p className="text-white font-medium">{name}</p>
          <p className="text-xs text-white/50">{percentage.toFixed(1)}% of total</p>
        </div>
      </div>
      <p className="font-semibold text-white">£{amount.toLocaleString()}</p>
    </div>
  );
}

function MetricRow({
  label,
  value,
  highlight,
  negative,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  negative?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-white/50">{label}</span>
      <span
        className={`font-semibold ${
          highlight ? "text-green-400" : negative ? "text-red-400" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
