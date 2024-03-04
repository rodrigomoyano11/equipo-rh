import { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './globals.css'

const font = OpenSans({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-family' })

const metadata: Metadata = { title: 'Equipo RH' }

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="es">
    <body className={font.className}>{children}</body>
  </html>
)

export { metadata }
export default RootLayout
