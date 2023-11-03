'use client'

import { FieldComponent } from '@/types/forms'
import { useId } from 'react'
import {
  Button as AriaButton,
  Label as AriaLabel,
  ListBox as AriaListBox,
  Popover as AriaPopover,
  Select as AriaSelectField,
  SelectProps as AriaSelectFieldProps,
  SelectValue as AriaSelectValue,
  Text as AriaText,
} from 'react-aria-components'
import { useController } from 'react-hook-form'
import { Item, ItemProps } from './Item'
import { Section, SectionProps } from './Section'
import './styles.css'
import { SelectFieldOption, SelectFieldProps } from './types'

const isSection = (option: SelectFieldOption): option is SectionProps => 'items' in option

const SelectField: FieldComponent<SelectFieldProps> = (props) => {
  // Props
  const {
    name,
    label,
    description,
    placeholder = 'Selecciona una opción',
    isDisabled,
    options,
    className = '',
  } = props

  // Hooks
  const id = useId()

  const { field, fieldState } = useController({ name, disabled: isDisabled })

  // Data
  const { value, disabled, onBlur, onChange, ref } = field

  const errorMessage = fieldState.error?.message

  const disabledOptions = options.flatMap((option) => {
    if (isSection(option)) {
      const { items, id } = option
      return items.flatMap(({ isDisabled, value }) => (isDisabled ? `${id}-${value}` : []))
    }

    const { isDisabled, value } = option
    return isDisabled ? value : []
  })

  // Render
  const ariaLabelProps = label ? { 'aria-labelledby': id } : { id, 'aria-label': name }

  const ariaSelectFieldProps: AriaSelectFieldProps<ItemProps> = {
    isDisabled: disabled,
    onBlur,
    onSelectionChange: onChange,
    isInvalid: Boolean(errorMessage),
    selectedKey: value,
    name,
    placeholder,
    ...ariaLabelProps,
  }

  return (
    <AriaSelectField
      ref={ref}
      className={`select-field ${className}`}
      disabledKeys={disabledOptions}
      {...ariaSelectFieldProps}>
      {label && (
        <AriaLabel className="label" htmlFor={id}>
          {label}
        </AriaLabel>
      )}

      <AriaButton className="input">
        <AriaSelectValue className="input-value" />

        <span aria-hidden="true" className="input-icon">
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </AriaButton>

      {!errorMessage && description && (
        <AriaText className="description" slot="description">
          {description}
        </AriaText>
      )}

      {errorMessage && (
        <AriaText className="error-message" slot="errorMessage">
          {errorMessage}
        </AriaText>
      )}

      <AriaPopover className="select-field-popover">
        <AriaListBox className="options">
          {options.map((option) => {
            if (isSection(option)) return <Section {...option} />
            return <Item key={option.value} {...option} />
          })}
        </AriaListBox>
      </AriaPopover>
    </AriaSelectField>
  )
}

export { SelectField }
export type { SelectFieldProps }
