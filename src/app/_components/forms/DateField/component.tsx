'use client'

import { FieldComponent } from '@/types/forms'
import { parseDate } from '@internationalized/date'
import { ChangeEventHandler, useId, useRef } from 'react'
import {
  Button as AriaButton,
  DatePicker as AriaDateField,
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
  DateValue as AriaDateValue,
  Group as AriaGroup,
  Label as AriaLabel,
  Text as AriaText,
} from 'react-aria-components'
import { useController } from 'react-hook-form'
import { Icon } from '../../ui/Icon'
import './styles.css'

const DateField: FieldComponent = (props) => {
  // Props
  const { name, label, description, className = '', isDisabled } = props

  // Hooks
  const id = useId()
  const { field, fieldState } = useController({ name, disabled: isDisabled })

  const calendarInputRef = useRef<HTMLInputElement>(null)

  // Data
  const { value, disabled, onBlur, onChange, ref } = field

  const errorMessage = fieldState.error?.message

  const convertedValue = value ? parseDate(value) : null

  // Handlers
  const handleChange = (value?: AriaDateValue) => onChange(value?.toString())

  // Render
  const ariaLabelProps = label ? { id, 'aria-labelledby': id } : { 'aria-label': name }

  const ariaDateFieldProps = {
    isDisabled: disabled,
    value: convertedValue,
    onBlur,
    onChange: handleChange,
    isInvalid: Boolean(errorMessage),
    name,
    ...ariaLabelProps,
  }

  const handleShowPicker = () => {
    const calendarInput = calendarInputRef.current
    if (!calendarInput) return
    if (calendarInput.type !== 'date') return
    calendarInput.showPicker()
  }
  const handleHiddenPickerChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target

    if (!value) {
      onChange(null)
      return
    }

    const convertedValue = parseDate(value)
    handleChange(convertedValue)
  }
  return (
    <AriaDateField ref={ref} className={`date-field ${className}`} {...ariaDateFieldProps}>
      {label && (
        <AriaLabel className="label" htmlFor={id}>
          {label}
        </AriaLabel>
      )}

      <AriaGroup className="input-container">
        <input
          ref={calendarInputRef}
          className="input hidden-input"
          name={`hidden-${name}`}
          type="date"
          value={convertedValue?.toString() ?? ''}
          onChange={handleHiddenPickerChange}
        />

        <AriaDateInput className="input">
          {(segment) => <AriaDateSegment className="input-segment" segment={segment} />}
        </AriaDateInput>

        <AriaButton className="expand-button" onPress={handleShowPicker}>
          <Icon name="calendar_today" />
        </AriaButton>
      </AriaGroup>

      {!errorMessage && description && <AriaText slot="description">{description}</AriaText>}

      {errorMessage && (
        <AriaText className="error-message" slot="errorMessage">
          {errorMessage}
        </AriaText>
      )}
    </AriaDateField>
  )
}

export { DateField }
