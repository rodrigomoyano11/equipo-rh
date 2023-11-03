/* eslint-disable camelcase */
'use client'

import { Form, SubmitHandler } from '@/app/_components/forms/Form'
import { useLocations } from '@/app/_hooks/useLocations'
import { FileField } from '@components/forms/FileField'
import { DateField } from '@components/forms/OLDDateField'
import { SelectField } from '@components/forms/SelectField'
import { TextField } from '@components/forms/TextField'
import { useEffect, useState } from 'react'
import { addCandidate } from './actions'
import { options } from './constants'
import './page.css'
import { Schema, schema } from './schema'

const NewCandidatePage = () => {
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

  // States
  const [candidate, setCandidate] = useState<Awaited<ReturnType<typeof addCandidate>>>()

  // Handlers
  const handleSubmit: SubmitHandler<Schema> = async (formData) => {
    if (!formData.isValid) return

    const addedCandidate = await addCandidate(formData.data)

    setCandidate(addedCandidate)
  }

  // Effects
  useEffect(() => {
    void getCountries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!candidate) return
    console.log({ candidate })
  }, [candidate])

  // Base Props
  const defaultValues: Schema = {
    first_name: 'John',
    last_name: 'Doe',
    identification_type: 'dni',
    identification_number: '32546678',
    birthdate: '1995-11-14',
    email: '',
    phone: 3546546546,
    country: 'Argentina',
    state: 'Buenos Aires',
    locality: 'CABA',
    can_relocate: 'true' as unknown as boolean,
    address: 'Av. Corrientes 5274',
    education_level: 'primary',
    education_status: 'incomplete',
    experience_level: 'need_to_be_taught',
    best_skills: 'Me gusta mucho programar, y tengo experiencia en React y Node.js',
    why_hire_you: 'Soy muy responsable y me gusta trabajar en equipo',
    professional_profile: 'Soy un desarrollador web con 5 años de experiencia en React y Node.js',
    accepted_terms: '' as unknown as boolean,
    languages: 'spanish' as unknown as string[],
  }

  // Render
  return (
    <Form defaultValues={defaultValues} schema={schema} onSubmit={handleSubmit}>
      <h1>Crear Candidato</h1>

      <div className="basic">
        <h2>Datos básicos</h2>

        <TextField autoComplete="family-name" label="Apellido" name="first_name" />

        <TextField autoComplete="given-name" label="Nombre" name="last_name" />

        <SelectField
          label="Tipo de documento"
          name="identification_type"
          options={options.identificationType}
        />

        <TextField label="Número de documento" name="identification_number" />

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
          isDisabled={countries.length === 0}
          label="País"
          name="country"
          options={countries}
          onChange={handleCountryChange}
        />

        <SelectField
          isDisabled={states.length === 0}
          label="Provincia"
          name="state"
          options={states}
          onChange={handleStateChange}
        />

        <SelectField
          isDisabled={localities.length === 0}
          label="Localidad"
          name="locality"
          options={localities}
          onChange={handleLocalityChange}
        />

        <TextField autoComplete="street-address" label="Dirección" name="address" />

        <SelectField
          label="¿Estás dispuesto a reubicarte?"
          name="can_relocate"
          options={options.canRelocate}
        />
      </div>

      <div className="education">
        <h2>Formación</h2>

        <SelectField
          label="Nivel de educación"
          name="education_level"
          options={options.educationLevel}
        />

        <SelectField
          label="Estado de educación"
          name="education_status"
          options={options.educationStatus}
        />
      </div>

      <div className="skills">
        <h2>Habilidades</h2>

        <SelectField
          label="Nivel de experiencia"
          name="experience_level"
          options={options.experienceLevel}
        />

        <TextField label="¿Cuáles son tus mejores habilidades?" name="best_skills" />

        <TextField label="¿Por qué deberíamos contratarte?" name="why_hire_you" />
      </div>

      <div className="profile">
        <h2>Perfil</h2>

        <FileField
          allowedFileTypes={['image/png', 'image/jpeg']}
          bucket="profile-pictures"
          label="Foto de perfil"
          name="profile_picture"
        />

        <TextField label="Perfil profesional" name="professional_profile" />

        <SelectField label="Idiomas" name="languages" options={options.languages} />

        <SelectField
          label="Acepto los términos y condiciones"
          name="accepted_terms"
          options={[
            { label: 'Acepto', value: 'true' },
            { label: 'No acepto', value: 'false' },
          ]}
        />
      </div>
    </Form>
  )
}

export default NewCandidatePage
