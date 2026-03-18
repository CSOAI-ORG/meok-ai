"""
Audit Logging System for Sovereign Temple
Comprehensive logging of all interactions and system events
"""

import asyncio
import asyncpg
import json
from datetime import datetime
from typing import Dict, Any, Optional, List
from enum import Enum
import hashlib
import uuid


class AuditEventType(Enum):
    """Types of audit events"""
    # MCP Tool Events
    TOOL_CALLED = "tool_called"
    TOOL_COMPLETED = "tool_completed"
    TOOL_FAILED = "tool_failed"
    
    # Neural Network Events
    MODEL_PREDICTION = "model_prediction"
    MODEL_TRAINED = "model_trained"
    MODEL_LOADED = "model_loaded"
    
    # Memory Events
    MEMORY_RECORDED = "memory_recorded"
    MEMORY_QUERIED = "memory_queried"
    MEMORY_COMPACTED = "memory_compacted"
    
    # Agent Events
    AGENT_REGISTERED = "agent_registered"
    AGENT_ACTION = "agent_action"
    AGENT_COMMUNICATION = "agent_communication"
    
    # Council Events
    PROPOSAL_SUBMITTED = "proposal_submitted"
    PROPOSAL_VOTED = "proposal_voted"
    DECISION_MADE = "decision_made"
    
    # Consciousness Events
    EMOTIONAL_STATE_CHANGE = "emotional_state_change"
    REFLECTION_CYCLE = "reflection_cycle"
    DREAM_STATE = "dream_state"
    
    # Security Events
    THREAT_DETECTED = "threat_detected"
    ACCESS_DENIED = "access_denied"
    AUTHENTICATION = "authentication"
    
    # System Events
    SYSTEM_STARTUP = "system_startup"
    SYSTEM_SHUTDOWN = "system_shutdown"
    CONFIG_CHANGE = "config_change"
    HEALTH_CHECK = "health_check"


