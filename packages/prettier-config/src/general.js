/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  bracketSameLine: true,
  endOfLine: 'lf',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  overrides: [{ files: '*.eslintrc', options: { trailingComma: 'none' } }],
}

module.exports = config
