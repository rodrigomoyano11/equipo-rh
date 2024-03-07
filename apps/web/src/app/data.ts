import { ClientsSectionProps } from './(pages)/_components/sections/ClientsSection'
import { HeroSectionProps } from './(pages)/_components/sections/HeroSection'
import { ListOfJobsSectionProps } from './(pages)/_components/sections/ListOfJobsSections'
import { ServicesSectionProps } from './(pages)/_components/sections/ServicesSection'

type RootPageData = {
  hero: HeroSectionProps
  clients: ClientsSectionProps
  services: ServicesSectionProps
  activeSearches: HeroSectionProps
  jobs: ListOfJobsSectionProps
}

const rootPageData: RootPageData = {
  hero: {
    image: '/images/others/workers-working.webp',
    overline: '118 Trabajos disponibles en este momento',
    title: 'Encontrá el trabajo a tu medida',
    description:
      'Te brindamos las mejores herramientas de búsqueda para lograr resultados óptimos y adaptados a tus necesidades',
  },
  clients: {
    title: 'Nuestros clientes',
    clients: [
      {
        name: 'Andina del Sol',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Cartellone',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'CMP',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Dumanzic',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Exar',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Mapal',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Minexus',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Pap',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Sinec',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'SSR',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
      {
        name: 'Weir',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      },
    ],
  },
  services: {
    title: 'Nuestros servicios',
    services: [
      {
        id: '1',
        image: '/images/others/workers-writing-1.webp',
        title: 'Selección',
        description:
          'Contamos con un equipo de profesionales especializados en la búsqueda y selección de personal.',
        href: '/services',
      },
      {
        id: '2',
        image: '/images/others/founder-speaking-with-worker.webp',
        title: 'Relaciones comunitarias',
        description:
          'Contamos con un equipo de profesionales especializados en la búsqueda y selección de personal.',
        href: '/services',
      },
      {
        id: '3',
        image: '/images/others/mining-place.webp',
        title: 'Reclutamiento en Sitios Remotos',
        description:
          'Contamos con un equipo de profesionales especializados en la búsqueda y selección de personal.',
        href: '/services',
      },
    ],
  },
  activeSearches: {
    button: { text: 'Ingresar', href: '/jobs/search' },
    description:
      'Te brindamos las mejores herramientas de búsqueda para lograr resultados óptimos y adaptados a tus necesidades',
    image: '/images/others/workers-writing-2.webp',
    title: 'Búsquedas activas',
    variant: 'vertical',
  },
  jobs: {
    jobs: [
      {
        id: '1',
        title: 'Ingeniero de Minas',
        description: 'Estamos buscando un ingeniero de minas para trabajar en una empresa minera.',
        location: {
          id: '1',
          name: 'San Juan',
        },
        salary: 'A convenir',
        company: {
          id: '1',
          name: 'Minera San Juan',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
        },
      },
      {
        id: '2',
        title: 'Software Engineer',
        description:
          'We are looking for a software engineer to join our team and help us build amazing products.',
        location: {
          id: '2',
          name: 'San Francisco',
        },
        salary: '$120K - $150K',
        company: {
          id: '2',
          name: 'Cartellone',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
        },
      },
      {
        id: '3',
        title: 'Frontend Developer',
        description:
          'We are seeking a frontend developer to work on our web application and help us create a great user experience.',
        location: {
          id: '3',
          name: 'New York City',
        },
        salary: '$90K - $110K',
        company: {
          id: '3',
          name: 'CMP',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
        },
      },
    ],
  },
}

export { rootPageData }
export type { RootPageData }
