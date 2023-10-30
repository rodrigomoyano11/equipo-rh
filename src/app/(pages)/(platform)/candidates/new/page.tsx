'use client'

import { CheckboxField } from '@/app/_components/CheckboxField'
import { DateField } from '@/app/_components/DateField'
import { SelectField } from '@/app/_components/SelectField'
import { getSupabase } from '@/utils/supabase/client'
import { FileField } from '@components/FileField'
import { TextField } from '@components/TextField'
import { useCallback, useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { addCandidate } from './actions'
import './page.css'

const NewCandidatePage = () => {
  const supabase = getSupabase()

  const [candidate, addCandidateAction] = useFormState(addCandidate, undefined)

  const [email, setEmail] = useState('')

  const setInitialValues = useCallback(async () => {
    const { data, error } = await supabase.auth.getUser()
    if (error) {
      console.error(error)
      return
    }

    const { email } = data.user

    setEmail(email ?? '')
  }, [supabase.auth])

  useEffect(() => {
    void setInitialValues()
  }, [setInitialValues])

  useEffect(() => {
    if (!candidate) return
    console.log({ candidate })
  }, [candidate])

  return (
    <form action={addCandidateAction}>
      <h1>Crear Candidato</h1>

      <div className="basic">
        <h2>Datos básicos</h2>

        <TextField
          autoComplete="family-name"
          defaultValue="Doe"
          label="Apellido"
          name="first_name"
        />

        <TextField autoComplete="given-name" defaultValue="John" label="Nombre" name="last_name" />

        <SelectField
          defaultValue="dni"
          label="Tipo de documento"
          name="identification_type"
          options={[
            { value: 'dni', label: 'DNI' },
            { value: 'passport', label: 'Pasaporte' },
            { value: 'other', label: 'Otro' },
          ]}
        />

        <TextField
          autoComplete="identification"
          defaultValue="32546678"
          label="Número de documento"
          name="identification_number"
        />

        <DateField defaultValue="1995-11-14" label="Fecha de nacimiento" name="birthdate" />
      </div>

      <div className="contact">
        <h2>Contacto</h2>

        <TextField
          autoComplete="email"
          defaultValue={email}
          label="Correo electrónico"
          name="email"
        />

        <TextField
          autoComplete="tel-national"
          defaultValue="3546546546"
          label="Teléfono"
          name="phone"
        />
      </div>

      <div className="location">
        <h2>Ubicación</h2>

        <SelectField
          defaultValue="Argentina"
          label="País"
          name="country"
          options={[{ value: 'Argentina', label: 'Argentina' }]}
        />

        <SelectField
          defaultValue="Buenos Aires"
          label="Provincia"
          name="state"
          options={[{ value: 'Buenos Aires', label: 'Buenos Aires' }]}
        />

        <SelectField
          defaultValue="CABA"
          label="Localidad"
          name="locality"
          options={[{ value: 'CABA', label: 'CABA' }]}
        />

        <TextField
          autoComplete="street-address"
          defaultValue="Av. Corrientes 5274"
          label="Dirección"
          name="address"
        />

        <SelectField
          defaultValue="yes"
          label="¿Estás dispuesto a reubicarte?"
          name="can_relocate"
          options={[
            { value: 'yes', label: 'Sí' },
            { value: 'no', label: 'No' },
          ]}
        />
      </div>

      <div className="education">
        <h2>Formación</h2>

        <SelectField
          defaultValue="primary"
          label="Nivel de educación"
          name="education_level"
          options={[
            { value: 'primary', label: 'Primario' },
            { value: 'secondary', label: 'Secundario' },
            { value: 'tertiary', label: 'Terciario' },
            { value: 'university', label: 'Universitario' },
            { value: 'postgraduate', label: 'Posgrado' },
          ]}
        />

        <SelectField
          defaultValue="incomplete"
          label="Estado de educación"
          name="education_status"
          options={[
            { value: 'complete', label: 'Completo' },
            { value: 'in_progress', label: 'En curso' },
            { value: 'incomplete', label: 'Incompleto' },
          ]}
        />
      </div>

      <div className="skills">
        <h2>Habilidades</h2>

        <SelectField
          defaultValue="need_to_be_taught"
          label="Nivel de experiencia"
          name="experience_level"
          options={[
            { value: 'need_to_be_taught', label: 'Necesito que me enseñen' },
            { value: 'can_do_with_help', label: 'Puedo hacerlo con ayuda' },
            { value: 'can_do_alone', label: 'Puedo hacerlo solo' },
            { value: 'can_train_others', label: 'Puedo entrenar a otros' },
            { value: 'have_trained_others', label: 'He entrenado a otros' },
          ]}
        />

        <TextField
          autoComplete="skills"
          defaultValue="Me gusta mucho programar, y tengo experiencia en React y Node.js"
          label="¿Cuáles son tus mejores habilidades?"
          name="best_skills"
        />

        <TextField
          defaultValue="Soy muy responsable y me gusta trabajar en equipo"
          label="¿Por qué deberíamos contratarte?"
          name="why_hire_you"
        />
      </div>

      <div className="profile">
        <h2>Perfil</h2>

        <FileField
          allowedFileTypes={['image/png', 'image/jpeg']}
          bucket="profile-pictures"
          label="Foto de perfil"
          name="profile_picture"
        />

        <TextField
          defaultValue="Soy un desarrollador web con 5 años de experiencia en React y Node.js"
          label="Perfil profesional"
          name="professional_profile"
        />

        <SelectField
          defaultValue="Spanish"
          label="Idiomas"
          name="languages"
          options={[
            { value: 'Spanish', label: 'Español' },
            { value: 'English', label: 'Inglés' },
            { value: 'Portuguese', label: 'Portugués' },
          ]}
        />

        <CheckboxField label="Acepto los términos y condiciones" name="accepted_terms" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}

export default NewCandidatePage
