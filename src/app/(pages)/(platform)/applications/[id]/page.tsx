import { getApplication } from './actions'
import Image from 'next/image'
import './page.css'
import { ApplicationPageProps } from './types'

const ApplicationPage = async ({ params }: ApplicationPageProps) => {
  const { id } = params

  const application = await getApplication(id)

  if (!application) return <div>Application not found</div>
  return (
    <div>
      <h1>Application</h1>

      <ul>
        <li className="item">
          <h2>{application.jobs?.title}</h2>

          <div>
            <h3>Candidate</h3>
            <div className="content">
              <div>
                <span className="label">Name</span>
                <span>
                  {application.candidates?.first_name} {application.candidates?.last_name}
                </span>
              </div>

              <div>
                <span className="label">Email</span>
                <span>{application.candidates?.email}</span>
              </div>

              <Image
                alt={`${application.candidates?.first_name} ${application.candidates?.last_name}`}
                height={50}
                src={application.candidates?.profile_picture ?? ''}
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
        </li>
      </ul>
    </div>
  )
}

export default ApplicationPage
