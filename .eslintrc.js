module.exports = {
  'parserOptions': {
    'ecmaVersion': 8,
  },
  extends: ['airbnb-base'],
  plugins: [
    'jest'
  ],
  env: {
    'jest/globals': true
  },
  rules: {
    'no-mixed-operators': 0,
  }
};
