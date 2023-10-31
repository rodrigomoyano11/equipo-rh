'use client'

import { FieldComponent } from '@/types/forms'
import { useId } from 'react'
import {
  Input as AriaInput,
  Label as AriaLabel,
  Text as AriaText,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  TextArea as AriaTextArea,
} from 'react-aria-components'
import { useController } from 'react-hook-form'
import './styles.css'
import { TextFieldProps } from './types'

const TextField: FieldComponent<TextFieldProps> = (props) => {
  // Props
  const { name, label, description, placeholder, largeText, isDisabled, ...restOfProps } = props

  // Hooks
  const id = useId()

  const { field, fieldState } = useController({ name, disabled: isDisabled })

  // Data
  const { value, disabled, onBlur, onChange, ref } = field

  const errorMessage = fieldState.error?.message

  // Render
  const ariaLabelProps = label ? { 'aria-labelledby': id } : { id, 'aria-label': name }

  const ariaTextFieldProps: AriaTextFieldProps = {
    isDisabled: disabled,
    value: value ?? '',
    onBlur,
    onChange,
    isInvalid: Boolean(errorMessage),
    name,
    ...restOfProps,
    ...ariaLabelProps,
  }

  return (
    <AriaTextField ref={ref} {...ariaTextFieldProps} className="text-field">
      {label && (
        <AriaLabel className="label" htmlFor={id}>
          {label}
        </AriaLabel>
      )}

      {largeText ? (
        <AriaTextArea className="large-input" id={id} placeholder={placeholder} />
      ) : (
        <AriaInput className="default-input" id={id} placeholder={placeholder} />
      )}

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
    </AriaTextField>
  )
}

export { TextField }
export type { TextFieldProps }