class AuditLogger:
    """
    Comprehensive audit logging for all Sovereign operations
    Immutable, tamper-evident logging
    """
    
    def __init__(self, postgres_dsn: str = "postgresql://sovereign:sovereign@localhost:5432/sovereign_memory"):
        self.postgres_dsn = postgres_dsn
        self.pool: Optional[asyncpg.Pool] = None
        self._event_buffer: List[Dict[str, Any]] = []
        self._buffer_size = 100
        self._flush_interval = 5  # seconds
        self._flush_task: Optional[asyncio.Task] = None
    
    async def initialize(self):
        """Initialize the audit logger"""
        try:
            self.pool = await asyncpg.create_pool(self.postgres_dsn)
            await self._create_tables()
            self._flush_task = asyncio.create_task(self._periodic_flush())
        except Exception as e:
            self.pool = None
            logger.warning("AuditLogger: PostgreSQL unavailable — audit logging disabled: %s", e)
    
    async def _create_tables(self):
        """Create audit tables"""
        async with self.pool.acquire() as conn:
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS audit_logs (
                    id BIGSERIAL PRIMARY KEY,
                    event_id TEXT UNIQUE NOT NULL,
                    timestamp TIMESTAMP NOT NULL,
                    event_type TEXT NOT NULL,
                    source_agent TEXT,
                    session_id TEXT,
                    user_id TEXT,
                    event_data JSONB NOT NULL,
                    severity TEXT NOT NULL DEFAULT 'info',
                    hash_chain TEXT NOT NULL,
                    signature TEXT
                )
            """)
            
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS idx_audit_timestamp 
                ON audit_logs(timestamp DESC)
            """)
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS idx_audit_event_type 
                ON audit_logs(event_type)
            """)
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS idx_audit_session 
                ON audit_logs(session_id)
            """)
            await conn.execute("""
                CREATE INDEX IF NOT EXISTS idx_audit_agent 
                ON audit_logs(source_agent)
            """)
            
            # Create audit summary table for metrics
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS audit_metrics (
                    id SERIAL PRIMARY KEY,
                    date DATE NOT NULL,
                    event_type TEXT NOT NULL,
                    count INTEGER DEFAULT 0,
                    avg_latency_ms FLOAT,
                    UNIQUE(date, event_type)
                )
            """)
    
    def _generate_event_id(self) -> str:
        """Generate unique event ID"""
        return f"evt_{uuid.uuid4().hex[:16]}_{int(datetime.now().timestamp())}"
    
    async def _get_previous_hash(self) -> str:
        """Get hash of previous event for chain integrity"""
        async with self.pool.acquire() as conn:
            row = await conn.fetchrow("""
                SELECT hash_chain FROM audit_logs 
                ORDER BY id DESC LIMIT 1
            """)
        return row["hash_chain"] if row else "0" * 64
    
    def _calculate_hash(self, event_data: Dict[str, Any], previous_hash: str) -> str:
        """Calculate hash for event integrity"""
        data_string = json.dumps(event_data, sort_keys=True) + previous_hash
        return hashlib.sha256(data_string.encode()).hexdigest()
    
    async def log(self,
                  event_type: AuditEventType,
                  event_data: Dict[str, Any],
                  source_agent: str = "system",
                  session_id: Optional[str] = None,
                  user_id: Optional[str] = None,
                  severity: str = "info",
                  latency_ms: Optional[float] = None):
        """Log an audit event"""
        
        event = {
            "event_id": self._generate_event_id(),
            "timestamp": datetime.now(),
            "event_type": event_type.value,
            "source_agent": source_agent,
            "session_id": session_id,
            "user_id": user_id,
            "event_data": json.dumps(event_data),
            "severity": severity,
            "latency_ms": latency_ms
        }
        
        self._event_buffer.append(event)
        
        if len(self._event_buffer) >= self._buffer_size:
            await self._flush_buffer()
    
    async def _flush_buffer(self):
        """Flush event buffer to database"""
        if not self._event_buffer:
            return
        
        events_to_flush = self._event_buffer[:]
        self._event_buffer = []
        
        async with self.pool.acquire() as conn:
            async with conn.transaction():
                for event in events_to_flush:
                    previous_hash = await self._get_previous_hash()
                    event_hash = self._calculate_hash(event, previous_hash)
                    
                    await conn.execute("""
                        INSERT INTO audit_logs 
                        (event_id, timestamp, event_type, source_agent, session_id,
                         user_id, event_data, severity, hash_chain)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                    """, event["event_id"], event["timestamp"], event["event_type"],
                        event["source_agent"], event["session_id"], event["user_id"],
                        event["event_data"], event["severity"], event_hash)
    
    async def _periodic_flush(self):
        """Periodically flush buffer"""
        while True:
            await asyncio.sleep(self._flush_interval)
            await self._flush_buffer()
    
    async def query_logs(self,
                        event_type: Optional[AuditEventType] = None,
                        source_agent: Optional[str] = None,
                        session_id: Optional[str] = None,
                        start_time: Optional[datetime] = None,
                        end_time: Optional[datetime] = None,
                        severity: Optional[str] = None,
                        limit: int = 100) -> List[Dict[str, Any]]:
        """Query audit logs with filters"""
        if not self.pool:
            return []

        conditions = ["1=1"]
        params = []
        
        if event_type:
            conditions.append(f"event_type = ${len(params) + 1}")
            params.append(event_type.value)
        
        if source_agent:
            conditions.append(f"source_agent = ${len(params) + 1}")
            params.append(source_agent)
        
        if session_id:
            conditions.append(f"session_id = ${len(params) + 1}")
            params.append(session_id)
        
        if start_time:
            conditions.append(f"timestamp >= ${len(params) + 1}")
            params.append(start_time)
        
        if end_time:
            conditions.append(f"timestamp <= ${len(params) + 1}")
            params.append(end_time)
        
        if severity:
            conditions.append(f"severity = ${len(params) + 1}")
            params.append(severity)
        
        query = f"""
            SELECT * FROM audit_logs 
            WHERE {' AND '.join(conditions)}
            ORDER BY timestamp DESC
            LIMIT ${len(params) + 1}
        """
        params.append(limit)
        
        async with self.pool.acquire() as conn:
            rows = await conn.fetch(query, *params)
        
        return [dict(row) for row in rows]
    
    async def verify_integrity(self, limit: int = 1000) -> Dict[str, Any]:
        """Verify audit log chain integrity"""
        async with self.pool.acquire() as conn:
            rows = await conn.fetch("""
                SELECT id, event_id, event_data, hash_chain 
                FROM audit_logs 
                ORDER BY id DESC
                LIMIT $1
            """, limit)
        
        if not rows:
            return {"verified": True, "events_checked": 0, "issues": []}
        
        issues = []
        previous_hash = "0" * 64
        
        for row in reversed(rows):
            calculated_hash = self._calculate_hash(
                json.loads(row["event_data"]), 
                previous_hash
            )
            
            if calculated_hash != row["hash_chain"]:
                issues.append({
                    "event_id": row["event_id"],
                    "expected_hash": calculated_hash,
                    "actual_hash": row["hash_chain"]
                })
            
            previous_hash = row["hash_chain"]
        
        return {
            "verified": len(issues) == 0,
            "events_checked": len(rows),
            "issues": issues
        }
    
    async def get_statistics(self, days: int = 7) -> Dict[str, Any]:
        """Get audit statistics"""
        start_date = datetime.now() - timedelta(days=days)
        
        async with self.pool.acquire() as conn:
            # Event counts by type
            type_counts = await conn.fetch("""
                SELECT event_type, COUNT(*) as count,
                       AVG((event_data->>'latency_ms')::float) as avg_latency
                FROM audit_logs
                WHERE timestamp >= $1
                GROUP BY event_type
            """, start_date)
            
            # Events by severity
            severity_counts = await conn.fetch("""
                SELECT severity, COUNT(*) as count
                FROM audit_logs
                WHERE timestamp >= $1
                GROUP BY severity
            """, start_date)
            
            # Top agents
            top_agents = await conn.fetch("""
                SELECT source_agent, COUNT(*) as count
                FROM audit_logs
                WHERE timestamp >= $1 AND source_agent IS NOT NULL
                GROUP BY source_agent
                ORDER BY count DESC
                LIMIT 10
            """, start_date)
            
            # Hourly distribution
            hourly = await conn.fetch("""
                SELECT EXTRACT(hour FROM timestamp) as hour, COUNT(*) as count
                FROM audit_logs
                WHERE timestamp >= $1
                GROUP BY hour
                ORDER BY hour
            """, start_date)
        
        return {
            "period_days": days,
            "total_events": sum(row["count"] for row in type_counts),
            "by_type": {row["event_type"]: {
                "count": row["count"],
                "avg_latency_ms": round(row["avg_latency"], 2) if row["avg_latency"] else None
            } for row in type_counts},
            "by_severity": {row["severity"]: row["count"] for row in severity_counts},
            "top_agents": {row["source_agent"]: row["count"] for row in top_agents},
            "hourly_distribution": {int(row["hour"]): row["count"] for row in hourly}
        }
    
    async def close(self):
        """Close the audit logger"""
        if self._flush_task:
            self._flush_task.cancel()
            try:
                await self._flush_task
            except asyncio.CancelledError:
                pass
        
        await self._flush_buffer()
        
        if self.pool:
            await self.pool.close()
