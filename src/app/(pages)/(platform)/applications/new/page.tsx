/* eslint-disable camelcase */

'use client'

import { SelectField } from '@/app/_components/SelectField'
import { ItemProps } from '@/app/_components/SelectField/Item'
import { DbInsert } from '@/utils/supabase/types'
import { useEffect, useState, useTransition } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { addApplication, getCandidates, getJobs } from './actions'
import './page.css'

const NewApplicationPage = () => {
  // Hooks
  const methods = useForm<DbInsert<'applications'>>({
    defaultValues: {},
  })

  const [isPending, startTransition] = useTransition()

  // States
  const [candidates, setCandidates] = useState<ItemProps[]>([])
  const [jobs, setJobs] = useState<ItemProps[]>([])

  const [application, setApplication] = useState<Awaited<ReturnType<typeof addApplication>>>()

  // Methods
  const setJobOptions = async () => {
    const items = await getJobs()
    const adaptedJobs = items.map(({ id, title, companies }) => ({
      label: `${title} (${companies?.name ?? 'Sin empresa'})`,
      value: id,
    }))

    setJobs(adaptedJobs)
  }

  const setCandidateOptions = async () => {
    const items = await getCandidates()
    const adaptedCandidates = items.map(({ id, first_name, last_name }) => ({
      label: `${first_name} ${last_name}`,
      value: id,
    }))

    setCandidates(adaptedCandidates)
  }

  // Effects
  useEffect(() => {
    void setJobOptions()
    void setCandidateOptions()
  }, [])

  useEffect(() => {
    if (!application) return
    console.log({ application })
  }, [application])

  // Render
  if (!candidates.length || !jobs.length) return <h1>Cargando...</h1>
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          startTransition(() => void addApplication(data).then(setApplication))
        })}>
        <h1>Aplicar a Oferta de Trabajo</h1>

        <SelectField label="Oferta de Trabajo" name="job_id" options={jobs} />

        <SelectField label="Candidato" name="candidate_id" options={candidates} />

        <button type="submit">{isPending ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </FormProvider>
  )
}

export default NewApplicationPage
