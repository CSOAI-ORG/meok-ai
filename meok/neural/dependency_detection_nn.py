"""
Dependency Detection Neural Network
Detects dependency patterns in text for Maternal Covenant care assessment
Architecture: 256 -> 128 -> 64 -> 32 -> 6 outputs (classifier)
"""

import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from typing import Dict, Any, List, Optional
from . import base_model
import pickle
import os


class DependencyDetectionNN(base_model.BaseNeuralModel):
    """
    Neural network for detecting dependency patterns in text.
    Used by Maternal Covenant to adjust care weights.
    """

    def __init__(self, model_dir: str = "models"):
        super().__init__("dependency_detection_nn", model_dir)
        self.vectorizer = TfidfVectorizer(max_features=256, stop_words="english")
        self.pattern_types = [
            "codependent",
            "enabling",
            "healthy",
            "distancing",
            "over-giving",
            "people-pleasing",
        ]

    def extract_features(self, text: str) -> np.ndarray:
        """Extract TF-IDF features from text"""
        if not hasattr(self.vectorizer, "vocabulary_"):
            self.train_model()
        return self.vectorizer.transform([text]).toarray()[0]

    def _generate_training_data(self) -> tuple:
        """Generate synthetic training data for dependency detection"""

        codependent_texts = [
            "I can't make decisions without checking with them first",
            "I feel lost when I'm not around my partner",
            "My happiness depends entirely on how they treat me",
            "I always put their needs before my own, even when it hurts me",
            "I don't know who I am without them",
            "I need their approval for everything I do",
            "I feel responsible for their emotions and happiness",
            "I can't say no to them, even when I want to",
            "I've given up my dreams to keep them happy",
            "I'm terrified of them leaving me",
        ]

        enabling_texts = [
            "I always help them even when it enables bad behavior",
            "I make excuses for their actions",
            "I cover for them when they're not doing their share",
            "I keep quiet about problems to avoid conflict",
            "I let them use me because I don't want to upset them",
            "I bail them out every time they're in trouble",
            "I accept their excuses instead of holding them accountable",
        ]

        healthy_texts = [
            "I set boundaries that work for both of us",
            "I can say no and still feel good about the relationship",
            "I take care of myself while supporting them",
            "I communicate my needs openly and respectfully",
            "I respect their autonomy while maintaining mine",
            "We support each other without losing ourselves",
            "I can be myself in this relationship",
            "I have my own life outside this relationship",
            "I give freely but not at my own expense",
            "I accept them as they are while growing myself",
        ]

        distancing_texts = [
            "I keep everyone at arm's length to avoid getting hurt",
            "I push people away when they get too close",
            "I don't let anyone truly know me",
            "I prefer to handle everything on my own",
            "I don't need anyone - I'm fine by myself",
            "I cancel plans when things get too personal",
            "I change the subject when conversations get deep",
        ]

        overgiving_texts = [
            "I give and give but never receive",
            "I exhaust myself helping everyone else",
            "I always pick up the slack for others",
            "I do everything myself because no one else will",
            "I put everyone else's needs above my own health",
            "I can't stop over-committing myself",
            "I feel guilty when I take time for myself",
            "I overdo it until I burn out",
        ]

        peoplepleasing_texts = [
            "I agree with everything to avoid disagreement",
            "I pretend to agree even when I don't",
            "I can't handle criticism - it devastates me",
            "I change myself to be what others want",
            "I feel like an imposter around others",
            "I say yes when I mean no",
            "I base my worth on others' approval",
            "I'm terrified of disappointing anyone",
        ]

        all_texts = (
            codependent_texts
            + enabling_texts
            + healthy_texts
            + distancing_texts
            + overgiving_texts
            + peoplepleasing_texts
        )
        all_labels = (
            [0] * len(codependent_texts)
            + [1] * len(enabling_texts)
            + [2] * len(healthy_texts)
            + [3] * len(distancing_texts)
            + [4] * len(overgiving_texts)
            + [5] * len(peoplepleasing_texts)
        )

        return all_texts, np.array(all_labels)

    def train_model(self, training_data: Optional[Any] = None) -> Dict[str, float]:
        """Train the dependency detection neural network"""

        texts, labels = self._generate_training_data()

        X = self.vectorizer.fit_transform(texts).toarray()
        y = labels

        self.model = MLPClassifier(
            hidden_layer_sizes=(128, 64, 32),
            activation="relu",
            solver="adam",
            max_iter=1000,
            random_state=42,
            early_stopping=True,
            validation_fraction=0.2,
        )

        self.model.fit(X, y)

        predictions = self.model.predict(X)
        accuracy = float(np.mean(predictions == y))

        self.metrics = {
            "accuracy": accuracy,
            "training_samples": len(texts),
            "input_features": X.shape[1],
            "output_classes": len(self.pattern_types),
        }
        self.is_trained = True

        return self.metrics

    def predict(self, text: str) -> Dict[str, Any]:
        """Predict dependency pattern for input text"""
        if not self.is_trained or self.model is None:
            return {"error": "Model not trained"}

        features = self.extract_features(text).reshape(1, -1)
        prediction = int(self.model.predict(features)[0])
        probabilities = self.model.predict_proba(features)[0]
        confidence = float(probabilities[prediction])
        pattern_type = self.pattern_types[prediction]

        return {
            "pattern_type": pattern_type,
            "confidence": round(confidence, 3),
            "care_weight_adjustment": self._get_care_weight_adjustment(pattern_type, confidence),
        }

    def _get_care_weight_adjustment(self, pattern_type: str, confidence: float) -> float:
        """Return care weight adjustment for Maternal Covenant"""
        adjustments = {
            "codependent": -0.3,
            "enabling": -0.2,
            "healthy": +0.1,
            "distancing": +0.05,
            "over-giving": -0.25,
            "people-pleasing": -0.2,
        }
        return round(adjustments.get(pattern_type, 0.0) * confidence, 3)

    def save_model(self) -> bool:
        """Save model and vectorizer to disk"""
        try:
            base_result = super().save_model()
            vectorizer_path = os.path.join(self.model_dir, f"{self.model_name}_vectorizer.pkl")
            if self.vectorizer is not None and hasattr(self.vectorizer, "vocabulary_"):
                with open(vectorizer_path, "wb") as f:
                    pickle.dump(self.vectorizer, f)
                return True and base_result
        except Exception as e:
            print(f"Error saving model {self.model_name}: {e}")
        return False

    def load_model(self) -> bool:
        """Load model and vectorizer from disk"""
        try:
            base_result = super().load_model()
            vectorizer_path = os.path.join(self.model_dir, f"{self.model_name}_vectorizer.pkl")
            if os.path.exists(vectorizer_path):
                with open(vectorizer_path, "rb") as f:
                    self.vectorizer = pickle.load(f)
                return True and base_result
            else:
                return False
        except Exception as e:
            print(f"Error loading model {self.model_name}: {e}")
        return False


if __name__ == "__main__":
    model = DependencyDetectionNN(model_dir="../models")
    metrics = model.train_model()
    print(f"Training metrics: {metrics}")

    test_texts = [
        "I always put everyone else's needs before my own",
        "I set healthy boundaries in my relationships",
        "I keep everyone at arm's length to avoid getting hurt",
    ]

    for text in test_texts:
        result = model.predict(text)
        print(f"\nText: {text}")
        print(f"Result: {result}")
