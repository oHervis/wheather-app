module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    camelcase: 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'import/no-cycle': 'off',
    'no-underscore-dangle': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: ['*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};
