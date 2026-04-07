#!/usr/bin/env python3
"""
MEOK AI Labs - Agent System
Multi-agent orchestration with tool calling
"""

import asyncio
import uuid
from typing import Dict, List, Any, Optional, Callable
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
import json


class AgentStatus(str, Enum):
    IDLE = "idle"
    BUSY = "busy"
    ERROR = "error"
    OFFLINE = "offline"


class TaskStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


@dataclass
class Tool:
    """Agent tool definition"""

    name: str
    description: str
    parameters: Dict[str, Any]
    handler: Callable


@dataclass
class Task:
    """Agent task"""

    id: str
    agent_id: str
    instruction: str
    priority: str
    status: TaskStatus
    created_at: datetime
    started_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    result: Optional[Dict] = None
    error: Optional[str] = None


class BaseAgent:
    """Base agent with tool calling capabilities"""

    def __init__(self, agent_id: str, name: str, description: str = ""):
        self.id = agent_id
        self.name = name
        self.description = description
        self.status = AgentStatus.IDLE
        self.tools: Dict[str, Tool] = {}
        self.task_history: List[Task] = []

    def register_tool(self, tool: Tool) -> None:
        """Register a tool for this agent"""
        self.tools[tool.name] = tool

    async def execute_task(
        self, instruction: str, context: Dict = None
    ) -> Dict[str, Any]:
        """Execute a task with tool calling"""
        self.status = AgentStatus.BUSY

        task = Task(
            id=str(uuid.uuid4()),
            agent_id=self.id,
            instruction=instruction,
            priority="normal",
            status=TaskStatus.RUNNING,
            created_at=datetime.utcnow(),
            started_at=datetime.utcnow(),
        )

        try:
            result = await self._process_instruction(instruction, context or {})
            task.status = TaskStatus.COMPLETED
            task.result = result
            task.completed_at = datetime.utcnow()
        except Exception as e:
            task.status = TaskStatus.FAILED
            task.error = str(e)
            task.completed_at = datetime.utcnow()
            self.status = AgentStatus.ERROR

        self.task_history.append(task)
        self.status = AgentStatus.IDLE

        return {
            "task_id": task.id,
            "agent_id": self.id,
            "status": task.status.value,
            "result": task.result,
            "error": task.error,
        }

    async def _process_instruction(
        self, instruction: str, context: Dict
    ) -> Dict[str, Any]:
        """Process instruction - override in subclass"""
        return {"response": f"Agent {self.name} processed: {instruction}"}


class ResearcherAgent(BaseAgent):
    """Research agent for gathering information"""

    def __init__(self):
        super().__init__("researcher", "Researcher", "Gathers and analyzes information")

    async def _process_instruction(
        self, instruction: str, context: Dict
    ) -> Dict[str, Any]:
        """Process research task"""
        return {
            "findings": [
                f"Research result 1 for: {instruction[:50]}",
                f"Research result 2 for: {instruction[:50]}",
            ],
            "sources": ["source1.com", "source2.com"],
            "summary": f"Found 2 relevant results for research query",
        }


class WriterAgent(BaseAgent):
    """Content writing agent"""

    def __init__(self):
        super().__init__("writer", "Writer", "Creates written content")

    async def _process_instruction(
        self, instruction: str, context: Dict
    ) -> Dict[str, Any]:
        """Process writing task"""
        return {
            "content": f"Generated content based on: {instruction[:50]}...",
            "word_count": 150,
            "format": context.get("format", "markdown"),
        }


class AnalystAgent(BaseAgent):
    """Data analysis agent"""

    def __init__(self):
        super().__init__("analyst", "Analyst", "Analyzes data and provides insights")

    async def _process_instruction(
        self, instruction: str, context: Dict
    ) -> Dict[str, Any]:
        """Process analysis task"""
        return {
            "insights": [
                {"metric": "accuracy", "value": 0.95},
                {"metric": "confidence", "value": 0.87},
            ],
            "recommendations": ["Increase sample size", "Validate with external data"],
        }


class CoderAgent(BaseAgent):
    """Code generation agent"""

    def __init__(self):
        super().__init__("coder", "Coder", "Generates and reviews code")

    async def _process_instruction(
        self, instruction: str, context: Dict
    ) -> Dict[str, Any]:
        """Process coding task"""
        return {
            "code": f"# Generated code for: {instruction[:30]}\ndef solution():\n    pass",
            "language": context.get("language", "python"),
            "lines": 5,
        }


