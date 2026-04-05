"""
MEOK AI Labs — DSPy Self-Optimizing Prompts
Automatic prompt optimization using LM feedback and gradients
"""

from typing import Optional, List, Dict, Any
import dspy
from dspy import (
    Signature,
    Module,
    Predict,
    ChainOfThought,
    ReAct,
    HTML,
    Paraphrase,
    Simplify,
)
from dspy.teleprompt import (
    BootstrapFewShot,
    CODEVAlpha,
    Ensemble,
    LabeledFewShot,
    SignatureOptimizer,
    RandomSearch,
)


# ============================================================================
# DSPy Signatures for MEOK Tasks
# ============================================================================


class AnalyzeQuerySignature(Signature):
    """Analyze user query and extract key components"""

    input_query = dspy.InputField(desc="The user's original query")
    intent = dspy.OutputField(desc="Detected intent: research, code, analyze, general")
    entities = dspy.OutputField(desc="Key entities mentioned")
    constraints = dspy.OutputField(desc="Any constraints or requirements")


class GenerateResponseSignature(Signature):
    """Generate appropriate response based on context"""

    context = dspy.InputField(desc="Relevant context and conversation history")
    query = dspy.InputField(desc="The user's query")
    response = dspy.OutputField(desc="Generated response")
    confidence = dspy.OutputField(desc="Confidence score 0-1")


class SafetyCheckSignature(Signature):
    """Check content for safety and policy compliance"""

    content = dspy.InputField(desc="Content to check")
    is_safe = dspy.OutputField(desc="Whether content passes safety check")
    risk_level = dspy.OutputField(desc="Risk level: low, medium, high")
    reason = dspy.OutputField(desc="Explanation of safety assessment")


class SummarizeSignature(Signature):
    """Summarize content with specified length"""

    content = dspy.InputField(desc="Content to summarize")
    length = dspy.InputField(desc="Target length: brief, medium, detailed")
    summary = dspy.OutputField(desc="Generated summary")


# ============================================================================
# Optimized Modules
# ============================================================================


class QueryAnalyzer(dspy.Module):
    """Analyzes user queries with DSPy optimization"""

    def __init__(self):
        super().__init__()
        self.analyze = ChainOfThought(AnalyzeQuerySignature)

    def forward(self, query: str) -> Dict[str, Any]:
        result = self.analyze(input_query=query)
        return {
            "intent": result.intent,
            "entities": result.entities,
            "constraints": result.constraints,
        }


class ResponseGenerator(dspy.Module):
    """Generates context-aware responses"""

    def __init__(self):
        super().__init__()
        self.generate = dspy.Predict(GenerateResponseSignature)

    def forward(self, context: str, query: str) -> Dict[str, Any]:
        result = self.generate(context=context, query=query)
        return {"response": result.response, "confidence": result.confidence}


class ContentSafetyChecker(dspy.Module):
    """Safety and policy compliance checker"""

    def __init__(self):
        super().__init__()
        self.check = ChainOfThought(SafetyCheckSignature)

    def forward(self, content: str) -> Dict[str, Any]:
        result = self.check(content=content)
        return {
            "is_safe": result.is_safe,
            "risk_level": result.risk_level,
            "reason": result.reason,
        }


class ContentSummarizer(dspy.Module):
    """Multi-length content summarization"""

    def __init__(self):
        super().__init__()
        self.summarize = dspy.Predict(SummarizeSignature)

    def forward(self, content: str, length: str = "medium") -> str:
        result = self.summarize(content=content, length=length)
        return result.summary


# ============================================================================
# Self-Optimizing Prompt Manager
# ============================================================================


