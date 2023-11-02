'use client'

import { useId } from 'react'

type DateFieldProps = {
  name: string
  label: string
  defaultValue?: string
}

const DateField = ({ name, label, defaultValue }: DateFieldProps) => {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input defaultValue={defaultValue} id={id} name={name} type="date" />
    </>
  )
}

export { DateField }
export type { DateFieldProps }
