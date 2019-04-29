module.exports = {
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  env: {
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
