import { SpinnerProps } from './types'
import './styles.css'

const Spinner = (props: SpinnerProps) => {
  // Props
  const { size = 'medium', label = 'Cargando...', className = '', withLabel } = props

  // Render
  return (
    <div aria-label={label} className={`spinner ${size} ${className}`}>
      <div className="loader" />

      {withLabel && <span className="label">{label}</span>}
    </div>
  )
}

export { Spinner }
export type { SpinnerProps }
