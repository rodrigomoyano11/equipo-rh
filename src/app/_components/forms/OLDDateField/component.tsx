'use client'

import { FieldComponent } from '@/types/forms'
import { parseDate } from '@internationalized/date'
import { useId } from 'react'
import {
  DatePicker as AriaDateField,
  Label as AriaLabel,
  Text as AriaText,
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  DateValue,
  Dialog,
  Group,
  Heading,
  Popover,
  Text,
} from 'react-aria-components'
import { useController } from 'react-hook-form'
import './styles.css'
import { DateFieldProps } from './types'

const DateField: FieldComponent = (props) => {
  // Props
  const { name, label, description, className } = props

  // Hooks
  const id = useId()

  const { field, fieldState } = useController({ name })

  // Data
  const { value, disabled, onBlur, onChange, ref } = field

  const errorMessage = fieldState.error?.message

  const convertedValue = value ? parseDate(value) : null

  // Handlers
  const handleChange = (value: DateValue) => {
    const convertedValue = value.toString()

    onChange(convertedValue)
  }

  // Render
  const ariaLabelProps = label ? { id, 'aria-labelledby': id } : { 'aria-label': name }

  const ariaDateFieldProps = {
    isDisabled: disabled,
    name,
    value: convertedValue,
    onBlur,
    onChange: handleChange,
    isInvalid: Boolean(errorMessage),
    ...ariaLabelProps,
  }

  return (
    <AriaDateField ref={ref} className={`date-field ${className}`} {...ariaDateFieldProps}>
      {label && <AriaLabel htmlFor={id}>{label}</AriaLabel>}

      <Group>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>

        <Button>
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </Button>
      </Group>

      {!errorMessage && description && <AriaText slot="description">{description}</AriaText>}

      {errorMessage && <AriaText slot="errorMessage">{errorMessage}</AriaText>}

      <Popover className="CalendarPopover">
        <Dialog>
          <Calendar>
            <header>
              <Button slot="previous">◀</Button>

              <Heading />

              <Button slot="next">▶</Button>
            </header>

            <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>

            {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
          </Calendar>
        </Dialog>
      </Popover>
    </AriaDateField>
  )
}

export { DateField }
export type { DateFieldProps }
