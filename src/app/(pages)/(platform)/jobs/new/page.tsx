'use client'

import { TextField } from '@components/TextField'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { addJob, getCompanies } from './actions'
import './page.css'
import { NumberField } from '@/app/_components/NumberField'
import { SelectField } from '@/app/_components/SelectField'
import { Tables } from '@/utils/supabase/types'

const NewJobPage = () => {
  const [job, addJobAction] = useFormState(addJob, undefined)

  const [companies, setCompanies] = useState<Pick<Tables<'companies'>, 'id' | 'name'>[]>([])

  useEffect(() => {
    void getCompanies().then(setCompanies)
  }, [])

  useEffect(() => {
    if (!job) return
    console.log({ job })
  }, [job])

  if (!companies.length) return <h1>Cargando...</h1>
  return (
    <form action={addJobAction}>
      <h1>Crear Oferta de Trabajo</h1>

      <TextField defaultValue="Desarrollador" label="Título" name="title" />

      <TextField defaultValue="Desarrollador de Software" label="Descripción" name="description" />

      <NumberField defaultValue="1000" label="Salario" name="salary" />

      <SelectField
        defaultValue="public"
        label="Visibilidad"
        name="visibility"
        options={[
          { label: 'Público', value: 'public' },
          { label: 'Privado', value: 'private' },
        ]}
      />

      <SelectField
        defaultValue={companies[0].id}
        label="Empresa"
        name="company_id"
        options={companies.map(({ id, name }) => ({ label: name, value: id }))}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}

export default NewJobPage
