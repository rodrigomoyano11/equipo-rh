import { MoreInfoContactProps } from './components/MoreInfoContact'

type ContactSectionData = {
  title: string
  moreInfoContact: MoreInfoContactProps
}

const contactSectionData: ContactSectionData = {
  title: 'Contáctenos',
  moreInfoContact: {
    email: 'javier.molina@equiporh.com.ar',
    phone: '+54 9 264 404-7986',
    subtitle: 'Socio Director',
    title: 'Javier Molina',
  },
}

export { contactSectionData }
export type { ContactSectionData }
