const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [require.resolve('./general.js')],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': { typescript: { project } },
    'react': { version: 'detect' },
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  plugins: ['react'],
  rules: {
    // React
    'react/self-closing-comp': 'warn',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/boolean-prop-naming': 'error',
    'react/sort-prop-types': ['error', { requiredFirst: true, callbacksLast: true }],
    'react/jsx-sort-props': [
      'error',
      { callbacksLast: true, shorthandFirst: true, multiline: 'last', reservedFirst: true },
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-key': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
}

module.exports = config
