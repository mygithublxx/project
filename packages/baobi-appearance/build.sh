#!/bin/bash

set -e # exit if error

FILENAME="baobi.css"
MIN_FILENAME="baobi.min.css"

npx lessc --js  ./index.less "${FILENAME}"
npx lessc -x "${FILENAME}" "${MIN_FILENAME}"

