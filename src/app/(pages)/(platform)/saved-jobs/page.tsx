'use client'

import { List } from '@/app/_components/List/component'
import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { Item } from 'react-aria-components'
import { getSavedJobs } from './actions'
import './page.css'
import { SavedJob } from './types'

const SavedJobsPage = () => (
  <div>
    <h1>Saved Jobs</h1>

    <List<SavedJob> label="Saved Jobs" onLoad={getSavedJobs}>
      {(savedJob) => (
        <Item textValue={savedJob.jobs?.title}>
          <h2>{savedJob.jobs?.title}</h2>

          <div>
            <h3>Candidate</h3>
            <div className="content">
              <div>
                <span className="label">Name</span>
                <span>
                  {savedJob.candidates?.firstName} {savedJob.candidates?.lastName}
                </span>
              </div>

              <div>
                <span className="label">Email</span>
                <span>{savedJob.candidates?.email}</span>
              </div>

              <Image
                alt={`${savedJob.candidates?.firstName} ${savedJob.candidates?.lastName}`}
                height={50}
                src={savedJob.candidates?.profilePicture ?? ''}
                width={50}
              />
            </div>
          </div>

          <div>
            <h3>Company</h3>
            <div className="content">
              <div>
                <span className="label">Name</span>
                <span>{savedJob.jobs?.companies?.name}</span>
              </div>

              <Image
                alt={savedJob.jobs?.companies?.name ?? ''}
                height={50}
                src={savedJob.jobs?.companies?.logo ?? ''}
                width={50}
              />
            </div>
          </div>

          <Link href={`/saved-jobs/${savedJob.id}`}>Ver más</Link>
        </Item>
      )}
    </List>
  </div>
)

export default SavedJobsPage
