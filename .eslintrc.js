const config = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error'
  }
};

module.exports = config;
