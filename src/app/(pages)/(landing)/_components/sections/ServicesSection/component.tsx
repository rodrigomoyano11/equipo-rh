'use client'

import { Link, LinkProps } from '@/app/_components/ui/Link'
import Image from 'next/image'
import './styles.css'

export type ServicesSectionProps = {
  title: string
  services?: {
    id: string
    image: string
    title: string
    description: string
    href: LinkProps['href']
  }[]
}

export const ServicesSection = ({ services = [] }: ServicesSectionProps) => (
  <section className="services-section-component">
    <h2 className="main-title">Servicios</h2>

    <div className="services">
      {services.map((service) => (
        <Link key={service.id} className="service" href={service.href}>
          <div className="image-container">
            <Image alt={service.title} className="image" fill={true} src={service.image} />
          </div>
          <div className="title">{service.title}</div>
          <div className="description">{service.description}</div>
        </Link>
      ))}
    </div>
  </section>
)

export default ServicesSection
