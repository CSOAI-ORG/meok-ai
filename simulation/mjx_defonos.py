import jax
import jax.numpy as jnp
import mujoco
from mujoco import mjx
import time
import os

# Fix for JAX 0.10+ where tree_map moved to jax.tree.map
if not hasattr(jax, 'tree_map'):
    jax.tree_map = jax.tree.map

BASIC_DRONE_XML = """
<mujoco model="defonos_node">
  <compiler angle="degree" coordinate="local"/>
  <option timestep="0.01" gravity="0 0 -9.81"/>
  <worldbody>
    <light pos="0 0 10" dir="0 0 -1" directional="true"/>
    <geom name="floor" type="plane" size="10 10 0.1" rgba="0.2 0.2 0.2 1"/>
    <body name="drone" pos="0 0 1">
      <joint name="root" type="free"/>
      <geom type="box" size="0.2 0.2 0.05" rgba="0.8 0.2 0.2 1" mass="1.0"/>
      <site name="sensor" pos="0 0 0" type="sphere" size="0.05"/>
    </body>
  </worldbody>
  <actuator>
    <motor name="thrust_z" joint="root" ctrlrange="-10 10"/>
  </actuator>
</mujoco>
"""

def step_fn(mx, dx, ctrl):
    """Pure JAX-native physics step."""
    dx = dx.replace(ctrl=ctrl)
    return mjx.step(mx, dx)

class MJXDEFONOSSimulator:
    def __init__(self, xml_string=BASIC_DRONE_XML):
        print("Initializing DeepMind MuJoCo MJX Simulator...")
        self.model = mujoco.MjModel.from_xml_string(xml_string)
        self.data = mujoco.MjData(self.model)
        self.mx = mjx.put_model(self.model)
        self.dx = mjx.put_data(self.model, self.data)

    def run_swarm_simulation(self, batch_size=10000, steps=100):
        print(f"Running {batch_size} parallel physical simulations for {steps} steps...")
        
        # Vmap the step function over data and control
        batched_step = jax.vmap(lambda d, c: step_fn(self.mx, d, c))
        
        # Initialize batch data
        batch_dx = jax.vmap(lambda _: self.dx)(jnp.arange(batch_size))
        
        # Control sequence
        key = jax.random.PRNGKey(42)
        ctrl_sequence = jax.random.uniform(key, shape=(steps, batch_size, self.model.nu), minval=-1.0, maxval=1.0)
        
        @jax.jit
        def scan_fn(dx, ctrl):
            dx = batched_step(dx, ctrl)
            return dx, dx.qpos
            
        start_time = time.perf_counter()
        final_dx, trajectories = jax.lax.scan(scan_fn, batch_dx, ctrl_sequence)
        
        # Block for timing
        trajectories.block_until_ready()
        elapsed = time.perf_counter() - start_time
        
        print(f"✅ Completed {batch_size * steps} physical state updates in {elapsed:.4f} seconds.")
        print(f"Simulation speed: {(batch_size * steps) / elapsed:,.0f} steps/second.")
        
        # Final Z positions (qpos index 2 for free joint)
        final_z = trajectories[-1, :, 2]
        survivability = jnp.mean(final_z > 0.1)
        
        print(f"Swarm Survivability (Physical Integrity): {survivability * 100:.1f}%")
        return trajectories

if __name__ == "__main__":
    sim = MJXDEFONOSSimulator()
    sim.run_swarm_simulation(batch_size=10000, steps=100)
