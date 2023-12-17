'use client'

import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { SelectField } from '@/app/_components/forms/SelectField'
import { addApplication } from './actions'
import { Schema, schema } from './schema'
import { AddApplicationFormProps } from './types'

const AddApplicationForm = ({ candidates, defaultValues, jobs }: AddApplicationFormProps) => {
  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedApplication = await addApplication(formData.data)

    console.log({ addedApplication })
  }

  // Effects
  return (
    <Form defaultValues={defaultValues ?? undefined} schema={schema} onSubmit={handleSubmit}>
      <h1>Aplicar a Oferta de Trabajo</h1>

      <SelectField label="Oferta de Trabajo" name="jobId" options={jobs} />

      <SelectField label="Candidato" name="candidateId" options={candidates} />
    </Form>
  )
}

export { AddApplicationForm }
export type { AddApplicationFormProps }
