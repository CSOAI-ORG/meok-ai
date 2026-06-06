
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SurfaceProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "deep" | "surface" | "elevated" | "glass" | "neo";
  className?: string;
  as?: "div" | "section" | "article" | "main";
  glow?: "none" | "gold" | "teal" | "orange" | "purple" | "blue";
  hover?: boolean;
}

export function Surface({
  children,
  variant = "surface",
  className,
  as: Component = "div",
  glow = "none",
  hover = false,
  ...props
}: SurfaceProps) {
  return (
    <Component
      {...props}
      className={cn(
        "transition-all duration-300",
        
        // Variants
        variant === "deep" && "bg-[#0d0c18] text-[#f5f5f5]",
        variant === "surface" && "bg-[#13121f] text-[#f5f5f5]",
        variant === "elevated" &&
          "bg-[#1a1929] border border-white/[0.08] rounded-2xl shadow-xl",
        variant === "glass" &&
          "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl",
        variant === "neo" && 
          "bg-[#0d0c18] border border-[#c9a84c]/10 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",

        // Glows
        glow === "gold" &&
          "shadow-[0_0_0_1px_rgba(201,168,76,0.1),0_8px_32px_rgba(201,168,76,0.08)] hover:shadow-[0_0_0_1px_rgba(201,168,76,0.2),0_12px_48px_rgba(201,168,76,0.12)]",
        glow === "teal" &&
          "shadow-[0_0_0_1px_rgba(45,155,138,0.1),0_8px_32px_rgba(45,155,138,0.08)]",
        glow === "orange" &&
          "shadow-[0_0_0_1px_rgba(224,115,64,0.1),0_8px_32px_rgba(224,115,64,0.08)]",
        glow === "purple" &&
          "shadow-[0_0_0_1px_rgba(139,92,246,0.1),0_8px_32px_rgba(139,92,246,0.08)]",
        glow === "blue" &&
          "shadow-[0_0_0_1px_rgba(59,130,246,0.1),0_8px_32px_rgba(59,130,246,0.08)]",
        
        // Hover effect
        hover && "hover:border-white/20 hover:bg-white/[0.05] cursor-pointer",
        
        className
      )}
    >
      {children}
    </Component>
  );
}
