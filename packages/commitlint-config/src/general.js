import { RuleConfigSeverity } from '@commitlint/types'

const config = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'body-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
    'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'],
    'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
    'header-trim': [RuleConfigSeverity.Error, 'always'],
    'subject-case': [RuleConfigSeverity.Error, 'always', ['sentence-case', 'start-case']],
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'type-empty': [RuleConfigSeverity.Error, 'never'],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        '✨ feat', // A new feature
        '🐞 fix', // A bug fix
        '♻️ refactor', // A code change that neither fixes a bug nor adds a feature
        '⚙️ config', // A change in configuration files (package.json, tsconfig.json, etc.)
        '📦 deps', // Changes in dependencies (add, update, remove, etc.)
        '🧪 test', // Adding missing tests or correcting existing tests
        '🌐 i18n', // Internationalization and localization
        '📄 docs', // Documentation-only changes
        '⏮️ revert', // A commit that reverts a previous commit
        '🔀 merge', // A merge between branches
      ],
    ],
    'scope-empty': [RuleConfigSeverity.Warning, 'never'],
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'global', // Global changes (e.g. project configuration, main readme, etc.)
        'apps', // Changes in the applications (e.g. web, mobile, admin, etc.)
        'packages', // Changes in the packages (e.g. ui, utils, api, etc.)
      ],
    ],
  },
}

export default config
