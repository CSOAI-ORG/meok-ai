"""
Coordination Hub - Central nervous system for multi-agent collaboration
"""

import json
import asyncio
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Any, Callable
from dataclasses import dataclass, field, asdict

from .task_queue import TaskQueue, Task, TaskPriority
from .file_lock import FileLockManager
from .registry import AgentRegistry


@dataclass
class CoordinationEvent:
    """An event in the coordination system"""
    timestamp: str
    event_type: str  # task_assigned, file_locked, sprint_started, etc.
    agent_id: str
    details: Dict[str, Any]
    care_score: float = 0.5


class CoordinationHub:
    """
    Central coordination hub for multi-agent collaboration.
    
    Council-approved parameters:
    - Max 3 parallel tasks per agent
    - Auto-merge only if care_score >= 0.7
    - Human escalation at care_score < 0.6
    """
    
    MAX_PARALLEL_TASKS = 3
    AUTO_MERGE_THRESHOLD = 0.7
    HUMAN_ESCALATION_THRESHOLD = 0.6
    
    def __init__(self, state_dir: Optional[Path] = None):
        self.state_dir = state_dir or Path(__file__).parent.parent / "consciousness-core" / "state"
        self.coordination_file = self.state_dir / "coordination_hub.json"
        
        # Subsystems
        self.task_queue = TaskQueue(self.state_dir)
        self.file_locks = FileLockManager(self.state_dir)
        self.agent_registry = AgentRegistry(self.state_dir)
        
        # Event log
        self.events: List[CoordinationEvent] = []
        self.event_callbacks: List[Callable] = []
        
        # State
        self.care_membrane_enabled = True
        self.auto_assign_enabled = True
        self.human_escalation_enabled = True
        
        self._load_state()
    
    def _load_state(self):
        """Load coordination state"""
        if self.coordination_file.exists():
            try:
                with open(self.coordination_file, 'r') as f:
                    data = json.load(f)
                self.events = [
                    CoordinationEvent(**e) for e in data.get("events", [])
                ]
            except Exception:
                pass
    
    def _save_state(self):
        """Persist coordination state"""
        self.state_dir.mkdir(parents=True, exist_ok=True)
        data = {
            "events": [asdict(e) for e in self.events[-100:]],  # Keep last 100
            "saved_at": datetime.now().isoformat(),
            "settings": {
                "care_membrane_enabled": self.care_membrane_enabled,
                "auto_assign_enabled": self.auto_assign_enabled,
                "human_escalation_enabled": self.human_escalation_enabled
            }
        }
        with open(self.coordination_file, 'w') as f:
            json.dump(data, f, indent=2)
    
    def log_event(self, event_type: str, agent_id: str, details: Dict, care_score: float = 0.5):
        """Log a coordination event"""
        event = CoordinationEvent(
            timestamp=datetime.now().isoformat(),
            event_type=event_type,
            agent_id=agent_id,
            details=details,
            care_score=care_score
        )
        self.events.append(event)
        self._save_state()
        
        # Notify callbacks
        for callback in self.event_callbacks:
            try:
                callback(event)
            except Exception:
                pass
    
    def register_agent(self, agent_id: str, agent_type: str, capabilities: List[str]) -> Dict:
        """Register an agent with the coordination hub"""
        return self.agent_registry.register(agent_id, agent_type, capabilities)
    
    def get_agent_status(self, agent_id: str) -> Optional[Dict]:
        """Get status of a specific agent"""
        return self.agent_registry.get_agent(agent_id)
    
    def get_all_agents(self) -> List[Dict]:
        """Get all registered agents"""
        return self.agent_registry.list_agents()
    
    def submit_task(self, title: str, description: str, files: List[str],
                   requester: str = "human", care_score: float = 0.5) -> Dict:
        """
        Submit a new task to the coordination hub.
        
        If auto-assign is enabled and care_score >= threshold,
        automatically assigns to optimal agent.
        """
        # Check if human escalation needed
        if self.human_escalation_enabled and care_score < self.HUMAN_ESCALATION_THRESHOLD:
            return {
                "success": False,
                "requires_human": True,
                "reason": f"Care score {care_score} below threshold {self.HUMAN_ESCALATION_THRESHOLD}",
                "task": None
            }
        
        # Create task
        task = self.task_queue.create_task(
            title=title,
            description=description,
            files=files,
            requester=requester,
            care_score=care_score
        )
        
        self.log_event("task_created", requester, {"task_id": task.id, "title": title}, care_score)
        
        # Auto-assign if enabled
        if self.auto_assign_enabled and care_score >= 0.5:
            assignment = self._auto_assign_task(task)
            if assignment["success"]:
                return assignment
        
        return {
            "success": True,
            "task_id": task.id,
            "assigned": False,
            "message": "Task queued for assignment"
        }
    
    def _auto_assign_task(self, task: Task) -> Dict:
        """Auto-assign task to optimal agent"""
        # Find available agents
        available = self.agent_registry.get_available_agents()
        
        if not available:
            return {"success": False, "assigned": False, "reason": "No agents available"}
        
        # Score each agent for this task
        best_agent = None
        best_score = -1
        
        for agent in available:
            # Check parallel task limit
            if agent.get("active_tasks", 0) >= self.MAX_PARALLEL_TASKS:
                continue
            
            # Calculate match score based on:
            # - Capabilities match
            # - Current load (lower is better)
            # - Past success rate
            score = self._calculate_agent_match_score(agent, task)
            
            if score > best_score:
                best_score = score
                best_agent = agent
        
        if best_agent and best_score > 0.3:
            # Assign task
            self.task_queue.assign_task(task.id, best_agent["agent_id"])
            self.agent_registry.increment_active_tasks(best_agent["agent_id"])
            
            self.log_event("task_assigned", best_agent["agent_id"], {
                "task_id": task.id,
                "title": task.title,
                "match_score": best_score
            }, task.care_score)
            
            return {
                "success": True,
                "assigned": True,
                "task_id": task.id,
                "agent_id": best_agent["agent_id"],
                "agent_type": best_agent["agent_type"],
                "match_score": best_score
            }
        
        return {"success": True, "assigned": False, "reason": "No suitable agent found"}
    
    def _calculate_agent_match_score(self, agent: Dict, task: Task) -> float:
        """Calculate how well an agent matches a task"""
        score = 0.0
        
        # Base score on capabilities
        task_type = self._infer_task_type(task)
        if task_type in agent.get("capabilities", []):
            score += 0.4
        
        # Penalize high load
        load_factor = 1.0 - (agent.get("active_tasks", 0) / self.MAX_PARALLEL_TASKS)
        score += load_factor * 0.3
        
        # Bonus for success rate
        success_rate = agent.get("success_rate", 0.8)
        score += success_rate * 0.3
        
        return score
    
    def _infer_task_type(self, task: Task) -> str:
        """Infer task type from description/files"""
        text = (task.description + " ").join(task.files).lower()
        
        if any(x in text for x in ["test", "spec", "pytest"]):
            return "testing"
        elif any(x in text for x in ["docker", "deploy", "ci/cd", "github action"]):
            return "deployment"
        elif any(x in text for x in ["refactor", "clean", "optimize"]):
            return "refactoring"
        elif any(x in text for x in ["ui", "component", "css", "tsx", "jsx"]):
            return "frontend"
        elif any(x in text for x in ["api", "endpoint", "server", "route"]):
            return "backend"
        elif any(x in text for x in ["doc", "readme", "comment"]):
            return "documentation"
        else:
            return "general"
    
    def acquire_files(self, agent_id: str, files: List[str], 
                     task_id: str, exclusive: bool = False) -> Dict:
        """
        Acquire files for editing.
        
        If exclusive=True, blocks other agents (for critical tasks).
        If exclusive=False, allows parallel editing with auto-merge intent.
        """
        # Check existing locks
        locked_by_others = []
        for file in files:
            lock = self.file_locks.get_lock(file)
            if lock and lock["agent_id"] != agent_id:
                locked_by_others.append(file)
        
        if locked_by_others:
            return {
                "success": False,
                "blocked_by": locked_by_others,
                "message": f"Files locked by other agents: {locked_by_others}"
            }
        
        # Acquire locks
        for file in files:
            self.file_locks.acquire(
                file_path=file,
                agent_id=agent_id,
                task_id=task_id,
                exclusive=exclusive
            )
        
        self.log_event("files_acquired", agent_id, {
            "files": files,
            "task_id": task_id,
            "exclusive": exclusive
        })
        
        return {
            "success": True,
            "files": files,
            "exclusive": exclusive
        }
    
    def release_files(self, agent_id: str, files: List[str]) -> Dict:
        """Release file locks"""
        released = []
        for file in files:
            if self.file_locks.release(file, agent_id):
                released.append(file)
        
        self.log_event("files_released", agent_id, {"files": released})
        
        return {"success": True, "released": released}
    
    def complete_task(self, task_id: str, agent_id: str, result_summary: str,
                     care_score: float = 0.5) -> Dict:
        """Mark a task as complete"""
        # Complete task
        task = self.task_queue.complete_task(task_id, result_summary)
        
        # Update agent stats
        self.agent_registry.decrement_active_tasks(agent_id)
        if task:
            self.agent_registry.record_success(agent_id, care_score)
        
        # Release any locks
        self.file_locks.release_by_task(task_id)
        
        self.log_event("task_completed", agent_id, {
            "task_id": task_id,
            "summary": result_summary
        }, care_score)
        
        return {
            "success": True,
            "task_id": task_id,
            "agent_id": agent_id
        }
    
    def get_dashboard(self) -> Dict:
        """Get coordination dashboard data"""
        agents = self.agent_registry.list_agents()
        tasks = self.task_queue.get_all_tasks()
        
        return {
            "agents": {
                "total": len(agents),
                "active": sum(1 for a in agents if a.get("active_tasks", 0) > 0),
                "available": sum(1 for a in agents if a.get("active_tasks", 0) < self.MAX_PARALLEL_TASKS)
            },
            "tasks": {
                "queued": len([t for t in tasks if t.status == "queued"]),
                "in_progress": len([t for t in tasks if t.status == "in_progress"]),
                "completed": len([t for t in tasks if t.status == "completed"])
            },
            "locks": {
                "active": len(self.file_locks.list_active_locks())
            },
            "recent_events": [
                {
                    "time": e.timestamp,
                    "type": e.event_type,
                    "agent": e.agent_id
                }
                for e in self.events[-10:]
            ]
        }
    
    def request_human_escalation(self, task_id: str, agent_id: str, reason: str):
        """Request human intervention"""
        self.log_event("human_escalation", agent_id, {
            "task_id": task_id,
            "reason": reason
        }, care_score=0.0)
        
        # TODO: Send notification to human sovereign
        return {"success": True, "escalated": True, "reason": reason}


# Singleton instance
_hub_instance: Optional[CoordinationHub] = None


def get_hub() -> CoordinationHub:
    """Get or create coordination hub singleton"""
    global _hub_instance
    if _hub_instance is None:
        _hub_instance = CoordinationHub()
    return _hub_instance
