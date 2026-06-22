"use client";

import { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { StatCard } from "@/components/design-system/stat-card";
import { Surface } from "@/components/design-system/surface";
import { TrendingUp, Briefcase, ShoppingCart, Coins, Landmark } from "lucide-react";

const GOLD = "#c9a84c";
const TEAL = "#2d9b8a";

interface YieldPoint {
  maturity: string;
  sovereign: number;
  corporate: number;
}

function formatCurrency(n: number): string {
  return "€" + n.toLocaleString("en-IE", { maximumFractionDigits: 0 });
}

function clamp(min: number, max: number, n: number) {
  return Math.max(min, Math.min(max, n));
}

export function EconomyClient() {
  // ── Base mocked macro state ────────────────────────────────────────────────
  const [treasury, setTreasury] = useState(1_000_000_000);
  const [jobs, setJobs] = useState({ filled: 12_840, open: 1_560 });
  const [dailyTrades, setDailyTrades] = useState(84_320);
  const [taxRevenue, setTaxRevenue] = useState(2_420_000);

  const [yieldCurve, setYieldCurve] = useState<YieldPoint[]>([
    { maturity: "1Y", sovereign: 3.2, corporate: 4.1 },
    { maturity: "2Y", sovereign: 3.45, corporate: 4.35 },
    { maturity: "3Y", sovereign: 3.7, corporate: 4.55 },
    { maturity: "5Y", sovereign: 4.0, corporate: 4.8 },
    { maturity: "7Y", sovereign: 4.2, corporate: 5.0 },
    { maturity: "10Y", sovereign: 4.45, corporate: 5.25 },
    { maturity: "20Y", sovereign: 4.75, corporate: 5.55 },
    { maturity: "30Y", sovereign: 4.95, corporate: 5.75 },
  ]);

  const totalJobs = useMemo(() => jobs.filled + jobs.open, [jobs]);
  const jobsRate = useMemo(
    () => ((jobs.filled / totalJobs) * 100).toFixed(1),
    [jobs.filled, totalJobs]
  );

  // ── Live ticker ────────────────────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setTreasury((prev) =>
        clamp(990_000_000, 1_010_000_000, prev + Math.round((Math.random() - 0.48) * 200_000))
      );
      setDailyTrades((prev) =>
        clamp(80_000, 90_000, prev + Math.round((Math.random() - 0.5) * 1_200))
      );
      setTaxRevenue((prev) =>
        clamp(2_200_000, 2_600_000, prev + Math.round((Math.random() - 0.48) * 80_000))
      );

      setJobs((prev) => {
        const delta = Math.round((Math.random() - 0.45) * 40);
        const nextFilled = clamp(
          totalJobs * 0.85,
          totalJobs * 0.98,
          prev.filled + delta
        );
        return {
          filled: Math.round(nextFilled),
          open: Math.max(0, Math.round(totalJobs - nextFilled)),
        };
      });

      setYieldCurve((prev) =>
        prev.map((p) => ({
          ...p,
          sovereign: clamp(
            2.5,
            6.0,
            Number((p.sovereign + (Math.random() - 0.5) * 0.08).toFixed(2))
          ),
          corporate: clamp(
            3.5,
            7.0,
            Number((p.corporate + (Math.random() - 0.5) * 0.08).toFixed(2))
          ),
        }))
      );
    }, 3500);

    return () => clearInterval(id);
  }, [totalJobs]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] text-white">
      <section className="relative px-6 pt-28 pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.10)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
          <Landmark size={14} /> Sovereign Economy
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Aethelgard <span className="text-gradient-gold">Treasury</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
          Mock macro dashboard for the first MEOK civilization. Numbers nudge every few
          seconds to simulate live economic activity.
        </p>
      </section>

      {/* Stats grid */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Treasury balance"
            value={formatCurrency(treasury)}
            change="mock sovereign reserve"
            changeType="positive"
            glow="gold"
            icon={<Coins size={20} />}
          />
          <StatCard
            label="Jobs filled / open"
            value={`${jobs.filled.toLocaleString()} / ${jobs.open.toLocaleString()}`}
            change={`${jobsRate}% filled`}
            changeType="positive"
            glow="teal"
            icon={<Briefcase size={20} />}
          />
          <StatCard
            label="Daily trades"
            value={dailyTrades.toLocaleString()}
            change="mock A2A + MCP volume"
            changeType="neutral"
            glow="purple"
            icon={<ShoppingCart size={20} />}
          />
          <StatCard
            label="Tax revenue"
            value={formatCurrency(taxRevenue)}
            change="mock daily receipts"
            changeType="positive"
            glow="green"
            icon={<TrendingUp size={20} />}
          />
        </div>
      </section>

      {/* Yield curve chart */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Surface variant="glass" glow="gold" className="p-6 sm:p-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-white">Debt Yield Curve</h2>
              <p className="text-sm text-white/50">
                Mock sovereign vs corporate yields across maturities.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-4 rounded-full" style={{ background: GOLD }} />
                Sovereign
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-4 rounded-full" style={{ background: TEAL }} />
                Corporate
              </span>
            </div>
          </div>

          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yieldCurve} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  dataKey="maturity"
                  tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[2, 7]}
                  tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#13121f",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                  itemStyle={{ color: "#fff" }}

                />
                <Line
                  type="monotone"
                  dataKey="sovereign"
                  stroke={GOLD}
                  strokeWidth={3}
                  dot={{ r: 4, stroke: GOLD, fill: GOLD }}
                  activeDot={{ r: 6 }}
                  name="Sovereign"
                  unit="%"
                />
                <Line
                  type="monotone"
                  dataKey="corporate"
                  stroke={TEAL}
                  strokeWidth={3}
                  dot={{ r: 4, stroke: TEAL, fill: TEAL }}
                  activeDot={{ r: 6 }}
                  name="Corporate"
                  unit="%"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Surface>
      </section>

      {/* Footer note */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <p className="text-xs text-white/30">
          All figures are simulated for demonstration. Real economic telemetry will
          wire into MEOK Town, the Council ledger, and agent hives in a future
          release.
        </p>
      </section>
    </main>
  );
}
