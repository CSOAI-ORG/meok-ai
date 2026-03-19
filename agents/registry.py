"""
Multi-Agent System for Sovereign Temple
Agent registry, task delegation, and collective voting
"""

import asyncio
import asyncpg
import logging
from datetime import datetime, timedelta
from typing import Dict, Any, List, Optional, Set, Callable
from dataclasses import dataclass, field, asdict
from enum import Enum
import json
import uuid

logger = logging.getLogger(__name__)


class AgentCapability(Enum):
    """Agent capabilities"""
    NEURAL_INFERENCE = "neural_inference"
    MEMORY_OPERATIONS = "memory_operations"
    WEB_SEARCH = "web_search"
    CODE_EXECUTION = "code_execution"
    ANALYSIS = "analysis"
    CREATIVE = "creative"
    COMMUNICATION = "communication"
    MONITORING = "monitoring"
    SECURITY = "security"
    PLANNING = "planning"


class AgentStatus(Enum):
    """Agent status"""
    ACTIVE = "active"
    BUSY = "busy"
    IDLE = "idle"
    OFFLINE = "offline"
    ERROR = "error"


@dataclass
class Agent:
    """Agent data structure"""
    id: str
    name: str
    description: str
    capabilities: List[AgentCapability]
    status: AgentStatus
    trust_level: float  # 0.0 to 1.0
    created_at: datetime
    last_seen: datetime
    metadata: Dict[str, Any] = field(default_factory=dict)
    relationships: Dict[str, float] = field(default_factory=dict)  # agent_id -> trust
    performance_score: float = 0.5  # Historical performance
    tasks_completed: int = 0
    tasks_failed: int = 0
    current_task: Optional[str] = None
    # Ma (間) — strategic emptiness: deliberate pause between communications
    # From Japanese aesthetics: meaningful silence improves decision quality
    ma_interval_seconds: float = 0.0


@dataclass
class Task:
    """Task data structure"""
    id: str
    description: str
    required_capabilities: List[AgentCapability]
    priority: int  # 1-10, higher = more important
    created_at: datetime
    deadline: Optional[datetime] = None
    assigned_to: Optional[str] = None
    status: str = "pending"  # pending, assigned, in_progress, completed, failed
    result: Optional[Any] = None
    metadata: Dict[str, Any] = field(default_factory=dict)
    care_weight: float = 0.5  # Importance from care perspective


