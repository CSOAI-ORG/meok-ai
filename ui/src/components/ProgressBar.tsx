"use client";

import { Check } from "lucide-react";

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: string;
  showLabel?: boolean;
  animated?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  size = "md",
  color = "#c9a84c",
  showLabel = false,
  animated = true,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-white/50 mb-1">
          <span>{Math.round(percentage)}%</span>
          <span>
            {value}/{max}
          </span>
        </div>
      )}
      <div
        className={`w-full ${sizeClasses[size]} bg-white/10 rounded-full overflow-hidden`}
      >
        <div
          className={`h-full rounded-full ${animated ? "transition-all duration-500 ease-out" : ""}`}
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${color}90, ${color})`,
            boxShadow: percentage > 0 ? `0 0 10px ${color}40` : "none",
          }}
        />
      </div>
    </div>
  );
}

// Segmented progress for multi-step processes
interface SegmentedProgressProps {
  steps: { label: string; complete: boolean; current?: boolean }[];
  className?: string;
}

export function SegmentedProgress({ steps, className = "" }: SegmentedProgressProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1 last:flex-initial">
            {/* Step circle */}
            <div
              className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                step.complete
                  ? "bg-[#c9a84c] border-[#c9a84c]"
                  : step.current
                  ? "bg-transparent border-[#c9a84c]"
                  : "bg-transparent border-white/20"
              }`}
            >
              {step.complete ? (
                <Check className="w-4 h-4 text-[#0d0c18]" />
              ) : (
                <span
                  className={`text-xs font-bold ${
                    step.current ? "text-[#c9a84c]" : "text-white/40"
                  }`}
                >
                  {index + 1}
                </span>
              )}
              {step.current && (
                <div className="absolute inset-0 rounded-full border-2 border-[#c9a84c] animate-ping opacity-30" />
              )}
            </div>

            {/* Label */}
            <span
              className={`ml-2 text-xs font-medium whitespace-nowrap ${
                step.complete || step.current ? "text-white" : "text-white/40"
              }`}
            >
              {step.label}
            </span>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-3 h-0.5 bg-white/10">
                <div
                  className="h-full bg-[#c9a84c] transition-all duration-500"
                  style={{ width: step.complete ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Circular progress
interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

export function CircularProgress({
  value,
  max = 100,
  size = 60,
  strokeWidth = 4,
  color = "#c9a84c",
  bgColor = "rgba(255,255,255,0.1)",
  children,
}: CircularProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
          style={{
            filter: `drop-shadow(0 0 4px ${color}50)`,
          }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
