/* eslint-disable */
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    "es2021": true,
    "node": true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/no-empty-function": [0],
    '@typescript-eslint/explicit-function-return-type': 0,
    "@typescript-eslint/semi": ["error", "always"]
  }
};