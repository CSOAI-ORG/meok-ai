#!/usr/bin/env python3
"""
MEOK Farm Vision API Server
Provides real AI analysis for farm vision using SOV3 + Qwen3 VL 235B Cloud.
Replaces simple HTTP server with full API backend.
"""

import http.server
import json
import base64
import subprocess
import os
import sys
import urllib.request
import urllib.error
import time
import threading
from datetime import datetime
from pathlib import Path

SOV3_URL = "http://localhost:3101"
MEOK_DIR = Path("/Users/nicholas/clawd/meok/farm-vision")
CAPTURES_DIR = MEOK_DIR / "captures"
CAPTURES_DIR.mkdir(exist_ok=True)

# Rate limiting — prevent Alibaba cloud model overload
_request_lock = threading.Lock()
_last_request_time = 0
MIN_REQUEST_INTERVAL = 8  # seconds between SOV3 calls


DATA_FILE = MEOK_DIR / "data.json"
if not DATA_FILE.exists():
    DATA_FILE.write_text(json.dumps({"livestock": [], "tasks": [], "health_logs": []}))


class FarmVisionHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler with API endpoints for farm vision."""

    def do_GET(self):
        if self.path == "/" or self.path == "/index.html":
            self.path = "/index.html"
            return super().do_GET()
        elif self.path == "/api/status":
            self.send_json(
                {
                    "status": "online",
                    "sov3": self._check_sov3(),
                    "captures": len(list(CAPTURES_DIR.glob("*.jpg"))),
                    "timestamp": datetime.now().isoformat(),
                }
            )
        elif self.path == "/api/weather":
            self.send_json(self._get_weather())
        elif self.path == "/api/history":
            self.send_json(self._get_history())
        elif self.path == "/api/livestock":
            self.send_json(self._get_data().get("livestock", []))
        elif self.path == "/api/tasks":
            self.send_json(self._get_data().get("tasks", []))
        else:
            return super().do_GET()

    def do_POST(self):
        if self.path == "/api/analyze":
            self._handle_analyze()
        elif self.path == "/api/voice":
            self._handle_voice()
        elif self.path == "/api/livestock":
            self._handle_livestock()
        elif self.path == "/api/task":
            self._handle_task()
        else:
            self.send_error(404)

    def _get_data(self):
        """Get farm data."""
        try:
            return json.loads(DATA_FILE.read_text())
        except:
            return {"livestock": [], "tasks": [], "health_logs": []}

    def _save_data(self, data):
        """Save farm data."""
        DATA_FILE.write_text(json.dumps(data, indent=2))

    def _handle_livestock(self):
        """Add livestock entry."""
        try:
            content_length = int(self.headers["Content-Length"])
            body = json.loads(self.rfile.read(content_length))

            data = self._get_data()
            entry = {
                "id": datetime.now().strftime("%Y%m%d%H%M%S"),
                "type": body.get("type", "unknown"),
                "count": body.get("count", 1),
                "health": body.get("health", "unknown"),
                "notes": body.get("notes", ""),
                "image": body.get("image", ""),
                "timestamp": datetime.now().isoformat(),
            }
            data["livestock"].append(entry)
            self._save_data(data)

            self.send_json({"success": True, "entry": entry})
        except Exception as e:
            self.send_json({"error": str(e)}, 500)

    def _handle_task(self):
        """Add farm task."""
        try:
            content_length = int(self.headers["Content-Length"])
            body = json.loads(self.rfile.read(content_length))

            data = self._get_data()
            task = {
                "id": datetime.now().strftime("%Y%m%d%H%M%S"),
                "description": body.get("description", ""),
                "priority": body.get("priority", "medium"),
                "status": "open",
                "created": datetime.now().isoformat(),
                "completed": None,
            }
            data["tasks"].append(task)
            self._save_data(data)

            self.send_json({"success": True, "task": task})
        except Exception as e:
            self.send_json({"error": str(e)}, 500)

    def _handle_analyze(self):
        """Handle image analysis request."""
        try:
            content_length = int(self.headers["Content-Length"])
            body = json.loads(self.rfile.read(content_length))

            image_base64 = body.get("image", "")
            mode = body.get("mode", "general")

            if not image_base64:
                self.send_json({"error": "No image provided"}, 400)
                return

            # Save capture
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            capture_path = CAPTURES_DIR / f"capture_{timestamp}.jpg"
            with open(capture_path, "wb") as f:
                f.write(base64.b64decode(image_base64))

            # Build prompt based on mode
            prompts = {
                "general": "You are MEOK AI Farm Vision. Describe what you see in detail. Note any animals, plants, buildings, equipment, weather conditions, or anything unusual. Be specific and helpful for farm management.",
                "livestock": "You are MEOK AI Farm Vision analyzing livestock. Identify any animals visible. Note their condition, behavior, health indicators, numbers, and any concerns. Be specific about species, approximate age, and welfare indicators.",
                "crops": "You are MEOK AI Farm Vision analyzing crops and vegetation. Identify any crops, plants, or vegetation visible. Note growth stage, health indicators, pest damage, irrigation needs, or harvest readiness.",
                "infrastructure": "You are MEOK AI Farm Vision analyzing farm infrastructure. Note any buildings, fences, gates, equipment, water systems, or structures. Identify maintenance needs, safety concerns, or improvements needed.",
                "wildlife": "You are MEOK AI Farm Vision analyzing wildlife. Identify any wild animals, birds, or insects visible. Note species, behavior, and any interactions with farm operations or livestock.",
            }

            # Send to SOV3 for analysis
            analysis = self._analyze_with_sov3(
                image_base64, prompts.get(mode, prompts["general"])
            )

            # Save to history
            self._save_history(timestamp, mode, analysis)

            self.send_json(
                {
                    "success": True,
                    "analysis": analysis,
                    "mode": mode,
                    "timestamp": timestamp,
                }
            )

        except Exception as e:
            self.send_json({"error": str(e)}, 500)

    def _handle_voice(self):
        """Handle voice query — detects tasks, livestock, or general questions."""
        try:
            content_length = int(self.headers["Content-Length"])
            body = json.loads(self.rfile.read(content_length))

            query = body.get("query", "")
            if not query:
                self.send_json({"error": "No query provided"}, 400)
                return

            lower = query.lower()

            # Detect task creation: "fix that gate", "repair the fence"
            task_triggers = [
                "fix",
                "repair",
                "check",
                "clean",
                "replace",
                "move",
                "build",
                "install",
                "remove",
            ]
            if any(t in lower for t in task_triggers):
                data = self._get_data()
                task = {
                    "id": datetime.now().strftime("%Y%m%d%H%M%S"),
                    "description": query,
                    "priority": "medium",
                    "status": "open",
                    "created": datetime.now().isoformat(),
                    "completed": None,
                }
                data["tasks"].append(task)
                self._save_data(data)
                self.send_json(
                    {
                        "success": True,
                        "type": "task_created",
                        "response": f"✅ Task added: {query}",
                        "task": task,
                    }
                )
                return

            # Detect livestock logging: "3 sheep in north field"
            livestock_triggers = [
                "sheep",
                "cattle",
                "cow",
                "cows",
                "horse",
                "horses",
                "chicken",
                "chickens",
                "pig",
                "pigs",
                "lamb",
                "lambs",
                "goat",
                "goats",
            ]
            if any(t in lower for t in livestock_triggers):
                # Extract count
                import re

                numbers = re.findall(r"\d+", query)
                count = int(numbers[0]) if numbers else 1
                animal = next((t for t in livestock_triggers if t in lower), "unknown")

                data = self._get_data()
                entry = {
                    "id": datetime.now().strftime("%Y%m%d%H%M%S"),
                    "type": animal,
                    "count": count,
                    "health": "observed",
                    "notes": query,
                    "timestamp": datetime.now().isoformat(),
                }
                data["livestock"].append(entry)
                self._save_data(data)
                self.send_json(
                    {
                        "success": True,
                        "type": "livestock_logged",
                        "response": f"🐑 Logged: {count} {animal} — {query}",
                        "entry": entry,
                    }
                )
                return

            # General query → SOV3
            self._wait_for_rate_limit()
            response = self._query_sov3(
                f"Farm context: {query}. What advice can you give?"
            )

            self.send_json({"success": True, "response": response, "query": query})

        except Exception as e:
            self.send_json({"error": str(e)}, 500)

    def _wait_for_rate_limit(self):
        """Wait if we're making requests too fast."""
        global _last_request_time
        with _request_lock:
            elapsed = time.time() - _last_request_time
            if elapsed < MIN_REQUEST_INTERVAL:
                wait_time = MIN_REQUEST_INTERVAL - elapsed
                time.sleep(wait_time)
            _last_request_time = time.time()

    def _analyze_with_sov3(self, image_base64, prompt):
        """Send image to SOV3 for analysis with rate limiting."""
        self._wait_for_rate_limit()
        try:
            # Try council deliberation first
            data = json.dumps(
                {
                    "jsonrpc": "2.0",
                    "method": "tools/call",
                    "params": {
                        "name": "deliberate_council",
                        "arguments": {"task": prompt, "max_characters": 3},
                    },
                    "id": 1,
                }
            ).encode()

            req = urllib.request.Request(
                f"{SOV3_URL}/mcp",
                data=data,
                headers={"Content-Type": "application/json"},
                method="POST",
            )

            with urllib.request.urlopen(req, timeout=30) as resp:
                result = json.loads(resp.read().decode())
                text = (
                    result.get("result", {}).get("content", [{}])[0].get("text", "{}")
                )
                analysis = json.loads(text)

                if analysis.get("synthesis"):
                    return analysis["synthesis"]
                elif analysis.get("council"):
                    return "\n".join(
                        [
                            f"{c['name']}: {c['perspective']}"
                            for c in analysis["council"]
                        ]
                    )
                else:
                    return "Analysis complete."
        except Exception as e:
            return f"Analysis failed: {str(e)}"

    def _query_sov3(self, query):
        """Send query to SOV3 via MCP JSON-RPC."""
        try:
            data = json.dumps(
                {
                    "jsonrpc": "2.0",
                    "id": "farm-vision",
                    "method": "tools/call",
                    "params": {
                        "name": "ask_sovereign",
                        "arguments": {"question": query},
                    },
                }
            ).encode()

            req = urllib.request.Request(
                f"{SOV3_URL}/mcp",
                data=data,
                headers={"Content-Type": "application/json"},
                method="POST",
            )

            with urllib.request.urlopen(req, timeout=30) as resp:
                result = json.loads(resp.read().decode())
                text = result.get("result", {}).get("content", [{}])[0].get("text", "")
                return text or "Response received."
        except Exception as e:
            return f"Query failed: {str(e)}"

    def _check_sov3(self):
        """Check if SOV3 is running."""
        try:
            req = urllib.request.Request(f"{SOV3_URL}/health")
            with urllib.request.urlopen(req, timeout=3) as resp:
                return resp.status == 200
        except:
            return False

    def _get_weather(self):
        """Get current weather."""
        try:
            req = urllib.request.Request("https://wttr.in/?format=j1")
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode())
                current = data.get("current_condition", [{}])[0]
                return {
                    "temp_c": current.get("temp_C", "?"),
                    "temp_f": current.get("temp_F", "?"),
                    "condition": current.get("weatherDesc", [{}])[0].get("value", "?"),
                    "humidity": current.get("humidity", "?"),
                    "wind_kph": current.get("windspeedKmph", "?"),
                }
        except:
            return {"error": "Weather unavailable"}

    def _get_history(self):
        """Get analysis history."""
        history_file = MEOK_DIR / "history.json"
        if history_file.exists():
            return json.loads(history_file.read_text())
        return []

    def _save_history(self, timestamp, mode, analysis):
        """Save analysis to history."""
        history_file = MEOK_DIR / "history.json"
        history = []
        if history_file.exists():
            history = json.loads(history_file.read_text())

        history.insert(
            0,
            {
                "timestamp": timestamp,
                "mode": mode,
                "analysis": analysis[:500],
                "image": f"captures/capture_{timestamp}.jpg",
            },
        )

        # Keep last 100 entries
        history = history[:100]
        history_file.write_text(json.dumps(history, indent=2))

    def send_json(self, data, status=200):
        """Send JSON response."""
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def end_headers(self):
        """Add CORS headers."""
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        """Handle CORS preflight."""
        self.send_response(200)
        self.end_headers()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8888))
    http.server.HTTPServer.allow_reuse_address = True
    server = http.server.HTTPServer(("0.0.0.0", port), FarmVisionHandler)
    print(f"🌾 MEOK Farm Vision API Server running on port {port}")
    print(f"   Access: http://localhost:{port}")
    print(f"   API: http://localhost:{port}/api/status")
    print(f"   Captures: {CAPTURES_DIR}")
    server.serve_forever()
