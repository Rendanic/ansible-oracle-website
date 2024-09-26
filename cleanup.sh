#!/usr/bin/env bash
#
# cleanup docs directory
workdir=$(dirname "$0")

echo "Change workdir to $workdir"
cd "${workdir:-?}" || exit

echo "remove data from docs"
git rm -rf docs

echo "create new docs directory"
mkdir docs

echo "copy old CNAME into docs"
cp CNAME docs

echo "readd CNAME to git"
git add docs/CNAME
