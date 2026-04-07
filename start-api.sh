#!/bin/bash
cd /Users/nicholas/clawd/meok
export PYTHONPATH="/Users/nicholas/clawd/meok:$PYTHONPATH"
exec python3 -m uvicorn api.server:app --host 0.0.0.0 --port 3200 "$@"
