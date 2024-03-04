const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [require.resolve('@vercel/style-guide/eslint/next'), require.resolve('./general.js')],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  settings: {
    'import/resolver': { typescript: { project } },
    'react': { version: 'detect' },
  },
  ignorePatterns: ['.*.js', 'node_modules/', '*.config.js'],
  overrides: [
    { files: ['*.js?(x)', '*.ts?(x)'] },
    {
      files: [
        '*/**/{page,error,instrumentation,default,layout,loading,middleware,not-found,route,template}.{js?(x),ts?(x)}',
        '*/**/.config.*',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
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
