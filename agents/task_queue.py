"""
Task Queue - Priority queue for work items
"""

import json
import uuid
from datetime import datetime
from pathlib import Path
from typing import List, Optional, Dict
from dataclasses import dataclass, asdict
from enum import Enum


class TaskPriority(Enum):
    CRITICAL = 5  # Blocks release, system down
    HIGH = 4      # Important feature/fix
    MEDIUM = 3    # Normal priority
    LOW = 2       # Nice to have
    TRIVIAL = 1   # Cleanup


class TaskStatus(Enum):
    QUEUED = "queued"
    ASSIGNED = "assigned"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    FAILED = "failed"
    ESCALATED = "escalated"


@dataclass
class Task:
    id: str
    title: str
    description: str
    files: List[str]
    status: TaskStatus
    priority: TaskPriority
    care_score: float
    requester: str
    assignee: Optional[str] = None
    created_at: str = ""
    assigned_at: Optional[str] = None
    completed_at: Optional[str] = None
    result_summary: Optional[str] = None


class TaskQueue:
    """Priority task queue with care-weighted sorting"""
    
    def __init__(self, state_dir: Path):
        self.state_dir = state_dir
        self.queue_file = state_dir / "task_queue.json"
        self.tasks: Dict[str, Task] = {}
        self._load_state()
    
    def _load_state(self):
        """Load task queue from disk"""
        if self.queue_file.exists():
            try:
                with open(self.queue_file, 'r') as f:
                    data = json.load(f)
                for task_data in data.get("tasks", []):
                    task = Task(
                        id=task_data["id"],
                        title=task_data["title"],
                        description=task_data["description"],
                        files=task_data.get("files", []),
                        status=TaskStatus(task_data["status"]),
                        priority=TaskPriority(task_data["priority"]),
                        care_score=task_data.get("care_score", 0.5),
                        requester=task_data.get("requester", "unknown"),
                        assignee=task_data.get("assignee"),
                        created_at=task_data.get("created_at", ""),
                        assigned_at=task_data.get("assigned_at"),
                        completed_at=task_data.get("completed_at"),
                        result_summary=task_data.get("result_summary")
                    )
                    self.tasks[task.id] = task
            except Exception:
                pass
    
    def _save_state(self):
        """Persist task queue"""
        self.state_dir.mkdir(parents=True, exist_ok=True)
        
        # Convert tasks to serializable format
        tasks_data = []
        for task in self.tasks.values():
            task_dict = asdict(task)
            task_dict["status"] = task.status.value
            task_dict["priority"] = task.priority.value
            tasks_data.append(task_dict)
        
        data = {
            "tasks": tasks_data,
            "saved_at": datetime.now().isoformat()
        }
        with open(self.queue_file, 'w') as f:
            json.dump(data, f, indent=2)
    
    def create_task(self, title: str, description: str, files: List[str],
                   requester: str = "human", care_score: float = 0.5) -> Task:
        """Create a new task"""
        # Infer priority from care score and keywords
        priority = self._infer_priority(description, care_score)
        
        task = Task(
            id=f"task_{uuid.uuid4().hex[:8]}",
            title=title,
            description=description,
            files=files,
            status=TaskStatus.QUEUED,
            priority=priority,
            care_score=care_score,
            requester=requester,
            created_at=datetime.now().isoformat()
        )
        
        self.tasks[task.id] = task
        self._save_state()
        
        return task
    
    def _infer_priority(self, description: str, care_score: float) -> TaskPriority:
        """Infer task priority from description and care score"""
        text_lower = description.lower()
        
        # Check for critical keywords
        critical_keywords = ["critical", "urgent", "blocking", "security", "crash", "broken"]
        if any(kw in text_lower for kw in critical_keywords):
            return TaskPriority.CRITICAL
        
        # Check for high priority keywords
        high_keywords = ["important", "feature", "needed", "refactor"]
        if any(kw in text_lower for kw in high_keywords):
            return TaskPriority.HIGH
        
        # Check for low priority
        low_keywords = ["cleanup", "nice to have", "optional", "todo"]
        if any(kw in text_lower for kw in low_keywords):
            return TaskPriority.LOW
        
        # Care score influence
        if care_score > 0.8:
            return TaskPriority.HIGH
        elif care_score < 0.4:
            return TaskPriority.LOW
        
        return TaskPriority.MEDIUM
    
    def assign_task(self, task_id: str, agent_id: str) -> Optional[Task]:
        """Assign a task to an agent"""
        task = self.tasks.get(task_id)
        if not task:
            return None
        
        task.assignee = agent_id
        task.status = TaskStatus.ASSIGNED
        task.assigned_at = datetime.now().isoformat()
        
        self._save_state()
        return task
    
    def start_task(self, task_id: str) -> Optional[Task]:
        """Mark task as in progress"""
        task = self.tasks.get(task_id)
        if not task:
            return None
        
        task.status = TaskStatus.IN_PROGRESS
        self._save_state()
        return task
    
    def complete_task(self, task_id: str, result_summary: str) -> Optional[Task]:
        """Mark task as completed"""
        task = self.tasks.get(task_id)
        if not task:
            return None
        
        task.status = TaskStatus.COMPLETED
        task.result_summary = result_summary
        task.completed_at = datetime.now().isoformat()
        
        self._save_state()
        return task
    
    def get_task(self, task_id: str) -> Optional[Task]:
        """Get a specific task"""
        return self.tasks.get(task_id)
    
    def get_all_tasks(self) -> List[Task]:
        """Get all tasks"""
        return list(self.tasks.values())
    
    def get_tasks_for_agent(self, agent_id: str) -> List[Task]:
        """Get tasks assigned to an agent"""
        return [t for t in self.tasks.values() if t.assignee == agent_id]
    
    def get_next_task(self) -> Optional[Task]:
        """Get next highest priority task that's queued"""
        queued = [t for t in self.tasks.values() if t.status == TaskStatus.QUEUED]
        if not queued:
            return None
        
        # Sort by priority (desc), then care score (desc)
        queued.sort(key=lambda t: (t.priority.value, t.care_score), reverse=True)
        return queued[0]
    
    def get_queue_stats(self) -> Dict:
        """Get queue statistics"""
        by_status = {}
        for status in TaskStatus:
            by_status[status.value] = len([t for t in self.tasks.values() if t.status == status])
        
        by_priority = {}
        for priority in TaskPriority:
            by_priority[priority.name] = len([t for t in self.tasks.values() if t.priority == priority])
        
        return {
            "total": len(self.tasks),
            "by_status": by_status,
            "by_priority": by_priority
        }
