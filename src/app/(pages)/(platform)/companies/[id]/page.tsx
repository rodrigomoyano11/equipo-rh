import Image from 'next/image'
import { getCompany } from './actions'
import './page.css'
import { CompanyPageProps } from './types'

const CompanyPage = async ({ params }: CompanyPageProps) => {
  const { id } = params

  const company = await getCompany(id)

  if (!company) return <div>Company not found</div>
  return (
    <div>
      <h1>Company</h1>

      <ul>
        <li className="item">
          <h2>{company.name}</h2>
          <div className="content">
            <div>
              <span className="label">Descripción</span>
              <span>{company.description}</span>
            </div>
          </div>

          <Image alt={company.name} height={100} src={company.logo ?? ''} width={100} />
        </li>
      </ul>
    </div>
  )
}

export default CompanyPage
