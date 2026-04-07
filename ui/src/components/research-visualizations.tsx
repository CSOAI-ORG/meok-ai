"use client";

import { useMemo } from "react";
import { TrendingUp, Calendar, Clock, FileText, Star, BarChart3, PieChart } from "lucide-react";

interface ResearchEntry {
  id: string;
  query: string;
  answer: string;
  timestamp: number;
  sources?: number;
}

interface ResearchVisualizationsProps {
  history: ResearchEntry[];
  className?: string;
}

export function ResearchVisualizations({ history, className = "" }: ResearchVisualizationsProps) {
  // Calculate statistics
  const stats = useMemo(() => {
    const total = history.length;
    const totalSources = history.reduce((sum, h) => sum + (h.sources || 0), 0);
    const avgLength = history.reduce((sum, h) => sum + h.answer.length, 0) / Math.max(total, 1);
    
    // Get unique days
    const days = new Set(history.map(h => new Date(h.timestamp).toDateString()));
    const activeDays = days.size;
    
    // Last 7 days activity
    const last7Days = history.filter(h => Date.now() - h.timestamp < 7 * 24 * 60 * 60 * 1000).length;
    
    return {
      total,
      totalSources,
      avgLength: Math.round(avgLength),
      activeDays,
      last7Days,
    };
  }, [history]);

  // Group by day for timeline
  const timelineData = useMemo(() => {
    const groups: Record<string, number> = {};
    history.forEach(h => {
      const date = new Date(h.timestamp).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
      groups[date] = (groups[date] || 0) + 1;
    });
    return Object.entries(groups).slice(-7);
  }, [history]);

  // Word count distribution
  const wordCountBuckets = useMemo(() => {
    const buckets = { short: 0, medium: 0, long: 0 };
    history.forEach(h => {
      const words = h.answer.split(/\s+/).length;
      if (words < 300) buckets.short++;
      else if (words < 1000) buckets.medium++;
      else buckets.long++;
    });
    return buckets;
  }, [history]);

  if (history.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-gray-400">Total Research</div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-cyan-400">{stats.totalSources}</div>
          <div className="text-xs text-gray-400">Sources Cited</div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.activeDays}</div>
          <div className="text-xs text-gray-400">Active Days</div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-amber-400">{stats.last7Days}</div>
          <div className="text-xs text-gray-400">This Week</div>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-green-400">{Math.round(stats.avgLength / 10)}</div>
          <div className="text-xs text-gray-400">Avg Words</div>
        </div>
      </div>

      {/* Activity Timeline */}
      {timelineData.length > 1 && (
        <div className="bg-slate-800/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Activity Timeline</span>
          </div>
          <div className="flex items-end gap-1 h-16">
            {timelineData.map(([day, count], i) => {
              const maxCount = Math.max(...timelineData.map(d => d[1]));
              const height = Math.max(10, (count / maxCount) * 100);
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t"
                    style={{ height: `${height}%`, minHeight: '4px' }}
                  />
                  <span className="text-[10px] text-gray-500">{day.split(' ')[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Word Count Distribution */}
      {history.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-800/30 rounded-lg p-3 text-center">
            <PieChart className="w-5 h-5 text-green-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{wordCountBuckets.short}</div>
            <div className="text-xs text-gray-400">Short (&lt;300 words)</div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-3 text-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{wordCountBuckets.medium}</div>
            <div className="text-xs text-gray-400">Medium (300-1000)</div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-3 text-center">
            <FileText className="w-5 h-5 text-purple-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{wordCountBuckets.long}</div>
            <div className="text-xs text-gray-400">Long (&gt;1000 words)</div>
          </div>
        </div>
      )}

      {/* Recent Topics */}
      <div className="bg-slate-800/30 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-gray-300">Recent Topics</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {history.slice(0, 8).map((entry, i) => (
            <span 
              key={entry.id}
              className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
            >
              {entry.query.slice(0, 30)}...
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchVisualizations;