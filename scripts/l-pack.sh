#!/bin/bash

set -e

PACK_DIR="../../pack/"
LIBRARY_PATTERN="./nest-lib/*"

COMMAND=$1
ARGS=${@:2}

libraries=$(pnpm --filter "$LIBRARY_PATTERN" list --depth -1 --json | jq -r '.[].path')

echo $libraries

while IFS= read -r lib; do
  echo "packing: $lib"
  echo ""
  cd "$lib"
  pnpm pack --pack-destination="$PACK_DIR"
done <<< "$libraries"