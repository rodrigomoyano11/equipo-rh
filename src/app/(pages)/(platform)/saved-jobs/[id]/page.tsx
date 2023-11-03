import { getSavedJob } from './actions'
import Image from 'next/image'
import './page.css'
import { SavedJobPageProps } from './types'

const SavedJobPage = async ({ params }: SavedJobPageProps) => {
  const { id } = params

  const savedjob = await getSavedJob(id)

  if (!savedjob) return <div>SavedJob not found</div>
  return (
    <div>
      <h1>Saved Job</h1>

      <ul>
        <li className="item">
          <h2>{savedjob.jobs?.title}</h2>

          <div>
            <h3>Candidate</h3>
            <div className="content">
              <div>
                <span className="label">Name</span>
                <span>
                  {savedjob.candidates?.firstName} {savedjob.candidates?.lastName}
                </span>
              </div>

              <div>
                <span className="label">Email</span>
                <span>{savedjob.candidates?.email}</span>
              </div>

              <Image
                alt={`${savedjob.candidates?.firstName} ${savedjob.candidates?.lastName}`}
                height={50}
                src={savedjob.candidates?.profilePicture ?? ''}
                width={50}
              />
            </div>
          </div>

          <div>
            <h3>Company</h3>
            <div className="content">
              <div>
                <span className="label">Name</span>
                <span>{savedjob.jobs?.companies?.name}</span>
              </div>

              <Image
                alt={savedjob.jobs?.companies?.name ?? ''}
                height={50}
                src={savedjob.jobs?.companies?.logo ?? ''}
                width={50}
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SavedJobPage
