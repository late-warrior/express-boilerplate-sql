module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-comma-dangle': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-use-before-define': ['error', { variables: false }],
    'no-multi-str': 0,
    'unicorn/prefer-module': 0,
    'unicorn/no-null': 0,
    // ignore this since eslint is not able to find ts modules that use ESM
    'import/no-unresolved': 0,
    // eslint is unable to find the right extension in an ESM module
    'import/extensions': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/prefer-node-protocol': 0,
    'import/prefer-default-export': 0,
  },
  env: {
    node: true,
  },
  ignorePatterns: ['internals/scripts'],
};
