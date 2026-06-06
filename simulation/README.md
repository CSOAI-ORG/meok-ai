# DEFONOS DeepMind Simulation Stack

This directory contains the upgraded simulation and reinforcement learning frameworks based on DeepMind's architectural patterns.

## Components

1. **`mjx_defonos.py`**: Replaces the Python Monte Carlo latency simulations with JAX-accelerated physics via **MuJoCo MJX**. This enables simulating thousands of physical drone/arm instances on the GPU concurrently.
2. **`marl_acme.py`**: Introduces the **Acme** Multi-Agent Reinforcement Learning (MARL) framework to train the Swarm "Council" to reach consensus under simulated EW threats, replacing hardcoded logic.
3. **`gnn_topology.py`**: Uses **PyTorch Geometric** and Graph Attention Networks (GAT) to model the WaggleNet / 9-Node Cluster topology, predicting network congestion and optimizing routing dynamically.

## Setup Instructions

Ensure you are in the `meok-ai` virtual environment, then install the DeepMind stack:

```bash
pip install -r meok-ai/simulation/requirements.txt
```

## Running the Simulations

**1. Run the MuJoCo MJX Physics Swarm (GPU-Accelerated)**
```bash
python meok-ai/simulation/mjx_defonos.py
```

**2. Train the MARL Council via Acme**
```bash
python meok-ai/simulation/marl_acme.py
```

**3. Optimize Topology via Graph Neural Networks**
```bash
python meok-ai/simulation/gnn_topology.py
```
