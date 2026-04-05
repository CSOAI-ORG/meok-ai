"""
MEOK AI Labs - CrewAI Integration
Multi-agent crew orchestration for complex tasks
"""

from typing import List, Optional, Dict, Any
from dataclasses import dataclass
from crewai import Agent, Task, Crew
from langchain_openai import ChatOpenAI

try:
    from crewai import Agent, Task, Crew
except ImportError:
    import subprocess
    import sys

    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "crewai", "langchain-openai"]
    )
    from crewai import Agent, Task, Crew


@dataclass
class AgentRole:
    """Define an agent role in the crew"""

    role: str
    goal: str
    backstory: str
    verbose: bool = True
    allow_delegation: bool = False


class MEKOCrew:
    """
    MEOK AI Labs crew orchestration

    Creates and manages multi-agent crews for complex tasks
    """

    def __init__(
        self,
        openai_api_key: Optional[str] = None,
        anthropic_api_key: Optional[str] = None,
        ollama_url: str = "http://localhost:11434",
    ):
        self.openai_api_key = openai_api_key
        self.anthropic_api_key = anthropic_api_key
        self.ollama_url = ollama_url
        self.agents: List[Agent] = []
        self.tasks: List[Task] = []
        self.crew: Optional[Crew] = None

    def create_agent(
        self,
        role: str,
        goal: str,
        backstory: str,
        use_local: bool = True,
        model: str = "gpt-4o-mini",
    ) -> Agent:
        """
        Create a crew agent

        Args:
            role: Agent role title
            goal: Agent's primary objective
            backstory: Agent's persona and context
            use_local: Use Ollama instead of OpenAI
            model: Model to use
        """

        if use_local:
            llm = ChatOpenAI(
                model=model,
                base_url=f"{self.ollama_url}/v1",
                api_key="ollama",  # Ollama doesn't need API key
            )
        else:
            llm = ChatOpenAI(model=model, api_key=self.openai_api_key)

        agent = Agent(
            role=role,
            goal=goal,
            backstory=backstory,
            verbose=True,
            llm=llm,
            allow_delegation=False,
        )

        self.agents.append(agent)
        return agent

    def add_task(
        self,
        description: str,
        agent: Agent,
        expected_output: str,
        async_execution: bool = False,
    ) -> Task:
        """
        Add a task to the crew

        Args:
            description: What the task entails
            agent: Agent responsible
            expected_output: What success looks like
            async_execution: Run in parallel
        """
        task = Task(
            description=description,
            agent=agent,
            expected_output=expected_output,
            async_execution=async_execution,
        )
        self.tasks.append(task)
        return task

    def build(self, process: str = "sequential") -> Crew:
        """
        Build the crew

        Args:
            process: Execution order - 'sequential', 'hierarchical', or 'agents'
        """
        self.crew = Crew(
            agents=self.agents, tasks=self.tasks, process=process, verbose=True
        )
        return self.crew

    def kickoff(self, inputs: Dict[str, Any] = None) -> Any:
        """Execute the crew"""
        if not self.crew:
            raise ValueError("Crew not built. Call build() first.")
        return self.crew.kickoff(inputs=inputs or {})


# =============================================================================
# Pre-built Crews for Common Tasks
# =============================================================================


def create_research_crew(llm_router=None) -> MEKOCrew:
    """Create a research and analysis crew"""
    crew = MEKOCrew()

    # Researcher agent
    researcher = crew.create_agent(
        role="Research Analyst",
        goal="Find and synthesize relevant information from multiple sources",
        backstory="""You are an expert research analyst with deep experience in 
        gathering, validating, and synthesizing information from various sources. 
        You excel at identifying key insights and patterns.""",
        use_local=True,
        model="qwen3:72b",
    )

    # Writer agent
    writer = crew.create_agent(
        role="Technical Writer",
        goal="Transform research findings into clear, actionable content",
        backstory="""You are a skilled technical writer who transforms complex 
        information into clear, engaging content. You understand both technical 
        details and audience needs.""",
        use_local=True,
        model="qwen3:32b",
    )

    # Reviewer agent
    reviewer = crew.create_agent(
        role="Quality Reviewer",
        goal="Ensure accuracy and completeness of output",
        backstory="""You are a meticulous reviewer who checks facts, identifies 
        gaps, and ensures outputs meet high quality standards.""",
        use_local=True,
        model="llama3.1:70b",
    )

    # Tasks
    crew.add_task(
        description="Research the given topic thoroughly, gathering information from multiple sources",
        agent=researcher,
        expected_output="Comprehensive research notes with key findings and sources",
    )

    crew.add_task(
        description="Write a clear, well-structured report based on the research findings",
        agent=writer,
        expected_output="Final report ready for review",
    )

    crew.add_task(
        description="Review the report for accuracy, completeness, and quality",
        agent=reviewer,
        expected_output="Reviewed report with any corrections noted",
    )

    return crew


def create_code_review_crew() -> MEKOCrew:
    """Create a code review crew"""
    crew = MEKOCrew()

    # Coder agent
    coder = crew.create_agent(
        role="Code Reviewer",
        goal="Review code for quality, security, and best practices",
        backstory="""You are an experienced software engineer who reviews code 
        with a focus on quality, security, performance, and maintainability. 
        You know multiple languages and frameworks.""",
        use_local=True,
        model="qwen3-coder:32b",
    )

    # Security agent
    security = crew.create_agent(
        role="Security Analyst",
        goal="Identify potential security vulnerabilities",
        backstory="""You are a cybersecurity expert focused on identifying 
        security vulnerabilities, injection risks, and compliance issues.""",
        use_local=True,
        model="qwen3:72b",
    )

    crew.add_task(
        description="Review the provided code for quality, performance, and best practices",
        agent=coder,
        expected_output="Code review with specific improvement suggestions",
    )

    crew.add_task(
        description="Analyze the code for security vulnerabilities and risks",
        agent=security,
        expected_output="Security assessment with identified issues",
    )

    return crew


def create_content_crew() -> MEKOCrew:
    """Create a content generation crew"""
    crew = MEKOCrew()

    strategist = crew.create_agent(
        role="Content Strategist",
        goal="Plan content that resonates with target audience",
        backstory="""You are a content strategist who understands audience 
        needs, SEO best practices, and content marketing.""",
        use_local=True,
        model="qwen3:72b",
    )

    writer = crew.create_agent(
        role="Content Writer",
        goal="Create engaging, well-written content",
        backstory="""You are a creative writer who crafts compelling narratives 
        that engage readers while conveying key messages.""",
        use_local=True,
        model="qwen3:32b",
    )

    editor = crew.create_agent(
        role="Editor",
        goal="Polish content to publication quality",
        backstory="""You are an editor who refines content, ensures consistency, 
        and prepares it for publication.""",
        use_local=True,
        model="llama3.1:70b",
    )

    crew.add_task(
        description="Define content strategy and key messages for the topic",
        agent=strategist,
        expected_output="Content plan with target audience and key points",
    )

    crew.add_task(
        description="Write the initial content based on the strategy",
        agent=writer,
        expected_output="First draft of the content",
    )

    crew.add_task(
        description="Edit and polish the content for publication",
        agent=editor,
        expected_output="Final polished content ready for publishing",
    )

    return crew


# =============================================================================
# Usage Example
# =============================================================================

if __name__ == "__main__":
    # Create research crew
    crew = create_research_crew()
    crew.build(process="sequential")

    # Run
    result = crew.kickoff(inputs={"topic": "The future of Constitutional AI"})
    print(result)
