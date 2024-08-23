module.exports = {
  extends: [require.resolve("@gw/eslint-config-gw")],
  rules: {
    'no-undef': 0,
    "no-unused-vars": "off",
    "no-use-before-define": 'off',
    "@typescript-eslint/no-use-before-define": 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
  },
};
