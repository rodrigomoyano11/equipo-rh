'use client'

import { DateField } from '@/app/_components/forms/DateField'
import { FileField } from '@/app/_components/forms/FileField'
import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { SelectField } from '@/app/_components/forms/SelectField'
import { TextField } from '@/app/_components/forms/TextField'
import { useLocations } from '@/app/_hooks/useLocations'
import { useEffect } from 'react'
import { addCandidate } from './actions'
import { options } from './constants'
import { Schema, schema } from './schema'
import { AddCandidateFormProps } from './types'

const AddCandidateForm = ({ defaultValues }: AddCandidateFormProps) => {
  // Hooks
  const {
    countries,
    localities,
    states,
    getCountries,
    handleCountryChange,
    handleLocalityChange,
    handleStateChange,
  } = useLocations()

  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedCandidate = await addCandidate(formData.data)

    console.log({ addedCandidate })
  }

  // Effects
  useEffect(() => {
    void getCountries()
  }, [])

  // Render
  return (
    <Form defaultValues={defaultValues} schema={schema} onSubmit={handleSubmit}>
      <h1>Crear Candidato</h1>

      <div className="basic">
        <h2>Datos básicos</h2>

        <TextField autoComplete="given-name" label="Nombre" name="lastName" />

        <TextField autoComplete="family-name" label="Apellido" name="firstName" />

        <SelectField label="Tipo" name="identificationType" options={options.identificationType} />

        <TextField label="Número" name="identificationNumber" />

        <DateField label="Fecha de nacimiento" name="birthdate" />
      </div>

      <div className="contact">
        <h2>Contacto</h2>

        <TextField autoComplete="email" label="Correo electrónico" name="email" />

        <TextField autoComplete="tel-national" label="Teléfono" name="phone" />
      </div>

      <div className="location">
        <h2>Ubicación</h2>

        <SelectField
          label="País"
          name="country"
          options={countries}
          onChange={handleCountryChange}
        />

        <SelectField label="Provincia" name="state" options={states} onChange={handleStateChange} />

        <SelectField
          label="Localidad"
          name="locality"
          options={localities}
          onChange={handleLocalityChange}
        />

        <TextField autoComplete="street-address" label="Dirección" name="address" />

        <SelectField
          label="¿Estás dispuesto a reubicarte?"
          name="canRelocate"
          options={options.canRelocate}
        />
      </div>

      <div className="education">
        <h2>Formación</h2>

        <SelectField
          label="Nivel de educación"
          name="educationLevel"
          options={options.educationLevel}
        />

        <SelectField label="Estado" name="educationStatus" options={options.educationStatus} />
      </div>

      <div className="skills">
        <h2>Habilidades</h2>

        <SelectField
          label="Nivel de experiencia"
          name="experienceLevel"
          options={options.experienceLevel}
        />

        <TextField label="¿Por qué deberíamos contratarte?" name="whyHireYou" />

        <TextField label="¿Cuáles son tus mejores habilidades?" name="bestSkills" />
      </div>

      <div className="profile">
        <h2>Perfil</h2>

        <FileField
          allowedFileTypes={['image/png', 'image/jpeg']}
          bucket="profile-pictures"
          label="Foto de perfil"
          name="profilePicture"
        />

        <TextField label="Perfil profesional" name="professionalProfile" />

        <SelectField label="Idiomas" name="languages" options={options.languages} />

        <FileField
          allowedFileTypes={['application/pdf']}
          bucket="resumes"
          label="Currículum"
          name="resume"
        />

        <SelectField
          label="Acepto los términos y condiciones"
          name="acceptedTerms"
          options={[
            { label: 'Acepto', value: 'true' },
            { label: 'No acepto', value: 'false' },
          ]}
        />
      </div>
    </Form>
  )
}

export { AddCandidateForm }
export type { AddCandidateFormProps }
