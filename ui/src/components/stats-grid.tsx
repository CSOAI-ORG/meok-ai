import { Card } from "@/components/ui/card";
import { clsx } from "clsx";

interface Stat {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <Card key={s.label} className="!p-4">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{s.label}</p>
          <p className={clsx("text-2xl font-bold", s.color || "text-white")}>{s.value}</p>
          {s.sub && <p className="text-xs text-white/30 mt-1">{s.sub}</p>}
        </Card>
      ))}
    </div>
  );
}
