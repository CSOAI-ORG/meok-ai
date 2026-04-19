// MEOK Push Notification Service Worker

const CACHE_NAME = "meok-push-v1";

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");
  event.waitUntil(self.clients.claim());
});

// Push event - receive push notifications from server
self.addEventListener("push", (event) => {
  console.log("[SW] Push received:", event);

  let data = {};
  try {
    data = event.data?.json() || {};
  } catch (e) {
    console.error("[SW] Failed to parse push data:", e);
  }

  const options = {
    body: data.body || "You have a new notification",
    icon: data.icon || "/brand/icon-192.png",
    badge: data.badge || "/brand/badge-72.png",
    image: data.image,
    tag: data.tag || "default",
    requireInteraction: data.requireInteraction || false,
    actions: data.actions || [],
    data: data.data || {},
    timestamp: data.timestamp || Date.now(),
    vibrate: [200, 100, 200],
  };

  event.waitUntil(
    self.registration.showNotification(
      data.title || "MEOK",
      options
    )
  );
});

// Notification click event - handle user interaction
self.addEventListener("notificationclick", (event) => {
  console.log("[SW] Notification clicked:", event);

  event.notification.close();

  const notificationData = event.notification.data || {};
  const action = event.action;

  let url = notificationData.url || "/";

  // Handle different actions
  if (action === "reply" && notificationData.conversationId) {
    url = `/chat?conversation=${notificationData.conversationId}`;
  } else if (action === "view" && notificationData.alertId) {
    url = `/dashboard/guardian?alert=${notificationData.alertId}`;
  } else if (action === "upgrade") {
    url = `/pricing?discount=${notificationData.discount || ""}`;
  } else if (action === "dismiss") {
    // Just close the notification
    return;
  }

  // Open or focus window
  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        // Check if there's already a window open
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && "focus" in client) {
            client.focus();
            client.navigate(url);
            return;
          }
        }

        // Open new window if none exists
        if (self.clients.openWindow) {
          return self.clients.openWindow(url);
        }
      })
  );
});

// Message event - communication with main app
self.addEventListener("message", (event) => {
  console.log("[SW] Message received:", event.data);

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Background sync for offline actions
self.addEventListener("sync", (event) => {
  console.log("[SW] Background sync:", event.tag);

  if (event.tag === "send-messages") {
    event.waitUntil(syncMessages());
  }
});

async function syncMessages() {
  // Implementation for syncing queued messages when back online
  const queue = await getMessageQueue();
  for (const message of queue) {
    try {
      await fetch("/api/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      await removeFromQueue(message.id);
    } catch (err) {
      console.error("[SW] Failed to sync message:", err);
    }
  }
}

// Placeholder functions for message queue
async function getMessageQueue() {
  // Implementation would use IndexedDB
  return [];
}

async function removeFromQueue(messageId) {
  // Implementation would use IndexedDB
  console.log("[SW] Removing from queue:", messageId);
}
