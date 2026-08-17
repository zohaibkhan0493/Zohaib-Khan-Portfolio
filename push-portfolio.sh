#!/bin/bash
# One-time push helper — paste Zohaib's ghp_ token when prompted (input is hidden)
set -e
cd "$(dirname "$0")"

echo ""
echo "Paste your Zohaib GitHub token (ghp_...) and press Enter:"
read -rs TOKEN
echo ""

if [ -z "$TOKEN" ]; then
  echo "No token entered. Cancelled."
  exit 1
fi

git -c credential.helper= push "https://zohaibkhan0493:${TOKEN}@github.com/zohaibkhan0493/Zohaib-Khan-Portfolio.git" main

git remote set-url origin https://github.com/zohaibkhan0493/Zohaib-Khan-Portfolio.git
git branch --set-upstream-to=origin/main main 2>/dev/null || true

echo ""
echo "Done. Check https://github.com/zohaibkhan0493/Zohaib-Khan-Portfolio"
