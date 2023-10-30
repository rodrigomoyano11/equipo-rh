import { useId } from 'react'
import { SelectFieldProps } from './types'

const SelectField = ({ defaultValue, name, label, options }: SelectFieldProps) => {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select defaultValue={defaultValue} id={id} name={name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

export { SelectField }
export type { SelectFieldProps }
