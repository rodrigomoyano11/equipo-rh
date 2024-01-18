// 'use client'

// import { Button } from '@/app/_components/ui/Button'
// import { getSupabase } from '@/db/client'

// const RootPage = () => (
//   <main
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       height: '100vh',
//       padding: '1rem 0',
//       gap: '2rem',
//     }}>
//     <div
//       style={{
//         height: 'min-content',
//         display: 'flex',
//         width: '100%',
//         gap: '1rem',
//       }}>
//       <Button href="/auth" variant="outline">
//         Ir a Auth
//       </Button>
//       <Button onPress={() => getSupabase().auth.signOut()}>Cerrar sesión</Button>
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//       <div>
//         <Button href="/candidates/new" variant="text">
//           Crear candidato
//         </Button>
//         <Button href="/candidates" variant="text">
//           Ver candidatos
//         </Button>
//       </div>

//       <div>
//         <Button href="/companies/new" variant="text">
//           Crear empresa
//         </Button>
//         <Button href="/companies" variant="text">
//           Ver empresas
//         </Button>
//       </div>

//       <div>
//         <Button href="/jobs/new" variant="text">
//           Crear trabajo
//         </Button>
//         <Button href="/jobs" variant="text">
//           Ver trabajos
//         </Button>
//       </div>

//       <div>
//         <Button href="/saved-jobs/new" variant="text">
//           Crear trabajo guardado
//         </Button>

//         <Button href="/saved-jobs" variant="text">
//           Ver trabajos guardados
//         </Button>
//       </div>

//       <div>
//         <Button href="/applications/new" variant="text">
//           Crear aplicación
//         </Button>

//         <Button href="/applications" variant="text">
//           Ver aplicaciones
//         </Button>
//       </div>
//     </div>
//   </main>
// )

// export default RootPage

import { ClientsSection } from './_components/sections/ClientsSection'
import { ContactSection } from './_components/sections/ContactSection'
import { HeroSection } from './_components/sections/HeroSection'
import { ListOfJobsSection } from './_components/sections/ListOfJobsSection'
import { ServicesSection } from './_components/sections/ServicesSection'
import { rootPageData } from './data'

const RootPage = () => (
  <>
    <HeroSection {...rootPageData.hero} />

    <ClientsSection {...rootPageData.clients} />

    <ServicesSection {...rootPageData.services} />

    <HeroSection {...rootPageData.activeSearches} />

    <ListOfJobsSection {...rootPageData.jobs} />

    <ContactSection />
  </>
)

export default RootPage
