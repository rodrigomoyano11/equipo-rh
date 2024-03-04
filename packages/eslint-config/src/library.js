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
    node: true,
  },
  settings: { 'import/resolver': { typescript: { project } } },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  rules: {
    'import/no-default-export': 'off',
  },
}

module.exports = config
