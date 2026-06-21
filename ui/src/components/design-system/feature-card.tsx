
import { Surface } from "./surface";
import { IconOrb } from "./icon-orb";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  iconVariant?: "gold" | "teal" | "orange" | "purple" | "green" | "red" | "blue";
  className?: string;
  glow?: "none" | "gold" | "teal" | "orange" | "purple" | "blue" | "green";
  action?: ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon,
  iconVariant = "gold",
  className,
  glow = "none",
  action,
}: FeatureCardProps) {
  return (
    <Surface
      variant="glass"
      glow={glow}
      className={cn(
        "group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {icon && <IconOrb icon={icon} variant={iconVariant} size="lg" />}
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-white/60">{description}</p>
        </div>
        {action && <div className="mt-auto pt-2">{action}</div>}
      </div>
    </Surface>
  );
}
