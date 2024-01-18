'use client'

import { FieldComponent } from '@/types/forms'
import { useEffect, useId, useState } from 'react'
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
import { useController, useFormContext } from 'react-hook-form'
import { Icon } from '../../ui/Icon'
import { ListItem, ListItemProps } from './Item'
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
    placeholder = props.options.length ? 'Selecciona una opción' : 'No hay opciones disponibles',
    isDisabled = !props.options.length,
    options,
    className = '',
    onChange: onChangeProp = () => {},
  } = props

  // Hooks
  const id = useId()

  const { resetField } = useFormContext()
  const { field, fieldState } = useController({ name, disabled: isDisabled })

  // States
  const [isOpen, setIsOpen] = useState(false)

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

  // Effects
  useEffect(() => {
    resetField(name)
  }, [name, options, resetField])

  // Render
  const ariaLabelProps = label ? { 'aria-labelledby': id } : { id, 'aria-label': name }

  const ariaSelectFieldProps: AriaSelectFieldProps<ListItemProps> = {
    isDisabled: disabled,
    onBlur,
    onSelectionChange: async (value) => {
      await onChangeProp(String(value))

      onChange(value)
    },
    isInvalid: Boolean(errorMessage),
    selectedKey: value ?? '',
    name,
    placeholder,
    ...ariaLabelProps,
  }

  const [counter, setCounter] = useState(0)

  // isOpen = 0

  const manejarOpenChange = () => {
    // isOpen = 0
    setCounter((prevState) => prevState + 1)

    setIsOpen(!isOpen)
  }

  // JavaScript Closures

  return (
    <AriaSelectField
      ref={ref}
      className={`select-field ${className}`}
      disabledKeys={disabledOptions}
      onOpenChange={manejarOpenChange}
      {...ariaSelectFieldProps}>
      {label && (
        <AriaLabel className="label" htmlFor={id}>
          {label}
        </AriaLabel>
      )}

      <AriaButton className="input">
        <AriaSelectValue className="input-value" />

        {isOpen ? <Icon name="expand_less" /> : <Icon name="expand_more" />}
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
            return <ListItem key={option.value} {...option} />
          })}
        </AriaListBox>
      </AriaPopover>
    </AriaSelectField>
  )
}

export { SelectField }
export type { SelectFieldProps }
