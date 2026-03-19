import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({ children, className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-cyan-500 text-white hover:bg-cyan-400 shadow-lg shadow-cyan-500/25": variant === "primary",
          "bg-white/10 text-white hover:bg-white/20 border border-white/10": variant === "secondary",
          "text-white/60 hover:text-white hover:bg-white/10": variant === "ghost",
          "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/20": variant === "danger",
          "bg-transparent text-white/60 hover:text-white hover:bg-white/10 border border-white/20": variant === "outline",
        },
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-6 py-3 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
