const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");

/** @todo 目前地址会访问主站资源，期望使用cdn场景 */
pkg.assetsPath = `/static/web-business-components/${pkg.version}/`;

fs.writeFileSync(
  path.resolve(__dirname, "../package.json"),
  JSON.stringify(pkg, undefined, "  "),
  "utf8"
);

console.log(`Set "assetsPath": "${pkg.assetsPath}"`);
