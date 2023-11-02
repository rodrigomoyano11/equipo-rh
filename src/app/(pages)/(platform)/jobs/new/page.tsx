'use client'

import { DbInsert } from '@/utils/supabase/types'
import { NumberField } from '@components/forms/NumberField'
import { SelectField } from '@components/forms/SelectField'
import { ItemProps } from '@components/forms/SelectField/Item'
import { TextField } from '@components/forms/TextField'
import { useEffect, useState, useTransition } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { addJob, getCompanies } from './actions'
import './page.css'

const visibilities: { label: string; value: DbInsert<'jobs'>['visibility'] }[] = [
  { label: 'Público', value: 'public' },
  { label: 'Privado', value: 'private' },
]

const NewJobPage = () => {
  // Hooks
  const methods = useForm<DbInsert<'jobs'>>({
    defaultValues: {
      title: 'Desarrollador',
      description: 'Desarrollador de Software',
      salary: 1000,
      visibility: visibilities[0].value,
      // eslint-disable-next-line camelcase
      company_id: '',
    },
  })

  const [isPending, startTransition] = useTransition()

  // States
  const [companies, setCompanies] = useState<ItemProps[]>([])
  const [job, setJob] = useState<Awaited<ReturnType<typeof addJob>>>()

  // Methods
  const setCompanyOptions = async () => {
    const items = await getCompanies()
    const adaptedCompanies = items.map(({ id, name }) => ({ label: name, value: id }))
    setCompanies(adaptedCompanies)
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
  if (!companies.length) return <h1>Cargando...</h1>
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          startTransition(() => void addJob(data).then(setJob))
        })}>
        <h1>Crear Oferta de Trabajo</h1>

        <TextField label="Título" name="title" />

        <TextField label="Descripción" name="description" />

        <NumberField label="Salario" name="salary" />

        <SelectField label="Visibilidad" name="visibility" options={visibilities} />

        <SelectField label="Empresa" name="company_id" options={companies} />

        <button type="submit">{isPending ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </FormProvider>
  )
}

export default NewJobPage
