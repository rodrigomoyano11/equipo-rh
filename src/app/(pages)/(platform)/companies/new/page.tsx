'use client'

import { DbInsert } from '@/utils/supabase/types'
import { FileField } from '@components/FileField'
import { TextField } from '@components/TextField'
import { useEffect, useState, useTransition } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { addCompany } from './actions'
import './page.css'

const NewCompanyPage = () => {
  // Hooks
  const methods = useForm<DbInsert<'companies'>>({
    defaultValues: {
      name: 'Facebook',
      description: 'Empresa de tecnología',
      logo: '',
    },
  })

  const [isPending, startTransition] = useTransition()

  // States
  const [fileName, setFileName] = useState('')
  const [company, setCompany] = useState<Awaited<ReturnType<typeof addCompany>>>()

  // Effects
  useEffect(() => {
    setFileName(crypto.randomUUID())
  }, [])

  useEffect(() => {
    if (!company) return
    console.log({ company })

    setFileName(crypto.randomUUID())
  }, [company])

  // Render
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          startTransition(() => void addCompany(data).then(setCompany))
        })}>
        <h1>Crear Empresa</h1>

        <TextField label="Nombre" name="name" />

        <TextField largeText label="Descripción" name="description" />

        <FileField
          allowedFileTypes={['image/png', 'image/jpeg']}
          bucket="company-logos"
          fileName={fileName}
          label="Logo"
          name="logo"
        />

        <button type="submit">{isPending ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </FormProvider>
  )
}

export default NewCompanyPage
