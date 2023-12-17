import { AddJobForm } from './Form'
import { options } from './Form/constants'
import { getCompanies } from './actions'
import './page.css'

const NewJobPage = async () => {
  // Data
  const companies = await getCompanies()
  const adaptedCompanies = companies.map(({ id, name }) => ({ label: name, value: id }))

  const defaultValues = {
    title: 'Desarrollador',
    description: 'Desarrollador de Software',
    salary: 1000,
    visibility: options.visibility[0].value,
  }

  // Render
  return <AddJobForm companies={adaptedCompanies} defaultValues={defaultValues} />
}

export default NewJobPage
