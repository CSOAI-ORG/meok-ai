
import { Surface } from "./surface";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: ReactNode;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: ReactNode;
  className?: string;
  glow?: "none" | "gold" | "teal" | "orange" | "purple" | "blue" | "green";
}

export function StatCard({
  label,
  value,
  change,
  changeType = "neutral",
  icon,
  className,
  glow = "none",
}: StatCardProps) {
  return (
    <Surface
      variant="elevated"
      glow={glow}
      className={cn("p-5 transition-all duration-300 hover:-translate-y-1", className)}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
            {label}
          </p>
          <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
          {change && (
            <p
              className={cn(
                "mt-1 text-xs font-medium",
                changeType === "positive" && "text-green-400",
                changeType === "negative" && "text-red-400",
                changeType === "neutral" && "text-white/60"
              )}
            >
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="shrink-0 rounded-lg bg-white/[0.05] p-2 text-white/70">
            {icon}
          </div>
        )}
      </div>
    </Surface>
  );
}
