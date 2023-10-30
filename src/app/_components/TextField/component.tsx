import { useId } from 'react'
import { TextFieldProps } from './types'

const TextField = ({ defaultValue, name, autoComplete, label }: TextFieldProps) => {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        id={id}
        name={name}
        type="text"
      />
    </>
  )
}

export { TextField }
export type { TextFieldProps }
