#!/bin/bash
# Launch Rheyya's Affirmations App
PORT=3333
cd "$(dirname "$0")"

echo "🌸 Starting Rheyya's Affirmations on http://localhost:$PORT"

# Kill anything on port 3333
lsof -ti tcp:$PORT | xargs kill -9 2>/dev/null

# Start dev server
PORT=$PORT npm run dev &
SERVER_PID=$!

# Wait for server to come up then open browser
sleep 3
open "http://localhost:$PORT"

echo "✦ App running at http://localhost:$PORT (PID: $SERVER_PID)"
wait $SERVER_PID
