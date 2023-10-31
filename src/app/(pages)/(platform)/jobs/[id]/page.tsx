import Image from 'next/image'
import { getJob } from './actions'
import './page.css'
import { JobPageProps } from './types'

const JobPage = async ({ params }: JobPageProps) => {
  const { id } = params

  const job = await getJob(id)

  if (!job) return <div>Job not found</div>
  return (
    <div>
      <h1>Job</h1>

      <ul>
        <li className="item">
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
        </li>
      </ul>
    </div>
  )
}

export default JobPage
