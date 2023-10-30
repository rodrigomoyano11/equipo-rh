import { useId } from 'react'
import { CheckboxFieldProps } from './types'

const CheckboxField = ({ name, label }: CheckboxFieldProps) => {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="checkbox" />
    </>
  )
}

export { CheckboxField }
export type { CheckboxFieldProps }
