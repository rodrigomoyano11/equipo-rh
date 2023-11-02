'use client'

import { FieldComponent } from '@/types/forms'
import { useId } from 'react'
import {
  Button as AriaButton,
  Group as AriaGroup,
  Input as AriaInput,
  Label as AriaLabel,
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  Text as AriaText,
} from 'react-aria-components'
import { useController } from 'react-hook-form'
import './styles.css'
import { NumberFieldProps } from './types'

const NumberField: FieldComponent<NumberFieldProps> = (props) => {
  // Props
  const { name, label, description, placeholder, isDisabled, className, ...restOfProps } = props

  // Hooks
  const id = useId()

  const { field, fieldState } = useController({ name, disabled: isDisabled })

  // Data
  const { value, disabled, onBlur, onChange, ref } = field

  const errorMessage = fieldState.error?.message

  // Render
  const ariaLabelProps = label ? { 'aria-labelledby': id } : { id, 'aria-label': name }

  const ariaNumberFieldProps: AriaNumberFieldProps = {
    isDisabled: disabled,
    value: value ?? undefined,
    onBlur,
    onChange,
    isInvalid: Boolean(errorMessage),
    name,
    ...restOfProps,
    ...ariaLabelProps,
  }

  return (
    <AriaNumberField ref={ref} className={`number-field ${className}`} {...ariaNumberFieldProps}>
      {label && (
        <AriaLabel className="label" htmlFor={id}>
          {label}
        </AriaLabel>
      )}

      <AriaGroup className="input-group">
        <AriaButton className="decrement-button" slot="decrement">
          -
        </AriaButton>

        <AriaInput className="input" placeholder={placeholder} />

        <AriaButton className="increment-button" slot="increment">
          +
        </AriaButton>
      </AriaGroup>

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
    </AriaNumberField>
  )
}

export { NumberField }
export type { NumberFieldProps }
