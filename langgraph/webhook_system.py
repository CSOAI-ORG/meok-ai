"""
MEOK AI Labs - Webhook System
Handles event subscriptions and delivery
"""

import asyncio
import hashlib
import hmac
import json
import time
from typing import Dict, List, Optional, Callable
from dataclasses import dataclass, field
from enum import Enum
import aiohttp

try:
    import httpx
except ImportError:
    import subprocess

    subprocess.check_call(["pip", "install", "httpx"])
    import httpx


class WebhookEvent(Enum):
    """Supported webhook events"""

    # Agent events
    TASK_CREATED = "task.created"
    TASK_COMPLETED = "task.completed"
    TASK_FAILED = "task.failed"

    # Memory events
    MEMORY_STORED = "memory.stored"
    MEMORY_QUERIED = "memory.queried"

    # Consciousness events
    CONSCIOUSNESS_CHANGED = "consciousness.changed"
    DREAM_STARTED = "dream.started"
    DREAM_COMPLETED = "dream.completed"

    # User events
    USER_CREATED = "user.created"
    USER_UPDATED = "user.updated"

    # Security events
    RATE_LIMIT_EXCEEDED = "rate_limit.exceeded"
    AUTH_FAILURE = "auth.failure"
    API_KEY_CREATED = "api_key.created"
    API_KEY_REVOKED = "api_key.revoked"

    # System events
    SYSTEM_ALERT = "system.alert"
    HEALTH_CHECK_FAILED = "health.failed"


@dataclass
class WebhookSubscription:
    """Webhook subscription configuration"""

    url: str
    events: List[WebhookEvent]
    secret: Optional[str] = None
    headers: Dict[str, str] = field(default_factory=dict)
    retry_count: int = 3
    retry_delay: float = 1.0
    timeout: int = 30


@dataclass
class WebhookPayload:
    """Webhook event payload"""

    event: str
    timestamp: float = field(default_factory=time.time)
    data: Dict = field(default_factory=dict)
    id: str = ""

    def __post_init__(self):
        if not self.id:
            self.id = hashlib.sha256(
                f"{self.event}{self.timestamp}".encode()
            ).hexdigest()[:16]


class WebhookDelivery:
    """Tracks webhook delivery attempts"""

    def __init__(
        self,
        webhook_id: str,
        payload: WebhookPayload,
        subscription: WebhookSubscription,
    ):
        self.id = hashlib.md5(f"{webhook_id}{payload.id}".encode()).hexdigest()
        self.webhook_id = webhook_id
        self.payload = payload
        self.subscription = subscription
        self.attempts = 0
        self.max_attempts = subscription.retry_count
        self.status = "pending"
        self.response_status: Optional[int] = None
        self.response_body: Optional[str] = None
        self.error: Optional[str] = None


class WebhookManager:
    """
    Manages webhook subscriptions and deliveries
    """

    def __init__(self):
        self._subscriptions: Dict[str, WebhookSubscription] = {}
        self._deliveries: Dict[str, WebhookDelivery] = {}
        self._handlers: Dict[WebhookEvent, List[Callable]] = {
            event: [] for event in WebhookEvent
        }
        self._queue: asyncio.Queue = asyncio.Queue()
        self._running = False

    def subscribe(self, webhook_id: str, subscription: WebhookSubscription) -> None:
        """Register a webhook subscription"""
        self._subscriptions[webhook_id] = subscription
        print(f"✓ Webhook subscribed: {webhook_id} -> {subscription.url}")

    def unsubscribe(self, webhook_id: str) -> None:
        """Remove a webhook subscription"""
        if webhook_id in self._subscriptions:
            del self._subscriptions[webhook_id]
            print(f"✓ Webhook unsubscribed: {webhook_id}")

    def register_handler(self, event: WebhookEvent, handler: Callable) -> None:
        """Register an internal handler for an event"""
        self._handlers[event].append(handler)

    async def emit(self, event: WebhookEvent, data: Dict) -> List[WebhookDelivery]:
        """Emit an event to all subscribed webhooks"""
        payload = WebhookPayload(event=event.value, data=data)

        # Run internal handlers
        for handler in self._handlers[event]:
            try:
                if asyncio.iscoroutinefunction(handler):
                    await handler(payload)
                else:
                    handler(payload)
            except Exception as e:
                print(f"Handler error: {e}")

        # Queue deliveries
        deliveries = []
        for webhook_id, subscription in self._subscriptions.items():
            if event in subscription.events:
                delivery = WebhookDelivery(webhook_id, payload, subscription)
                self._deliveries[delivery.id] = delivery
                await self._queue.put(delivery)
                deliveries.append(delivery)

        return deliveries

    def sign_payload(self, payload: str, secret: str) -> str:
        """Generate HMAC signature for payload"""
        return hmac.new(secret.encode(), payload.encode(), hashlib.sha256).hexdigest()

    async def _deliver(self, delivery: WebhookDelivery) -> bool:
        """Deliver a single webhook"""
        subscription = delivery.subscription
        payload_json = json.dumps(
            {
                "event": delivery.payload.event,
                "timestamp": delivery.payload.timestamp,
                "data": delivery.payload.data,
                "id": delivery.payload.id,
            }
        )

        headers = {
            "Content-Type": "application/json",
            "X-Webhook-Event": delivery.payload.event,
            "X-Webhook-ID": delivery.payload.id,
            "X-Webhook-Timestamp": str(delivery.payload.timestamp),
            **subscription.headers,
        }

        # Sign payload if secret provided
        if subscription.secret:
            signature = self.sign_payload(payload_json, subscription.secret)
            headers["X-Webhook-Signature"] = f"sha256={signature}"

        delivery.attempts += 1

        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    subscription.url,
                    content=payload_json,
                    headers=headers,
                    timeout=subscription.timeout,
                )

                delivery.response_status = response.status_code
                delivery.response_body = response.text[:1000] if response.text else None

                if 200 <= response.status_code < 300:
                    delivery.status = "delivered"
                    return True
                else:
                    delivery.status = "failed"
                    return False

        except Exception as e:
            delivery.error = str(e)
            delivery.status = "failed"
            return False

    async def _worker(self) -> None:
        """Worker process for webhook deliveries"""
        while self._running:
            try:
                delivery = await asyncio.wait_for(self._queue.get(), timeout=1.0)

                success = await self._deliver(delivery)

                if not success and delivery.attempts < delivery.max_attempts:
                    # Retry with exponential backoff
                    delay = delivery.subscription.retry_delay * (2**delivery.attempts)
                    asyncio.create_task(self._retry_after(delivery, delay))

            except asyncio.TimeoutError:
                continue
            except Exception as e:
                print(f"Webhook worker error: {e}")

    async def _retry_after(self, delivery: WebhookDelivery, delay: float) -> None:
        """Retry delivery after delay"""
        await asyncio.sleep(delay)
        await self._queue.put(delivery)

    async def start(self) -> None:
        """Start the webhook worker"""
        self._running = True
        self._worker_task = asyncio.create_task(self._worker())
        print("✓ Webhook manager started")

    async def stop(self) -> None:
        """Stop the webhook worker"""
        self._running = False
        if hasattr(self, "_worker_task"):
            self._worker_task.cancel()
        print("✓ Webhook manager stopped")

    def get_delivery_status(self, delivery_id: str) -> Optional[WebhookDelivery]:
        """Get delivery status"""
        return self._deliveries.get(delivery_id)

    def list_subscriptions(self) -> Dict[str, WebhookSubscription]:
        """List all subscriptions"""
        return self._subscriptions.copy()


# Singleton instance
webhook_manager = WebhookManager()
