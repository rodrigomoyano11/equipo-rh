import { AddCompanyForm } from './Form'
import './page.css'

const NewCompanyPage = async () => {
  // Data
  const defaultValues = {
    name: 'Facebook',
    description: 'Empresa de tecnología',
    logo: '',
  }

  // Render
  return <AddCompanyForm defaultValues={defaultValues} />
}

export default NewCompanyPage
