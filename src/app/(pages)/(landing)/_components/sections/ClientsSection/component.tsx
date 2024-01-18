'use client'

import Image from 'next/image'
import './styles.css'

export type ClientsSectionProps = {
  title: string
  clients?: {
    name: string
    logo: string
  }[]
}

export const ClientsSection = ({ title, clients = [] }: ClientsSectionProps) => (
  <section className="clients-section-component">
    <div className="title">{title}</div>
    <div className="clients">
      {clients.map((client) => (
        <div key={client.name} className="client">
          <div className="image-container">
            <Image alt={client.name} className="image" fill={true} src={client.logo} />
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default ClientsSection
