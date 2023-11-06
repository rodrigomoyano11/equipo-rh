import { useIntersectionObserver } from '@uidotdev/usehooks'
import { useEffect } from 'react'
import { IntersectionElementProps } from './types'

const IntersectionElement = (props: IntersectionElementProps) => {
  // Props
  const { children, onIntersect } = props

  // Exceptions
  if (!children) throw new Error('IntersectionElement must have children')

  // Hooks
  const [ref, entry] = useIntersectionObserver({ threshold: 0 })

  // Effects
  useEffect(() => {
    if (!entry?.isIntersecting) return

    onIntersect()
  }, [entry])

  // Render
  return <div ref={ref}>{children}</div>
}

export { IntersectionElement }
export type { IntersectionElementProps }
