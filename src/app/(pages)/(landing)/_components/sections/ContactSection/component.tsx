import { ContactForm } from '../../forms/ContactForm'
import { MoreInfoContact } from './components/MoreInfoContact'
import { contactSectionData } from './data'
import './styles.css'

export type ContactSectionProps = never

export const ContactSection = () => (
  <section className="contact-section-component">
    <div className="title">{contactSectionData.title}</div>

    <ContactForm />

    <MoreInfoContact {...contactSectionData.moreInfoContact} />
  </section>
)

export default ContactSection
