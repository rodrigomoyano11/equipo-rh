import 'i18next'
import translation from 'zod-i18n-map/locales/es/zod.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'es'
    resources: {
      es: typeof translation
    }
  }
}
