'use client'

import { FileField } from '@/app/_components/forms/FileField'
import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { TextField } from '@/app/_components/forms/TextField'
import { useEffect, useState } from 'react'
import { addCompany } from './actions'
import { Schema, schema } from './schema'
import { AddCompanyFormProps } from './types'
import { convertNullsToUndefined } from '@/utils/convertNullsToUndefined'

const AddCompanyForm = ({ defaultValues }: AddCompanyFormProps) => {
  // States
  const [fileName, setFileName] = useState('')

  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedCompany = await addCompany(formData.data)

    setFileName(crypto.randomUUID())

    console.log({ addedCompany })
  }

  // Effects
  useEffect(() => {
    setFileName(crypto.randomUUID())
  }, [])



  // Render
  return (
    <Form
      defaultValues={defaultValues}
      schema={schema}
      onSubmit={handleSubmit}>
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

export { AddCompanyForm }
export type { AddCompanyFormProps }
