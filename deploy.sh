#!/usr/bin/env sh

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M master &&
git remote add origin git@github.com:adekang/react-visualization-web02.git&&
git push -f -u origin master &&
cd -