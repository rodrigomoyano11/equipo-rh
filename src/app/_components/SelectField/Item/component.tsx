import { Item as AriaItem, Text as AriaText } from 'react-aria-components'
import './styles.css'
import { ItemProps } from './types'

const Item = ({ value, label, description }: ItemProps) => (
  <AriaItem className="select-field-item" id={value} textValue={label}>
    <AriaText className="label" slot="label">
      {label}
    </AriaText>

    {description && (
      <AriaText className="description" slot="description">
        {description}
      </AriaText>
    )}
  </AriaItem>
)

export { Item }
export type { ItemProps }
