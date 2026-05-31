#!/usr/bin/env bash
set -euo pipefail
SOURCES=(
  "static/assets/projects/astro-miner/exp_3.png"
  "static/assets/projects/circloops/lvl-11_3.png"
  "static/assets/projects/people-hr/login.jpeg"
  "static/assets/projects/sebyone/daas-iot-example-dccs/cover.png"
  "static/assets/projects/git2megaignore/cover.png"
  "static/assets/projects/personal-website/cover.png"
  "static/assets/projects/cookedup/cover.png"
  "static/assets/projects/risk-asp/turn-15-cards.png"
  "static/assets/projects/school-timetable/cover.png"
  "static/assets/projects/burn-tables/cover.png"
  "static/assets/projects/svinted/home.png"
  "static/assets/projects/cave-generator/cover.png"
  "static/assets/projects/focus/home.png"
)
for src in "${SOURCES[@]}"; do
  if [ ! -f "$src" ]; then
    echo "Missing: $src" >&2
    continue
  fi
  out="${src%.*}.webp"
  mkdir -p "$(dirname "$out")"
  magick "$src" -resize 600x -strip -quality 80 "$out"
  echo "Converted: $src -> $out"
done
