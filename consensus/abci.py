"""
ABCI Application — Application Blockchain Interface
Implements the CometBFT ABCI for trust registry and vertical state consensus.
"""
import json
from typing import Any, Dict, List

try:
    from cometbft.abci.v1beta1.types import (
        RequestCheckTx,
        RequestDeliverTx,
        RequestQuery,
        ResponseCheckTx,
        ResponseDeliverTx,
        ResponseQuery,
        ResponseInitChain,
        ResponseBeginBlock,
        ResponseEndBlock,
        ResponseCommit,
    )
    COMETBFT_AVAILABLE = True
except ImportError:
    COMETBFT_AVAILABLE = False


class TrustRegistryApp:
    """
    Simple ABCI application for storing trust registry entries.
    In production, this connects to CometBFT via gRPC ABCI.
    """

    def __init__(self):
        self.state: Dict[str, Any] = {}
        self.validators: Dict[str, int] = {}
        self.height = 0
        self.app_hash = b""

    def init_chain(self, req: Any) -> Any:
        """Initialize the chain with validators."""
        if COMETBFT_AVAILABLE:
            return ResponseInitChain()
        return {"code": 0}

    def check_tx(self, tx: bytes) -> Any:
        """Validate a transaction before inclusion in mempool."""
        try:
            data = json.loads(tx.decode("utf-8"))
            if data.get("type") not in ("register", "update", "revoke"):
                raise ValueError("Invalid tx type")
            if not data.get("entity_id"):
                raise ValueError("Missing entity_id")
        except Exception as e:
            if COMETBFT_AVAILABLE:
                return ResponseCheckTx(code=1, log=str(e))
            return {"code": 1, "log": str(e)}

        if COMETBFT_AVAILABLE:
            return ResponseCheckTx(code=0)
        return {"code": 0}

    def deliver_tx(self, tx: bytes) -> Any:
        """Execute a transaction and update state."""
        try:
            data = json.loads(tx.decode("utf-8"))
            entity_id = data["entity_id"]
            tx_type = data["type"]

            if tx_type == "register":
                self.state[entity_id] = {
                    "status": "active",
                    "metadata": data.get("metadata", {}),
                    "registered_at": self.height,
                }
            elif tx_type == "update":
                if entity_id in self.state:
                    self.state[entity_id]["metadata"].update(data.get("metadata", {}))
                    self.state[entity_id]["updated_at"] = self.height
            elif tx_type == "revoke":
                if entity_id in self.state:
                    self.state[entity_id]["status"] = "revoked"

        except Exception as e:
            if COMETBFT_AVAILABLE:
                return ResponseDeliverTx(code=1, log=str(e))
            return {"code": 1, "log": str(e)}

        if COMETBFT_AVAILABLE:
            return ResponseDeliverTx(code=0)
        return {"code": 0}

    def query(self, req: Any) -> Any:
        """Query application state."""
        if COMETBFT_AVAILABLE:
            path = req.path
            data = json.loads(req.data.decode("utf-8") if req.data else "{}")
        else:
            path = req.get("path", "")
            data = req.get("data", {})

        result = b"{}"
        if path == "/trust_registry":
            entity_id = data.get("entity_id")
            entry = self.state.get(entity_id, {})
            result = json.dumps(entry).encode("utf-8")
        elif path.startswith("/vertical/"):
            vertical = path.split("/")[-1]
            entry = {k: v for k, v in self.state.items() if k.startswith(f"{vertical}:")}
            result = json.dumps(entry).encode("utf-8")
        elif path == "/health":
            result = json.dumps({"height": self.height, "entries": len(self.state)}).encode("utf-8")

        if COMETBFT_AVAILABLE:
            return ResponseQuery(
                code=0,
                key=req.data or b"",
                value=result,
                height=self.height,
            )
        return {"code": 0, "value": result.hex(), "height": self.height}

    def begin_block(self, req: Any) -> Any:
        self.height = req.header.height if COMETBFT_AVAILABLE else req.get("height", self.height + 1)
        if COMETBFT_AVAILABLE:
            return ResponseBeginBlock()
        return {}

    def end_block(self, req: Any) -> Any:
        if COMETBFT_AVAILABLE:
            return ResponseEndBlock()
        return {}

    def commit(self) -> Any:
        """Persist state and return app hash."""
        import hashlib
        self.app_hash = hashlib.sha256(json.dumps(self.state, sort_keys=True).encode()).digest()[:8]
        if COMETBFT_AVAILABLE:
            return ResponseCommit(data=self.app_hash)
        return {"data": self.app_hash.hex()}


# Singleton app instance
app = TrustRegistryApp()
