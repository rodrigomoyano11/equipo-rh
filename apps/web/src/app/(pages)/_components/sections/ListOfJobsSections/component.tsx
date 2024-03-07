import { PropsWithChildren } from 'react'
// import { Avatar } from '../../general/Avatar'
// import { Tag, TagProps } from '../../general/Tag'
import './styles.css'
// import { Button } from '@/app/_components/ui/Button'

export type ListOfJobsSectionProps = PropsWithChildren<{
  jobs: {
    id: string
    title: string
    description: string
    location: {
      id: string
      name: string
    }
    salary: string
    company: {
      id: string
      name: string
      logo: string
    }
  }[]
}>

export const ListOfJobsSection = ({ jobs = [] }: ListOfJobsSectionProps) => 'Jobs'
//   <section className="list-of-jobs-section-component">
//     <div className="jobs">
//       {jobs.map((job) => {
//         const tags: TagProps[] = [
//           { icon: 'location_on', children: job.location.name },
//           { icon: 'work', children: 'Full-time' },
//           { icon: 'attach_money', children: job.salary },
//         ]

//         return (
//           <article key={job.id} className="card">
//             <Avatar alt={job.company.name} className="avatar" src={job.company.logo} />

//             <span className="overline">{job.company.name}</span>
//             <div className="title">{job.title}</div>

//             <div className="tags">
//               {tags.map(({ icon, children }) => (
//                 <Tag key={icon} icon={icon}>
//                   {children}
//                 </Tag>
//               ))}
//             </div>

//             <div className="description">{job.description}</div>

//             <div className="actions">
//               <Button className="action" icon="check_circle" size="small">
//                 Aplicar
//               </Button>
//               <Button className="action" icon="bookmark" size="small" variant="outline">
//                 Guardar
//               </Button>
//             </div>
//           </article>
//         )
//       })}
//     </div>

//     <Button className="see-more" href="/jobs/search">
//     {/* <Button className="see-more" color="accent" href="/jobs/search" variant="text"> */}
//       Ver más
//     </Button>
//   </section>
// )

// export default ListOfJobsSection
