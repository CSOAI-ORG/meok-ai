/**
 * MEOK Push Notification System
 * 
 * Browser push notifications for re-engagement and real-time alerts.
 */

// ── Notification Types ─────────────────────────────────────────────────────

export type NotificationType =
  | "message_reply"
  | "morning_briefing"
  | "guardian_alert"
  | "streak_reminder"
  | "upgrade_prompt"
  | "feature_announcement"
  | "memory_milestone"
  | "companion_thought";

export interface PushNotification {
  type: NotificationType;
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  image?: string;
  tag?: string;
  requireInteraction?: boolean;
  actions?: { action: string; title: string; icon?: string }[];
  data?: {
    url?: string;
    action?: string;
    [key: string]: unknown;
  };
  timestamp?: number;
}

// ── Notification Templates ─────────────────────────────────────────────────

export const PUSH_TEMPLATES: Record<NotificationType, (data: Record<string, string>) => PushNotification> = {
  message_reply: (data) => ({
    type: "message_reply",
    title: `${data.companionName || "Your companion"} replied`,
    body: data.preview || "Tap to read the full message",
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-72.png",
    tag: `reply-${data.conversationId}`,
    data: { url: "/chat", action: "open_chat", conversationId: data.conversationId },
  }),

  morning_briefing: (data) => ({
    type: "morning_briefing",
    title: "Your Morning Briefing",
    body: data.summary || "Here's what you need to know today",
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-72.png",
    tag: "morning-briefing",
    requireInteraction: false,
    data: { url: "/dashboard/morning-briefing", action: "open_briefing" },
  }),

  guardian_alert: (data) => ({
    type: "guardian_alert",
    title: `🛡️ Guardian Alert: ${data.severity}`,
    body: data.message,
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-alert.png",
    tag: `guardian-${data.alertId}`,
    requireInteraction: true,
    actions: [
      { action: "view", title: "View Details" },
      { action: "dismiss", title: "Dismiss" },
    ],
    data: { url: "/dashboard/guardian", action: "view_alert", alertId: data.alertId },
  }),

  streak_reminder: (data) => ({
    type: "streak_reminder",
    title: "Don't break the streak! 🔥",
    body: `You've chatted for ${data.streak} days straight. Keep it going!`,
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-72.png",
    tag: "streak-reminder",
    data: { url: "/chat", action: "continue_streak" },
  }),

  upgrade_prompt: (data) => ({
    type: "upgrade_prompt",
    title: "Unlock unlimited messages",
    body: `You've used ${data.messagesUsed}/${data.messagesLimit} messages today. Upgrade for unlimited access.`,
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-72.png",
    tag: "upgrade-prompt",
    actions: [
      { action: "upgrade", title: "Upgrade Now" },
      { action: "dismiss", title: "Maybe Later" },
    ],
    data: { url: "/pricing", action: "upgrade", discount: data.discount },
  }),

  feature_announcement: (data) => ({
    type: "feature_announcement",
    title: `✨ New: ${data.featureName}`,
    body: data.description,
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-72.png",
    tag: `feature-${data.featureId}`,
    data: { url: data.url, action: "try_feature", featureId: data.featureId },
  }),

  memory_milestone: (data) => ({
    type: "memory_milestone",
    title: "💛 Memory Milestone",
    body: `You've created ${data.memoryCount} memories with your companion!`,
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-72.png",
    tag: "memory-milestone",
    data: { url: "/dashboard/memories", action: "view_memories" },
  }),

  companion_thought: (data) => ({
    type: "companion_thought",
    title: `${data.companionName} is thinking of you`,
    body: data.thought,
    icon: "/brand/icon-192.png",
    badge: "/brand/badge-72.png",
    tag: "companion-thought",
    requireInteraction: false,
    data: { url: "/chat", action: "open_chat" },
  }),
};

// ── Permission Management ──────────────────────────────────────────────────

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!("Notification" in window)) {
    return "denied";
  }

  const permission = await Notification.requestPermission();
  
  if (permission === "granted") {
    await subscribeToPushNotifications();
  }

  return permission;
}

export function getNotificationPermission(): NotificationPermission {
  if (!("Notification" in window)) {
    return "denied";
  }
  return Notification.permission;
}

// ── Service Worker Registration ────────────────────────────────────────────

