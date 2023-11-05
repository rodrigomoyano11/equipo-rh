import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { getCompanies } from './actions'
import './page.css'

const CompaniesPage = async () => {
  const companies = await getCompanies()

  return (
    <div>
      <h1>Companies</h1>

      <ul>
        {companies.map((company) => (
          <li key={company.id} className="item">
            <h2>{company.name}</h2>
            <div className="content">
              <div>
                <span className="label">Descripción</span>
                <span>{company.description}</span>
              </div>
            </div>

            <Image alt={company.name} height={100} src={company.logo ?? ''} width={100} />

            <Link href={`/companies/${company.id}`}>Ver más</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompaniesPage
