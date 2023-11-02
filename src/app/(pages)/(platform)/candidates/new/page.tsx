/* eslint-disable camelcase */
'use client'

import { getSupabase } from '@/utils/supabase/client'
import { DbInsert } from '@/utils/supabase/types'
import { CheckboxField } from '@components/forms/CheckboxField'
import { FileField } from '@components/forms/FileField'
import { DateField } from '@components/forms/OLDDateField'
import { SelectField } from '@components/forms/SelectField'
import { TextField } from '@components/forms/TextField'
import { useCallback, useEffect, useState, useTransition } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { addCandidate } from './actions'
import { options } from './constants'
import './page.css'

const NewCandidatePage = () => {
  // Hooks
  const methods = useForm<DbInsert<'candidates'>>({
    defaultValues: {
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
      profile_picture: '',
      professional_profile: 'Soy un desarrollador web con 5 años de experiencia en React y Node.js',
      accepted_terms: false,
      languages: 'spanish' as unknown as string[],
    },
  })

  const [isPending, startTransition] = useTransition()

  // Data
  const supabase = getSupabase()

  // States
  const [candidate, setCandidate] = useState<Awaited<ReturnType<typeof addCandidate>>>()

  // Methods
  const setInitialValues = useCallback(async () => {
    const { data, error } = await supabase.auth.getUser()
    if (error) return

    const { email } = data.user

    if (!email) return
    methods.setValue('email', email)
  }, [methods, supabase.auth])

  // Effects
  useEffect(() => {
    void setInitialValues()
  }, [setInitialValues])

  useEffect(() => {
    if (!candidate) return
    console.log({ candidate })
  }, [candidate])

  // Render
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          const convertedData = {
            ...data,
            can_relocate: data.can_relocate === ('true' as unknown as boolean),
            languages: [data.languages as unknown as string],
            accepted_terms: Boolean(data.accepted_terms),
          }

          startTransition(() => void addCandidate(convertedData).then(setCandidate))
        })}>
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
            label="País"
            name="country"
            options={[{ value: 'Argentina', label: 'Argentina' }]}
          />

          <SelectField
            label="Provincia"
            name="state"
            options={[{ value: 'Buenos Aires', label: 'Buenos Aires' }]}
          />

          <SelectField
            label="Localidad"
            name="locality"
            options={[{ value: 'CABA', label: 'CABA' }]}
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

          <CheckboxField label="Acepto los términos y condiciones" name="accepted_terms" />
        </div>

        <button type="submit">{isPending ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </FormProvider>
  )
}

export default NewCandidatePage
