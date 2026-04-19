"use client";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "shimmer" | "none";
}

export function Skeleton({
  className = "",
  variant = "text",
  width,
  height,
  animation = "shimmer",
}: SkeletonProps) {
  const baseClasses = "bg-white/10";

  const variantClasses = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-lg",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    shimmer: "skeleton",
    none: "",
  };

  const defaultHeights = {
    text: "1em",
    circular: "40px",
    rectangular: "100px",
    rounded: "80px",
  };

  const style: React.CSSProperties = {
    width: width ?? (variant === "text" ? "100%" : undefined),
    height: height ?? defaultHeights[variant],
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  );
}

// Pre-built skeleton layouts
export function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" height={16} />
          <Skeleton variant="text" width="40%" height={12} />
        </div>
      </div>
      <Skeleton variant="rounded" height={100} />
      <div className="flex gap-2">
        <Skeleton variant="text" width={80} height={32} />
        <Skeleton variant="text" width={80} height={32} />
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]"
        >
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="70%" height={14} />
            <Skeleton variant="text" width="50%" height={12} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
      <div className="flex items-center justify-between mb-2">
        <Skeleton variant="text" width={80} height={12} />
        <Skeleton variant="circular" width={16} height={16} />
      </div>
      <Skeleton variant="text" width={60} height={32} />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="p-6 space-y-6">
      <Skeleton variant="rounded" height={80} />
      <div className="grid grid-cols-4 gap-4">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <Skeleton variant="rounded" height={200} />
          <Skeleton variant="rounded" height={150} />
        </div>
        <div className="space-y-4">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}
