"""
libp2p Node Wrapper
Python libp2p node for inter-vertical messaging and data relay.
"""
import asyncio
import json
from typing import Callable, Dict, List

try:
    import libp2p
    from libp2p import new_host
    from libp2p.network.stream.net_stream_interface import INetStream
    from multiaddr import Multiaddr
    LIBP2P_AVAILABLE = True
except ImportError:
    LIBP2P_AVAILABLE = False


class P2PNode:
    """CSOAI libp2p relay and pubsub node."""

    def __init__(self, listen_addrs: List[str] = None):
        self.listen_addrs = listen_addrs or ["/ip4/0.0.0.0/tcp/0"]
        self.host = None
        self._handlers: Dict[str, Callable[[bytes, str], None]] = {}
        self._running = False

    async def start(self):
        if not LIBP2P_AVAILABLE:
            raise RuntimeError("libp2p not installed. Run: pip install libp2p")

        self.host = new_host()
        for addr in self.listen_addrs:
            self.host.get_network().listen(Multiaddr(addr))
        self._running = True
        print(f"[P2P] Node started: {self.host.get_id().to_base58()}")

    async def subscribe(self, topic: str, handler: Callable[[bytes, str], None]):
        """Subscribe to a pubsub topic."""
        self._handlers[topic] = handler
        # TODO: wire to libp2p pubsub when available in py-libp2p
        print(f"[P2P] Subscribed to topic: {topic}")

    async def publish(self, topic: str, data: bytes):
        """Publish to a pubsub topic."""
        # TODO: wire to libp2p pubsub
        print(f"[P2P] Published to {topic}: {data[:64]}...")

    async def dial(self, peer_addr: str) -> INetStream:
        """Dial a peer and return a stream."""
        maddr = Multiaddr(peer_addr)
        info = await self.host.network().dial_peer(maddr)
        return info

    def get_peer_id(self) -> str:
        if self.host:
            return self.host.get_id().to_base58()
        return ""

    def get_multiaddrs(self) -> List[str]:
        if not self.host:
            return []
        return [str(addr) for addr in self.host.get_addrs()]

    async def stop(self):
        if self.host:
            await self.host.close()
        self._running = False


class P2PBridge:
    """Bridge between FastAPI/WebSocket and libp2p for browser clients."""

    def __init__(self, node: P2PNode):
        self.node = node
        self._ws_peers: Dict[str, asyncio.Queue] = {}

    async def register_ws_peer(self, peer_id: str, queue: asyncio.Queue):
        self._ws_peers[peer_id] = queue

    async def relay_to_p2p(self, peer_id: str, topic: str, data: bytes):
        await self.node.publish(topic, data)

    async def relay_from_p2p(self, topic: str, data: bytes, from_peer: str):
        for queue in self._ws_peers.values():
            await queue.put({
                "type": "p2p_relay",
                "topic": topic,
                "data": data.hex(),
                "from": from_peer,
            })
