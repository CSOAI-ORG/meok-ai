"use client";

import Link from "next/link";
import { MessageSquare, Database, Sparkles, Shield, Clock } from "lucide-react";

interface Activity {
  id: string;
  type: "message" | "memory" | "evolution" | "guardian";
  title: string;
  description?: string;
  timestamp: string;
  href?: string;
}

interface ActivityFeedProps {
  activities: Activity[];
  isLoading?: boolean;
}

const typeConfig = {
  message: { icon: MessageSquare, color: "#c9a84c", bg: "rgba(201,168,76,0.15)" },
  memory: { icon: Database, color: "#3b82f6", bg: "rgba(59,130,246,0.15)" },
  evolution: { icon: Sparkles, color: "#a855f7", bg: "rgba(168,85,247,0.15)" },
  guardian: { icon: Shield, color: "#22c55e", bg: "rgba(34,197,94,0.15)" },
};

function formatTimeAgo(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export function ActivityFeed({ activities, isLoading }: ActivityFeedProps) {
  if (isLoading) {
    return (
      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
        <h3 className="font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
              <div className="w-10 h-10 rounded-lg bg-white/5 animate-shimmer" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-white/5 rounded animate-shimmer" />
                <div className="h-3 w-1/2 bg-white/5 rounded animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
        <h3 className="font-semibold text-white mb-4">Recent Activity</h3>
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/[0.05] flex items-center justify-center">
            <Clock className="w-8 h-8 text-white/20" />
          </div>
          <p className="text-white/40 text-sm">No recent activity</p>
          <p className="text-white/30 text-xs mt-1">Start chatting to see your activity here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
      <h3 className="font-semibold text-white mb-4">Recent Activity</h3>
      <div className="space-y-2">
        {activities.slice(0, 5).map((activity) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;
          const Wrapper = activity.href ? Link : "div";

          return (
            <Wrapper
              key={activity.id}
              href={activity.href || "#"}
              className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                activity.href
                  ? "hover:bg-white/[0.05] cursor-pointer"
                  : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: config.bg }}
              >
                <Icon className="w-5 h-5" style={{ color: config.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{activity.title}</p>
                {activity.description && (
                  <p className="text-xs text-white/50 truncate">{activity.description}</p>
                )}
                <p className="text-xs text-white/30 mt-1">{formatTimeAgo(activity.timestamp)}</p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
