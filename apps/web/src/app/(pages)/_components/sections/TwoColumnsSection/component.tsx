'use client'

import Image from 'next/image'
import './styles.css'
import { Column } from './types'

// TODO: ICON SET
// import { Icon } from '@/app/_components/ui/Icon'

export type TwoColumnsSectionProps = {
  title?: string
  cols: Column[]
  className?: string
}

export const TwoColumnsSection = ({ title, cols = [], className = '' }: TwoColumnsSectionProps) => (
  <section className={`two-columns-section-component ${className}`}>
    {title && <h2 className="main-title">{title}</h2>}

    <div className="columns">
      {cols.map((column) => {
        const { id } = column

        const isImage = column.variant === 'image'
        if (isImage) {
          const { src, alt, objectFit = 'contain' } = column

          return (
            <div key={id} className="column-image">
              <div className="image-container">
                <Image alt={alt} className="image" fill={true} src={src} style={{ objectFit }} />
              </div>
            </div>
          )
        }

        const { overline, title: columnTitle, subtitle, description, list } = column

        return (
          <div key={id} className="column-caption">
            {overline && <span className="overline">{overline}</span>}

            {columnTitle && <h3 className="title">{columnTitle}</h3>}

            {subtitle && <div className="subtitle">{subtitle}</div>}

            {!!description?.length && (
              <div className="description">
                {description.map((paragraph) => (
                  <p key={paragraph} className="paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {list && (
              <ul className="list">
                {list.map((item) => (
                  <li key={item.id} className="item">
                    {item.icon && (
                      //   <Icon className="icon" fill="var(--accent-color-2)" name={item.icon} />
                      <span>ICON</span>
                    )}
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  </section>
)

// export default TwoColumnsSection
