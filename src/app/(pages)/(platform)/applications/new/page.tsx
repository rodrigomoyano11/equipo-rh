import { AddApplicationForm } from './Form'
import { getCandidates, getJobs } from './actions'
import './page.css'

const NewApplicationPage = async () => {
  const jobs = await getJobs()
  const adaptedJobs = jobs.map(({ id, title, companies }) => ({
    label: `${title} (${companies?.name ?? 'Sin empresa'})`,
    value: id,
  }))

  const candidates = await getCandidates()
  const adaptedCandidates = candidates.map(({ id, firstName, lastName }) => ({
    label: `${firstName} ${lastName}`,
    value: id,
  }))

  const defaultValues = { candidateId: adaptedCandidates[0]?.value, jobId: adaptedJobs[0]?.value }

  // Render
  return (
    <AddApplicationForm
      candidates={adaptedCandidates}
      defaultValues={defaultValues}
      jobs={adaptedJobs}
    />
  )
}

export default NewApplicationPage
