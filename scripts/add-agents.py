#!/usr/bin/env python3
"""
SOV3 Agent Manager - Add agents via direct SQL
"""

import subprocess


def run_sql(sql):
    result = subprocess.run(
        [
            "docker",
            "exec",
            "sovereign-postgres",
            "psql",
            "-U",
            "sovereign",
            "-d",
            "sovereign_memory",
            "-c",
            sql,
        ],
        capture_output=True,
        text=True,
    )
    return result.stdout


def add_agents():
    agents = [
        (
            "orion-001",
            "Orion",
            "Strategic planning and project orchestration agent",
            ["planning", "coordination", "strategy"],
            "idle",
            0.7,
        ),
        (
            "riri-001",
            "Riri",
            "Research and information synthesis agent",
            ["research", "analysis", "synthesis"],
            "idle",
            0.7,
        ),
        (
            "hourman-001",
            "Hourman",
            "Time-aware task execution and scheduling agent",
            ["task_execution", "scheduling", "automation"],
            "idle",
            0.7,
        ),
        (
            "guardian-001",
            "Guardian",
            "Safety monitoring and threat detection agent",
            ["safety", "monitoring", "protection"],
            "active",
            0.9,
        ),
        (
            "builder-001",
            "Builder",
            "Code generation and technical implementation agent",
            ["coding", "implementation", "technical"],
            "idle",
            0.7,
        ),
    ]

    print("🧑‍🤝‍🧑 Adding Specialized Agents to SOV3")
    print("=" * 45)

    for agent_id, name, desc, caps, status, trust in agents:
        caps_str = "{" + ",".join(caps) + "}"
        sql = f"""
        INSERT INTO agents (id, name, description, capabilities, status, trust_level, created_at, last_seen, metadata, relationships, performance_score, tasks_completed, tasks_failed)
        VALUES ('{agent_id}', '{name}', '{desc}', '{caps_str}', '{status}', {trust}, NOW(), NOW(), '{{}}', '{{}}', 0.5, 0, 0)
        ON CONFLICT (id) DO NOTHING;
        """
        result = run_sql(sql)
        if "INSERT 0 1" in result:
            print(f"✅ Added: {name}")
        else:
            print(f"⚠️  {name}: {result[:50]}")

    # Verify
    print("\n📋 Agent Count:")
    result = run_sql("SELECT name, COUNT(*) FROM agents GROUP BY name;")
    print(result)


if __name__ == "__main__":
    add_agents()
