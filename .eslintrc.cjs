module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  env: {
    node: true,  // the Node global `module` is used in this very file, and in jest.config.cjs
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',  // no `a+b`
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  },
};
