import { FieldProps } from '@/types/forms'
import { NumberFieldProps as AriaNumberFieldProps } from 'react-aria-components'

type SelectedProps = Pick<AriaNumberFieldProps, 'onCopy' | 'onCut' | 'onPaste' | 'onSelect'>

type NumberFieldProps = FieldProps & SelectedProps & { placeholder?: string }

export type { NumberFieldProps }
