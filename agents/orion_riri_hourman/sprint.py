"""
Hourman Sprint Controller
Time-boxed execution with Miraclo energy management
"""

import asyncio
import json
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from enum import Enum
from pathlib import Path
from typing import Optional, Dict, List, Callable


class SprintType(Enum):
    MICRO = "micro"      # 15 minutes - quick fixes
    POWER = "power"      # 1 hour - feature builds
    DEEP = "deep"        # 4 hours - complex architecture


class SprintStatus(Enum):
    IDLE = "idle"
    RUNNING = "running"
    COOLDOWN = "cooldown"
    PAUSED = "paused"
    COMPLETED = "completed"
    FAILED = "failed"


SPRINT_CONFIG = {
    SprintType.MICRO: {
        "duration_minutes": 15,
        "energy_cost": 10,
        "cooldown_minutes": 30,
        "max_per_day": 8
    },
    SprintType.POWER: {
        "duration_minutes": 60,
        "energy_cost": 35,
        "cooldown_minutes": 120,
        "max_per_day": 3
    },
    SprintType.DEEP: {
        "duration_minutes": 240,
        "energy_cost": 100,
        "cooldown_minutes": 480,
        "max_per_day": 1
    }
}


@dataclass
class SprintSession:
    id: str
    sprint_type: SprintType
    status: SprintStatus
    started_at: Optional[str] = None
    completed_at: Optional[str] = None
    target_task: str = ""
    energy_consumed: int = 0
    result_summary: str = ""
    care_validated: bool = True


