'use client'

import { I18nProvider as AriaI18nProvider } from '@react-aria/i18n'
import { ThemeProvider } from '../../ThemeProvider'
import { ZodI18nProvider } from '../../ZodI18nProvider'
import { ClientProvidersProps } from './types'

const ClientProviders = ({ children }: ClientProvidersProps) => (
  <ThemeProvider>
    <AriaI18nProvider locale="es">
      <ZodI18nProvider>{children}</ZodI18nProvider>
    </AriaI18nProvider>
  </ThemeProvider>
)

export { ClientProviders }
export type { ClientProvidersProps }
