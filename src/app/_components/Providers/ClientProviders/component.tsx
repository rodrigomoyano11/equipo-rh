'use client'

import { ThemeProvider } from '../../ThemeProvider'
import { ClientProvidersProps } from './types'
import { I18nProvider as AriaI18nProvider } from '@react-aria/i18n'

const ClientProviders = ({ children }: ClientProvidersProps) => (
  <ThemeProvider>
    <AriaI18nProvider locale="es">{children}</AriaI18nProvider>
  </ThemeProvider>
)

export { ClientProviders }
export type { ClientProvidersProps }
