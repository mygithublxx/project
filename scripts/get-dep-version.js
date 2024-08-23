const { spawn } = require("child_process");

const depName = process.argv[2];

if (depName) {
  const npm = spawn("npm", ["ls", "--json", depName]);
  npm.stdout.on("data", (data) => {
    try {
      const json = JSON.parse(data.toString());
      process.stdout.write(json.dependencies[depName].version);
    } catch (e) {
      throw e;
    }
  });
  npm.on("error", (error) => {
    throw error;
  });
} else {
  throw new Error(`Not found ${depName} dependence name.`);
}
