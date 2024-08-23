#!/usr/bin/env sh
set -e

BUILD_ENV=$1
# doc building deps es module.

echo 'Run gw-scripts build...'
if ! gw-scripts lib-components "$BUILD_ENV";then
  echo "Run \`gw-scripts lib-components\` failed."
  exit 1
fi

if [ "$BUILD_ENV" == 'dev' ];then
  echo 'Run docusaurus build...'
  docusaurus build
else
  echo 'Make build directory...'
  mkdir -p build
fi
