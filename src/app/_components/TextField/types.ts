import { FieldProps } from '@/types/forms'
import { TextFieldProps as AriaTextFieldProps } from 'react-aria-components'

type AutoCompleteAttribute =
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'bday'
  | 'cc-additional-name'
  | 'cc-csc'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-exp'
  | 'cc-family-name'
  | 'cc-given-name'
  | 'cc-name'
  | 'cc-number'
  | 'cc-type'
  | 'country-name'
  | 'country'
  | 'current-password'
  | 'email'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'language'
  | 'name'
  | 'new-password'
  | 'off'
  | 'on'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'tel-area-code'
  | 'tel-country-code'
  | 'tel-extension'
  | 'tel-local'
  | 'tel-national'
  | 'tel'
  | 'transaction-amount'
  | 'transaction-currency'
  | 'username'

type SelectedProps = Pick<AriaTextFieldProps, 'onCopy' | 'onCut' | 'onPaste' | 'onSelect'>

type TextFieldProps = FieldProps &
  SelectedProps & {
    type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
    placeholder?: string
    autoComplete?: AutoCompleteAttribute
    largeText?: boolean
  }

export type { TextFieldProps }
