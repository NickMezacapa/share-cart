module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'no-restricted-globals': ['error', 'name', 'length'],
    'no-trailing-spaces': ['warn'],
    'no-multi-spaces': ['warn'],
    'indent': ['warn'],
    'max-len': ['warn'],
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['warn'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'semi': ['off'],
    'object-curly-spacing': ['off'],
    'no-unused-vars': ['warn'],
    'space-in-parens': ['off'],
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
}
