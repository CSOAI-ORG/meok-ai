"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  className?: string;
}

const variantStyles = {
  default: {
    bg: "rgba(255,255,255,0.1)",
    border: "rgba(255,255,255,0.2)",
    text: "rgba(255,255,255,0.8)",
  },
  gold: {
    bg: "rgba(201,168,76,0.15)",
    border: "rgba(201,168,76,0.3)",
    text: "#c9a84c",
  },
  success: {
    bg: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.3)",
    text: "#22c55e",
  },
  warning: {
    bg: "rgba(251,191,36,0.15)",
    border: "rgba(251,191,36,0.3)",
    text: "#fbbf24",
  },
  error: {
    bg: "rgba(239,68,68,0.15)",
    border: "rgba(239,68,68,0.3)",
    text: "#ef4444",
  },
  info: {
    bg: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.3)",
    text: "#3b82f6",
  },
};

const sizeStyles = {
  sm: { padding: "0.125rem 0.5rem", fontSize: "0.65rem" },
  md: { padding: "0.25rem 0.625rem", fontSize: "0.75rem" },
  lg: { padding: "0.375rem 0.75rem", fontSize: "0.875rem" },
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  pulse = false,
  className = "",
}: BadgeProps) {
  const style = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${
        pulse ? "animate-pulse" : ""
      } ${className}`}
      style={{
        background: style.bg,
        borderColor: style.border,
        color: style.text,
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
      }}
    >
      {pulse && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-ping"
          style={{ background: style.text }}
        />
      )}
      {children}
    </span>
  );
}
