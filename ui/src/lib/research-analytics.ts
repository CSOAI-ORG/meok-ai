/**
 * MEOK AI LABS — Research Analytics
 *
 * Track research usage, performance, and insights.
 */

export interface ResearchAnalytics {
  totalResearches: number;
  totalSources: number;
  avgResponseTime: number;
  topTemplates: Record<string, number>;
  topQueries: string[];
  successRate: number;
  errorCount: number;
  modeUsage: Record<string, number>;
}

interface ResearchEvent {
  timestamp: number;
  query: string;
  mode: 'fast' | 'deep' | 'crew';
  template?: string;
  sourcesCount: number;
  responseTime: number;
  success: boolean;
  error?: string;
}

const ANALYTICS_KEY = 'meok_research_analytics';

class ResearchAnalyticsTracker {
  private events: ResearchEvent[] = [];
  private maxEvents = 500;

  constructor() {
    this.load();
  }

  private load() {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(ANALYTICS_KEY);
      if (stored) {
        this.events = JSON.parse(stored);
      }
    } catch { /* ignore */ }
  }

  private save() {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(this.events.slice(-this.maxEvents)));
    } catch { /* ignore */ }
  }

  track(event: Omit<ResearchEvent, 'timestamp'>) {
    this.events.push({
      ...event,
      timestamp: Date.now(),
    });
    this.save();
  }

  getAnalytics(): ResearchAnalytics {
    const completedEvents = this.events.filter(e => e.success);
    const failedEvents = this.events.filter(e => !e.success);

    // Top templates
    const templateCounts: Record<string, number> = {};
    const queryCounts: Record<string, number> = {};
    const modeCounts: Record<string, number> = {};
    let totalSources = 0;
    let totalResponseTime = 0;

    for (const event of completedEvents) {
      if (event.template) {
        templateCounts[event.template] = (templateCounts[event.template] || 0) + 1;
      }
      queryCounts[event.query.slice(0, 50)] = (queryCounts[event.query.slice(0, 50)] || 0) + 1;
      modeCounts[event.mode] = (modeCounts[event.mode] || 0) + 1;
      totalSources += event.sourcesCount;
      totalResponseTime += event.responseTime;
    }

    // Top 10 queries
    const topQueries = Object.entries(queryCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([q]) => q);

    return {
      totalResearches: this.events.length,
      totalSources,
      avgResponseTime: completedEvents.length > 0 
        ? Math.round(totalResponseTime / completedEvents.length) 
        : 0,
      topTemplates: templateCounts,
      topQueries,
      successRate: this.events.length > 0 
        ? Math.round((completedEvents.length / this.events.length) * 100) 
        : 100,
      errorCount: failedEvents.length,
      modeUsage: modeCounts,
    };
  }

  getRecentEvents(count = 10): ResearchEvent[] {
    return this.events.slice(-count);
  }

  clear() {
    this.events = [];
    this.save();
  }
}

export const researchAnalytics = new ResearchAnalyticsTracker();

export default ResearchAnalyticsTracker;