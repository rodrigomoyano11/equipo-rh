'use client'

import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { SelectField } from '@/app/_components/forms/SelectField'
import { addSavedJob } from './actions'
import { Schema, schema } from './schema'
import { AddSavedJobFormProps } from './types'

const AddSavedJobForm = ({ candidates, defaultValues, jobs }: AddSavedJobFormProps) => {
  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedSavedJob = await addSavedJob(formData.data)

    console.log({ addedSavedJob })
  }

  // Effects
  return (
    <Form defaultValues={defaultValues} schema={schema} onSubmit={handleSubmit}>
      <h1>Guardar Oferta de Trabajo</h1>

      <SelectField label="Oferta de Trabajo" name="jobId" options={jobs} />

      <SelectField label="Candidato" name="candidateId" options={candidates} />
    </Form>
  )
}

export { AddSavedJobForm }
export type { AddSavedJobFormProps }
