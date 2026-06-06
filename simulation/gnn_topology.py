import torch
import torch.nn.functional as F
from torch_geometric.nn import GATConv
from torch_geometric.data import Data
import networkx as nx

class TopologyGNN(torch.nn.Module):
    """
    Graph Neural Network for modeling the MEOK System Topology.
    Uses Graph Attention Networks (GAT) to route data optimally across the
    WaggleNet / 9-Node Cluster based on simulated network congestion.
    """
    def __init__(self, num_node_features, num_classes):
        super(TopologyGNN, self).__init__()
        # Graph Attention Layers
        self.conv1 = GATConv(num_node_features, 8, heads=8, dropout=0.6)
        self.conv2 = GATConv(8 * 8, num_classes, heads=1, concat=False, dropout=0.6)

    def forward(self, data):
        x, edge_index = data.x, data.edge_index

        # First attention layer
        x = F.dropout(x, p=0.6, training=self.training)
        x = self.conv1(x, edge_index)
        x = F.elu(x)
        
        # Second attention layer
        x = F.dropout(x, p=0.6, training=self.training)
        x = self.conv2(x, edge_index)

        # Output represents network health/optimal routing per node
        return F.log_softmax(x, dim=1)

def simulate_meok_topology():
    print("Building MEOK Graph Topology for GNN...")
    
    # Representing the 9-node cluster + farm nodes
    # 0: synthesis_core, 1-3: simulation_engine, 4-8: geoint_harvesters
    edge_index = torch.tensor([
        [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0]
    ], dtype=torch.long)
    
    # Node features: [Compute Power, Network Latency, Governance Compliance]
    x = torch.tensor([
        [1.0, 0.01, 1.0], # Core
        [0.8, 0.05, 0.9], # Sim 1
        [0.8, 0.04, 0.9], # Sim 2
        [0.8, 0.06, 0.9], # Sim 3
        [0.3, 0.20, 0.8], # Harvester 1
        [0.3, 0.22, 0.8], # Harvester 2
        [0.3, 0.21, 0.8], # Harvester 3
        [0.3, 0.25, 0.8], # Harvester 4
        [0.3, 0.19, 0.8], # Harvester 5
    ], dtype=torch.float)
    
    # Target classes: 0 = Healthy, 1 = Congested, 2 = Compromised
    y = torch.tensor([0, 0, 0, 0, 1, 1, 1, 1, 1], dtype=torch.long)
    
    data = Data(x=x, edge_index=edge_index, y=y)
    
    print(f"Graph Data Created: {data}")
    print("Initializing GAT GNN Model...")
    
    model = TopologyGNN(num_node_features=3, num_classes=3)
    
    # Move to MPS (Apple Silicon GPU) if available
    device = torch.device('mps' if torch.backends.mps.is_available() else 'cpu')
    print(f"Using device: {device}")
    
    model = model.to(device)
    data = data.to(device)
    
    # Forward pass mock
    model.eval()
    with torch.no_grad():
        out = model(data)
        predictions = out.argmax(dim=1)
        print(f"Node Health Predictions: {predictions}")
        print("Topology optimization ready via PyTorch Geometric.")

if __name__ == "__main__":
    simulate_meok_topology()