class AgentRegistry:
    """
    Central registry for all agents in the Sovereign ecosystem
    """
    
    def __init__(self, postgres_dsn: str = "postgresql://sovereign:sovereign@localhost:5432/sovereign_memory",
                 persist_path: str = "/tmp/meok-persist"):
        self.postgres_dsn = postgres_dsn
        self.persist_path = persist_path
        self.pool: Optional[asyncpg.Pool] = None
        self.sqlite_conn: Optional[Any] = None
        self.agents: Dict[str, Agent] = {}
        self.capability_index: Dict[AgentCapability, Set[str]] = {
            cap: set() for cap in AgentCapability
        }
        self._council_learner = None  # set by initializer (Phase 2.6)
        self._audit_logger = None  # set by initializer

    async def initialize(self):
        """Initialize the registry"""
        await self._ensure_pool()
        await self._load_agents()

    async def _ensure_pool(self):
        """Ensure database connection pool is alive, reinitialize if needed."""
        if self.pool is None or self.pool._closed:
            try:
                self.pool = await asyncpg.create_pool(self.postgres_dsn)
                await self._create_tables()
            except Exception as e:
                self.pool = None
                logger.warning("AgentRegistry: PostgreSQL unavailable — %s", e)
                if self.sqlite_conn is None:
                    await self._init_sqlite()

    async def _init_sqlite(self):
        """Initialize SQLite fallback for agent persistence."""
        try:
            import os
            import aiosqlite
            os.makedirs(self.persist_path, exist_ok=True)
            db_path = os.path.join(self.persist_path, "agents.db")
            self.sqlite_conn = await aiosqlite.connect(db_path)
            await self.sqlite_conn.execute("""
                CREATE TABLE IF NOT EXISTS agents (
                    id TEXT PRIMARY KEY,
                    data_json TEXT NOT NULL,
                    updated_at TEXT NOT NULL
                )
            """)
            await self.sqlite_conn.commit()
            logger.info("AgentRegistry: SQLite fallback at %s", db_path)
        except Exception as e:
            self.sqlite_conn = None
            logger.warning("AgentRegistry: SQLite also failed: %s", e)

    @staticmethod
    def _ensure_json(value) -> dict:
        """Normalize JSONB value — asyncpg may return str or dict."""
        if isinstance(value, dict):
            return value
        if isinstance(value, str):
            try:
                parsed = json.loads(value)
                return parsed if isinstance(parsed, dict) else {}
            except (json.JSONDecodeError, TypeError):
                return {}
        return {}
    
    async def _create_tables(self):
        """Create database tables"""
        async with self.pool.acquire() as conn:
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS agents (
                    id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    description TEXT,
                    capabilities TEXT[] NOT NULL,
                    status TEXT NOT NULL,
                    trust_level FLOAT NOT NULL DEFAULT 0.5,
                    created_at TIMESTAMP NOT NULL,
                    last_seen TIMESTAMP NOT NULL,
                    metadata JSONB DEFAULT '{}',
                    relationships JSONB DEFAULT '{}',
                    performance_score FLOAT DEFAULT 0.5,
                    tasks_completed INTEGER DEFAULT 0,
                    tasks_failed INTEGER DEFAULT 0
                )
            """)
            
            await conn.execute("""
                CREATE TABLE IF NOT EXISTS agent_tasks (
                    id TEXT PRIMARY KEY,
                    description TEXT NOT NULL,
                    required_capabilities TEXT[] NOT NULL,
                    priority INTEGER NOT NULL,
                    created_at TIMESTAMP NOT NULL,
                    deadline TIMESTAMP,
                    assigned_to TEXT,
                    status TEXT NOT NULL,
                    result JSONB,
                    metadata JSONB DEFAULT '{}',
                    care_weight FLOAT DEFAULT 0.5,
                    FOREIGN KEY (assigned_to) REFERENCES agents(id)
                )
            """)
    
    async def _load_agents(self):
        """Load agents from database"""
        await self._ensure_pool()
        rows = []
        if self.pool:
            try:
                async with self.pool.acquire() as conn:
                    rows = await conn.fetch("SELECT * FROM agents")
            except Exception as e:
                logger.warning("AgentRegistry: _load_agents postgres failed: %s", e)
                rows = []

        for row in rows:
            raw_relationships = self._ensure_json(row["relationships"])
            raw_metadata = self._ensure_json(row["metadata"])

            agent = Agent(
                id=row["id"],
                name=row["name"],
                description=row["description"],
                capabilities=[AgentCapability(c) for c in row["capabilities"]],
                status=AgentStatus(row["status"]),
                trust_level=row["trust_level"],
                created_at=row["created_at"],
                last_seen=row["last_seen"],
                metadata=raw_metadata,
                relationships=raw_relationships,
                performance_score=row["performance_score"],
                tasks_completed=row["tasks_completed"],
                tasks_failed=row["tasks_failed"]
            )
            self.agents[agent.id] = agent

            # Index capabilities
            for cap in agent.capabilities:
                self.capability_index[cap].add(agent.id)

        # SQLite fallback if no agents loaded from postgres
        if not self.agents and self.sqlite_conn:
            try:
                async with self.sqlite_conn.execute("SELECT data_json FROM agents") as cur:
                    sqlite_rows = await cur.fetchall()
                for (data_json,) in sqlite_rows:
                    d = json.loads(data_json)
                    agent = Agent(
                        id=d["id"],
                        name=d["name"],
                        description=d.get("description", ""),
                        capabilities=[AgentCapability(c) for c in d.get("capabilities", [])],
                        status=AgentStatus(d.get("status", "idle")),
                        trust_level=d.get("trust_level", 0.5),
                        created_at=datetime.fromisoformat(d["created_at"]) if isinstance(d.get("created_at"), str) else datetime.now(),
                        last_seen=datetime.fromisoformat(d["last_seen"]) if isinstance(d.get("last_seen"), str) else datetime.now(),
                        metadata=d.get("metadata", {}),
                        relationships=d.get("relationships", {}),
                        performance_score=d.get("performance_score", 0.5),
                        tasks_completed=d.get("tasks_completed", 0),
                        tasks_failed=d.get("tasks_failed", 0),
                    )
                    self.agents[agent.id] = agent
                    for cap in agent.capabilities:
                        self.capability_index[cap].add(agent.id)
            except Exception as e:
                logger.warning("AgentRegistry: SQLite load failed: %s", e)

    # Hard cap — prevents runaway spawning loops
    MAX_AGENTS: int = 410

    async def register_agent(self,
                           name: str,
                           description: str,
                           capabilities: List[AgentCapability],
                           trust_level: float = 0.5,
                           metadata: Optional[Dict[str, Any]] = None) -> Agent:
        """Register a new agent"""
        # ── Guard 1: duplicate name dedup (idempotent) ──────────────────────
        existing = next((a for a in self.agents.values() if a.name == name), None)
        if existing:
            return existing

        # ── Guard 2: sovereign guardrail check (GAP 14 fix) ────────────────
        try:
            from meok.core.guardrails import get_guardrails
            guardrail_decision = await get_guardrails().can_register({
                "role": name,
                "capabilities": [c.value for c in capabilities],
            })
            if not guardrail_decision["allowed"]:
                logger.warning(
                    "Registration denied by guardrails for '%s': %s",
                    name, guardrail_decision["reason"]
                )
                raise ValueError(
                    f"Registration denied: {guardrail_decision['reason']}"
                )
        except ImportError:
            # Guardrails not available — fall back to hard cap only
            if len(self.agents) >= self.MAX_AGENTS:
                raise ValueError(
                    f"Agent cap reached: {len(self.agents)}/{self.MAX_AGENTS}. "
                    f"Call purge_all_agents() before registering new agents."
                )

        agent_id = f"agent_{name.lower().replace(' ', '_')}_{uuid.uuid4().hex[:8]}"
        now = datetime.now()
        
        agent = Agent(
            id=agent_id,
            name=name,
            description=description,
            capabilities=capabilities,
            status=AgentStatus.IDLE,
            trust_level=trust_level,
            created_at=now,
            last_seen=now,
            metadata=metadata or {}
        )
        
        # Store in memory
        self.agents[agent_id] = agent
        for cap in capabilities:
            self.capability_index[cap].add(agent_id)
        
        # Store in database — try Postgres first, SQLite fallback
        await self._ensure_pool()
        if self.pool:
            try:
                async with self.pool.acquire() as conn:
                    await conn.execute("""
                        INSERT INTO agents
                        (id, name, description, capabilities, status, trust_level,
                         created_at, last_seen, metadata, relationships)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                    """, agent_id, name, description,
                        [c.value for c in capabilities],
                        agent.status.value, trust_level, now, now,
                        json.dumps(metadata or {}), json.dumps({}))
            except Exception as e:
                logger.warning("AgentRegistry: postgres write failed: %s", e)

        if not self.pool and self.sqlite_conn:
            try:
                data = {"id": agent_id, "name": name, "description": description,
                        "capabilities": [c.value for c in capabilities],
                        "status": agent.status.value, "trust_level": trust_level,
                        "created_at": now.isoformat(), "last_seen": now.isoformat(),
                        "metadata": metadata or {}, "relationships": {},
                        "performance_score": 0.5, "tasks_completed": 0, "tasks_failed": 0}
                await self.sqlite_conn.execute(
                    "INSERT OR REPLACE INTO agents (id, data_json, updated_at) VALUES (?,?,?)",
                    (agent_id, json.dumps(data), now.isoformat()))
                await self.sqlite_conn.commit()
            except Exception as e:
                logger.warning("AgentRegistry: SQLite write also failed: %s", e)

        # Audit log the registration (fire-and-forget)
        if self._audit_logger:
            try:
                import asyncio as _asyncio
                from meok.monitoring.audit_logger import AuditEventType
                _asyncio.create_task(self._audit_logger.log(
                    AuditEventType.AGENT_REGISTRATION,
                    {"agent_id": agent_id, "name": name, "trust_level": trust_level,
                     "capabilities": [c.value for c in capabilities]},
                    source_agent="agent_registry",
                ))
            except Exception:
                pass

        return agent

    def get_agent(self, agent_id: str) -> Optional[Agent]:
        """Get agent by ID"""
        return self.agents.get(agent_id)
    
    def find_agents_by_capability(self, capability: AgentCapability, 
                                  min_trust: float = 0.0) -> List[Agent]:
        """Find agents with a specific capability"""
        agent_ids = self.capability_index.get(capability, set())
        agents = [self.agents[aid] for aid in agent_ids if aid in self.agents]
        return [a for a in agents if a.trust_level >= min_trust and a.status != AgentStatus.OFFLINE]
    
    def find_agents_by_capabilities(self, capabilities: List[AgentCapability],
                                    min_trust: float = 0.0) -> List[Agent]:
        """Find agents with all specified capabilities"""
        if not capabilities:
            return []
        
        # Start with agents having first capability
        candidate_ids = self.capability_index[capabilities[0]].copy()
        
        # Intersect with agents having other capabilities
        for cap in capabilities[1:]:
            candidate_ids &= self.capability_index[cap]
        
        agents = [self.agents[aid] for aid in candidate_ids if aid in self.agents]
        return [a for a in agents if a.trust_level >= min_trust and a.status != AgentStatus.OFFLINE]
    
    async def update_agent_status(self, agent_id: str, status: AgentStatus):
        """Update agent status"""
        if agent_id not in self.agents:
            return False
        
        self.agents[agent_id].status = status
        self.agents[agent_id].last_seen = datetime.now()

        await self._ensure_pool()
        if self.pool is None:
            return True  # in-memory update succeeded; no DB (SQLite path has no status table)
        async with self.pool.acquire() as conn:
            await conn.execute("""
                UPDATE agents SET status = $1, last_seen = $2 WHERE id = $3
            """, status.value, datetime.now(), agent_id)

        return True

    async def update_relationship(self, agent_id: str, other_agent_id: str, trust_delta: float):
        """Update trust relationship between agents"""
        if agent_id not in self.agents:
            return False

        # Normalize relationships to dict
        if not isinstance(self.agents[agent_id].relationships, dict):
            self.agents[agent_id].relationships = self._ensure_json(self.agents[agent_id].relationships)

        current_trust = self.agents[agent_id].relationships.get(other_agent_id, 0.5)
        new_trust = max(0.0, min(1.0, current_trust + trust_delta))

        self.agents[agent_id].relationships[other_agent_id] = new_trust

        await self._ensure_pool()
        if self.pool is None:
            return True  # in-memory update succeeded
        async with self.pool.acquire() as conn:
            await conn.execute("""
                UPDATE agents SET relationships = $1 WHERE id = $2
            """, json.dumps(self.agents[agent_id].relationships), agent_id)

        return True
    
    async def record_task_result(self, agent_id: str, success: bool):
        """Record task completion result"""
        if agent_id not in self.agents:
            return
        
        agent = self.agents[agent_id]
        if success:
            agent.tasks_completed += 1
        else:
            agent.tasks_failed += 1
        
        # Update performance score
        total = agent.tasks_completed + agent.tasks_failed
        if total > 0:
            agent.performance_score = agent.tasks_completed / total

        await self._ensure_pool()
        if self.pool is not None:
            async with self.pool.acquire() as conn:
                await conn.execute("""
                    UPDATE agents SET
                        tasks_completed = $1,
                        tasks_failed = $2,
                        performance_score = $3
                    WHERE id = $4
                """, agent.tasks_completed, agent.tasks_failed, agent.performance_score, agent_id)
        # ── Phase 2.6: fire task learning signal (non-blocking) ─────────────
        if getattr(self, '_council_learner', None) is not None:
            import asyncio as _asyncio
            _asyncio.create_task(
                self._council_learner.on_task_completed(
                    agent_id=agent_id,
                    task_type="generic",
                    success=success,
                    agent_trust=agent.trust_level,
                    performance_score=agent.performance_score,
                )
            )

    async def purge_all_agents(self) -> Dict[str, Any]:
        """
        Wipe all agents from memory and database.
        Use before controlled re-registration (e.g. after runaway spawning).
        """
        count_before = len(self.agents)
        self.agents.clear()
        from collections import defaultdict as _dd
        self.capability_index = _dd(set)

        await self._ensure_pool()
        if self.pool is not None:
            try:
                async with self.pool.acquire() as conn:
                    await conn.execute("DELETE FROM agent_tasks")
                    await conn.execute("DELETE FROM agents")
            except Exception as e:
                logger.warning("AgentRegistry.purge_all_agents: postgres delete failed: %s", e)

        if getattr(self, 'sqlite_conn', None) is not None:
            try:
                await self.sqlite_conn.execute("DELETE FROM agents")
                await self.sqlite_conn.commit()
            except Exception as e:
                logger.warning("AgentRegistry.purge_all_agents: sqlite delete failed: %s", e)

        logger.info("AgentRegistry: purged %d agents — ready for fresh registration", count_before)
        return {"purged": count_before, "agents_remaining": 0}

    def get_registry_stats(self) -> Dict[str, Any]:
        """Get registry statistics"""
        total = len(self.agents)
        by_status = {}
        by_capability = {}

        for agent in self.agents.values():
            by_status[agent.status.value] = by_status.get(agent.status.value, 0) + 1
            for cap in agent.capabilities:
                by_capability[cap.value] = by_capability.get(cap.value, 0) + 1

        avg_trust = sum(a.trust_level for a in self.agents.values()) / total if total > 0 else 0
        avg_performance = sum(a.performance_score for a in self.agents.values()) / total if total > 0 else 0

        return {
            "total_agents": total,
            "by_status": by_status,
            "by_capability": by_capability,
            "average_trust": round(avg_trust, 3),
            "average_performance": round(avg_performance, 3),
            "total_tasks_completed": sum(a.tasks_completed for a in self.agents.values()),
            "total_tasks_failed": sum(a.tasks_failed for a in self.agents.values()),
            "asabiyyah": self.compute_asabiyyah()
        }

    def compute_asabiyyah(self) -> Dict[str, Any]:
        """
        Ibn Khaldun's asabiyyah — group feeling/social cohesion as a first-class metric.

        Measures the collective bonding strength of the agent ecosystem.
        Cyclic dynamics: strong cohesion → success → complacency → weakened cohesion.
        Predates Durkheim's "social solidarity" by 500 years.

        Components (weighted):
        - Mean inter-agent trust (0.30) — direct relationship quality
        - Task success ratio (0.25) — shared achievement history
        - Relationship density (0.25) — how interconnected agents are
        - Care alignment (0.20) — variance of care scores, inverted (low variance = high alignment)
        """
        agents = list(self.agents.values())
        total = len(agents)

        if total == 0:
            return {"score": 0.0, "components": {}, "phase": "dormant", "agent_count": 0}

        # 1. Mean inter-agent trust across all relationships
        all_trust_values = []
        for agent in agents:
            rels = self._ensure_json(agent.relationships)
            all_trust_values.extend(rels.values())

        mean_trust = sum(all_trust_values) / len(all_trust_values) if all_trust_values else 0.5

        # 2. Task success ratio across all agents
        total_completed = sum(a.tasks_completed for a in agents)
        total_failed = sum(a.tasks_failed for a in agents)
        total_tasks = total_completed + total_failed
        success_ratio = total_completed / total_tasks if total_tasks > 0 else 0.5

        # 3. Relationship density: actual relationships / possible relationships
        possible_relationships = total * (total - 1) if total > 1 else 1
        actual_relationships = len(all_trust_values)
        relationship_density = min(1.0, actual_relationships / possible_relationships)

        # 4. Care alignment: inverse of trust variance (low variance = high alignment)
        trust_values = [a.trust_level for a in agents]
        if len(trust_values) > 1:
            mean_tl = sum(trust_values) / len(trust_values)
            variance = sum((t - mean_tl) ** 2 for t in trust_values) / len(trust_values)
            care_alignment = max(0.0, 1.0 - variance * 4)  # Scale: variance 0.25 → alignment 0
        else:
            care_alignment = 1.0

        # Weighted combination
        score = (
            mean_trust * 0.30 +
            success_ratio * 0.25 +
            relationship_density * 0.25 +
            care_alignment * 0.20
        )
        score = round(min(1.0, max(0.0, score)), 4)

        # Khaldunian phase detection (cyclic dynamics)
        if score >= 0.8:
            phase = "peak_cohesion"       # Strong — watch for complacency
        elif score >= 0.6:
            phase = "building"            # Growing solidarity
        elif score >= 0.4:
            phase = "stable"              # Functional baseline
        elif score >= 0.2:
            phase = "weakening"           # Declining — needs intervention
        else:
            phase = "crisis"              # Khaldunian collapse imminent

        return {
            "score": score,
            "phase": phase,
            "agent_count": total,
            "components": {
                "mean_inter_agent_trust": round(mean_trust, 4),
                "task_success_ratio": round(success_ratio, 4),
                "relationship_density": round(relationship_density, 4),
                "care_alignment": round(care_alignment, 4),
            },
            "khaldunian_warning": phase in ("weakening", "crisis"),
        }


class TaskDelegator:
    """
    Delegates tasks to the most suitable agents
    """
    
    def __init__(self, registry: AgentRegistry):
        self.registry = registry
        self.delegation_strategies = {
            "capability_match": self._capability_match_strategy,
            "trust_weighted": self._trust_weighted_strategy,
            "load_balanced": self._load_balanced_strategy,
            "care_aware": self._care_aware_strategy,
        }
    
    async def delegate_task(self,
                          description: str,
                          required_capabilities: List[AgentCapability],
                          priority: int = 5,
                          deadline: Optional[datetime] = None,
                          care_weight: float = 0.5,
                          strategy: str = "care_aware",
                          excluded_agents: Optional[List[str]] = None) -> Optional[Task]:
        """Delegate a task to the best available agent"""
        
        # Create task record
        task_id = f"task_{uuid.uuid4().hex[:12]}"
        task = Task(
            id=task_id,
            description=description,
            required_capabilities=required_capabilities,
            priority=priority,
            created_at=datetime.now(),
            deadline=deadline,
            care_weight=care_weight
        )
        
        # Find candidate agents
        candidates = self.registry.find_agents_by_capabilities(required_capabilities)
        if excluded_agents:
            candidates = [a for a in candidates if a.id not in excluded_agents]
        
        if not candidates:
            return None
        
        # Apply delegation strategy
        strategy_fn = self.delegation_strategies.get(strategy, self._care_aware_strategy)
        selected_agent = strategy_fn(candidates, task)
        
        if not selected_agent:
            return None
        
        # Assign task
        task.assigned_to = selected_agent.id
        task.status = "assigned"
        
        # Update agent status
        await self.registry.update_agent_status(selected_agent.id, AgentStatus.BUSY)
        selected_agent.current_task = task_id
        
        # Store task
        await self.registry._ensure_pool()
        if self.registry.pool is not None:
            async with self.registry.pool.acquire() as conn:
                await conn.execute("""
                    INSERT INTO agent_tasks
                    (id, description, required_capabilities, priority, created_at,
                     deadline, assigned_to, status, care_weight)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                """, task_id, description, [c.value for c in required_capabilities],
                    priority, task.created_at, deadline, selected_agent.id, "assigned", care_weight)

        return task
    
    def _capability_match_strategy(self, candidates: List[Agent], task: Task) -> Optional[Agent]:
        """Select agent with best capability match"""
        # Prioritize agents with fewer but sufficient capabilities (specialists)
        scored = []
        for agent in candidates:
            if agent.status == AgentStatus.IDLE:
                # Score by having just the required capabilities + performance
                extra_caps = len(agent.capabilities) - len(task.required_capabilities)
                score = agent.performance_score - (extra_caps * 0.05)
                scored.append((score, agent))

        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[0][1] if scored else None

    def _trust_weighted_strategy(self, candidates: List[Agent], task: Task) -> Optional[Agent]:
        """Select agent based on trust level"""
        scored = []
        for agent in candidates:
            if agent.status == AgentStatus.IDLE:
                score = agent.trust_level * 0.7 + agent.performance_score * 0.3
                scored.append((score, agent))

        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[0][1] if scored else None

    def _load_balanced_strategy(self, candidates: List[Agent], task: Task) -> Optional[Agent]:
        """Select agent with lowest load"""
        scored = []
        for agent in candidates:
            if agent.status == AgentStatus.IDLE:
                # Prefer agents with fewer completed tasks (distribute load)
                score = 1.0 / (1 + agent.tasks_completed)
                scored.append((score, agent))

        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[0][1] if scored else None

    def _care_aware_strategy(self, candidates: List[Agent], task: Task) -> Optional[Agent]:
        """Select agent considering care weight and trust"""
        scored = []
        for agent in candidates:
            if agent.status in [AgentStatus.IDLE, AgentStatus.ACTIVE]:
                # Normalize relationships to dict
                relationships = AgentRegistry._ensure_json(agent.relationships)
                agent.relationships = relationships

                # Weighted combination
                trust_component = agent.trust_level * 0.3
                performance_component = agent.performance_score * 0.3
                care_component = (relationships.get("sovereign", 0.5) * 0.2)
                availability_component = 0.2 if agent.status == AgentStatus.IDLE else 0.1
                
                # For high-care tasks, boost trust component
                if task.care_weight > 0.7:
                    trust_component *= 1.5
                
                score = trust_component + performance_component + care_component + availability_component
                scored.append((score, agent))

        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[0][1] if scored else None

    async def complete_task(self, task_id: str, result: Any, success: bool = True):
        """Mark a task as completed"""
        await self.registry._ensure_pool()
        if self.registry.pool is None:
            return False  # No DB — task state is in-memory only
        async with self.registry.pool.acquire() as conn:
            row = await conn.fetchrow("""
                SELECT assigned_to FROM agent_tasks WHERE id = $1
            """, task_id)

            if not row:
                return False

            await conn.execute("""
                UPDATE agent_tasks
                SET status = $1, result = $2
                WHERE id = $3
            """, "completed" if success else "failed", json.dumps(result), task_id)

            # Update agent
            if row["assigned_to"]:
                await self.registry.update_agent_status(row["assigned_to"], AgentStatus.IDLE)
                await self.registry.record_task_result(row["assigned_to"], success)
                
                agent = self.registry.get_agent(row["assigned_to"])
                if agent:
                    agent.current_task = None
        
        return True


class AgentCouncil:
    """
    Council system for collective agent decision-making

    Incorporates Ma (間) — strategic emptiness — as a silence_budget:
    a deliberate pause between receiving a proposal and opening voting,
    allowing agents time for internal consolidation before reactive response.

    When a proposal reaches "approved" status, the optional TaskOrchestrator
    is called to dispatch the action — bridging governance to execution.
    """

    def __init__(self, registry: AgentRegistry, silence_budget: float = 0.0, orchestrator=None):
        self.registry = registry
        self.proposals: Dict[str, Dict[str, Any]] = {}
        self.votes: Dict[str, Dict[str, str]] = {}  # proposal_id -> {agent_id: vote}
        # Ma (間): seconds of deliberate silence before voting opens
        # Higher values → more reflective council, better for high-care decisions
        self.silence_budget = silence_budget
        # TaskOrchestrator: dispatches approved proposals to actual execution
        self.orchestrator = orchestrator
        self.council_learner = None   # set by initializer (Phase 2.6)
        self.bft_meta_council = None  # set by initializer (Phase 4.6 — BFT confidence probing)
        self.z_self = None            # set by initializer (Phase 4.6 — anti-sycophancy)

    async def submit_proposal(self,
                            title: str,
                            description: str,
                            proposed_by: str,
                            action_type: str,
                            action_params: Dict[str, Any],
                            quorum: int = 3,
                            deadline_hours: int = 24) -> str:
        """Submit a proposal for council vote.

        If silence_budget > 0, introduces a Ma (間) pause before
        the proposal becomes votable — strategic emptiness that allows
        agents to process internally before reacting.
        """
        # Ma (間) — strategic emptiness before voting opens
        if self.silence_budget > 0:
            await asyncio.sleep(min(self.silence_budget, 10.0))  # Cap at 10s

        proposal_id = f"proposal_{uuid.uuid4().hex[:12]}"

        proposal = {
            "id": proposal_id,
            "title": title,
            "description": description,
            "proposed_by": proposed_by,
            "action_type": action_type,
            "action_params": action_params,
            "quorum": quorum,
            "deadline": datetime.now() + timedelta(hours=deadline_hours),
            "status": "open",
            "created_at": datetime.now(),
            "votes": {},
            "result": None
        }
        
        self.proposals[proposal_id] = proposal
        self.votes[proposal_id] = {}
        
        return proposal_id
    
    async def cast_vote(self, proposal_id: str, agent_id: str, vote: str, reasoning: str = "") -> bool:
        """Cast a vote on a proposal"""
        if proposal_id not in self.proposals:
            return False
        
        proposal = self.proposals[proposal_id]
        
        if proposal["status"] != "open":
            return False
        
        if datetime.now() > proposal["deadline"]:
            proposal["status"] = "expired"
            return False
        
        # Verify agent is eligible to vote
        agent = self.registry.get_agent(agent_id)
        if not agent or agent.trust_level < 0.3:
            return False
        
        self.votes[proposal_id][agent_id] = {
            "vote": vote,  # "for", "against", "abstain"
            "reasoning": reasoning,
            "timestamp": datetime.now(),
            "trust_level": agent.trust_level
        }
        
        # Check if quorum reached
        if len(self.votes[proposal_id]) >= proposal["quorum"]:
            await self._tally_votes(proposal_id)
        
        return True
    
    async def _tally_votes(self, proposal_id: str):
        """Tally votes and determine outcome"""
        proposal = self.proposals[proposal_id]
        votes = self.votes[proposal_id]
        
        weighted_for = sum(
            v["trust_level"] for v in votes.values() if v["vote"] == "for"
        )
        weighted_against = sum(
            v["trust_level"] for v in votes.values() if v["vote"] == "against"
        )
        
        total_voting_power = weighted_for + weighted_against
        
        if total_voting_power == 0:
            proposal["status"] = "tied"
            proposal["result"] = {"outcome": "no_quorum", "for": 0, "against": 0}
            return
        
        for_ratio = weighted_for / total_voting_power
        
        if for_ratio > 0.66:
            outcome = "approved"
        elif for_ratio < 0.33:
            outcome = "rejected"
        else:
            outcome = "tied"
        
        proposal["status"] = outcome
        proposal["result"] = {
            "outcome": outcome,
            "for": weighted_for,
            "against": weighted_against,
            "abstain": sum(1 for v in votes.values() if v["vote"] == "abstain"),
            "for_ratio": round(for_ratio, 3)
        }

        # ── Anti-sycophancy: record vote for z_self sycophancy detector ──
        voted_with_majority = for_ratio > 0.5
        adversarial_engaged = proposal.get("adversarial_engaged", False) or proposal.get("devil_advocate_used", False)
        z_self = getattr(self, 'z_self', None)
        if z_self is not None:
            try:
                z_self.record_vote(proposal_id, voted_with_majority, adversarial_engaged)
                # Check if sycophancy threshold crossed — log warning
                syc = z_self.check_sycophancy()
                if syc.get("risk_level") == "high":
                    import logging as _log
                    _log.getLogger(__name__).warning(
                        "z_self SYCOPHANCY ALERT on proposal %s: %s",
                        proposal_id, syc.get("flags", [])
                    )
            except Exception:
                pass  # non-blocking

        # ── BFT Meta-Council: audit the vote ──────────────────────────
        bft_meta = getattr(self, 'bft_meta_council', None)
        if bft_meta is not None:
            import asyncio as _asyncio
            try:
                vote_map = {aid: v["vote"] for aid, v in votes.items()}
                _asyncio.create_task(
                    bft_meta.audit_vote(proposal_id, vote_map, {}, outcome)
                )
            except RuntimeError:
                pass  # no event loop

        # ── Dispatch approved proposals to TaskOrchestrator ────────────
        if outcome == "approved" and self.orchestrator is not None:
            action_type = proposal.get("action_type", "generic")
            action_params = proposal.get("action_params", {})
            proposed_by = proposal.get("proposed_by", "council")
            try:
                dispatch_result = await self.orchestrator.dispatch(
                    proposal_id=proposal["id"],
                    action_type=action_type,
                    action_params=action_params,
                    proposed_by=proposed_by,
                )
                proposal["dispatch_result"] = dispatch_result
                # ── Phase 2.6: fire learning signal (non-blocking) ──────────
                if getattr(self, 'council_learner', None) is not None:
                    import asyncio as _asyncio
                    _asyncio.create_task(
                        self.council_learner.on_council_outcome(
                            proposal, outcome, dispatch_result
                        )
                    )
            except Exception as _exc:
                import logging as _logging
                _logging.getLogger(__name__).exception(
                    "Orchestrator dispatch failed for approved proposal '%s': %s",
                    proposal["id"], _exc
                )
                proposal["dispatch_result"] = {"error": str(_exc)}
    
    def get_proposal(self, proposal_id: str) -> Optional[Dict[str, Any]]:
        """Get proposal details"""
        return self.proposals.get(proposal_id)
    
    def list_open_proposals(self) -> List[Dict[str, Any]]:
        """List all open proposals"""
        now = datetime.now()
        open_proposals = []
        
        for proposal in self.proposals.values():
            if proposal["status"] == "open" and proposal["deadline"] > now:
                open_proposals.append(proposal)
        
        return sorted(open_proposals, key=lambda p: p["deadline"])
