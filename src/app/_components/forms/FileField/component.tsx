'use client'

import { FieldComponent } from '@/types/forms'
import { useId } from 'react'
import {
  Input as AriaInput,
  Label as AriaLabel,
  Text as AriaText,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import { useController } from 'react-hook-form'
import { UppyDashboard } from './UppyDashboard'
import './styles.css'
import { FileFieldProps } from './types'
import { default as Mime } from 'mime'

const FileField: FieldComponent<FileFieldProps> = (props) => {
  // Props
  const {
    name,
    label,
    description: descriptionProp,
    isDisabled,
    className = '',
    ...restOfProps
  } = props

  // Hooks
  const id = useId()

  const { field, fieldState } = useController({ name, disabled: isDisabled })

  // Data
  const { value, disabled, onBlur, onChange, ref } = field

  const errorMessage = fieldState.error?.message

  // Methods
  const createDescription = (allowedFileTypes: string[] = []) => {
    if (!allowedFileTypes.length) return ''

    const convertedTypes = allowedFileTypes.map((type) => Mime.getExtension(type))

    if (convertedTypes.length === 1) return `Solo se permiten archivos de tipo ${convertedTypes[0]}`

    const lastType = convertedTypes.pop()

    return `Solo se permiten archivos de tipo ${convertedTypes.join(', ')} y ${lastType}`
  }

  // Render
  const description = descriptionProp ?? createDescription(props.allowedFileTypes)

  const ariaLabelProps = label ? { 'aria-labelledby': id } : { id, 'aria-label': name }

  const ariaTextFieldProps: AriaTextFieldProps = {
    isDisabled: disabled,
    value: value ?? '',
    onBlur,
    onChange,
    isInvalid: Boolean(errorMessage),
    name,
    ...ariaLabelProps,
  }

  return (
    <AriaTextField ref={ref} className={`file-field ${className}`} {...ariaTextFieldProps}>
      {label && (
        <AriaLabel className="label" htmlFor={id}>
          {label}
        </AriaLabel>
      )}

      <AriaInput className="input" id={id} type="hidden" />
      <UppyDashboard isDisabled={disabled} name={name} {...restOfProps} />

      {!errorMessage && (
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

export { FileField }
export type { FileFieldProps }
