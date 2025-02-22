#!/bin/bash

set -e

REGISTRY=http://localhost:4873
LIBRARY_PATTERN="./nest-lib/*"

COMMAND=$1
ARGS=${@:2}

if curl -s "$REGISTRY/-/ping" > /dev/null; then
  echo "Verdaccio is up  @ $REGISTRY!"
  echo ""
else
  echo "Make sure you start Verdaccio!"
  echo ""
  echo "Usage: pnpm psetup"
  exit 1
fi

if [[ "$COMMAND" == "publish" ]]; then
  pnpm publish --filter "$LIBRARY_PATTERN" --no-git-checks --registry="$REGISTRY" --force "$ARGS"
elif [[ "$COMMAND" == "unpublish" ]]; then
  libraries=$(pnpm --filter "$LIBRARY_PATTERN" list --depth -1 --json | jq -r '.[].name')

  while IFS= read -r lib; do
    echo "unpublishing: $lib"
    echo ""
    if [[ ! -z "$ARGS" ]]; then
      pnpm unpublish "$lib" --registry="$REGISTRY" --force "$ARGS"
    else
      echo "args: $ARGS"
      pnpm unpublish "$lib" --registry="$REGISTRY" --force
    fi
  done <<< "$libraries"
else
  echo "Usage: ./l-registry <publish | unpublish> <args (ex. --dry-run)>"
  exit 1
fi