class SprintController:
    """
    Manages time-boxed "Miraclo" sprints with energy and cooldown tracking.
    Prevents burnout through care-first limits.
    """

    MAX_ENERGY = 100
    DAILY_SPRINT_LIMIT = 3  # Care-first: max 3 sprints per 24h

    def __init__(self, state_dir: Optional[Path] = None):
        self.state_dir = state_dir or Path(__file__).parent.parent.parent / "consciousness-core" / "state"
        self.state_file = self.state_dir / "orion_riri_hourman_sprints.json"
        
        self.current_energy = self.MAX_ENERGY
        self.daily_sprint_count = 0
        self.last_sprint_date = datetime.now().strftime("%Y-%m-%d")
        self.sprint_history: List[SprintSession] = []
        self.active_sprint: Optional[SprintSession] = None
        self._cooldown_end: Optional[datetime] = None
        self._status_callbacks: List[Callable] = []
        
        self._load_state()

    def _load_state(self):
        """Load sprint state from disk"""
        if self.state_file.exists():
            try:
                with open(self.state_file, 'r') as f:
                    data = json.load(f)
                self.current_energy = data.get("current_energy", self.MAX_ENERGY)
                self.daily_sprint_count = data.get("daily_sprint_count", 0)
                self.last_sprint_date = data.get("last_sprint_date", datetime.now().strftime("%Y-%m-%d"))
                self.sprint_history = [
                    SprintSession(**s) for s in data.get("sprint_history", [])
                ]
            except Exception:
                pass  # Start fresh if corrupt
        
        # Reset daily count if new day
        today = datetime.now().strftime("%Y-%m-%d")
        if self.last_sprint_date != today:
            self.daily_sprint_count = 0
            self.last_sprint_date = today

    def _save_state(self):
        """Persist sprint state"""
        self.state_dir.mkdir(parents=True, exist_ok=True)
        
        # Convert sprint history to serializable format
        history = []
        for s in self.sprint_history[-50:]:
            history.append({
                "id": s.id,
                "sprint_type": s.sprint_type.value if isinstance(s.sprint_type, SprintType) else s.sprint_type,
                "status": s.status.value if isinstance(s.status, SprintStatus) else s.status,
                "started_at": s.started_at,
                "completed_at": s.completed_at,
                "target_task": s.target_task,
                "energy_consumed": s.energy_consumed,
                "result_summary": s.result_summary,
                "care_validated": s.care_validated
            })
        
        data = {
            "current_energy": self.current_energy,
            "daily_sprint_count": self.daily_sprint_count,
            "last_sprint_date": self.last_sprint_date,
            "sprint_history": history,
            "saved_at": datetime.now().isoformat()
        }
        with open(self.state_file, 'w') as f:
            json.dump(data, f, indent=2)

    def get_status(self) -> Dict:
        """Get current sprint controller status"""
        status = {
            "status": self._get_current_status().value,
            "current_energy": self.current_energy,
            "max_energy": self.MAX_ENERGY,
            "daily_sprints_used": self.daily_sprint_count,
            "daily_sprints_max": self.DAILY_SPRINT_LIMIT,
            "cooldown_active": self._cooldown_end is not None,
            "can_start_sprint": self._can_start_sprint(),
            "active_sprint": None,
            "available_sprint_types": self._get_available_sprint_types()
        }
        
        if self._cooldown_end:
            remaining = (self._cooldown_end - datetime.now()).total_seconds()
            status["cooldown_remaining_seconds"] = max(0, int(remaining))
        
        if self.active_sprint:
            status["active_sprint"] = asdict(self.active_sprint)
            if self.active_sprint.started_at:
                start = datetime.fromisoformat(self.active_sprint.started_at)
                elapsed = (datetime.now() - start).total_seconds()
                config = SPRINT_CONFIG[self.active_sprint.sprint_type]
                duration = config["duration_minutes"] * 60
                status["active_sprint"]["elapsed_seconds"] = int(elapsed)
                status["active_sprint"]["remaining_seconds"] = max(0, int(duration - elapsed))
                status["active_sprint"]["progress_percent"] = min(100, int((elapsed / duration) * 100))
        
        return status

    def _get_current_status(self) -> SprintStatus:
        """Determine current controller status"""
        if self.active_sprint:
            return self.active_sprint.status
        if self._cooldown_end and datetime.now() < self._cooldown_end:
            return SprintStatus.COOLDOWN
        return SprintStatus.IDLE

    def _can_start_sprint(self) -> bool:
        """Check if a new sprint can be started"""
        if self.active_sprint and self.active_sprint.status == SprintStatus.RUNNING:
            return False
        if self.daily_sprint_count >= self.DAILY_SPRINT_LIMIT:
            return False
        if self._cooldown_end and datetime.now() < self._cooldown_end:
            return False
        return True

    def _get_available_sprint_types(self) -> Dict:
        """Get which sprint types are currently available"""
        available = {}
        for sprint_type in SprintType:
            config = SPRINT_CONFIG[sprint_type]
            can_start = (
                self.current_energy >= config["energy_cost"] and
                self._can_start_sprint()
            )
            available[sprint_type.value] = {
                "available": can_start,
                "energy_cost": config["energy_cost"],
                "duration_minutes": config["duration_minutes"],
                "reason": "insufficient_energy" if self.current_energy < config["energy_cost"] else None
            }
        return available

    async def start_sprint(self, sprint_type: SprintType, target_task: str, 
                          care_validated: bool = True) -> Dict:
        """
        Start a new Miraclo sprint.
        
        Returns:
            Dict with success status and sprint details
        """
        if not self._can_start_sprint():
            return {
                "success": False,
                "error": "Cannot start sprint - daily limit reached or in cooldown",
                "status": self.get_status()
            }
        
        config = SPRINT_CONFIG[sprint_type]
        
        if self.current_energy < config["energy_cost"]:
            return {
                "success": False,
                "error": f"Insufficient energy ({self.current_energy}/{config['energy_cost']})",
                "status": self.get_status()
            }
        
        if not care_validated:
            return {
                "success": False,
                "error": "Sprint must be validated through care membrane first",
                "status": self.get_status()
            }
        
        # Create sprint session
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.active_sprint = SprintSession(
            id=f"sprint_{timestamp}",
            sprint_type=sprint_type,
            status=SprintStatus.RUNNING,
            started_at=datetime.now().isoformat(),
            target_task=target_task,
            energy_consumed=config["energy_cost"],
            care_validated=care_validated
        )
        
        # Consume energy and increment daily count
        self.current_energy -= config["energy_cost"]
        self.daily_sprint_count += 1
        self._save_state()
        
        return {
            "success": True,
            "sprint": asdict(self.active_sprint),
            "duration_minutes": config["duration_minutes"],
            "cooldown_minutes": config["cooldown_minutes"],
            "status": self.get_status()
        }

    async def complete_sprint(self, result_summary: str, success: bool = True) -> Dict:
        """Mark active sprint as complete"""
        if not self.active_sprint:
            return {"success": False, "error": "No active sprint"}
        
        self.active_sprint.status = SprintStatus.COMPLETED if success else SprintStatus.FAILED
        self.active_sprint.completed_at = datetime.now().isoformat()
        self.active_sprint.result_summary = result_summary
        
        # Add to history
        self.sprint_history.append(self.active_sprint)
        
        # Set cooldown
        config = SPRINT_CONFIG[self.active_sprint.sprint_type]
        self._cooldown_end = datetime.now() + timedelta(minutes=config["cooldown_minutes"])
        
        # Clear active
        completed = self.active_sprint
        self.active_sprint = None
        self._save_state()
        
        return {
            "success": True,
            "sprint": asdict(completed),
            "cooldown_until": self._cooldown_end.isoformat(),
            "status": self.get_status()
        }

    async def abort_sprint(self, reason: str) -> Dict:
        """Abort active sprint (emergency stop)"""
        if not self.active_sprint:
            return {"success": False, "error": "No active sprint"}
        
        self.active_sprint.status = SprintStatus.FAILED
        self.active_sprint.completed_at = datetime.now().isoformat()
        self.active_sprint.result_summary = f"ABORTED: {reason}"
        
        self.sprint_history.append(self.active_sprint)
        
        # Reduced cooldown for aborts
        self._cooldown_end = datetime.now() + timedelta(minutes=15)
        
        completed = self.active_sprint
        self.active_sprint = None
        self._save_state()
        
        return {
            "success": True,
            "sprint": asdict(completed),
            "message": f"Sprint aborted: {reason}",
            "status": self.get_status()
        }

    def regenerate_energy(self, amount: int = 5) -> Dict:
        """Regenerate energy (called periodically or by care system)"""
        old_energy = self.current_energy
        self.current_energy = min(self.MAX_ENERGY, self.current_energy + amount)
        regenerated = self.current_energy - old_energy
        self._save_state()
        
        return {
            "regenerated": regenerated,
            "current_energy": self.current_energy,
            "max_energy": self.MAX_ENERGY
        }

    def get_sprint_stats(self) -> Dict:
        """Get historical sprint statistics"""
        total = len(self.sprint_history)
        completed = sum(1 for s in self.sprint_history if s.status == SprintStatus.COMPLETED)
        failed = sum(1 for s in self.sprint_history if s.status == SprintStatus.FAILED)
        
        by_type = {}
        for sprint_type in SprintType:
            type_sprints = [s for s in self.sprint_history if s.sprint_type == sprint_type]
            by_type[sprint_type.value] = {
                "total": len(type_sprints),
                "completed": sum(1 for s in type_sprints if s.status == SprintStatus.COMPLETED),
                "failed": sum(1 for s in type_sprints if s.status == SprintStatus.FAILED)
            }
        
        return {
            "total_sprints": total,
            "completed": completed,
            "failed": failed,
            "success_rate": round(completed / total, 2) if total > 0 else 0,
            "by_type": by_type,
            "current_streak": self._calculate_streak()
        }

    def _calculate_streak(self) -> int:
        """Calculate current consecutive success streak"""
        streak = 0
        for sprint in reversed(self.sprint_history):
            if sprint.status == SprintStatus.COMPLETED:
                streak += 1
            else:
                break
        return streak


# Singleton instance
_sprint_controller: Optional[SprintController] = None


def get_sprint_controller() -> SprintController:
    """Get or create sprint controller singleton"""
    global _sprint_controller
    if _sprint_controller is None:
        _sprint_controller = SprintController()
    return _sprint_controller


if __name__ == "__main__":
    async def test():
        sc = SprintController()
        print("Initial status:", json.dumps(sc.get_status(), indent=2))
        
        # Start a micro sprint
        result = await sc.start_sprint(SprintType.MICRO, "Fix typo in README", care_validated=True)
        print("\nStart sprint:", json.dumps(result, indent=2))
        
        # Try to start another (should fail)
        result2 = await sc.start_sprint(SprintType.MICRO, "Another task")
        print("\nSecond sprint (should fail):", json.dumps(result2, indent=2))
        
        # Complete sprint
        await asyncio.sleep(1)
        complete = await sc.complete_sprint("Fixed the typo successfully")
        print("\nComplete:", json.dumps(complete, indent=2))
        
        # Stats
        print("\nStats:", json.dumps(sc.get_sprint_stats(), indent=2))
    
    asyncio.run(test())
