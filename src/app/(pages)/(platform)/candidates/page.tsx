import { getCandidates } from './actions'
import Image from 'next/image'
import './page.css'
import Link from 'next/link'

const CandidatesPage = async () => {
  const candidates = await getCandidates()

  return (
    <div>
      <h1>Candidates</h1>

      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id} className="item">
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

            <Link href={`/candidates/${candidate.id}`}>Ver más</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CandidatesPage
