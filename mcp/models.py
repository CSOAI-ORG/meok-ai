"""
Pydantic models and shared types for the MEOK MCP Server.
"""

from typing import Optional, Dict, Any
from pydantic import BaseModel


class ToolCall(BaseModel):
    name: str
    arguments: Dict[str, Any]


class McpRequest(BaseModel):
    jsonrpc: str = "2.0"
    id: Optional[str] = None
    method: str
    params: Optional[Dict[str, Any]] = None
