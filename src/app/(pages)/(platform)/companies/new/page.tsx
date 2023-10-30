'use client'

import { FileField } from '@components/FileField'
import { TextField } from '@components/TextField'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { addCompany } from './actions'
import './page.css'

const NewCompanyPage = () => {
  const [company, addCompanyAction] = useFormState(addCompany, undefined)

  const [fileName, setFileName] = useState<string>('')

  useEffect(() => {
    setFileName(crypto.randomUUID())
  }, [])

  useEffect(() => {
    if (!company) return
    console.log({ company })

    setFileName(crypto.randomUUID())
  }, [company])

  return (
    <form action={addCompanyAction}>
      <h1>Crear Empresa</h1>

      <TextField defaultValue="Facebook" label="Nombre" name="name" />

      <TextField defaultValue="Empresa de tecnología" label="Descripción" name="description" />

      <FileField
        allowedFileTypes={['image/png', 'image/jpeg']}
        bucket="company-logos"
        fileName={fileName}
        label="Logo"
        name="logo"
      />

      <button type="submit">Enviar</button>
    </form>
  )
}

export default NewCompanyPage
