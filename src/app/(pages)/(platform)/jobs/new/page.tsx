/* eslint-disable camelcase */
'use client'

import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { NumberField } from '@components/forms/NumberField'
import { SelectField } from '@components/forms/SelectField'
import { ItemProps } from '@components/forms/SelectField/Item'
import { TextField } from '@components/forms/TextField'
import { useEffect, useState } from 'react'
import { addJob, getCompanies } from './actions'
import './page.css'
import { Schema, schema } from './schema'
import { options } from './constants'

const NewJobPage = () => {
  // States
  const [companies, setCompanies] = useState<ItemProps[]>([])
  const [job, setJob] = useState<Awaited<ReturnType<typeof addJob>>>()

  // Methods
  const setCompanyOptions = async () => {
    const items = await getCompanies()
    const adaptedCompanies = items.map(({ id, name }) => ({ label: name, value: id }))
    setCompanies(adaptedCompanies)
  }

  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedJob = await addJob(formData.data)

    setJob(addedJob)
  }

  // Effects
  useEffect(() => {
    void setCompanyOptions()
  }, [])

  useEffect(() => {
    if (!job) return
    console.log({ job })
  }, [job])

  // Render
  // if (!companies.length) return <h1>Cargando...</h1>
  return (
    <Form
      schema={schema}
      defaultValues={{
        title: 'Desarrollador',
        description: 'Desarrollador de Software',
        salary: 1000,
        visibility: options.visibility[0].value,
        // company_id: '',
      }}
      onSubmit={handleSubmit}>
      <h1>Crear Oferta de Trabajo</h1>

      <TextField label="Título" name="title" />

      <TextField label="Descripción" name="description" />

      <NumberField label="Salario" name="salary" />

      <SelectField label="Visibilidad" name="visibility" options={options.visibility} />

      <SelectField label="Empresa" name="company_id" options={companies} />
    </Form>
  )
}

export default NewJobPage
