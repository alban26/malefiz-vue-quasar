#!/usr/bin/env sh

set -e

npm run build

cd dist && cp index.html 404.html

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/alban26/malefiz-vue-quasar.git master:gh-pages

cd -
