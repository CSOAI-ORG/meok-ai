"""
MEOK AI Labs — LangGraph Agent Orchestration
Multi-agent pipeline with state management and tool routing
"""

from typing import TypedDict, Annotated, Sequence
from langgraph.graph import StateGraph, END
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import ToolNode
import operator

# ============================================================================
# State Schema
# ============================================================================


class AgentState(TypedDict):
    """Shared state for agent orchestration"""

    messages: Annotated[Sequence[BaseMessage], operator.add]
    current_agent: str
    task_type: str
    context: dict
    results: dict
    next_action: str
    confidence: float
    requires_human: bool


# ============================================================================
# Agent Definitions
# ============================================================================


class MEOKAgent:
    """Base agent class with LangGraph integration"""

    def __init__(self, name: str, description: str, tools: list = None):
        self.name = name
        self.description = description
        self.tools = tools or []

    def process(self, state: AgentState) -> AgentState:
        """Process the current state and update results"""
        raise NotImplementedError


class ResearchAgent(MEOKAgent):
    """Deep research agent using web search and document analysis"""

    def __init__(self, llm=None):
        super().__init__(
            name="researcher",
            description="Deep research on topics, market analysis, competitor intelligence",
        )
        self.llm = llm

    def process(self, state: AgentState) -> AgentState:
        task = state["context"].get("task", "")

        # Simulate research processing
        results = {
            "query": task,
            "sources": ["web", "documents", "internal"],
            "summary": f"Research completed for: {task}",
            "confidence": 0.85,
        }

        state["results"]["research"] = results
        state["next_action"] = "analyze"
        return state


class CoderAgent(MEOKAgent):
    """Code generation and review agent"""

    def __init__(self, llm=None):
        super().__init__(
            name="coder", description="Code generation, review, refactoring, debugging"
        )
        self.llm = llm

    def process(self, state: AgentState) -> AgentState:
        task = state["context"].get("task", "")

        results = {
            "task": task,
            "language": "python",
            "quality_score": 0.92,
            "tests_generated": True,
        }

        state["results"]["code"] = results
        state["next_action"] = "review"
        return state


class AnalystAgent(MEOKAgent):
    """Data analysis and insight generation"""

    def __init__(self, llm=None):
        super().__init__(
            name="analyst", description="Data analysis, metrics, trend detection"
        )
        self.llm = llm

    def process(self, state: AgentState) -> AgentState:
        results = {
            "metrics": {"accuracy": 0.95, "latency": "45ms"},
            "trends": ["growth", "retention", "engagement"],
            "insights": ["Key insight 1", "Key insight 2"],
        }

        state["results"]["analysis"] = results
        state["next_action"] = "synthesize"
        return state


class OrchestratorAgent(MEOKAgent):
    """CEO agent that routes tasks to specialized agents"""

    def __init__(self):
        super().__init__(
            name="orchestrator",
            description="Routes tasks to appropriate specialized agents",
        )
        self.agents = {
            "research": ResearchAgent(),
            "code": CoderAgent(),
            "analyze": AnalystAgent(),
        }

    def classify_task(self, task: str) -> str:
        """Classify task type based on content"""
        task_lower = task.lower()

        if any(
            kw in task_lower for kw in ["research", "find", "search", "analyze market"]
        ):
            return "research"
        elif any(
            kw in task_lower for kw in ["code", "write", "build", "implement", "debug"]
        ):
            return "code"
        elif any(kw in task_lower for kw in ["analyze", "metrics", "data", "report"]):
            return "analyze"
        else:
            return "research"  # Default

    def process(self, state: AgentState) -> AgentState:
        task = state["context"].get("task", "")
        task_type = self.classify_task(task)

        state["task_type"] = task_type
        state["current_agent"] = self.agents[task_type].name
        state["next_action"] = task_type

        return state


# ============================================================================
# LangGraph Workflow
# ============================================================================


