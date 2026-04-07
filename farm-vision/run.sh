#!/bin/bash
# MEOK Farm Vision — Launchd service
# Keeps farm vision server running persistently

cd /Users/nicholas/clawd/meok/farm-vision
exec /usr/bin/python3 -m http.server 8888
