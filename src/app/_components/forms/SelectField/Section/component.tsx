import { Header as AriaHeader, Section as AriaSection } from 'react-aria-components'
import { ListItem } from '../Item'
import './styles.css'
import { SectionProps } from './types'

const Section = ({ label, items, id }: SectionProps) => (
  <AriaSection className="select-field-section" id={id}>
    <AriaHeader className="header">{label}</AriaHeader>

    {items.map(({ value, ...item }) => {
      const valueWithSection = `${id}-${value}`
      return <ListItem key={valueWithSection} value={valueWithSection} {...item} />
    })}
  </AriaSection>
)

export { Section }
export type { SectionProps }