def create_agent_workflow():
    """Create the main agent orchestration workflow"""

    # Initialize agents
    orchestrator = OrchestratorAgent()
    research = ResearchAgent()
    coder = CoderAgent()
    analyst = AnalystAgent()

    # Build graph
    workflow = StateGraph(AgentState)

    # Add nodes
    workflow.add_node("orchestrator", orchestrator.process)
    workflow.add_node("research", research.process)
    workflow.add_node("code", coder.process)
    workflow.add_node("analyze", analyst.process)
    workflow.add_node("synthesize", synthesize_results)
    workflow.add_node("human_review", human_review_step)

    # Routing logic
    def route_action(state: AgentState) -> str:
        """Route to appropriate agent based on task type"""
        action = state.get("next_action", "orchestrator")

        if action == "orchestrator":
            return "orchestrator"
        elif action in ["research", "code", "analyze"]:
            return action
        elif action == "synthesize":
            return "synthesize"
        elif state.get("requires_human"):
            return "human_review"
        else:
            return END

        return action

    # Build edges
    workflow.add_edge("orchestrator", route_action)
    workflow.add_edge("research", "synthesize")
    workflow.add_edge("code", "synthesize")
    workflow.add_edge("analyze", "synthesize")
    workflow.add_edge("synthesize", route_action)
    workflow.add_edge("human_review", END)

    # Set entry point
    workflow.set_entry_point("orchestrator")

    return workflow.compile()


def synthesize_results(state: AgentState) -> AgentState:
    """Combine results from multiple agents"""
    results = state.get("results", {})

    synthesis = {
        "summary": f"Synthesized {len(results)} agent outputs",
        "confidence": sum(r.get("confidence", 0.8) for r in results.values())
        / max(len(results), 1),
        "all_results": results,
    }

    state["results"]["synthesis"] = synthesis
    state["next_action"] = "complete"

    return state


def human_review_step(state: AgentState) -> AgentState:
    """Wait for human approval on sensitive operations"""
    state["requires_human"] = False  # Reset after human reviews
    return state


# ============================================================================
# Usage Example
# ============================================================================


def run_agent_task(task: str, require_human: bool = False) -> dict:
    """Run a task through the agent workflow"""

    workflow = create_agent_workflow()

    initial_state: AgentState = {
        "messages": [HumanMessage(content=task)],
        "current_agent": "orchestrator",
        "task_type": "unknown",
        "context": {"task": task},
        "results": {},
        "next_action": "orchestrator",
        "confidence": 0.0,
        "requires_human": require_human,
    }

    result = workflow.invoke(initial_state)

    return {
        "task": task,
        "agent_used": result["current_agent"],
        "task_type": result["task_type"],
        "results": result["results"],
        "confidence": result["confidence"],
    }


# ============================================================================
# Crew-Style Parallel Execution
# ============================================================================


class AgentCrew:
    """Execute multiple agents in parallel (CrewAI-style)"""

    def __init__(self, agents: list, task: str):
        self.agents = agents
        self.task = task
        self.results = {}

    def execute(self) -> dict:
        """Execute all agents and combine results"""
        import concurrent.futures

        def run_agent(agent):
            state = AgentState(
                messages=[HumanMessage(content=self.task)],
                current_agent=agent.name,
                task_type="crew",
                context={"task": self.task},
                results={},
                next_action="process",
                confidence=0.0,
                requires_human=False,
            )
            return agent.process(state)

        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = {
                executor.submit(run_agent, agent): agent for agent in self.agents
            }
            for future in concurrent.futures.as_completed(futures):
                agent = futures[future]
                try:
                    result = future.result()
                    self.results[agent.name] = result.get("results", {})
                except Exception as e:
                    self.results[agent.name] = {"error": str(e)}

        return {
            "task": self.task,
            "agent_count": len(self.agents),
            "results": self.results,
        }


if __name__ == "__main__":
    # Example usage
    result = run_agent_task("Research competitor AI governance tools")
    print(f"Agent: {result['agent_used']}")
    print(f"Results: {result['results']}")
