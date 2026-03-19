import { clsx } from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "purple" | "gold" | "green" | "red" | "outline";
}

export function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-white/10 text-white/70": variant === "default",
          "bg-cyan-500/20 text-cyan-400": variant === "cyan",
          "bg-purple-500/20 text-purple-400": variant === "purple",
          "bg-yellow-500/20 text-yellow-400": variant === "gold",
          "bg-green-500/20 text-green-400": variant === "green",
          "bg-red-500/20 text-red-400": variant === "red",
          "bg-transparent border border-current": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
