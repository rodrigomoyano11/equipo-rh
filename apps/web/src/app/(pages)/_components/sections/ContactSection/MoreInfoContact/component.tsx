import { Link } from '@/app/_/components/Link'
import './styles.css'

export type MoreInfoContactProps = {
  title: string
  subtitle: string
  phone: string
  email: string

  className?: string
}

export const MoreInfoContact = (props: MoreInfoContactProps) => {
  const { title, subtitle, phone, email, className = '' } = props

  return (
    <div className={`more-info-contact-component ${className}`}>
      <h3 className="title">{title}</h3>
      <span className="subtitle">{subtitle}</span>

      <span className="phone">{phone}</span>
      <span className="email">
        <Link href={`mailto:${email}`}>{email}</Link>
      </span>
    </div>
  )
}
