'use client'

import { Form, SubmitHandler } from '@components/forms/Form'
import { SelectField } from '@components/forms/SelectField'
import { ListItemProps } from '@components/forms/SelectField/Item'
import { useEffect, useState } from 'react'
import { addSavedJob, getCandidates, getJobs } from './actions'
import './page.css'
import { Schema, schema } from './schema'

const NewSavedJobPage = () => {
  // States
  const [candidates, setCandidates] = useState<ListItemProps[]>([])
  const [jobs, setJobs] = useState<ListItemProps[]>([])

  const [savedJob, setSavedJob] = useState<Awaited<ReturnType<typeof addSavedJob>>>()

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
    const adaptedCandidates = items.map(({ id, firstName, lastName }) => ({
      label: `${firstName} ${lastName}`,
      value: id,
    }))

    setCandidates(adaptedCandidates)
  }

  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedSavedJob = await addSavedJob(formData.data)

    setSavedJob(addedSavedJob)
  }

  // Effects
  useEffect(() => {
    void setJobOptions()
    void setCandidateOptions()
  }, [])

  useEffect(() => {
    if (!savedJob) return
    console.log({ savedjob: savedJob })
  }, [savedJob])

  // Base Props
  const defaultValues = { candidateId: candidates[0]?.value, jobId: jobs[0]?.value }

  // Render
  if (!candidates.length || !jobs.length) return <h1>Cargando...</h1>
  return (
    <Form defaultValues={defaultValues} schema={schema} onSubmit={handleSubmit}>
      <h1>Guardar Oferta de Trabajo</h1>

      <SelectField label="Oferta de Trabajo" name="jobId" options={jobs} />

      <SelectField label="Candidato" name="candidateId" options={candidates} />
    </Form>
  )
}

export default NewSavedJobPage
