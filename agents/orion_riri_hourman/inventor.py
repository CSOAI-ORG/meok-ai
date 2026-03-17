"""
Riri Rapid Inventor
Quick tool generation from templates
"""

import json
from dataclasses import dataclass, asdict
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Callable
from string import Template


@dataclass
class BuiltTool:
    id: str
    name: str
    tool_type: str
    description: str
    source_code: str
    file_path: Optional[str]
    created_at: str
    tags: List[str]
    care_validated: bool
    usage_count: int = 0


class RapidInventor:
    """
    Rapid tool builder inspired by Riri Williams.
    Generates working tools from templates in minutes.
    """

    # Built-in templates
    TEMPLATES = {
        "shell_automation": {
            "description": "Bash script for automation tasks",
            "extension": ".sh",
            "template": '''#!/bin/bash
# ${name}
# ${description}
# Created: ${timestamp}
# Care-validated: ${care_validated}

set -euo pipefail

# Configuration
${config}

# Main logic
main() {
    echo "[$(date)] Starting ${name}..."
    
    ${logic}
    
    echo "[$(date)] ${name} complete!"
}

main "$@"
'''
        },
        "python_cli": {
            "description": "Python CLI utility",
            "extension": ".py",
            "template": '''#!/usr/bin/env python3
"""${description}"""

import argparse
import sys
from datetime import datetime


def main():
    parser = argparse.ArgumentParser(description="${description}")
    ${arguments}
    
    args = parser.parse_args()
    
    print(f"[{datetime.now()}] Starting ${name}...")
    
    ${logic}
    
    print(f"[{datetime.now()}] Complete!")


if __name__ == "__main__":
    main()
'''
        },
        "python_api": {
            "description": "FastAPI endpoint scaffold",
            "extension": ".py",
            "template": '''#!/usr/bin/env python3
"""${description}"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="${name}")


class ${model_name}Request(BaseModel):
    """Request model"""
    ${request_fields}


class ${model_name}Response(BaseModel):
    """Response model"""
    ${response_fields}


@app.post("/${endpoint}")
async def ${endpoint}(request: ${model_name}Request):
    """
    ${description}
    """
    try:
        ${logic}
        return ${model_name}Response(
            status="success",
            ${response_return}
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health():
    return {"status": "healthy", "service": "${name}"}
'''
        },
        "dashboard_card": {
            "description": "Next.js dashboard card component",
            "extension": ".tsx",
            "template": '''"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ${component_name}Props {
  ${props}
}

export function ${component_name}({ ${prop_names} }: ${component_name}Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>${title}</CardTitle>
      </CardHeader>
      <CardContent>
        ${content}
      </CardContent>
    </Card>
  );
}
'''
        },
        "cron_job": {
            "description": "Scheduled job/script",
            "extension": ".py",
            "template": '''#!/usr/bin/env python3
"""${description}

Schedule: ${schedule}
"""

import asyncio
import json
from datetime import datetime


async def run_task():
    """Main task execution"""
    print(f"[{datetime.now()}] Starting scheduled task...")
    
    ${logic}
    
    print(f"[{datetime.now()}] Task complete!")


def main():
    asyncio.run(run_task())


if __name__ == "__main__":
    main()
'''
        },
        "git_hook": {
            "description": "Git hook script",
            "extension": "",
            "template": '''#!/bin/bash
# ${name} - Git ${hook_type} hook
# ${description}

echo "Running ${name}..."

${logic}

if [ $? -ne 0 ]; then
    echo "${name} failed!"
    exit 1
fi

echo "${name} passed!"
'''
        }
    }

    def __init__(self, output_dir: Optional[Path] = None,
                 state_dir: Optional[Path] = None):
        self.output_dir = output_dir or Path(__file__).parent.parent.parent / "tools"
        self.state_dir = state_dir or Path(__file__).parent.parent.parent / "consciousness-core" / "state"
        self.state_file = self.state_dir / "orion_riri_hourman_tools.json"
        
        self.built_tools: List[BuiltTool] = []
        self.custom_templates: Dict[str, Dict] = {}
        self._load_state()

    def _load_state(self):
        """Load inventor state"""
        if self.state_file.exists():
            try:
                with open(self.state_file, 'r') as f:
                    data = json.load(f)
                self.built_tools = [
                    BuiltTool(
                        id=t["id"],
                        name=t["name"],
                        tool_type=t["tool_type"],
                        description=t["description"],
                        source_code=t["source_code"],
                        file_path=t.get("file_path"),
                        created_at=t["created_at"],
                        tags=t["tags"],
                        care_validated=t["care_validated"],
                        usage_count=t.get("usage_count", 0)
                    )
                    for t in data.get("tools", [])
                ]
                self.custom_templates = data.get("custom_templates", {})
            except Exception:
                pass

    def _save_state(self):
        """Persist inventor state"""
        self.state_dir.mkdir(parents=True, exist_ok=True)
        data = {
            "tools": [asdict(t) for t in self.built_tools],
            "custom_templates": self.custom_templates,
            "saved_at": datetime.now().isoformat()
        }
        with open(self.state_file, 'w') as f:
            json.dump(data, f, indent=2)

    def get_available_templates(self) -> Dict:
        """Get list of available templates"""
        all_templates = {**self.TEMPLATES, **self.custom_templates}
        return {
            name: {
                "description": t["description"],
                "extension": t["extension"]
            }
            for name, t in all_templates.items()
        }

    def build_tool(self, template_name: str, params: Dict, 
                   care_validated: bool = True) -> Dict:
        """
        Build a tool from template.
        
        Args:
            template_name: Name of template to use
            params: Template parameters (name, description, logic, etc.)
            care_validated: Whether care membrane approved this
            
        Returns:
            Dict with success status and tool info
        """
        all_templates = {**self.TEMPLATES, **self.custom_templates}
        
        if template_name not in all_templates:
            return {
                "success": False,
                "error": f"Unknown template: {template_name}",
                "available": list(all_templates.keys())
            }
        
        if not care_validated:
            return {
                "success": False,
                "error": "Tool must be validated through care membrane"
            }
        
        template = all_templates[template_name]
        
        # Add default params
        params = {
            **params,
            "timestamp": datetime.now().isoformat(),
            "care_validated": str(care_validated)
        }
        
        # Generate source code
        try:
            source = Template(template["template"]).substitute(params)
        except KeyError as e:
            return {
                "success": False,
                "error": f"Missing template parameter: {e}"
            }
        
        # Create tool record
        tool_id = f"tool_{params.get('name', 'unnamed')}_{hash(source) % 10000}"
        tool = BuiltTool(
            id=tool_id,
            name=params.get("name", "unnamed_tool"),
            tool_type=template_name,
            description=params.get("description", "No description"),
            source_code=source,
            file_path=None,
            created_at=datetime.now().isoformat(),
            tags=params.get("tags", [template_name]),
            care_validated=care_validated
        )
        
        self.built_tools.append(tool)
        self._save_state()
        
        return {
            "success": True,
            "tool": asdict(tool),
            "source_preview": source[:500] + "..." if len(source) > 500 else source
        }

    def save_to_file(self, tool_id: str, subdirectory: Optional[str] = None) -> Dict:
        """Save a built tool to file system"""
        tool = self._get_tool(tool_id)
        if not tool:
            return {"success": False, "error": f"Tool not found: {tool_id}"}
        
        # Determine output path
        output_path = self.output_dir
        if subdirectory:
            output_path = output_path / subdirectory
        output_path.mkdir(parents=True, exist_ok=True)
        
        # Get extension from template
        all_templates = {**self.TEMPLATES, **self.custom_templates}
        ext = all_templates.get(tool.tool_type, {}).get("extension", ".txt")
        
        # Generate filename
        filename = f"{tool.name}{ext}"
        file_path = output_path / filename
        
        # Check for duplicates
        counter = 1
        while file_path.exists():
            filename = f"{tool.name}_{counter}{ext}"
            file_path = output_path / filename
            counter += 1
        
        # Write file
        try:
            with open(file_path, 'w') as f:
                f.write(tool.source_code)
            
            tool.file_path = str(file_path)
            self._save_state()
            
            return {
                "success": True,
                "file_path": str(file_path),
                "tool_id": tool_id
            }
        except Exception as e:
            return {
                "success": False,
                "error": f"Failed to write file: {e}"
            }

    def _get_tool(self, tool_id: str) -> Optional[BuiltTool]:
        """Get tool by ID"""
        for tool in self.built_tools:
            if tool.id == tool_id:
                return tool
        return None

    def get_tool(self, tool_id: str) -> Optional[Dict]:
        """Get tool by ID (public API)"""
        tool = self._get_tool(tool_id)
        return asdict(tool) if tool else None

    def list_tools(self, tag_filter: Optional[str] = None) -> List[Dict]:
        """List all built tools, optionally filtered by tag"""
        tools = self.built_tools
        if tag_filter:
            tools = [t for t in tools if tag_filter in t.tags]
        return [asdict(t) for t in tools]

    def increment_usage(self, tool_id: str):
        """Record tool usage"""
        tool = self._get_tool(tool_id)
        if tool:
            tool.usage_count += 1
            self._save_state()

    def add_custom_template(self, name: str, description: str, 
                           extension: str, template: str) -> Dict:
        """Add a custom template"""
        self.custom_templates[name] = {
            "description": description,
            "extension": extension,
            "template": template
        }
        self._save_state()
        return {
            "success": True,
            "template_name": name,
            "total_templates": len(self.TEMPLATES) + len(self.custom_templates)
        }

    def get_inventor_stats(self) -> Dict:
        """Get inventor statistics"""
        by_type = {}
        for tool in self.built_tools:
            by_type[tool.tool_type] = by_type.get(tool.tool_type, 0) + 1
        
        return {
            "total_tools_built": len(self.built_tools),
            "by_type": by_type,
            "custom_templates": len(self.custom_templates),
            "builtin_templates": len(self.TEMPLATES),
            "most_used": sorted(
                [asdict(t) for t in self.built_tools],
                key=lambda x: x["usage_count"],
                reverse=True
            )[:5]
        }


# Singleton instance
_inventor: Optional[RapidInventor] = None


def get_inventor() -> RapidInventor:
    """Get or create inventor singleton"""
    global _inventor
    if _inventor is None:
        _inventor = RapidInventor()
    return _inventor


if __name__ == "__main__":
    # Test the inventor
    inventor = RapidInventor()
    
    print("Available templates:")
    print(json.dumps(inventor.get_available_templates(), indent=2))
    
    # Build a tool
    result = inventor.build_tool(
        "shell_automation",
        {
            "name": "backup_logs",
            "description": "Backup log files to archive directory",
            "config": 'SOURCE_DIR="./logs"\nARCHIVE_DIR="./archive"',
            "logic": '''
    mkdir -p "$ARCHIVE_DIR"
    find "$SOURCE_DIR" -name "*.log" -type f -mtime +7 -exec cp {} "$ARCHIVE_DIR/" \\;
    echo "Backup complete"
'''
        },
        care_validated=True
    )
    
    print("\nBuild result:")
    print(json.dumps(result, indent=2))
    
    print("\nInventor stats:")
    print(json.dumps(inventor.get_inventor_stats(), indent=2))
