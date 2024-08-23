const lessColorFunc = require("less/lib/less/functions/color").default;

module.exports = {
  extends: [require.resolve("@gw/stylelint-config-gw")],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "color-function-notation": "legacy",
    "property-no-vendor-prefix": [
      true,
      { ignoreProperties: [/background-clip/] },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: [...Object.keys(lessColorFunc)],
      },
    ],
  },
};
