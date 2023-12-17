import { AddCandidateForm } from './Form'
import { Schema } from './Form/schema'
import './page.css'

const NewCandidatePage = () => {
  // Data
  const defaultValues: Partial<Schema> = {
    firstName: 'John',
    lastName: 'Doe',
    identificationType: 'dni',
    identificationNumber: '32546678',
    birthdate: '1995-11-14',
    phone: 3546546546,
    canRelocate: 'true' as unknown as boolean,
    address: 'Av. Corrientes 5274',
    educationLevel: 'primary',
    educationStatus: 'incomplete',
    experienceLevel: 'needToBeTaught',
    bestSkills: 'Me gusta mucho programar, y tengo experiencia en React y Node.js',
    whyHireYou: 'Soy muy responsable y me gusta trabajar en equipo',
    professionalProfile: 'Soy un desarrollador web con 5 años de experiencia en React y Node.js',
    acceptedTerms: 'true' as unknown as boolean,
    languages: 'spanish' as unknown as string[],
  }

  // Render
  return <AddCandidateForm defaultValues={defaultValues} />
}

export default NewCandidatePage
