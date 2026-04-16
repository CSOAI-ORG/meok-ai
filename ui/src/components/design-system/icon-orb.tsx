
import { cn } from "@/lib/utils";

interface IconOrbProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  variant?: "gold" | "teal" | "orange" | "purple" | "green" | "red" | "blue";
  size?: "sm" | "md" | "lg";
  className?: string;
  pulse?: boolean;
}

export function IconOrb({
  icon: Icon,
  variant = "gold",
  size = "md",
  className,
  pulse = false,
}: IconOrbProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const styles: Record<string, string> = {
    gold: "bg-[rgba(201,168,76,0.15)] border-[rgba(201,168,76,0.3)] text-[#c9a84c]",
    teal: "bg-[rgba(45,155,138,0.15)] border-[rgba(45,155,138,0.3)] text-[#2d9b8a]",
    orange: "bg-[rgba(224,115,64,0.15)] border-[rgba(224,115,64,0.3)] text-[#e07340]",
    purple: "bg-[rgba(139,92,246,0.15)] border-[rgba(139,92,246,0.3)] text-[#8b5cf6]",
    green: "bg-[rgba(34,197,94,0.15)] border-[rgba(34,197,94,0.3)] text-[#22c55e]",
    red: "bg-[rgba(239,68,68,0.15)] border-[rgba(239,68,68,0.3)] text-[#ef4444]",
    blue: "bg-[rgba(59,130,246,0.15)] border-[rgba(59,130,246,0.3)] text-[#3b82f6]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl border",
        sizes[size],
        styles[variant],
        pulse && "animate-glow-pulse",
        className
      )}
    >
      <Icon size={iconSizes[size]} />
    </div>
  );
}
