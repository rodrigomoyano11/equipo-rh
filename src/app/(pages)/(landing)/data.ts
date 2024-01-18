import { ClientsSectionProps } from './_components/sections/ClientsSection'
import { HeroSectionProps } from './_components/sections/HeroSection'
import { ListOfJobsSectionProps } from './_components/sections/ListOfJobsSection'
import { ServicesSectionProps } from './_components/sections/ServicesSection'

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
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-andina-del-sol.png',
      },
      {
        name: 'Cartellone',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-cartellone.jpg',
      },
      {
        name: 'CMP',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-cmp.png',
      },
      {
        name: 'Dumanzic',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-dumanzic.jpg',
      },
      {
        name: 'Exar',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-exar.png',
      },
      {
        name: 'Mapal',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-mapal.png',
      },
      {
        name: 'Minexus',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-minexus.png',
      },
      {
        name: 'Pap',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-pap.png',
      },
      {
        name: 'Sinec',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-sinec.png',
      },
      {
        name: 'SSR',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-ssr.png',
      },
      {
        name: 'Weir',
        logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-weir.png',
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
          logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-andina-del-sol.png',
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
          logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-cartellone.jpg',
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
          logo: 'http://equiporh.com.ar/wp-content/uploads/2019/09/logo-cmp.png',
        },
      },
    ],
  },
}

export { rootPageData }
export type { RootPageData }
