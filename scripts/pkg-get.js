const pkg = require("../package.json");

const [, , field] = process.argv;

process.stdout.write(pkg[field]);
