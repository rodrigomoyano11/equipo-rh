'use client'

import { ThemeProvider } from '../../ThemeProvider'
import { ClientProvidersProps } from './types'

const ClientProviders = ({ children }: ClientProvidersProps) => (
  <ThemeProvider>{children}</ThemeProvider>
)

export { ClientProviders }
export type { ClientProvidersProps }
