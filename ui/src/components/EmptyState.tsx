"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  icon?: React.ReactNode;
}

export function EmptyState({ title, description, action, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      {/* CSOAI Robot */}
      <div className="relative mb-6">
        <img
          src="/brand/csoai-robot.png"
          alt=""
          className="w-24 h-24 rounded-2xl object-cover opacity-60"
          style={{ filter: "drop-shadow(0 0 20px rgba(201,168,76,0.2))" }}
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0d0c18] via-transparent to-transparent" />
      </div>

      {/* Icon if provided */}
      {icon && (
        <div className="mb-4 text-[#c9a84c]/40">
          {icon}
        </div>
      )}

      {/* Content */}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/50 max-w-sm mb-6">{description}</p>

      {/* Action */}
      {action && (
        <Link
          href={action.href}
          onClick={action.onClick}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] font-medium hover:bg-[#c9a84c]/20 transition-colors"
        >
          <Plus className="w-4 h-4" />
          {action.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