class PlannerAgent(BaseAgent):
    """Task planning and coordination agent"""

    def __init__(self):
        super().__init__("planner", "Planner", "Plans and coordinates multi-step tasks")

    async def _process_instruction(
        self, instruction: str, context: Dict
    ) -> Dict[str, Any]:
        """Process planning task"""
        return {
            "steps": [
                {"step": 1, "task": "Research", "agent": "researcher"},
                {"step": 2, "task": "Analyze", "agent": "analyst"},
                {"step": 3, "task": "Create output", "agent": "writer"},
            ],
            "estimated_duration": "5 minutes",
        }


class AgentOrchestrator:
    """Orchestrates multiple agents for complex tasks"""

    def __init__(self):
        self.agents: Dict[str, BaseAgent] = {}
        self.active_tasks: Dict[str, Task] = {}
        self._register_default_agents()

    def _register_default_agents(self) -> None:
        """Register default agents"""
        for agent in [
            ResearcherAgent(),
            WriterAgent(),
            AnalystAgent(),
            CoderAgent(),
            PlannerAgent(),
        ]:
            self.register_agent(agent)

    def register_agent(self, agent: BaseAgent) -> None:
        """Register an agent"""
        self.agents[agent.id] = agent

    async def create_task(
        self,
        agent_id: str,
        instruction: str,
        priority: str = "normal",
    ) -> Dict[str, Any]:
        """Create a task for an agent"""
        if agent_id not in self.agents:
            return {"error": f"Agent {agent_id} not found"}

        agent = self.agents[agent_id]
        result = await agent.execute_task(instruction)

        return {
            "task_id": result["task_id"],
            "agent_id": agent_id,
            "status": result["status"],
            "result": result.get("result"),
        }

    async def create_multi_agent_task(
        self,
        task: str,
        agent_sequence: List[str] = None,
    ) -> Dict[str, Any]:
        """Create a task that uses multiple agents in sequence"""
        if not agent_sequence:
            agent_sequence = ["planner", "researcher", "analyst", "writer"]

        results = []
        context = {"original_task": task}

        for agent_id in agent_sequence:
            if agent_id not in self.agents:
                continue

            agent = self.agents[agent_id]
            result = await agent.execute_task(task, context)

            results.append(
                {
                    "agent_id": agent_id,
                    "status": result["status"],
                    "result": result.get("result"),
                }
            )

            if result["status"] != "completed":
                break

            context[agent_id] = result.get("result")
            task = result.get("result", {}).get("summary", task)

        return {
            "task_id": str(uuid.uuid4()),
            "stages": results,
            "completed_stages": len([r for r in results if r["status"] == "completed"]),
            "total_stages": len(agent_sequence),
        }

    def get_agent_status(self, agent_id: str = None) -> Dict[str, Any]:
        """Get status of agent(s)"""
        if agent_id:
            if agent_id not in self.agents:
                return {"error": "Agent not found"}
            agent = self.agents[agent_id]
            return {
                "id": agent.id,
                "name": agent.name,
                "status": agent.status.value,
                "tasks_completed": len(agent.task_history),
            }

        return {
            agent_id: {
                "status": agent.status.value,
                "tasks": len(agent.task_history),
            }
            for agent_id, agent in self.agents.items()
        }


async def main():
    """Demo agent system"""
    orchestrator = AgentOrchestrator()

    print("=== MEOK AI Agent System ===\n")

    print("Agent Status:")
    status = orchestrator.get_agent_status()
    for agent_id, info in status.items():
        print(f"  {agent_id}: {info['status']} ({info['tasks']} tasks)")

    print("\nSingle Agent Task:")
    result = await orchestrator.create_task(
        "researcher", "Find latest AI governance regulations"
    )
    print(f"  Status: {result['status']}")
    print(f"  Findings: {result['result']['findings']}")

    print("\nMulti-Agent Task:")
    multi = await orchestrator.create_multi_agent_task(
        "Research and summarize AI safety guidelines"
    )
    print(f"  Completed: {multi['completed_stages']}/{multi['total_stages']}")
    for stage in multi["stages"]:
        print(f"    {stage['agent_id']}: {stage['status']}")


if __name__ == "__main__":
    asyncio.run(main())
