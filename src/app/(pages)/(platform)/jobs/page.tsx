'use client'

import { Button } from '@/app/_components/ui/Button'
import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { Item } from 'react-aria-components'
import { List } from '../../../_components/List/component'
import { addSavedJob } from '../saved-jobs/new/actions'
import { getJobs } from './actions'
import './page.css'
import { Job } from './types'
import { addApplication } from '../applications/new/actions'

const userId = '208e94c1-8375-4ce0-97c1-116d633e4c50'

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

          <Button
            variant="outline"
            onPress={() => addSavedJob({ candidateId: userId, jobId: job.id })}>
            Guardar
          </Button>

          <Button
            variant="filled"
            onPress={async () => addApplication({ candidateId: userId, jobId: job.id })}>
            Aplicar
          </Button>
        </Item>
      )}
    </List>
  </div>
)

export default JobsPage
