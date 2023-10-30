/* eslint-disable camelcase */
'use client'

import { SelectField } from '@/app/_components/SelectField'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { addApplication, getCandidates, getJobs } from './actions'
import './page.css'

type Candidates = Awaited<ReturnType<typeof getCandidates>>

type Jobs = Awaited<ReturnType<typeof getJobs>>

const NewApplicationPage = () => {
  const [application, addApplicationAction] = useFormState(addApplication, undefined)

  const [candidates, setCandidates] = useState<Candidates>([])
  const [jobs, setJobs] = useState<Jobs>([])

  useEffect(() => {
    void getJobs().then(setJobs)
    void getCandidates().then(setCandidates)
  }, [])

  useEffect(() => {
    if (!application) return
    console.log({ application })
  }, [application])

  console.log({ candidates, jobs })

  if (!candidates.length || !jobs.length) return <h1>Cargando...</h1>
  return (
    <form action={addApplicationAction}>
      <h1>Aplicar a Oferta de Trabajo</h1>

      <SelectField
        defaultValue={jobs[0].id}
        label="Oferta de Trabajo"
        name="job_id"
        options={jobs.map(({ id, title, companies }) => ({
          label: `${title} (${companies?.name ?? 'Sin empresa'})`,
          value: id,
        }))}
      />

      <SelectField
        defaultValue={candidates[0].id}
        label="Candidato"
        name="candidate_id"
        options={candidates.map(({ id, first_name, last_name }) => ({
          label: `${first_name} ${last_name}`,
          value: id,
        }))}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}

export default NewApplicationPage
