'use client'

import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { NumberField } from '@/app/_components/forms/NumberField'
import { SelectField } from '@/app/_components/forms/SelectField'
import { TextField } from '@/app/_components/forms/TextField'
import { addJob } from './actions'
import { options } from './constants'
import { Schema, schema } from './schema'
import { AddJobFormProps } from './types'

const AddJobForm = ({ defaultValues, companies }: AddJobFormProps) => {
  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedJob = await addJob(formData.data)

    console.log({ addedJob })
  }

  // Effects
  return (
    <Form defaultValues={defaultValues} schema={schema} onSubmit={handleSubmit}>
      <h1>Crear Oferta de Trabajo</h1>

      <TextField label="Título" name="title" />

      <TextField label="Descripción" name="description" />

      <NumberField label="Salario" name="salary" />

      <SelectField label="Visibilidad" name="visibility" options={options.visibility} />

      <SelectField label="Empresa" name="companyId" options={companies} />
    </Form>
  )
}

export { AddJobForm }
export type { AddJobFormProps }
