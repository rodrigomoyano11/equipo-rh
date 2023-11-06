import { PropsWithChildren } from 'react'

type IntersectionElementProps = PropsWithChildren<{
  onIntersect: () => void
}>

export type { IntersectionElementProps }
