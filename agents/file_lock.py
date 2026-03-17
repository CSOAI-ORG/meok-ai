"""
File Lock Manager - Handles concurrent file access

Council-approved rules:
- Exclusive locks block other agents
- Non-exclusive allows parallel editing
- Auto-merge if care_score >= 0.7
"""

import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict


@dataclass
class FileLock:
    file_path: str
    agent_id: str
    task_id: str
    acquired_at: str
    exclusive: bool = False


class FileLockManager:
    """
    Manages file locks for multi-agent editing.
    
    Supports:
    - Exclusive locks (blocks all other access)
    - Shared locks (allows parallel editing)
    """
    
    def __init__(self, state_dir: Path):
        self.state_dir = state_dir
        self.locks_file = state_dir / "file_locks.json"
        self.locks: Dict[str, FileLock] = {}
        self._load_state()
    
    def _load_state(self):
        """Load locks from disk"""
        if self.locks_file.exists():
            try:
                with open(self.locks_file, 'r') as f:
                    data = json.load(f)
                for path, lock_data in data.get("locks", {}).items():
                    self.locks[path] = FileLock(**lock_data)
            except Exception:
                pass
    
    def _save_state(self):
        """Persist locks"""
        self.state_dir.mkdir(parents=True, exist_ok=True)
        data = {
            "locks": {path: asdict(lock) for path, lock in self.locks.items()},
            "saved_at": datetime.now().isoformat()
        }
        with open(self.locks_file, 'w') as f:
            json.dump(data, f, indent=2)
    
    def acquire(self, file_path: str, agent_id: str, task_id: str,
                exclusive: bool = False) -> bool:
        """
        Acquire a lock on a file.
        
        Returns True if successful, False if blocked.
        """
        # Check if already locked by someone else exclusively
        existing = self.locks.get(file_path)
        if existing and existing.agent_id != agent_id:
            if existing.exclusive:
                return False
            # If existing is shared and we want exclusive, block
            if exclusive:
                return False
        
        # Acquire lock
        self.locks[file_path] = FileLock(
            file_path=file_path,
            agent_id=agent_id,
            task_id=task_id,
            acquired_at=datetime.now().isoformat(),
            exclusive=exclusive
        )
        
        self._save_state()
        return True
    
    def release(self, file_path: str, agent_id: str) -> bool:
        """Release a lock (must be owner)"""
        existing = self.locks.get(file_path)
        if not existing or existing.agent_id != agent_id:
            return False
        
        del self.locks[file_path]
        self._save_state()
        return True
    
    def release_by_task(self, task_id: str):
        """Release all locks for a task"""
        to_release = [
            path for path, lock in self.locks.items()
            if lock.task_id == task_id
        ]
        for path in to_release:
            del self.locks[path]
        
        if to_release:
            self._save_state()
        
        return to_release
    
    def get_lock(self, file_path: str) -> Optional[Dict]:
        """Get lock info for a file"""
        lock = self.locks.get(file_path)
        if lock:
            return asdict(lock)
        return None
    
    def is_locked(self, file_path: str) -> bool:
        """Check if a file is locked"""
        return file_path in self.locks
    
    def can_edit(self, file_path: str, agent_id: str) -> bool:
        """Check if an agent can edit a file"""
        lock = self.locks.get(file_path)
        if not lock:
            return True  # Not locked, free to edit
        
        if lock.agent_id == agent_id:
            return True  # Owner can always edit
        
        if lock.exclusive:
            return False  # Exclusive lock blocks others
        
        return True  # Shared lock allows others
    
    def list_active_locks(self) -> List[Dict]:
        """List all active locks"""
        return [asdict(lock) for lock in self.locks.values()]
    
    def get_agent_locks(self, agent_id: str) -> List[Dict]:
        """Get all locks held by an agent"""
        return [
            asdict(lock) for lock in self.locks.values()
            if lock.agent_id == agent_id
        ]
    
    def get_stats(self) -> Dict:
        """Get lock statistics"""
        exclusive = sum(1 for l in self.locks.values() if l.exclusive)
        shared = sum(1 for l in self.locks.values() if not l.exclusive)
        
        by_agent = {}
        for lock in self.locks.values():
            by_agent[lock.agent_id] = by_agent.get(lock.agent_id, 0) + 1
        
        return {
            "total": len(self.locks),
            "exclusive": exclusive,
            "shared": shared,
            "by_agent": by_agent
        }
