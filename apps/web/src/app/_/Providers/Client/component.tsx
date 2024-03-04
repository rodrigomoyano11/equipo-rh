'use client'

import { NextUIProvider } from '@nextui-org/react'

type ClientProps = React.PropsWithChildren

const Client = ({ children }: ClientProps) => <NextUIProvider>{children}</NextUIProvider>

export { Client }
export type { ClientProps }