async function subscribeToPushNotifications(): Promise<void> {
  try {
    const registration = await navigator.serviceWorker.ready;
    
    // Get or create subscription
    let subscription = await registration.pushManager.getSubscription();
    
    if (!subscription) {
      // Get VAPID public key from server
      const vapidKey = await fetch("/api/notifications/vapid-key").then((r) => r.json());
      
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey.publicKey),
      });
    }

    // Send subscription to server
    await fetch("/api/notifications/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription),
    });

    console.log("[Push] Subscribed successfully");
  } catch (err) {
    console.error("[Push] Failed to subscribe:", err);
  }
}

export async function unsubscribeFromPushNotifications(): Promise<void> {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    
    if (subscription) {
      await subscription.unsubscribe();
      
      // Notify server
      await fetch("/api/notifications/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endpoint: subscription.endpoint }),
      });
    }
  } catch (err) {
    console.error("[Push] Failed to unsubscribe:", err);
  }
}

// ── Local Notification (fallback) ──────────────────────────────────────────

export function showLocalNotification(notification: PushNotification): void {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  const { title, ...options } = notification;
  new Notification(title, {
    body: options.body,
    icon: options.icon,
    badge: options.badge,
    tag: options.tag,
    requireInteraction: options.requireInteraction,
    data: options.data,
    // @ts-ignore - image is supported in modern browsers
    image: options.image,
  });
}

// ── Smart Notification Scheduling ──────────────────────────────────────────

interface NotificationPreferences {
  quietHoursStart: number; // Hour (0-23)
  quietHoursEnd: number;
  guardianAlerts: boolean;
  morningBriefing: boolean;
  messageReplies: boolean;
  upgradePrompts: boolean;
  streakReminders: boolean;
  companionThoughts: boolean;
}

export const DEFAULT_PREFERENCES: NotificationPreferences = {
  quietHoursStart: 22, // 10 PM
  quietHoursEnd: 8,    // 8 AM
  guardianAlerts: true,
  morningBriefing: true,
  messageReplies: true,
  upgradePrompts: true,
  streakReminders: true,
  companionThoughts: false,
};

export function shouldSendNotification(
  type: NotificationType,
  preferences: NotificationPreferences = DEFAULT_PREFERENCES
): boolean {
  const now = new Date();
  const hour = now.getHours();
  
  // Check quiet hours
  const inQuietHours = 
    (preferences.quietHoursStart <= preferences.quietHoursEnd && 
     hour >= preferences.quietHoursStart && hour < preferences.quietHoursEnd) ||
    (preferences.quietHoursStart > preferences.quietHoursEnd && 
     (hour >= preferences.quietHoursStart || hour < preferences.quietHoursEnd));

  // Guardian alerts bypass quiet hours
  if (type === "guardian_alert") {
    return preferences.guardianAlerts;
  }

  // Other notifications respect quiet hours
  if (inQuietHours) {
    return false;
  }

  // Map notification types to preference keys
  const preferenceMap: Record<string, keyof NotificationPreferences | undefined> = {
    message_reply: "messageReplies",
    morning_briefing: "morningBriefing",
    guardian_alert: "guardianAlerts",
    streak_reminder: "streakReminders",
    upgrade_prompt: "upgradePrompts",
    feature_announcement: undefined,
    memory_milestone: undefined,
    companion_thought: undefined,
  };

  const prefKey = preferenceMap[type];
  if (prefKey && prefKey !== "quietHoursStart" && prefKey !== "quietHoursEnd") {
    return (preferences[prefKey] as boolean) ?? true;
  }

  return true;
}

// ── Notification Helper ────────────────────────────────────────────────────

function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  
  return outputArray.buffer;
}

// ── React Hook ─────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from "react";

export function usePushNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
      checkSubscription();
    }
  }, []);

  const checkSubscription = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      setIsSubscribed(!!subscription);
    } catch {
      setIsSubscribed(false);
    }
  };

  const requestPermission = useCallback(async () => {
    const result = await requestNotificationPermission();
    setPermission(result);
    if (result === "granted") {
      setIsSubscribed(true);
    }
    return result;
  }, []);

  const unsubscribe = useCallback(async () => {
    await unsubscribeFromPushNotifications();
    setIsSubscribed(false);
  }, []);

  return {
    permission,
    isSubscribed,
    requestPermission,
    unsubscribe,
    showNotification: (type: NotificationType, data: Record<string, string>) => {
      const template = PUSH_TEMPLATES[type];
      if (template) {
        showLocalNotification(template(data));
      }
    },
  };
}
