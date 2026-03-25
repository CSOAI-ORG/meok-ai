'use client';

/**
 * Guardian Alerts Feed — real-time protection activity visualization.
 *
 * Shows recent Guardian actions for the user's family circle.
 * Used on: Guardian marketing page, dashboard sidebar, family page.
 *
 * For MVP: displays mock data with realistic patterns.
 * Production: will pull from /api/guardian/alerts endpoint.
 */

import { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface AlertItem {
  id: string;
  type: 'blocked' | 'flagged' | 'clear' | 'monitoring';
  person: string;
  message: string;
  time: string;
}

const SAMPLE_ALERTS: AlertItem[] = [
  {
    id: '1',
    type: 'blocked',
    person: 'Mum',
    message: '3 suspicious messages blocked this week',
    time: '2h ago',
  },
  {
    id: '2',
    type: 'flagged',
    person: 'Dad',
    message: '1 unknown caller flagged for review',
    time: '5h ago',
  },
  {
    id: '3',
    type: 'clear',
    person: 'Your son',
    message: '0 issues detected \u2014 all clear',
    time: 'Today',
  },
  {
    id: '4',
    type: 'monitoring',
    person: 'You',
    message: 'Investment opportunity flagged as high-risk',
    time: 'Yesterday',
  },
];

const ALERT_STYLES: Record<AlertItem['type'], { icon: React.ReactNode; color: string; bg: string }> = {
  blocked: {
    icon: <Shield className="w-4 h-4" />,
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.08)',
  },
  flagged: {
    icon: <AlertTriangle className="w-4 h-4" />,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
  },
  clear: {
    icon: <CheckCircle className="w-4 h-4" />,
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
  },
  monitoring: {
    icon: <Clock className="w-4 h-4" />,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
  },
};

export function GuardianAlerts({ compact = false }: { compact?: boolean }) {
  const alerts = SAMPLE_ALERTS;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {!compact && (
        <div
          className="px-5 py-4 flex items-center gap-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'rgba(45,155,138,0.15)', color: '#2d9b8a' }}
          >
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-white text-sm font-bold">Guardian Activity</h3>
            <p className="text-white/30 text-xs">Real-time protection status</p>
          </div>
          <div
            className="ml-auto w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#10B981' }}
          />
        </div>
      )}

      <div className={compact ? 'p-3 space-y-2' : 'p-4 space-y-2'}>
        {alerts.map((alert) => {
          const style = ALERT_STYLES[alert.type];
          return (
            <div
              key={alert.id}
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg"
              style={{ background: style.bg }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                style={{ color: style.color }}
              >
                {style.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-xs font-medium">
                  <span style={{ color: style.color }}>{alert.person}</span>
                  {' \u2014 '}
                  {alert.message}
                </p>
              </div>
              <span className="text-white/20 text-[10px] shrink-0">{alert.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
