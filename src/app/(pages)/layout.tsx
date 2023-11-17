import { Providers } from '@components/providers/Providers'
import { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import { PropsWithChildren } from 'react'
import '../globals.css'
import { Button } from '../_components/ui/Button'

const font = OpenSans({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-family' })

const metadata: Metadata = { title: 'Equipo RH' }

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="es">
    <body
      className={font.className}
      style={{
        padding: '1rem',
        maxWidth: '30rem',
        margin: '0 auto',
      }}>
      <Button color="black" href="/" variant="outline">
        Ir a Home
      </Button>
      <Providers>{children}</Providers>
    </body>
  </html>
)

export { metadata }
export default RootLayout
