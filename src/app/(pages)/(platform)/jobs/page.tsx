import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { getJobs } from './actions'
import './page.css'

const JobsPage = async () => {
  const jobs = await getJobs()

  return (
    <div>
      <h1>Jobs</h1>

      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="item">
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
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobsPage
