import { FieldProps } from '@/types/forms'
import { ItemProps as Item } from './Item'
import { SectionProps as Section } from './Section'

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
type XOR<T, U> = T | U extends object ? (T & Without<U, T>) | (U & Without<T, U>) : T | U

type SelectFieldOption = XOR<Item, Section>

type SelectFieldProps = FieldProps & {
  placeholder?: string
  options: SelectFieldOption[]
  onChange?: (value: string) => Promise<void> | void
}

export type { SelectFieldOption, SelectFieldProps }
