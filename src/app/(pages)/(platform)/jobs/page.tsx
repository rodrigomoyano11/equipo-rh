'use client'

import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { Item } from 'react-aria-components'
import { List } from '../../../_components/List/component'
import { getJobs } from './actions'
import './page.css'
import { Job } from './types'

const JobsPage = () => (
  <div>
    <h1>Jobs</h1>

    <List<Job> label="Jobs" onLoad={getJobs}>
      {(job) => (
        <Item textValue={job.title}>
          <h2>{job.title}</h2>
          <div className="content">
            <div>
              <span className="label">Descripción</span>
              <span>{job.description}</span>
            </div>

            <div>
              <span className="label">Salario</span>
              <span>{job.salary}</span>
            </div>

            <div>
              <span className="label">Visibilidad</span>
              <span>{job.visibility}</span>
            </div>

            <div>
              <span className="label">Empresa</span>
              <span>{job.companies?.name}</span>
              <span>{job.companies?.description}</span>
            </div>
          </div>

          <Image
            alt={job.companies?.name ?? ''}
            height={100}
            src={job.companies?.logo ?? ''}
            width={100}
          />

          <Link href={`/jobs/${job.id}`}>Ver más</Link>
        </Item>
      )}
    </List>
  </div>
)

export default JobsPage
