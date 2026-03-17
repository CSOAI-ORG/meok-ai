#!/usr/bin/env python3
"""
MEOK.ai — Hatch Your Sovereign AI

One-command bootstrap to bring up a MEOK instance.
Usage: python hatch.py [--name NAME] [--port PORT]
"""

import argparse
import os
import subprocess
import sys
import time


def main():
    parser = argparse.ArgumentParser(description="Hatch a new MEOK.ai instance")
    parser.add_argument("--name", default="Sovereign", help="Name your AI (default: Sovereign)")
    parser.add_argument("--port", type=int, default=3100, help="MCP server port (default: 3100)")
    parser.add_argument("--detach", "-d", action="store_true", help="Run in background")
    parser.add_argument("--rebuild", action="store_true", help="Force rebuild containers")
    args = parser.parse_args()

    meok_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(meok_dir)

    # Set environment
    env = os.environ.copy()
    env["MEOK_MCP_PORT"] = str(args.port)
    env["MEOK_HATCH_NAME"] = args.name

    print(f"""
    ╔══════════════════════════════════════╗
    ║        MEOK.ai — Hatching...         ║
    ║                                      ║
    ║   Name: {args.name:<28s} ║
    ║   Port: {args.port:<28d} ║
    ╚══════════════════════════════════════╝
    """)

    # Build and start
    cmd = ["docker", "compose", "up"]
    if args.detach:
        cmd.append("-d")
    if args.rebuild:
        cmd.append("--build")

    print("Starting services...")
    result = subprocess.run(cmd, env=env, cwd=meok_dir)

    if result.returncode == 0 and args.detach:
        # Wait for health
        print("\nWaiting for MEOK to come alive...")
        for i in range(30):
            try:
                import urllib.request
                response = urllib.request.urlopen(f"http://localhost:{args.port}/health")
                if response.status == 200:
                    print(f"""
    ╔══════════════════════════════════════╗
    ║       {args.name} is alive!              ║
    ║                                      ║
    ║   MCP:  http://localhost:{args.port}/mcp    ║
    ║   Health: http://localhost:{args.port}/health║
    ╚══════════════════════════════════════╝
                    """)
                    return 0
            except Exception:
                pass
            time.sleep(2)
            print(f"  Waiting... ({i+1}/30)")

        print("MEOK is starting up (may take a moment for models to load)")

    return result.returncode


if __name__ == "__main__":
    sys.exit(main())
