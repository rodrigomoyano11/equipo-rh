import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { getApplications } from './actions'
import './page.css'

const ApplicationsPage = async () => {
  const applications = await getApplications()

  return (
    <div>
      <h1>Applications</h1>

      <ul>
        {applications.map((application) => (
          <li key={application.id} className="item">
            <h2>{application.jobs?.title}</h2>

            <div>
              <h3>Candidate</h3>
              <div className="content">
                <div>
                  <span className="label">Name</span>
                  <span>
                    {application.candidates?.firstName} {application.candidates?.lastName}
                  </span>
                </div>

                <div>
                  <span className="label">Email</span>
                  <span>{application.candidates?.email}</span>
                </div>

                <Image
                  alt={`${application.candidates?.firstName} ${application.candidates?.lastName}`}
                  height={50}
                  src={application.candidates?.profilePicture ?? ''}
                  width={50}
                />
              </div>
            </div>

            <div>
              <h3>Company</h3>
              <div className="content">
                <div>
                  <span className="label">Name</span>
                  <span>{application.jobs?.companies?.name}</span>
                </div>

                <Image
                  alt={application.jobs?.companies?.name ?? ''}
                  height={50}
                  src={application.jobs?.companies?.logo ?? ''}
                  width={50}
                />
              </div>
            </div>

            <Link href={`/applications/${application.id}`}>Ver más</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApplicationsPage
