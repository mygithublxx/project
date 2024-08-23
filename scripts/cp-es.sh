#!/bin/bash

PROJECT=$1
echo "run cp-es shell. project path: $PROJECT"
[[ -z $PROJECT ]] && echo -ne "Please enter a project path.\nlike ../we-seeds-pro" && exit 1

NAME=$(node ./scripts/pkg-get.js name | tr -d '"')
rm -r "$PROJECT/node_modules/$NAME/es"
rm -r "$PROJECT/node_modules/$NAME/lib"

cp -r es lib "$PROJECT/node_modules/$NAME"

VERSION=$(node ./scripts/pkg-get.js version | tr -d '"')
mkdir -p "$PROJECT/public/css"
cp -r "umd/$VERSION/index.min.css" "$PROJECT/public/css/index.min.css"