class MEOKDSPyOptimizer:
    """Manages DSPy optimization for MEOK AI prompts"""

    def __init__(self, lm=None):
        # Configure language model
        if lm is None:
            # Use Ollama or OpenAI depending on availability
            try:
                self.lm = dspy.OllamaLocal(
                    model="qwen3.5:9b", base_url="http://localhost:11434"
                )
            except:
                # Fallback to mock for testing
                self.lm = dspy.OpenAI(model="gpt-4o-mini")

        dspy.settings.configure(lm=self.lm)

        # Initialize modules
        self.query_analyzer = QueryAnalyzer()
        self.response_generator = ResponseGenerator()
        self.safety_checker = ContentSafetyChecker()
        self.summarizer = ContentSummarizer()

        # Track optimization metrics
        self.metrics = {"total_requests": 0, "avg_confidence": 0.0, "safety_blocks": 0}

    def analyze_and_respond(
        self, query: str, context: str = "", check_safety: bool = True
    ) -> Dict[str, Any]:
        """Full pipeline: analyze → safety check → respond"""

        self.metrics["total_requests"] += 1

        # Step 1: Analyze query
        analysis = self.query_analyzer(query)

        # Step 2: Safety check (if enabled)
        if check_safety:
            safety = self.safety_checker(context + "\n" + query)
            if not safety["is_safe"]:
                self.metrics["safety_blocks"] += 1
                return {
                    "error": "Content blocked by safety policy",
                    "risk_level": safety["risk_level"],
                    "reason": safety["reason"],
                }

        # Step 3: Generate response
        response = self.response_generator(context, query)

        # Update metrics
        self.metrics["avg_confidence"] = (
            self.metrics["avg_confidence"] * (self.metrics["total_requests"] - 1)
            + float(response["confidence"])
        ) / self.metrics["total_requests"]

        return {
            "analysis": analysis,
            "response": response["response"],
            "confidence": response["confidence"],
        }

    def optimize_prompts(
        self,
        trainset: List[Dict[str, str]],
        metric: callable = None,
        num_threads: int = 4,
    ) -> dict:
        """
        Optimize prompts using DSPy's teleprompter

        Args:
            trainset: List of {"query": str, "context": str, "response": str} examples
            metric: Custom evaluation metric function
            num_threads: Parallel threads for optimization

        Returns:
            Optimization results and updated metrics
        """
        from dspy.datasets import Dataset

        # Convert to DSPy dataset
        class QueryDataset(Dataset):
            def __init__(self, examples):
                self._examples = examples

            def __len__(self):
                return len(self._examples)

            def __getitem__(self, idx):
                ex = self._examples[idx]
                return dspy.Example(
                    query=ex["query"],
                    context=ex.get("context", ""),
                    response=ex["response"],
                ).with_inputs("query", "context")

        dataset = QueryDataset(trainset)

        # Use SignatureOptimizer for automatic prompt optimization
        optimizer = SignatureOptimizer(metric=metric, verbose=True)

        # Optimize the response generator
        optimized = optimizer.compile(
            self.response_generator,
            trainset=dataset[: int(len(dataset) * 0.8)],
            valset=dataset[int(len(dataset) * 0.8) :],
        )

        return {
            "optimized_module": optimized,
            "dataset_size": len(trainset),
            "optimizer_used": "SignatureOptimizer",
        }

    def get_metrics(self) -> Dict[str, Any]:
        """Get current optimization metrics"""
        return {**self.metrics, "confidence_rate": self.metrics["avg_confidence"]}


# ============================================================================
# Usage Examples
# ============================================================================


def example_usage():
    """Demonstrate DSPy usage"""

    optimizer = MEOKDSPyOptimizer()

    # Analyze query
    analysis = optimizer.query_analyzer(
        "What are the EU AI Act requirements for high-risk systems?"
    )
    print(f"Intent: {analysis['intent']}")
    print(f"Entities: {analysis['entities']}")

    # Full pipeline
    result = optimizer.analyze_and_respond(
        query="Explain Constitutional AI governance",
        context="We are discussing AI safety frameworks",
    )
    print(f"Response: {result['response']}")
    print(f"Confidence: {result['confidence']}")

    # Optimization example
    trainset = [
        {
            "query": "What is AI governance?",
            "context": "",
            "response": "AI governance is the framework of rules and practices...",
        },
        {
            "query": "How does Constitutional AI work?",
            "context": "",
            "response": "Constitutional AI is an approach where AI systems...",
        },
    ]

    opt_result = optimizer.optimize_prompts(trainset)
    print(f"Optimization complete: {opt_result}")


if __name__ == "__main__":
    example_usage()
