'use client'

import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { FileField } from '@components/forms/FileField'
import { TextField } from '@components/forms/TextField'
import { useEffect, useState } from 'react'
import { addCompany } from './actions'
import './page.css'
import { Schema, schema } from './schema'

const NewCompanyPage = () => {
  // States
  const [fileName, setFileName] = useState('')
  const [company, setCompany] = useState<Awaited<ReturnType<typeof addCompany>>>()

  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedCompany = await addCompany(formData.data)

    setCompany(addedCompany)
  }

  // Effects
  useEffect(() => {
    setFileName(crypto.randomUUID())
  }, [])

  useEffect(() => {
    if (!company) return
    console.log({ company })

    setFileName(crypto.randomUUID())
  }, [company])

  // Base Props
  const defaultValues = {
    name: 'Facebook',
    description: 'Empresa de tecnología',
    logo: '',
  }

  // Render
  return (
    <Form defaultValues={defaultValues} schema={schema} onSubmit={handleSubmit}>
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
    </Form>
  )
}

export default NewCompanyPage
