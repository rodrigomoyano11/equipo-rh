import { ListItemProps } from '@/app/_components/forms/SelectField/Item'
import { Enums } from '@/db/types'
import { Schema } from './schema'

type AddJobFormProps = {
  companies: ListItemProps[]
  defaultValues: Partial<Schema>
}

type Options = {
  visibility: {
    label: string
    value: Enums<'visibility'>
  }[]
}

export type { AddJobFormProps, Options }
