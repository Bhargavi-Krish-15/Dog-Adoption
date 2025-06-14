#!/bin/bash

echo "Starting Ollama server..."
ollama serve &
SERVE_PID=$!

echo "Waiting for Ollama server to be active..."
while ! ollama list >/dev/null 2>&1; do
  sleep 1
done

echo "Pulling model: llama3.2:3b ..."
ollama pull llama3.2:3b

echo "Pulling embedding model: nomic-embed-text..."
ollama pull nomic-embed-text

echo "Models pulled successfully. Ollama is ready."
wait $SERVE_PID
