import { getCandidate } from './actions'
import Image from 'next/image'
import './page.css'
import { CandidatePageProps } from './types'

const CandidatePage = async ({ params }: CandidatePageProps) => {
  const { id } = params

  const candidate = await getCandidate(id)

  if (!candidate) return <div>Candidate not found</div>
  return (
    <div>
      <h1>Candidate</h1>

      <ul>
        <li className="item">
          <h2>{`${candidate.first_name} ${candidate.last_name}`}</h2>
          <div className="content">
            <div>
              <span className="label">Email</span>
              <span>{candidate.email}</span>
            </div>
          </div>

          <Image
            alt={`${candidate.first_name} ${candidate.last_name}`}
            height={100}
            src={candidate.profile_picture ?? ''}
            width={100}
          />
        </li>
      </ul>
    </div>
  )
}

export default CandidatePage
