# !/bin/bash
VERSION=$(node ./scripts/pkg-get.js version | tr -d '"')
mkdir -p umd/$VERSION
cd ./umd

cp -f ./*.{css,js,map,txt} ./"$VERSION"/
cp -r static ./"$VERSION"/static

cd $VERSION

mv *.css index.min.css
mv *.js index.min.js

cd ../

rm -r static/
rm *.css *.js *.map *.txt