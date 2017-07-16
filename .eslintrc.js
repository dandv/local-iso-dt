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
    'import/prefer-default-export': 'off',  // https://basarat.gitbooks.io/typescript/content/docs/tips/defaultIsBad.html
    'no-mixed-operators': 0,
  }
};
