
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SurfaceProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "deep" | "surface" | "elevated" | "glass";
  className?: string;
  as?: "div" | "section" | "article" | "main";
  glow?: "none" | "gold" | "teal" | "orange" | "purple" | "blue";
}

export function Surface({
  children,
  variant = "surface",
  className,
  as: Component = "div",
  glow = "none",
  ...props
}: SurfaceProps) {
  return (
    <Component
      {...props}
      className={cn(
        variant === "deep" && "bg-[#0d0c18] text-[#f5f5f5]",
        variant === "surface" && "bg-[#13121f] text-[#f5f5f5]",
        variant === "elevated" &&
          "bg-[#1a1929] border border-white/[0.08] rounded-2xl",
        variant === "glass" &&
          "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl",
        glow === "gold" &&
          "shadow-[0_0_0_1px_rgba(201,168,76,0.15),0_8px_32px_rgba(201,168,76,0.12)]",
        glow === "teal" &&
          "shadow-[0_0_0_1px_rgba(45,155,138,0.15),0_8px_32px_rgba(45,155,138,0.12)]",
        glow === "orange" &&
          "shadow-[0_0_0_1px_rgba(224,115,64,0.15),0_8px_32px_rgba(224,115,64,0.12)]",
        glow === "purple" &&
          "shadow-[0_0_0_1px_rgba(139,92,246,0.15),0_8px_32px_rgba(139,92,246,0.12)]",
        glow === "blue" &&
          "shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_32px_rgba(59,130,246,0.12)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
