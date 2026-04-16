
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowTextProps {
  children: ReactNode;
  variant?: "gold" | "blue" | "teal" | "orange" | "purple";
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
}

export function GlowText({
  children,
  variant = "gold",
  className,
  as: Component = "span",
}: GlowTextProps) {
  const gradients: Record<string, string> = {
    gold: "bg-gradient-to-br from-[#c9a84c] via-[#f0d080] to-[#c9a84c]",
    blue: "bg-gradient-to-br from-[#60a5fa] to-[#a78bfa]",
    teal: "bg-gradient-to-br from-[#2d9b8a] to-[#14b8a6]",
    orange: "bg-gradient-to-br from-[#e07340] to-[#f59e0b]",
    purple: "bg-gradient-to-br from-[#a78bfa] to-[#c084fc]",
  };

  return (
    <Component
      className={cn(
        gradients[variant],
        "bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Component>
  );
}
