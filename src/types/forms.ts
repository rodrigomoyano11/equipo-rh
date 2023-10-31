import { FieldPath, FieldValues } from 'react-hook-form'

type FieldProps = {
  label?: string
  description?: string
  className?: string
  isDisabled?: boolean
}

type FieldComponent<T extends Record<string, unknown> = FieldProps> = <
  Schema extends FieldValues = FieldValues,
>(
  props: T & { name: FieldPath<Schema> },
) => JSX.Element

export type { FieldProps, FieldComponent }
