module.exports = {
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-use-before-define': ['error', { variables: false }],
    'no-multi-str': 0,
    'unicorn/prefer-module': 0,
    'unicorn/no-null': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/prefer-node-protocol': 0,
    'import/prefer-default-export': 0,
  },
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: ['airbnb-base', 'plugin:unicorn/recommended'],
  ignorePatterns: ['internals/scripts'],
};
