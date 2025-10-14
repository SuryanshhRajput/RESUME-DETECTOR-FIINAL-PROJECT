#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting backend..."
"$ROOT_DIR/backend/run.sh" &
BACKEND_PID=$!

trap 'echo "Stopping..."; kill $BACKEND_PID 2>/dev/null || true' EXIT INT TERM

echo "Starting frontend..."
if command -v npm >/dev/null 2>&1; then
  npm run dev
elif command -v bun >/dev/null 2>&1; then
  bun install
  bun run dev
else
  echo "Neither npm nor bun is installed. Please install Node (npm) or Bun." >&2
  exit 1
fi

