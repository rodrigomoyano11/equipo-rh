'use client'

import { List } from '@/app/_components/List/component'
import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { GridListItem } from 'react-aria-components'
import { getCompanies } from './actions'
import './page.css'
import { Company } from './types'

const CompaniesPage = () => (
  <div>
    <h1>Companies</h1>

    <List<Company> label="Companies" onLoad={getCompanies}>
      {(company) => (
        <GridListItem textValue={company.name}>
          <h2>{company.name}</h2>
          <div className="content">
            <div>
              <span className="label">Descripción</span>
              <span>{company.description}</span>
            </div>
          </div>

          <Image alt={company.name} height={100} src={company.logo ?? ''} width={100} />

          <Link href={`/companies/${company.id}`}>Ver más</Link>
        </GridListItem>
      )}
    </List>
  </div>
)

export default CompaniesPage
