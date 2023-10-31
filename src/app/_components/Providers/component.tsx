import { ClientProviders } from './ClientProviders'
import { ServerProviders } from './ServerProviders'
import { ProvidersProps } from './types'

const Providers = ({ children }: ProvidersProps) => (
  <ServerProviders>
    <ClientProviders>{children}</ClientProviders>
  </ServerProviders>
)

export type { ProvidersProps }
export { Providers }
