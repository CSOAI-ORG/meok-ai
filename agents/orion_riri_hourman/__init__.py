"""
Orion-Riri-Hourman Agent
Task Hunter-Builder with Time-Boxed Sprint Execution

Combines:
- Orion (The Hunter): Task pursuit and acquisition
- Riri Williams (The Inventor): Rapid tool building
- Hourman (The Sprinter): Time-boxed power bursts
"""

from .agent import HunterBuilderAgent, get_agent
from .hunter import TaskHunter, get_hunter
from .inventor import RapidInventor, get_inventor
from .sprint import SprintController, get_sprint_controller

__all__ = [
    "HunterBuilderAgent", "get_agent",
    "TaskHunter", "get_hunter",
    "RapidInventor", "get_inventor", 
    "SprintController", "get_sprint_controller"
]
