import { useId } from 'react'
import { NumberFieldProps } from './types'

const NumberField = ({ defaultValue, name, label }: NumberFieldProps) => {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input defaultValue={defaultValue} id={id} name={name} type="number" />
    </>
  )
}

export { NumberField }
export type { NumberFieldProps }
