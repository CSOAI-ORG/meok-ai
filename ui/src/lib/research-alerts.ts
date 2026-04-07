/**
 * MEOK AI LABS — Research Alerts System
 *
 * Handle research completion notifications and scheduled research alerts.
 */

interface ResearchAlert {
  id: string;
  type: 'completed' | 'scheduled' | 'error';
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
  researchId?: string;
}

const ALERTS_KEY = 'meok_research_alerts';

export function getAlerts(): ResearchAlert[] {
  try {
    const raw = localStorage.getItem(ALERTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAlert(alert: Omit<ResearchAlert, 'id' | 'timestamp' | 'read'>) {
  const alerts = getAlerts();
  alerts.unshift({
    ...alert,
    id: `alert_${Date.now()}`,
    timestamp: Date.now(),
    read: false,
  });
  // Keep last 50 alerts
  localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts.slice(0, 50)));
}

export function markAlertRead(id: string) {
  const alerts = getAlerts();
  const alert = alerts.find(a => a.id === id);
  if (alert) {
    alert.read = true;
    localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts));
  }
}

export function clearAlerts() {
  localStorage.setItem(ALERTS_KEY, JSON.stringify([]));
}

/**
 * Send browser notification for research completion
 */
export function notifyResearchComplete(title: string, query: string) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('Research Complete', {
      body: query.slice(0, 100),
      icon: '/favicon.ico',
      tag: 'research-complete',
    });
  }
  
  // Also save to alerts
  saveAlert({
    type: 'completed',
    title: 'Research Complete',
    message: query.slice(0, 100),
  });
}

/**
 * Send notification for scheduled research
 */
export function notifyScheduledResearch(scheduledFor: Date, query: string) {
  saveAlert({
    type: 'scheduled',
    title: 'Research Scheduled',
    message: `"${query.slice(0, 50)}..." will run at ${scheduledFor.toLocaleTimeString()}`,
  });
}

/**
 * Request notification permissions
 */
export function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

/**
 * Check if scheduled research is due
 */
export function checkScheduledResearch(
  scheduled: Array<{ id: string; query: string; scheduledFor: string }>,
  onDue: (research: { id: string; query: string }) => void
) {
  const now = Date.now();
  scheduled.forEach(s => {
    if (new Date(s.scheduledFor).getTime() <= now) {
      onDue({ id: s.id, query: s.query });
    }
  });
}