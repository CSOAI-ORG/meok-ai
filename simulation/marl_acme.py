import jax
import jax.numpy as jnp
import haiku as hk
import optax
import numpy as np

# Pure JAX/Haiku implementation of the Council Consensus Learner
# Replaces Acme to avoid Python 3.9 compatibility issues with dm-launchpad

class CouncilConsensusModel(hk.Module):
    def __init__(self, action_dim=4):
        super().__init__()
        self.action_dim = action_dim

    def __call__(self, obs):
        x = hk.Linear(64)(obs)
        x = jax.nn.relu(x)
        x = hk.Linear(64)(x)
        x = jax.nn.relu(x)
        logits = hk.Linear(self.action_dim)(x)
        return logits

def loss_fn(params, obs, target):
    model = hk.transform(lambda o: CouncilConsensusModel()(o))
    pred = model.apply(params, None, obs)
    return jnp.mean(jnp.square(pred - target))

def train_step(params, opt_state, obs, target, optimizer):
    grad_fn = jax.value_and_grad(loss_fn)
    loss, grads = grad_fn(params, obs, target)
    updates, opt_state = optimizer.update(grads, opt_state)
    params = optax.apply_updates(params, updates)
    return params, opt_state, loss

def run_consensus_learning():
    print("Initializing MEOK Council Consensus Learner (JAX/Haiku/Optax)...")
    
    # Mock observation: [EW_Level, Node_Count, Connectivity, Latency]
    obs = jnp.array([[0.8, 33, 1.0, 0.05]], dtype=jnp.float32)
    # Target consensus vector
    target = jnp.array([[0.5, -0.5, 0.5, -0.5]], dtype=jnp.float32)
    
    # Initialize Haiku model
    model = hk.transform(lambda o: CouncilConsensusModel()(o))
    rng = jax.random.PRNGKey(42)
    params = model.init(rng, obs)
    
    # Initialize Optimizer
    optimizer = optax.adam(1e-3)
    opt_state = optimizer.init(params)
    
    print("Starting Consensus Optimization...")
    for i in range(101):
        params, opt_state, loss = train_step(params, opt_state, obs, target, optimizer)
        if i % 20 == 0:
            print(f"Iteration {i}: Consensus Loss = {loss:.6f}")
            
    print("✅ Council Consensus Model Trained.")
    print("Final Consensus Logic stabilized.")

if __name__ == "__main__":
    run_consensus_learning()
