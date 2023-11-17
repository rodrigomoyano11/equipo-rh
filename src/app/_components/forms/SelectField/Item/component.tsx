import { ListBoxItem as AriaItem, Text as AriaText } from 'react-aria-components'
import './styles.css'
import { ListItemProps } from './types'

const ListItem = ({ value, label, description }: ListItemProps) => (
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

export { ListItem }
export type { ListItemProps }
