'use client'

import { List } from '@/app/_components/List/component'
import { Link } from '@/app/_components/ui/Link'
import Image from 'next/image'
import { GridListItem } from 'react-aria-components'
import { getCandidates } from './actions'
import './page.css'
import { Candidate } from './types'

const CandidatesPage = () => (
  <div>
    <h1>Candidates</h1>

    <List<Candidate> label="Candidates" onLoad={getCandidates}>
      {(candidate) => (
        <GridListItem textValue={`${candidate.firstName} ${candidate.lastName}`}>
          <h2>{`${candidate.firstName} ${candidate.lastName}`}</h2>
          <div className="content">
            <div>
              <span className="label">Email</span>
              <span>{candidate.email}</span>
            </div>
          </div>

          <Image
            alt={`${candidate.firstName} ${candidate.lastName}`}
            height={100}
            src={candidate.profilePicture ?? ''}
            width={100}
          />

          <Link href={`/candidates/${candidate.id}`}>Ver más</Link>
        </GridListItem>
      )}
    </List>
  </div>
)

export default CandidatesPage
