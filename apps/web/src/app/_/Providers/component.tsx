import { Client } from './Client'
import { Server } from './Server'

type ProvidersProps = React.PropsWithChildren

const Providers = ({ children }: ProvidersProps) => (
  <Server>
    <Client>{children}</Client>
  </Server>
)

export { Providers }
export type { ProvidersProps }
